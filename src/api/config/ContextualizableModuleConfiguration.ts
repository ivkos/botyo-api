import { MessageContextSwitcher } from "./MessageContextSwitcher";
import { ModuleConfiguration } from "./ModuleConfiguration";
import { FacebookId, Message } from "../chatapi/ChatApiTypes";

export interface ContextualizableModuleConfiguration extends ModuleConfiguration
{
    /**
     * Returns a configuration context switcher, specific for the supplied message context.
     *
     * @param {Message} messageContext
     * @return {MessageContextSwitcher}
     * @since 2.0.0
     */
    inContext(messageContext: Message): MessageContextSwitcher;

    /**
     * Returns the module configuration in the context of the specified chat thread ID.
     *
     * @param {FacebookId} chatThreadId
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    inContextOfChatThread(chatThreadId: FacebookId): ModuleConfiguration;
}