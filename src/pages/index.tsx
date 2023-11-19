import styles from '../styles/Home.module.css'
import { version } from '../../package.json'
import { ModuleLink } from '@/components/ModuleLink'
export default function Home() {
  return (
    <div className={styles['item-container']} key={'fatur-module'}>
        <p>Modulo Faturamento v{version}</p>
        <ModuleLink name='Cobranças' path='/billing'/>
        <br />
        <ModuleLink name='Faturas' path='/invoices'/>
        <br />
        <ModuleLink name='Configurações' path='/settings'/>
        <br />
        <ModuleLink name='Inicio' path='/'/>
    </div>
  )
}