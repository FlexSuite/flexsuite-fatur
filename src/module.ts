import { version } from '../package.json'
import Cobrancas from './pages/billing'
import Home from './pages'
import Faturas from './pages/invoices'
import Configuracoes from './pages/settings'

export const _name = 'flexsuite-fatur'
export const _path = '/revenue'

export const _version = version
export const _pages = {
    Cobrancas,
    Home,
    Faturas,
    Configuracoes,
}