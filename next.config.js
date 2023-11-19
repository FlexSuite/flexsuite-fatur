/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require("@module-federation/nextjs-mf") 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "fatur", /** */
        filename: "static/chunks/fatur-entry.js",
        exposes: { 
           './module':"./src/pages/index.tsx",
           './billing': './src/pages/billing',
           './invoices': './src/pages/invoices',
           './settings': './src/pages/settings'
        },
        remotes: {},
        shared: ["react", "react-dom"],
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    )
    config.output.publicPath = ""
    return config
  },
}
module.exports = nextConfig