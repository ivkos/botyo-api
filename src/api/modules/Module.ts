import { ModuleAwareRuntime } from "../util/ModuleAwareRuntime";

/**
 * @since 2.0.0
 */
export interface Module
{
    /**
     * Returns a runtime object corresponding to the current module.
     *
     * @return {ModuleAwareRuntime}
     * @since 2.0.0
     */
    getRuntime(): ModuleAwareRuntime;

    /**
     * Gets called when the bot starts listening.
     *
     * @since 2.0.0
     */
    onListen(): Promise<void>;

    /**
     * Gets called when the bot is shutting down.
     *
     * @since 2.0.0
     */
    onShutdown(): Promise<void>;
}