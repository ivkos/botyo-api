import { ModuleConfiguration } from "./ModuleConfiguration";
import { MessageContextSwitcher } from "./MessageContextSwitcher";
import { Message } from "../ChatApi";
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
}