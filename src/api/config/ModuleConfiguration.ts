import { Configuration } from "./Configuration";

/**
 * @since 2.0.0
 */
export interface ModuleConfiguration extends Configuration
{
    /**
     * Returns true if the module is enabled
     *
     * @return {boolean} true if the module is enabled, otherwise false
     * @since 2.0.0
     */
    isEnabled(): boolean;
}