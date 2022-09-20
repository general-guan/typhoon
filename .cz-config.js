module.exports = {
  types: [
    { value: "feat", name: "feat:     新增功能" },
    { value: "fix", name: "fix:      修复 bug" },
    { value: "docs", name: "docs:     文档变更" },
    {
      value: "style",
      name: "style:    代码格式（不影响功能，例如空格、分号等格式修正）",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构（不包括 bug 修复、功能新增）",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "test", name: "test:     添加、修改测试用例" },
    {
      value: "build",
      name: "build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
    },
    { value: "ci", name: "ci:       修改 CI 配置、脚本" },
    {
      value: "chore",
      name: "chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
    },
    { value: "revert", name: "revert:   回滚提交" },
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" },
  ],

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择
  usePreparedCommit: true,

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

  // 交互提示信息
  messages: {
    type: "请选择本次提交的更改类型！",
    scope: "选择一个 scope（可选）：",
    // 选择 scope:custom 时会出下面的提示
    customScope: "请输入自定义的 scope：",
    subject: "请填写简短精炼的变更描述：",
    body: '请填写更加详细的变更描述（可选）。使用 "|" 换行：',
    breaking: "请列举非兼容性重大的变更（可选）：",
    footer: "列举出所有变更的 ISSUES CLOSED（可选）。例如: #31, #34：",
    confirmCommit: "确认提交？",
  },

  // 是否允许自定义填写 scope
  allowCustomScopes: true,

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ["feat", "fix"],

  // subject 限制长度
  subjectLimit: 100,

  // 支持 body 和 footer
  breaklineChar: "|",

  // skipQuestions: ['scope', 'body'], // 跳过要询问的步骤
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: "TICKET-",
  // ticketNumberRegExp: "\\d{1,5}",
};
