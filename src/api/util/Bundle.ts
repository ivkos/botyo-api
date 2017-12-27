import { Constructor } from "./Constructor";
import { Module } from "../modules/Module";
import { AsyncResolvable } from "./async/AsyncResolvable";

export interface Bundle
{
    readonly modules: Constructor<Module>[];
    readonly asyncResolvables: Constructor<AsyncResolvable<any>>[];
}

export namespace Bundle
{
    class BundleImpl implements Bundle
    {
        constructor(readonly modules: Constructor<Module>[],
                    readonly asyncResolvables: Constructor<AsyncResolvable<any>>[])
        {}
    }

    export function ofModules(...modules: Constructor<Module>[]): Bundle
    {
        return new BundleImpl(modules, []);
    }

    export function ofAsyncResolvables(...asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle
    {
        return new BundleImpl([], asyncResolvables);
    }

    export function of(modules: Constructor<Module>[], asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle
    {
        return new BundleImpl(modules, asyncResolvables);
    }
}