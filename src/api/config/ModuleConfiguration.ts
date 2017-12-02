import { Configuration } from "./Configuration";
import { ModuleConstructor } from "../util/ModuleConstructor";

/**
 * @since 2.0.0
 */
export abstract class ModuleConfiguration extends Configuration
{
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