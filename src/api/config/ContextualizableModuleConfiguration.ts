import { ModuleConfiguration } from "./ModuleConfiguration";
import { MessageContextSwitcher } from "./MessageContextSwitcher";
import { FacebookId, Message } from "../ChatApi";
import SymbolUtil from "../util/SymbolUtil";

/**
 * @since 2.0.0
 */
export abstract class ContextualizableModuleConfiguration extends ModuleConfiguration
{
    static readonly SYMBOL = SymbolUtil.forClass(ContextualizableModuleConfiguration);

    /**
     * Returns a configuration context switcher, specific for the supplied message context.
     *
     * @param {Message} messageContext
     * @return {MessageContextSwitcher}
     * @since 2.0.0
     */
    abstract inContext(messageContext: Message): MessageContextSwitcher;

    /**
     * Returns the module configuration in the context of the specified chat thread ID.
     *
     * @param {FacebookId} chatThreadId
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    inContextOfChatThread(chatThreadId: FacebookId): ModuleConfiguration
    {
        return this.inContext({ threadID: chatThreadId }).ofChatThread();
    }
}