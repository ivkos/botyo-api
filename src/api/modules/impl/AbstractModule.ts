import { Module } from "../Module";
import { ModuleAwareRuntime } from "../../util/ModuleAwareRuntime";

export class AbstractModule implements Module
{
    private readonly runtime: ModuleAwareRuntime;

    getRuntime(): ModuleAwareRuntime
    {
        return this.runtime;
    }

    async onListen(): Promise<any>
    {
        return Promise.resolve();
    }

    async onShutdown(): Promise<any>
    {
        return Promise.resolve();
    }
}