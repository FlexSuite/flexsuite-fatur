import { ModuleLinkProps } from "@/interfaces/IModuleLink"
import { isStandalone } from "@/utils/ModuleUtils"
export function ModuleLink(props:ModuleLinkProps){
    return (
        <a href={ !isStandalone() ? '/revenue' + props.path : props.path} suppressHydrationWarning>{props.name}</a>
    )
}