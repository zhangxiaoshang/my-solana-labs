/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
  "@blocto/sdk",
  "@project-serum/sol-wallet-adapter",
]);

const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,

  ...withAntdLess({
    lessVarsFilePath: "./styles/variables.less",
    lessVarsFilePathAppendToEndOfContent: false,
  }),
});
