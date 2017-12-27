export namespace BotyoSymbol
{
    export const SYMBOL_PREFIX = "BOTYO_API_";

    export function forName(name: string): symbol
    {
        return Symbol.for(SYMBOL_PREFIX + name);
    }

    export function forClass(clazz: Function): symbol
    {
        return forName(clazz.name);
    }
}
