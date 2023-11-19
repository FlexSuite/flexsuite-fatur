import { ModuleLinkProps } from "@/interfaces/IModuleLink"
export function ModuleLink(props:ModuleLinkProps){
    return (
        <a href={process.env.MODULE_PATH ?? '/revenue' + props.path}>{props.name}</a>
    )
}