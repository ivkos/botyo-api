namespace SymbolUtil
{
    export const SYMBOL_PREFIX = "BOTYO_API_";

    export function forName(name: string)
    {
        return Symbol.for(SYMBOL_PREFIX + name);
    }

    export function forClass(clazz: Function)
    {
        return forName(clazz.name);
    }
}

export default SymbolUtil;