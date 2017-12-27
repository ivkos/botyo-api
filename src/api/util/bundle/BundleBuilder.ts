import { Bundle } from "./Bundle";
import { AsyncResolvable } from "../async/AsyncResolvable";
import { Constructor } from "../Constructor";
import { Module } from "../../modules/Module";

class BundleImpl implements Bundle
{
    constructor(readonly modules: Constructor<Module>[],
                readonly asyncResolvables: Constructor<AsyncResolvable<any>>[])
    {}
}

export class BundleBuilder
{
    static buildWithModules(...modules: Constructor<Module>[]): Bundle
    {
        return new BundleImpl(modules, []);
    }

    static buildWithAsyncResolvables(...asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle
    {
        return new BundleImpl([], asyncResolvables);
    }

    static buildWith(modules: Constructor<Module>[], asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle
    {
        return new BundleImpl(modules, asyncResolvables);
    }
}