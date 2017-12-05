import { Configuration } from "./Configuration";
import { ContextualizableModuleConfiguration } from "./ContextualizableModuleConfiguration";
import { ModuleConstructor } from "../util/ModuleConstructor";
import SymbolUtil from "../util/SymbolUtil";

/**
 * @since 2.0.0
 */
export abstract class ApplicationConfiguration extends Configuration
{
    static readonly SYMBOL = SymbolUtil.forClass(ApplicationConfiguration);

    /**
     * Returns the configuration for the specified type of module
     *
     * @param {ModuleConstructor} module
     * @return {ContextualizableModuleConfiguration}
     * @since 2.0.0
     */
    abstract forModule(module: ModuleConstructor): ContextualizableModuleConfiguration;
}