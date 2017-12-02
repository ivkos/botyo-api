import { ModuleConfiguration } from "./ModuleConfiguration";
import { MessageContextSwitcher } from "./MessageContextSwitcher";
import { Message } from "../ChatApi";

/**
 * @since 2.0.0
 */
export abstract class ContextualizableModuleConfiguration extends ModuleConfiguration
{
    /**
     * Returns a configuration context switcher, specific for the supplied message context.
     *
     * @param {Message} messageContext
     * @return {MessageContextSwitcher}
     * @since 2.0.0
     */
    abstract inContext(messageContext: Message): MessageContextSwitcher;
}