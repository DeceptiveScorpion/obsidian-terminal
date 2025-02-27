# Changelog for Terminal

[readme]: https://github.com/polyipseity/obsidian-terminal/blob/main/README.md

Versions are ordered by recency.

This file is automatically opened on update. You can reopen it in settings or command palette.

- [Readme]

## Unreleased

__Features__
- Implement top-level ``await`` in the developer console. (`7d2219e9bceef8459504c820099ff3c61bd737bd`)

__Full changelog__: [`3.8.0...main`](https://github.com/polyipseity/obsidian-terminal/compare/3.8.0...main)

## 3.8.0 (2023-04-29)

__Features__
- Patch `require` so that `require("obsidian")` works in the developer console. (`89cf2cc34a64f8cd373c8e3dd8da1e7b3f020f5c`)
- Add internal support for custom terminal options. (`80df07f698450947b04ef2f5b69e11ce52f5d9dc`)
- Add raw data editing for profiles like the one for settings. You can use this to configure terminal options (refer to [`xterm.js` documentation](https://github.com/xtermjs/xterm.js/blob/2fdb46919ce7a329afe65fe69bcf948d310a2b8a/typings/xterm.d.ts#L26)). An UI for terminal options will be added shortly. Address [GH#11](https://github.com/polyipseity/obsidian-terminal/issues/11) and [GH#16](https://github.com/polyipseity/obsidian-terminal/issues/16). (`fbe2de717c5e46436c929240c8450839139ce7c1`)

__Fixes__
- Fix re-enabling plugin overwriting history due to unloaded CSS. (`e02e43918c82dcb8f9641dc2ca2be208e23a3caa`)

__Improvements__
- Improve the icon for `whole words` in find in terminal. (`dfb3da51878bd8b7e9004afffc9097e3e01c79a8`)
- Decrease loading time by ~20%. (`c4ea4912e5f9b412d31df70b3881570a47faebae`)

__Full changelog__: [`3.7.0...3.8.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.7.0...3.8.0)

## 3.7.0 (2023-04-11)

__Features__
- Add 3 profile presets: 'powershell: External', 'powershell: Integrated', and 'pwsh: External'. `powershell` stands for Windows PowerShell while `pwsh` stands for PowerShell Core. (`1767d2d9f80a269ba24eecd0c45fd8bf0ed9050c`)
- Color messages in developer console. (`107826a45b255367f336e00e0cb518f1851a8306`)

__Improvements__
- Speed up (re)starting a new developer console significantly. (`5a407cc9ed9b3e985f63d56aa7aed4a3b17e33ae`)
- Improve developer console messages significantly. (`e6b5ae83c448398105ec11444722852a6a1b11b4`)

__Full changelog__: [`3.6.0...3.7.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.6.0...3.7.0)

## 3.6.0 (2023-04-04)

__Features__
- Add 'root directory' button next to working directory when editing a terminal view. (`4991ccb8548b3034f8f753924f1fbd95523259be`)
- Add 'focus on new instance' setting. (`c7db57e1328da5883a3587d0d812905bc30f58e1`)
- Add 'restore history' profile setting. (`c1b3a69dbd71d7fecc080e5b6791b81260dc6ccf`)
- Add 'success exit codes' profile setting. (`3d9aaca914837df324200307e634d1f7f4cd42da`)

__Improvements__
- Developer console history can be kept now. (`7ced419b9762ff92a28cadf0355a54f0200b6209`)

__Full changelog__: [`3.5.1...3.6.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.5.1...3.6.0)

## 3.5.1 (2023-03-28)

__Fixes__
- mobile: Fix 'Save to HTML'. It no longer does nothing on Android and soft locks Obsidian on iOS. (`b1201a089a3f3447e09249651434995b11bb283b`)

__Features__
- The latest commit for the plugin can now be installed using [Obsidian42 - BRAT](https://obsidian.md/plugins?id=obsidian42-brat). (`5f263690e80d6298eb02ffade41a10beedd4ce1f`..`bda61d4ee1a82c7b9694912ae0353e178f0f0756`)

__Improvements__
- Use CSS to hide the status bar, making the hiding customizable. (`84c55993db3d3e8a86d283e83df0c58dfa4d8eaf`)

__Full changelog__: [`3.5.0...3.5.1`](https://github.com/polyipseity/obsidian-terminal/compare/3.5.0...3.5.1)

## 3.5.0 (2023-03-20)

__Features__
- Add 6 external profile presets. Helps with [GH#16](https://github.com/polyipseity/obsidian-terminal/issues/16). (`c9a51249d35fe429d5cc4eb8a307612177de896e`)
- Automatically pin new terminal tabs to avoid accidentally terminating terminals. Configurable in settings. (`beb24cc25802750b1681358e42fd74ccbe51f83a`)
- Add support for dragging and dropping files into the terminal to paste their filepaths. See [GH#16](https://github.com/polyipseity/obsidian-terminal/issues/16). (`7c5e4617072d1b77a7d9f11b0e886c8e9d051f91`)

__Fixes__
- Fix invalid regex crashing find in terminal. (`9da6bb9494fa0079fb1b60a8140277e1dbff9860`)

__Full changelog__: [`3.4.1...3.5.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.4.1...3.5.0)

## 3.4.1 (2023-03-14)

__Fixes__
- Fix error opening documentation. (`df085f2a505983592f7d50e31bdc3d52a89f29f3`)

__Full changelog__: [`3.4.0...3.4.1`](https://github.com/polyipseity/obsidian-terminal/compare/3.4.0...3.4.1)

## 3.4.0 (2023-03-14)

This update focuses on performance of plugin loading. The loading time has been decreased significantly, making it more viable for slow platforms (like mobile).

__Features__
- Add Git Bash preset. Helps with [GH#15](https://github.com/polyipseity/obsidian-terminal/issues/15). (`4b2b63cf2ab0477a4dcd22e78db7e4103c6b0d8c`..`d9543e88c407b19180a3f25371de7391f0160857`)

__Improvements__
- Throttle terminal resizing to reduce flickering. (`04899b5f6ae3eef1a4561ba022db5ebbab9f785f`..`f947c780c7c38f8bb4e2f02c163de0b72024dfe8`)
- Compress JSON and text files, decreasing bundle size from ~1.8 MB to ~1.45 MB. (`ed2e4b671518ec79c6de8f11e3889cae574ea9cb`, `1e98d9429e788e472dc83caa61824a1338e54586`)
- Reduce startup time by ~80%. (`fe93210ffd44ccf1b1e48d625963140f008fea83`, `a199af9baf212a419d3ff503878bd6b835e762f4`..`ddd3f3a16e67d29b4ba3a07beeeae05cfcb36fc4`)

__Miscellaneous__
- Add npm commands to install the plugin. (`854e1338072f325b6e450817b568244f89693dce`)

__Internals__
- Make monkey patches more resilient to errors. (`af35b0176e1f11e32be5764ff17f93a2a01e8f7f`)

__Full changelog__: [`3.3.0...3.4.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.3.0...3.4.0)

## 3.3.0 (2023-03-06)

Just a small release to push out the unpublished changes.

__Features__
- Add Windows Subsystem for Linux preset as suggested in [GH#14](https://github.com/polyipseity/obsidian-terminal/issues/14). (`7a787996ddf96403ee29dfb13c0f9a9961853474`..`720388c0fdf0833137df479e43f24524939252c2`)

__Improvements__
- Improve startup time significantly by initializing developer console on demand. (`c023f15e48c04cda8ecd3e4a4cf9f258e86f4a5e`)
- Stablize CSS class names for custom Svelte components. This should make it way easier to maintain custom CSS for them. (`d9e306563c8b8396c79c4b57e69287af45b604b3`)
- Rewrite developer console paging algorithm. It should fix most (if not all) bugs with it, including resizing. (`8a94ef19610e2d4b689dde4ae5bc5843d55b264f`)

__Fixes__
- Fix creating instances near existing ones in left and right leaves. (`f055a3b8e77e0349eacbf66a55a21f7784280061`)

__Full changelog__: [`3.2.0...3.3.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.2.0...3.3.0)

## 3.2.0 (2023-02-27)

Emulating a text area in a terminal is insane...

__Notices__
- The minimum API version has been bumped to v1.1.13. Please update your app to the latest version. (`e2733c5c36003db5556819088b50bad29671d4e0`)

__Features__
- Developer console terminal is now interactive. You can evaluate code like the normal developer console now. (Spent too much time on this.) (`bcdd8dbff0d652c8eb9a389f734db2c3a5891323`...`e2d8690767f81958b1a0d95ac412a12ac3ab0c33`)
- You can set custom title of the terminal from the shell (if your shell supports it). (`3718829159b1c5960dec430df78ed5d70c4a9abb`)
- Four new options for 'New instance behavior'. They are 'New left tab', 'New left split', 'New right tab', and 'New right split'. (`bcdd8dbff0d652c8eb9a389f734db2c3a5891323`)

__Improvements__
- All settings should have an icon representing it. (`eb1a647d0336041a7f705a3476f18bd5ed738913`)
- Improve find in terminal.
  - Autofocus on the find input when you activate it. (`7d0c857e9bd68e4b15028dc0e5e9cc5e187ac5f5`)
  - Pressing `Esc` when focused on find in terminal closes it. (`2ce8bdcd182c3abaf20bddacf925a84693cb8e50`, `7f13dd47fd5dab814bf9028a12f5e91c2bbdf67d`)
  - Add ARIA labels. (`c747a490a158c7891effb24642d790ca58699de9`)
- Improve working directory handling to reduce confusion like in [GH#12](https://github.com/polyipseity/obsidian-terminal/issues/12). (`55b917052b371eb566976af7d13b6345c64554ef`, `985b6100ef14e9f0933de0859dd0e8872e217490`)
- Add double confirm dialog hint. (`0f043376fb6f2528b826066128666baa855c774d`)
- Make terminal resizing extremely responsive. (`73a7836522d56e92b064a76a09bf18fc87d7ec42`)
- Find in terminal now has intro and outro transitions. (`bcdd8dbff0d652c8eb9a389f734db2c3a5891323`...`ef39cb1177af6cc108f8e61d179eff89056b48f8`)
- Add 'Clear' button to terminal context menu. (`1a2f3104b6034065b1f7e1a0e5cd410254eef52c`)

__Fixes__
- Fix some translation strings. (`88cbcf603ff0429d26f1616b7af67bf4cf27f3f9`, `2a4a4cfe45f4ffd787feb134ef0545af7a832fb5`)
- Unfocusing terminal also works when find in terminal is focused. (`f7cde90970128bd4bbf1578fb2e1d3249451a628`)
- Improve compatibility with pop-out windows. (`798b2988875e0688f7602efb20fbd6702edf00f9`..`59955f4ee1e9102dd956537464e53b88cc1a6d12`, `f38d0082a0fc9cccbb75c7383aa6c35810b1e9b8`..`7b8364086873ebeee11fd506c2f139708be6e740`)

__Internals__
- Load translations on demand. (`268c684ec97f858d5a6ef030130b834eda305442`)
- Delay removing exit code temp file to print less warnings to the console. (`6923553979451e1da6200c7ac01e637f2f2563ae`)
- Avoid using non-standard functions. (`44dcfaf89f7638e77e7e0c0306c12c14ac613e00`, `8de1c59e2e6ca6afebf4c7f0fd676077d1a07502`)
- Only create one `ConsolePseudoterminal`. (`bd97d08b1186584d607a8530b116c1aad1d9a761`)
- Use reference-counted `RefPseudoterminal` in preparation for duplicating terminals. (`02249373db897a683628cd8363199ba512d55686`)

__Full changelog__: [`3.1.0...3.2.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.1.0...3.2.0)

## 3.1.0 (2023-02-20)

This update focuses on quality of life improvements.

__Notices__
- You can actually download the plugin on mobile now. Somehow this has not been caught for a long time.
- Settings will probably be broken again. The plugin will attempt to fix it without changing it as much as possible. In case it goes wrong, you can recover the previous setting from the plugin itself now.

__Features__
- Add settings recovery. It can recover settings that are valid JSON but not completely valid for plugin settings (like settings from a previous version). (`a8d702240730e4a50c22787b718409a948dd0bca`)
- Add importing settings and exporting settings from the command palette. Using a file requires navigating to a markdown file first. (`e76949eb6694fcc4655a3b0d269116e199dc17b1`)
- Add raw editing of settings. You can import and export settings there as well. (`6b8314252451d42c4de5a0d0e9218a9617e3cca8`)
- Make history navigation buttons of the terminal view work. Using the `Edit` context menu item will add history. (`69c49596b289b9de8d91f4315ed1d719c8a5a189`)
- Read readme and changelog (this very file you are reading now) from the plugin itself. They can be accessed from the command palette or the settings UI. (`3d0c514231585a40bea5f8baf2a6e246d6ab9e35`)
- Open changelog on plugin update. (`29baeb4914ace485c6f3f3d4b489f1fdd876af87`)
- Intercept all key when the terminal is focused. (`4e18bdc49320b8230dec5ad155e67692cd79b40d`)
- Add keys to clear terminal (&lt;Ctrl+Shift+K&gt;; macOS: &lt;Cmd+K&gt;), start find in terminal (&lt;Ctrl+Shift+F&gt;; macOS: &lt;Cmd+F&gt;), and toggle focus of terminal (&lt;Ctrl+Shift+\`&gt;; macOS: &lt;Cmd+\`&gt;). Closes GH#7. (`9a384ff055709300069386258ff447fd27affbe9`)
- Add 2 settings to control where to open terminal. Closes GH#3. (`ba871ff161d536ea8d6576d8f7467f4425797370`)
- Add Python executable checking button in profile settings. It checks and prints the version in a notice. Could help with GH#9. (`dce6ead590417c2df470f327388f8f67bae2f5a5`..`1521bd5fd5d59012f94ca35aeb21e48c0c9b9929`)
- Open readme on first install of the plugin. (`0e89d05b0269f9e912094f3364a33f6a1f65b3e6`)

__Improvements__
- Improve typing negative numbers in settings. (`e89f36a8f957524b685452d4c7cd1221e1595839`)
- Make settings UI &lt;Tab&gt;-friendly. (`196f1230e0e3e8a2411318d822fbf2f94880a81e`..`19c3fa8cc3f34e00fc874bcbbafe96ab1466c4ea`)
- Various minor improvements to UIs.
- Ribbons translate automatically. (`22a299013504439aecd78db4456a6866c47ebd67`..`f58cbff9ff941b67072f64eae9ed2674bd4400fe`)
- No more empty terminal tab name (`Terminal: `). (`535aa52a46fe67ffed93cd84d7903bfe1442c493`)
- More information about profiles are displayed. (`eb73553fb53e8292b9e73088567bc1dfcc61f322`, `8b45a6e420a1b3130351c964f3240c5cbecd398c`..`5f59ab6d60d51635214f54123e34d61b7aa87cc3`)

__Fixes__
- Fix a setting reset button. (`555001371e16562bb34a92291571d1d2f82d5b7e`)
- Mobile: Fix unclickable modal close button. (`e9fc80f68a353bb1c60d29c45ccd5f5baaf058ac`)
- Fix spawning terminal notice spam. (`d8a69103629340970589a23e2d71120ef2111052`)
- Make plugin downloadable on mobile by downgrading minimum app version. (`165b414e68e26027bcf677795bdc5d2d01380680`)
- Fix empty Python executable not disabling Python. Fixes GH#8. (`09f2b3d1b0ae23867827977f2dbbba6b6f4f6460`)
- Windows: Fix pressing &lt;Ctrl+C&gt; exiting the terminal resizer. (`5bff3f0749f16be80bfeb8a3ba903b0f8c6f79c4`)
- Mobile: Fix bottom of terminal view covered by navbar. (`3230ca61defe56429358fcf368fade77abb6991d`, `dc875923e67300e2a0826d4e9332c51c2f42c19b`)

__Internals__
- Improve UI code using `UpdatableUI`.
- Potentially invalid data are validated. If invalid, they are fixed and logged. (`ad9e9bf0c2def5e4bcb999fdff05b776e988d11b`, `1d4cc6abd5ab0bba1a74d9c7aa1854d5e949aecf`, `d6c1b5b298114cd267e2d7101a053e2dfb60a1e1`)
- Rewrite translation files to use vocabularies. (`c5ba24d8707fc814a3d5d87f0e9ace97124ffd2e`)
- Handle missing translation keys and interpolation. (`575cbfeb4293f7d602124f6470f5fb95ccf3b99c`)
- Improve plugin loading. (`71f2e948c8dcee77ced2f772aeac204ab7f8dcf5`)

__Miscellaneous__
- Change license from "MIT" to "AGPL-3.0-or-later". (`77d9d9477b0dc1d56ab3b0cd36d3ba53ef5e52ff`)
- Improve documentation. Closes GH#4 and GH#6. (`57a85254e1fd7bf9ed5a6feab08784b26d983090`, `25df148d992056b8378ff42d459120f4c48b52f3`)

__Full changelog__: [`3.0.0...3.1.0`](https://github.com/polyipseity/obsidian-terminal/compare/3.0.0...3.1.0)

## 3.0.0 (2023-02-12)

A major version bump as there are many shiny new features this time! ✨

__Notices__
- Please reconfigure your settings. Old settings will likely be overwritten.
- Now usable and useful on mobile! (You can only open developer console, however...)

__Features__
- Implement terminal profiles! Comes with several presets. (`dda444885bd032fc4c85e9d9b95ace90be706d68`)
- Implement editing arguments. (`dda444885bd032fc4c85e9d9b95ace90be706d68`)
- Allowing specifying Python executable per profile. (`dda444885bd032fc4c85e9d9b95ace90be706d68`)
- Add buttons to undo and reload all settings. (`d12898142b16a3daed0b1e4826b5f759fecaffc2`)
- Add commands and context menus to select terminal profile. (`804a3448f58d44a6bea9cccfde579fb1fc7ed4cd`)
- Add a ribbon to select terminal profile. (`9ea5c140102342e6916c596257ce32c16c440b87`)
- New terminal type: Console. It prints messages from the developer console. Works on mobile. (`3619f5865d054269819095cbad912184377e66e8`)
- Implement editing terminal. You can change terminal profile and working directory. (`c9909513604d5b2b2f15cbe9dbeb9936a7c85018`)

__Fixes__
- Fix unable to find after terminal restart. (`5586baa16320da28acb6c3a64f4b73c58e760013`)
- Fix escaping arguments. (`a4fd03d737fe86b1d2ccd9bb59aa0429445a4fb0`)
- Make context menu usable on mobile by keeping `contentEl`. (`0ec66b4e632a272e199b7c506189ef303a5b5b97`)
- Fix updating terminal tab name. (`1e7adcc23abeef98fb96ac587aaf4912209af10d`)
- Fix find in terminal styling on mobile. (`7de6c2a69715882e076fae5b42940daa7c28add6`..`35e8e5f6fdeb90986b193a4bfcab952788faa1ff`)

__Internals__
- Improve code, as always.
- Improve build scripts.
- Settings are validated and fixed on loading. (`5b78d4d10f1dff36abfc30c6695ac2755eb8045d`)
- Freeze `as const`-ed objects. (`5023e90fd54a9457d1182526e4d5d18e22311049`)
- Update npm packages.

__Full changelog__: [`2.11.0...3.0.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.11.0...3.0.0)

## 2.11.0 (2023-01-28)

__Features__
- Add GPU acceleration! Now scrolling the terminal is super smooth. (`078c36818bfbb038501bd4302e5c45ead53f12ba`)
- Improve settings UI. (`e3790ae02a7839aca2ef8659a16fcacebbc02d52`)
- Add setting to specify terminal renderer. (related to GPU acceleration) (`e029c710f3cda5b9dd209c517702ad1360754f20`)
- Add find in terminal function! Right-click terminal tab header to access it. (`925328b32c11470ae195b5061afe05b84d0f0d1b`)

__Fixes__
- Fix unable to unfocus from terminal. (`22cd684673b69860f442d86cac5d2ae9546c85a2`)
- Fix reset all settings not resetting all settings. Again... (`270530dde452ef0db5a0bf5ee813dc6d7072fa79`)
- Decrease the chance that the terminal resizer fails to initialize. (`ba9c34f4be014d641670ba1b01d53ec6d1723c18`, `781a4ec764628439aca519d7cc31e69f84e7f00e`)
- Improve accuracy of terminal resizer. (`76c85dffda284e95a1deb234198bbf4db2e7fb8a`)

__Internals__
- Housekeeping.
- Handle more uncaught errors.
- Add several minor terminal addons. (`9d3e38acf096517f5425fd2dd7c53a45ed5bbfaf`..`6ab523fbe7f328e758c7e6d88e149ba95b769d7a`)
- Log discarded errors. (`ab836e6bc692cd3806ee0ab77aa78a01d2211f4b`)
- Fix encoding of Python stdios. (`8fbb087d6f00798434118bc86c46a4f15ad6b37b`)
- Make `win32_resizer.py` report inability to find the correct window. (`028cde8159a12e7f346db74a472bdcb8c0fed907`)

__Full changelog__: [`2.10.0...2.11.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.10.0...2.11.0)

## 2.10.0 (2023-01-23)

__Notices__
- Updating the plugin starting from this version to a newer version will no longer close all active terminal views. (Does not include updating from a previous version to this version.)
- Please reset your settings and reconfigure it.
- Linux, macOS: Please specify a terminal emulator (not a shell) for external terminal, and a shell (not a terminal emulator) for internal terminal.
- macOS: This is not necessary if you have only used the release versions. But just in case, you might need to reset settings to apply the external terminal cwd fix.
- macOS: The external terminal cwd fix is implemented by passing `$PWD` as the first argument to the external terminal. This might cause issues with non-default terminals. You may need to edit `executables.darwin.extArgs` in `.obsidian/plugins/terminal/data.json` to remove the first argument. Also see the hint.
- mobile: You can only change settings on mobile for now.
- Hint: There are hidden settings to set the launching arguments in `.obsidian/plugins/terminal/data.json`. Search for `intArgs` and `extArgs`. I still need to figure out how to present the hidden settings in the settings UI well.

__Features__
- Terminal view no longer closes when the underlying process terminates. (`934eb24e2c7106e1122c8c29e4160ca5d55749ef`)
- Add terminal restoration message in the format of ` * Restored history at (time)`. (`5dd1efb5709af6d5f7dae7ee5d4b813fc4156612`)
- Add menu to restart terminal and resizer. Access by right-clicking terminal tab header. (`313b4b8f0c2ec2f71d79fd519925aab71cfff910`)
- Add settings to disable annoying notices. (`602954ee0ee619368ffb770310262656ee1a1551`)
- Add settings to specify external terminal separately. (`a80466f309483f6971c29b85d5825449ab93c448`)

__Fixes__
- Terminal view persists when updating the plugin. (`934eb24e2c7106e1122c8c29e4160ca5d55749ef`)
- Windows: Pressing `Ctrl-C` will no longer close the resizer sometimes. (`fc95167374d3174ce94ce47ecc8bb41709b2c535`)
- Fix "reset all" not resetting all settings. (`133a141e10b09f9bf29c59ed5ffaa6cde5594b72`)
- (See notices) Mobile: Fix plugin not loading. (`3b55de2c48bb5bbcb35f7a4d5a533b58d520670d`..`63c99375fbf29ef9fa6cbf27dd527071987a13fd`)
- (See notices) Linux, macOS: Fix external terminal not opening by separating external and internal terminal executable. (`a80466f309483f6971c29b85d5825449ab93c448`)
- (See notices) macOS: Fix external terminal not starting in the specified cwd. Might not work with non-default terminals. (`0b66970f065160e713067bb930bedf97f7f71793`)

__Internals__
- Housekeeping.
- Refactor terminal files.
- Handle more uncaught errors. Less errors in the developer console!
- Update npm packages. (`02f455b7c8b196116d45d98dd8fe51f750671b59`)
- Improve build scripts. (`02b0174ec8b6252dcd98fbc1925069db41d5ab23`)

__Full changelog__: [`2.9.0...2.10.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.9.0...2.10.0)

## 2.9.0 (2023-01-21)

After lots of hard work, v2.9.0 is finally ready! 😅

__Fixes__
- Fix integrated terminals on Linux and macOS (more generally, Unix). Python 3.10/+ is required but Python packages `psutil` and `pywinctl` are no longer required on Unix platforms. This should address the problem with integrated terminals of [GH#2](https://github.com/polyipseity/obsidian-terminal/issues/2). (`7812e8f148a0f52c2f576dded17266de07e3cebc`..`5dbea610f75dbadce28d54b90c8549fb6c24fc6e`)
- Change default Python executable to `python3` to avoid starting Python 2. (`ba931427b1e5e2dd4a716ff90946e7a855eb5aea`)
- Fix error handling. (`905d52e06eb83c6f915c9bb4fa4fcb2afece7327`..`8ac982e97ab32249135ffe36cc7ffc03548af059`)

__Internals__
- Validate language files. (`e919a7cf4fa165a92dc9c91f40f448ef9ae999c5`..`29fdad08527e7b798277d0aed4b231aedf77105e`)
- Housekeeping.

__Miscellaneous__
- Allow plugin to be enabled on mobile. It does nothing though. (`cb40072e533b1dc20d441485817bced1b49b55ea`..`b400a4412f29fda901e579b7b2968305579ac4f1`)
- Add all languages available in Obsidian (untranslated except for 2). (`29fdad08527e7b798277d0aed4b231aedf77105e`)
- Update translations.
- Update `README.md`.

__Known bugs__
- Opening external terminals is still broken on Linux and macOS.

__Full changelog__: [`2.8.1...2.9.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.8.1...2.9.0)

## 2.8.1 (2023-01-14)

__Fixes__
- Fix failing to load plugin. (`fc07030d02699323f103b9609590ca5f6d6245ef`)
- Housekeeping.

__Full changelog__: [`2.8.0...2.8.1`](https://github.com/polyipseity/obsidian-terminal/compare/2.8.0...2.8.1)

## 2.8.0 (2023-01-14)

__Features__
- Add 2 new plugin settings.
  - Hide status bar (`86c6602bd2b6b2e93f13e182ae11daa413a28cf3`)
  - Enable Windows 'conhost.exe' workaround (`e2710eca0e38570e812cd7beb467b71223a4696c`)

__Improvements__
- Log error and notify user if terminal resizer fails to start. (`5be0367243ad9a4655f9b09575d6a17ee317a707`)

__Fixes__
- Fix terminal not starting if terminal resizer fails to start. (`459ac226e08bc8898885731a41de6406af10c322`)
- Fix text escaping unnecessarily in notice messages. (`0dc8152517d29f896021beeafd355c4f2b8d2907`)

__Full changelog__: [`2.7.0...2.8.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.7.0...2.8.0)

## 2.7.0 🥳 (2023-01-12)

The plugin has just been [accepted](https://github.com/obsidianmd/obsidian-releases/pull/1472) into community plugins! 🥳

You can now get the plugin here instead: https://obsidian.md/plugins?id=terminal

No, there is no celebration for this. 😞

__Features__
- Add setting to configure or disable Python terminal resizer.

__Fixes__
- Fix integrated terminal not resizing when the terminal is not focused.
- Fix integrated terminal window not hidden when Python terminal resizer is unavailable.
- Fix potential issues with `cmd.exe` argument escaping.
- Housekeeping.

__Others__
- The view type of terminal is changed from `terminal:terminal-view` to `terminal:terminal`. Existing views will break unless you know how to modify `.obsidian/workspace.json` to fix it.
- Improve `README.md` significantly.
- Create `CHANGELOG.md` (the file you are viewing now).

__Full changelog__: [`2.6.1...2.7.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.6.1...2.7.0)

## 2.6.1 (2023-01-06)

- Fix 2 bugs.
- Housekeeping.

**Full Changelog**: [`2.6.0...2.6.1`](https://github.com/polyipseity/obsidian-terminal/compare/2.6.0...2.6.1)

## 2.6.0 (2023-01-05)

- Add the `Save as HTML` functioin to the tab context menu.

**Full Changelog**: [`2.5.1...2.6.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.5.1...2.6.0)

## 2.5.1 (2023-01-02)

- No user-facing changes.
- Fix tiny memory leak sources.
- Less errors in the developer console.
- Housekeeping.

**Full Changelog**: [`2.5.0...2.5.1`](https://github.com/polyipseity/obsidian-terminal/compare/2.5.0...2.5.1)

## 2.5.0 (2023-01-02)

- Implement terminal history restoration.
- Change default Linux terminal executable to ``xterm-256color``.
- Housekeeping.

**Full Changelog**: [`2.4.2...2.5.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.4.2...2.5.0)

## 2.4.2 (2023-01-01)

- Change icons of reset buttons to icons that represent the corresponding settings.
- Improve a setting translation.
- Housekeeping.

**Full Changelog**: [`2.4.1...2.4.2`](https://github.com/polyipseity/obsidian-terminal/compare/2.4.1...2.4.2)

## 2.4.1 (2023-01-01)

- No user-facing changes.
- Various minor code improvements.

**Full Changelog**: [`2.4.0...2.4.1`](https://github.com/polyipseity/obsidian-terminal/compare/2.4.0...2.4.1)

## 2.4.0 (2023-01-01)

- Add language settings.
  - Translated text are dynamically updated when language is changed.
- Add support for 2 locales: `简体中文` (`zh-Hans`), `繁體中文` (`zh-Hant`)
- Fix various bugs.
- Improve code.

**Full Changelog**: [`2.3.3...2.4.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.3.3...2.4.0)

## 2.3.3 (2022-12-31)

- Fix terminal persistence across Obsidian restarts.

**Full Changelog**: [`2.3.2...2.3.3`](https://github.com/polyipseity/obsidian-terminal/compare/2.3.2...2.3.3)

## 2.3.2 (2022-12-31)

- No user-facing changes.
- Improve code.

**Full Changelog**: [`2.3.1...2.3.2`](https://github.com/polyipseity/obsidian-terminal/compare/2.3.1...2.3.2)

## 2.3.1 (2022-12-31)

- Configure esbuild to build an even smaller `main.js`.
- Fix status bar hiding and error ignoring.
- Improve code.

**Full Changelog**: [`2.3.0...2.3.1`](https://github.com/polyipseity/obsidian-terminal/compare/2.3.0...2.3.1)

## 2.3.0 (2022-12-30)

- Hide status bar when the terminal is focused to avoid obstruction.
- Improve terminal resizing.
- Change internal structure of settings data. (You may need to reset or delete settings.)
- Potentially reduce plugin loading time.
- Code improvement.

**Full Changelog**: [`2.2.0...2.3.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.2.0...2.3.0)

## 2.2.0 (2022-12-29)

- Commands now work outside of editing mode (i.e. reading mode).
- Improve reporting exit code of terminals.
- Fix web links in terminal view not opening.
- The backing terminal is automatically resized with Python 3.
  - Makes the terminal more usable generally, especially TUIs.
  - Tested on Windows only.
  - Python 3 is only required for this enhancement, otherwise it remains optional.
  - Run `pip install psutil pywinctl` before using.
- Code improvement.

**Full Changelog**: [`2.1.0...2.2.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.1.0...2.2.0)

## 2.1.0 (2022-12-27)

- Add `Notice timeout` setting.
- Various minor quality-of-life changes.
- Implement internationalization and localization.
- Fix various bugs.
- Optimize code.

**Full Changelog**: [`2.0.0...2.1.0`](https://github.com/polyipseity/obsidian-terminal/compare/2.0.0...2.1.0)

## 2.0.0 (2022-12-27)

- Add functionality to embed terminals inside Obsidian.

**Full Changelog**: [`1.0.0...2.0.0`](https://github.com/polyipseity/obsidian-terminal/compare/1.0.0...2.0.0)

## 1.0.0 (2022-12-26)

Initial release.

**Full Changelog**: [`0.0.1...1.0.0`](https://github.com/polyipseity/obsidian-terminal/compare/0.0.1...1.0.0)

## 0.0.1 (2022-12-26)

__Full Changelog__: [`0.0.0...0.0.1`](https://github.com/polyipseity/obsidian-terminal/compare/0.0.0...0.0.1)

## 0.0.0 (2022-12-26)

__Full Changelog__: [`717c0adec4eca8744da20e9d10a504f5edd95a3a...0.0.0`](https://github.com/polyipseity/obsidian-terminal/compare/717c0adec4eca8744da20e9d10a504f5edd95a3a...0.0.0)
