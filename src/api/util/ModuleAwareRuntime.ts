import { ApplicationConfiguration } from "../config/ApplicationConfiguration";
import { LoggerInstance } from "winston";
import { ChatApi } from "../ChatApi";
import { ContextualizableModuleConfiguration } from "../config/ContextualizableModuleConfiguration";
import { ModuleConstructor } from "./ModuleConstructor";
import { ChatThreadUtils } from "./ChatThreadUtils";
import SymbolUtil from "./SymbolUtil";

/**
 * @since 2.0.0
 */
export class ModuleAwareRuntime
{
    static readonly SYMBOL = SymbolUtil.forClass(ModuleAwareRuntime);

    constructor(private readonly moduleConstructor: ModuleConstructor,
                private readonly chatApi: ChatApi,
                private readonly applicationConfiguration: ApplicationConfiguration,
                private readonly logger: LoggerInstance,
                private readonly chatThreadUtils: ChatThreadUtils)
    {}

    /**
     * Returns the ChatApi object for this instance of Botyo.
     *
     * @return {ChatApi}
     * @since 2.0.0
     */
    getChatApi(): ChatApi
    {
        return this.chatApi;
    }

    /**
     * Returns the global ApplicationConfiguration object for this instance of Botyo.
     *
     * @return {ApplicationConfiguration}
     * @since 2.0.0
     */
    getApplicationConfiguration(): ApplicationConfiguration
    {
        return this.applicationConfiguration;
    };

    /**
     * Returns the local configuration for this module.
     *
     * @return {ContextualizableModuleConfiguration}
     * @since 2.0.0
     */
    getConfiguration(): ContextualizableModuleConfiguration
    {
        return this.getApplicationConfiguration().forModule(this.moduleConstructor);
    };

    /**
     * Returns the instance of Winston logger configured for the current module.
     *
     * @return {LoggerInstance}
     * @since 2.0.0
     * @see https://github.com/winstonjs/winston/blob/2.4.0/README.md
     */
    getLogger(): LoggerInstance
    {
        return this.logger;
    };

    /**
     * Returns an instance of ChatThreadUtils.
     *
     * @return {ChatThreadUtils}
     * @since 2.0.0
     */
    getChatThreadUtils(): ChatThreadUtils
    {
        return this.chatThreadUtils;
    }
}