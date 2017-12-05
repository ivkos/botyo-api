import { ModuleAwareRuntime } from "../util/ModuleAwareRuntime";
import SymbolUtil from "../util/SymbolUtil";

/**
 * @since 2.0.0
 */
export class Module
{
    static readonly SYMBOL = SymbolUtil.forClass(Module);

    private readonly runtime: ModuleAwareRuntime;

    /**
     * Returns a runtime object corresponding to the current module.
     *
     * @return {ModuleAwareRuntime}
     * @since 2.0.0
     */
    getRuntime(): ModuleAwareRuntime
    {
        return this.runtime;
    };

    /**
     * Gets called when the bot is shutting down.
     *
     * @since 2.0.0
     */
    async onShutdown(): Promise<void>
    {
        return Promise.resolve();
    };
}