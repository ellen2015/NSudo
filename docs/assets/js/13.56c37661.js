(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{208:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[n._v("#")]),n._v(" 使用方法")]),n._v(" "),t("h2",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[n._v("#")]),n._v(" 快速上手")]),n._v(" "),t("p",[n._v("请打开【CPU 架构】目录，然后双击 NSudo.exe. 根据提示操作即可。例如，如果你想在\n你的 Intel 或 AMD 设备上使用 64 位 NSudo，你首先需要打开的是 x64 目录，然后双击\nNSudoG.exe。")]),n._v(" "),t("h2",{attrs:{id:"命令行选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行选项","aria-hidden":"true"}},[n._v("#")]),n._v(" 命令行选项")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('格式: NSudo [ 选项与参数 ] 命令行或常用任务名\n\n选项:\n\n-U:[ 选项 ] 以指定用户选项创建进程。\n可用选项：\n    T TrustedInstaller\n    S System\n    C 当前用户\n    P 当前进程\n    D 当前进程 (降权)\nPS：这是一个必须被包含的参数。\n\n-P:[ 选项 ] 以指定特权选项创建进程。\n可用选项：\n    E 启用全部特权\n    D 禁用所有特权\nPS：如果想以默认特权选项创建进程的话，请不要包含“-P”参数。\n\n-M:[ 选项 ] 以指定完整性选项创建进程。\n可用选项：\n    S 系统\n    H 高\n    M 中\n    L 低\nPS：如果想以默认完整性选项创建进程的话，请不要包含“-M”参数。\n\n-Priority:[ 选项 ] 以指定进程优先级选项创建进程。\n可用选项：\n    Idle 低\n    BelowNormal 低于正常\n    Normal 正常\n    AboveNormal 高于正常\n    High 高\n    RealTime 实时\nPS：如果想以默认进程优先级选项创建进程的话，请不要包含“-Priority”参数。\n\n-ShowWindowMode:[ 选项 ] 以指定窗口模式选项创建进程。\n可用选项：\n    Show 显示窗口\n    Hide 隐藏窗口\n    Maximize 最大化\n    Minimize 最小化\nPS：如果想以默认窗口模式选项创建进程的话，请不要包含“-ShowWindowMode”参数。\n\n-Wait 令 NSudo 等待创建的进程结束后再退出。\nPS：如果不想等待，请不要包含“-Wait”参数。\n\n-CurrentDirectory:[ 目录路径 ] 设置进程的的当前目录。\nPS：如果你想用 NSudo 的当前目录，请不要包含“-CurrentDirectory”参数。\n\n-UseCurrentConsole 使用当前控制台窗口创建进程。\nPS：如果你想在新控制台窗口创建进程，请不要包含“-UseCurrentConsole”参数。\n\n-Version 显示 NSudo 版本信息。\n\n-? 显示该内容。\n-H 显示该内容。\n-Help 显示该内容。\n\n上下文菜单管理：\n  -Install   把NSudo拷贝到Windows目录并且添加上下文菜单。\n  -Uninstall 移除在Windows目录的NSudo和上下文菜单。\n\nPS：\n    1. 所有的NSudo命令行参数不区分大小写。\n    1. 可以在命令行参数中使用 "/" 或 "--" 代替 "-" 和使用 "=" 代替 ":"。例如\n       "/U:T" 和 "-U=T" 是等价的。\n    1. 为了保证最佳体验，NSudoC不支持上下文菜单。\n\n例子：\n    以TrustedInstaller权限，启用所有特权，完整性默认运行命令提示符\n        NSudo -U:T -P:E cmd\n')])])]),t("p",[n._v("例子：以 TrustedInstaller 权限，启用所有特权，完整性默认运行命令提示符")]),n._v(" "),t("blockquote",[t("p",[n._v("NSudo -U:T -P:E cmd")])]),n._v(" "),t("p",[n._v("从 NSudo 5.0.1708.16 开始命令行支持嵌套引号，例如：")]),n._v(" "),t("blockquote",[t("p",[n._v('NSudo -U:T cmd /c "dir "C:\\Program Files" & pause"')])]),n._v(" "),t("h2",{attrs:{id:"常用列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用列表","aria-hidden":"true"}},[n._v("#")]),n._v(" 常用列表")]),n._v(" "),t("p",[n._v("关于常用列表的自定义,可以使用记事本等工具编辑 NSudo.json。你可以照着示例的做法添\n加你的自定义项目：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n  "ShortCutList_V2": {\n    "命令提示符": "cmd",\n    "PowerShell": "powershell",\n    "PowerShell ISE": "powershell_ise",\n    "Hosts编辑": "notepad %windir%\\\\System32\\\\Drivers\\\\etc\\\\hosts"\n  }\n}\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);