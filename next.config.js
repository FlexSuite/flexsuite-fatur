/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require("@module-federation/nextjs-mf") 

/**
 * Configurações do modulo
 * 
 * moduleName: Nome do modulo
 * filename: Nome do arquivo de entrada
 * port: Porta do modulo
 * 
 */
const moduleName = 'fatur'
const filename = `static/chunks/${moduleName}-entry.js`
const port = 3002

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: moduleName, /** */
        filename,
        exposes: { 
          './module': './src/module',
           './cobrancas': './src/pages/billing',
           './faturas': './src/pages/invoices',
           './configuracoes': './src/pages/settings',
        },
        remotes: {},
        shared: ["react", "react-dom"],
      })
    )
    config.output.publicPath = `http://localhost:${port}/`
    return config
  },
}
module.exports = nextConfig
