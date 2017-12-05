import { Configuration } from "./Configuration";
import { ModuleConstructor } from "../util/ModuleConstructor";
import SymbolUtil from "../util/SymbolUtil";

/**
 * @since 2.0.0
 */
export abstract class ModuleConfiguration extends Configuration
{
    static readonly SYMBOL = SymbolUtil.forClass(ModuleConfiguration);

    protected abstract readonly moduleConstructor: ModuleConstructor;

    protected resolveModulePropertyPath(property?: string)
    {
        return `modules` +
            `.${this.moduleConstructor.name}` +
            (property !== undefined && property !== "" ? `.${property}` : "");
    }

    /**
     * Returns true if the module is enabled
     *
     * @return {boolean} true if the module is enabled, otherwise false
     * @since 2.0.0
     */
    isEnabled(): boolean
    {
        return this.getOrElse("enable", true);
    }
}