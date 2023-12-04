export function isStandalone(){
    return typeof process.env.MODULE_PATH !== "undefined"
}