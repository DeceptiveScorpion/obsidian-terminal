export const
	CHECK_EXECUTABLE_WAIT = 5,
	DEFAULT_ENCODING = "utf-8",
	DISABLED_TOOLTIP = "",
	DOUBLE_ACTION_WAIT = 2,
	DEFAULT_PYTHON_EXECUTABLE = "python3",
	DEFAULT_PYTHONIOENCODING = `${DEFAULT_ENCODING}:backslashreplace`,
	EXIT_SUCCESS = 0,
	DEFAULT_SUCCESS_EXIT_CODES = Object.freeze([
		EXIT_SUCCESS.toString(),
		"SIGINT",
		"SIGTERM",
	]),
	JSON_STRINGIFY_SPACE = "\t",
	MAX_LOCK_PENDING = 1000,
	NOTICE_NO_TIMEOUT = 0,
	SAVE_SETTINGS_WAIT = 2,
	SI_PREFIX_SCALE = 1000,
	TERMINAL_EMULATOR_RESIZE_WAIT = 0.1,
	TERMINAL_EXIT_CLEANUP_WAIT = 5,
	TERMINAL_PTY_RESIZE_WAIT = 0.5,
	TERMINAL_RESIZER_WATCHDOG_WAIT = 0.5,
	TERMINAL_SEARCH_RESULTS_LIMIT = 999,
	// eslint-disable-next-line no-void
	UNDEFINED = void 0,
	WINDOWS_CMD_PATH = "C:\\Windows\\System32\\cmd.exe",
	WINDOWS_CONHOST_PATH = "C:\\Windows\\System32\\conhost.exe"

export namespace DOMClasses {
	export const
		MOD_WARNING = "mod-warning",
		MODAL = "modal",
		MODAL_CLOSE_BUTTON = "modal-close-button",
		STATUS_BAR = "status-bar",
		VERTICAL_TAB_CONTENT = "vertical-tab-content",
		VERTICAL_TAB_CONTENT_CONTAINER = "vertical-tab-content-container",
		VIEW_HEADER_TITLE = "view-header-title"
	export namespace Namespaced {
		export const
			AWAIT_CSS = "await-css",
			HIDE_STATUS_BAR = "hide-status-bar",
			TERMINAL = "terminal"
	}
}

export namespace FileExtensions {
	export const
		MARKDOWN = "md"
}
