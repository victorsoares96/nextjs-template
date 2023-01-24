const path = require('path');

/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production' && { properties: ['^data-testid$'] },
    removeConsole: process.env.NODE_ENV === 'production' && { exclude: ["error", "warn"] },
    styledComponents: {
      ssr: true,
      cssProp: process.env.NODE_ENV !== 'production'
    }
  },
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      const originalEntry = config.entry
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, './scripts/wdyr.ts')
        const entries = await originalEntry()

        if (entries['main.js'] && !entries['main.js'].includes(wdrPath)) {
          entries['main.js'].push(wdrPath)
        }
        return entries
      }
    }

    return config
  },
};
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPwa = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = async (phase) => {
  const defaultConfig = {}
  return withPlugins([
    [withBundleAnalyzer],
    [withPwa],
  ], nextConfig)(phase, { defaultConfig });
};
