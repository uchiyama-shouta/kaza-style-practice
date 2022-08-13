/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { withKazeStyle } = require("@kaze-style/next-plugin");

const withPlugins = require("next-compose-plugins");

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

module.exports = withPlugins([withBundleAnalyzer, withKazeStyle], {
  ...config,
});
