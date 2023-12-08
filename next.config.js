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
          //  './module':"./src/pages/index.tsx",
           './cobrancas': './src/pages/billing',
           './faturas': './src/pages/invoices',
           './configuracoes': './src/pages/settings',
           './module': './src/module',
        },
        remotes: {},
        shared: ["react", "react-dom"],
      })
    )
    config.output.publicPath = "http://localhost:3002/"
    return config
  },
}
module.exports = nextConfig
