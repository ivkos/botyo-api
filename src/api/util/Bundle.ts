import { ModuleConstructor } from "./ModuleConstructor";
import { AsyncResolvableNewable } from "./AsyncResolvable";

export class Bundle
{
    private constructor(readonly modules: ModuleConstructor[],
                        readonly asyncResolvables: AsyncResolvableNewable<any>[])
    {}

    static ofModules(modules: ModuleConstructor[])
    {
        return new Bundle(modules, []);
    }

    static ofAsyncResolvables(asyncResolvables: AsyncResolvableNewable<any>[])
    {
        return new Bundle([], asyncResolvables);
    }

    static of(modules: ModuleConstructor[], asyncResolvables: AsyncResolvableNewable<any>[])
    {
        return new Bundle(modules, asyncResolvables);
    }
}