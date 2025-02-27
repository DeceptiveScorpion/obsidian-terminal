import {
	FileSystemAdapter,
	MarkdownView,
	type MenuItem,
	TFolder,
} from "obsidian"
import { SelectProfileModal, spawnTerminal } from "./spawn"
import { addCommand, addRibbonIcon, notice2 } from "sources/utils/obsidian"
import { deepFreeze, isNonNil } from "../utils/util"
import { PROFILE_PROPERTIES } from "sources/settings/profile-properties"
import { Platform } from "sources/utils/platforms"
import { Settings } from "sources/settings/data"
import type { TerminalPlugin } from "../main"
import { TerminalView } from "./view"
import { UNDEFINED } from "sources/magic"
import { isEmpty } from "lodash-es"

export function loadTerminal(plugin: TerminalPlugin): void {
	plugin.registerView(
		TerminalView.type.namespaced(plugin),
		leaf => new TerminalView(plugin, leaf),
	)

	const
		PROFILE_TYPES = deepFreeze((["select", "integrated", "external"] as const)
			.filter(type => type === "select" || PROFILE_PROPERTIES[type].available)),
		CWD_TYPES = deepFreeze(["", "root", "current"]),
		EXCLUDED_TYPES = deepFreeze([
			{ cwd: "", profile: "integrated" },
			{ cwd: "", profile: "external" },
		]),
		{ app, language } = plugin,
		{ workspace } = app,
		{ i18n } = language,
		defaultProfile =
			(type: Settings.Profile.Type): Settings.Profile | null => {
				const ret = Settings.Profile.defaultOfType(
					type,
					plugin.settings.profiles,
					Platform.CURRENT,
				)
				if (!ret) {
					notice2(
						() => i18n.t("notices.no-default-profile", {
							interpolation: { escapeValue: false },
							type,
						}),
						plugin.settings.errorNoticeTimeout,
						plugin,
					)
				}
				return ret
			},
		adapter = app.vault.adapter instanceof FileSystemAdapter
			? app.vault.adapter
			: null,
		contextMenu = (
			type: Settings.Profile.Type | "select",
			cwd?: TFolder,
		): ((item: MenuItem) => void) | null => {
			const cwd0 = cwd
				? adapter ? adapter.getFullPath(cwd.path) : null
				: cwd
			if (cwd0 === null) { return null }
			return (item: MenuItem) => {
				item
					.setTitle(i18n.t("menus.open-terminal", {
						interpolation: { escapeValue: false },
						type,
					}))
					.setIcon(i18n.t("asset:menus.open-terminal-icon", {
						interpolation: { escapeValue: false },
						type,
					}))
					.onClick(() => {
						if (type === "select") {
							new SelectProfileModal(plugin, cwd0).open()
							return
						}
						const profile = defaultProfile(type)
						if (!profile) { return }
						spawnTerminal(
							plugin,
							profile,
							cwd0,
						)
					})
			}
		},
		command = (
			type: Settings.Profile.Type | "select",
			cwd: typeof CWD_TYPES[number],
		) => (checking: boolean) => {
			// eslint-disable-next-line consistent-return
			const cwd0 = ((): string | null | undefined => {
				if (!cwd) { return UNDEFINED }
				if (!adapter) { return null }
				switch (cwd) {
					case "root":
						return adapter.getBasePath()
					case "current": {
						const active = workspace.getActiveFile()
						if (active?.parent) {
							return adapter.getFullPath(active.parent.path)
						}
						return null
					}
					// No default
				}
			})()
			if (cwd0 === null) { return false }
			if (!checking) {
				if (type === "select") {
					new SelectProfileModal(plugin, cwd0).open()
					return true
				}
				const profile = defaultProfile(type)
				if (profile) { spawnTerminal(plugin, profile, cwd0) }
			}
			return true
		}

	addRibbonIcon(
		plugin,
		i18n.t("asset:ribbons.open-terminal-id"),
		i18n.t("asset:ribbons.open-terminal-icon"),
		() => i18n.t("ribbons.open-terminal"),
		() => { new SelectProfileModal(plugin, adapter?.getBasePath()).open() },
	)
	plugin.registerEvent(workspace.on("file-menu", (menu, file) => {
		if (!plugin.settings.addToContextMenu) {
			return
		}
		const folder = file instanceof TFolder ? file : file.parent
		if (!folder) { return }
		menu.addSeparator()
		const items = PROFILE_TYPES
			.map(type => contextMenu(type, folder))
			.filter(isNonNil)
		if (!isEmpty(items)) {
			menu.addSeparator()
			items.forEach(item => menu.addItem(item))
		}
	}))
	plugin.registerEvent(workspace.on(
		"editor-menu",
		(menu, _0, info) => {
			const { file } = info
			if (!plugin.settings.addToContextMenu ||
				info instanceof MarkdownView ||
				!file?.parent) {
				return
			}
			const { parent } = file
			menu.addSeparator()
			const items = PROFILE_TYPES
				.map(type => contextMenu(type, parent))
				.filter(isNonNil)
			if (!isEmpty(items)) {
				menu.addSeparator()
				items.forEach(item => menu.addItem(item))
			}
		},
	))
	// Always register command for interop with other plugins
	for (const type of PROFILE_TYPES) {
		for (const cwd of CWD_TYPES) {
			if (EXCLUDED_TYPES.some(({ cwd: cwd0, profile }) =>
				cwd0 === cwd && profile === type)) {
				continue
			}
			addCommand(
				plugin,
				() => i18n.t(`commands.open-terminal-${cwd}`, {
					interpolation: { escapeValue: false },
					type,
				}),
				{
					checkCallback(checking) {
						if (!plugin.settings.addToCommand) { return false }
						return command(type, cwd)(checking)
					},
					icon: i18n.t(`asset:commands.open-terminal-${cwd}-icon`),
					id: `open-terminal.${type}.${cwd}`,
				},
			)
		}
	}
}
