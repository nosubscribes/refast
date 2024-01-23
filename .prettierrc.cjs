/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,        // 每行最长代码长度
  tabWidth: 2,            // 缩进空格数
  useTabs: false,         // 不使用tab缩进
  singleQuote: true,      // 单引号
  semi: false,            // 自动加分号
  trailingComma: 'all',   // 多行使用拖尾逗号
  bracketSpacing: true,   // 大括号间使用空格
  bracketSameLine: false, // </>放在最后一行的末尾
  arrowParens: 'always',  // 只有一个参数的箭头函数也带括号, 不带括号是avoid
  proseWrap: 'preserve',  // 使用默认的拆行标准
  quoteProps: 'preserve', // 不修改引号
  htmlWhitespaceSensitivity: 'ignore',
  jsxSingleQuote: false,
  pluginSearchDirs: false,// 不自动加载插件, 不然会自动加载一些明明没有配置的插件进去导致问题
  plugins: [],
};
