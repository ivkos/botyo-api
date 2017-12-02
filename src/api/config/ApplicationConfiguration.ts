import { Configuration } from "./Configuration";
import { ContextualizableModuleConfiguration } from "./ContextualizableModuleConfiguration";
import { ModuleConstructor } from "../util/ModuleConstructor";

/**
 * @since 2.0.0
 */
export abstract class ApplicationConfiguration extends Configuration
{
    /**
     * Returns the configuration for the specified type of module
     *
     * @param {ModuleConstructor} module
     * @return {ContextualizableModuleConfiguration}
     * @since 2.0.0
     */
    abstract forModule(module: ModuleConstructor): ContextualizableModuleConfiguration;
}