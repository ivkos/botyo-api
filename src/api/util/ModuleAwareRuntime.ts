import { ApplicationConfiguration } from "../config/ApplicationConfiguration";
import { ChatApi } from "../chatapi/ChatApi";
import { ContextualizableModuleConfiguration } from "../config/ContextualizableModuleConfiguration";
import { ChatThreadUtils } from "./ChatThreadUtils";
import { Logger } from "./Logger";

/**
 * @since 2.0.0
 */
export interface ModuleAwareRuntime
{
    /**
     * Returns the ChatApi object for this instance of Botyo.
     *
     * @return {ChatApi}
     * @since 2.0.0
     */
    getChatApi(): ChatApi;

    /**
     * Returns the global ApplicationConfiguration object for this instance of Botyo.
     *
     * @return {ApplicationConfiguration}
     * @since 2.0.0
     */
    getApplicationConfiguration(): ApplicationConfiguration;

    /**
     * Returns the local configuration for this module.
     *
     * @return {ContextualizableModuleConfiguration}
     * @since 2.0.0
     */
    getConfiguration(): ContextualizableModuleConfiguration;

    /**
     * Returns the instance of Winston logger configured for the current module.
     *
     * @return {Logger}
     * @since 2.0.0
     * @see https://github.com/winstonjs/winston/blob/2.4.0/README.md
     */
    getLogger(): Logger;

    /**
     * Returns an instance of ChatThreadUtils.
     *
     * @return {ChatThreadUtils}
     * @since 2.0.0
     */
    getChatThreadUtils(): ChatThreadUtils;
}