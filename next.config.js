/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { withKazeStyle } = require("@kaze-style/next-plugin");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withPlugins = (plugins, config) => {
  return plugins.reduce((acc, plugin) => plugin(acc), { ...config });
};

module.exports = withPlugins([withBundleAnalyzer, withKazeStyle], config);
