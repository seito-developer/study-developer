const path = require("path")

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules = [
      // デフォルトのrulesに入っているCSS用の設定が悪さをするのでお帰りいただく
      ...config.module.rules.filter(rule => rule.test.source !== (/\.css$/).source),
      // css-loader を設定しなおす
      {
        test: /\.css$|scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
    config.resolve.alias = {
      "@": path.resolve(__dirname, "..")      // こっちは私の趣味です
    }
    return config
  }
}