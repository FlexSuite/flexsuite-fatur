import { version } from '../package.json'
import Billing from './pages/billing'
import Home from './pages'
import Invoices from './pages/invoices'
import Settings from './pages/settings'

export const _name = 'flexsuite-fatur'
export const _path = '/revenue'

export const _version = version
export const _pages = {
    Billing,
    Home,
    Invoices,
    Settings,
}