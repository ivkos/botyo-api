import { ModuleConfiguration } from "./ModuleConfiguration";

/**
 * @since 2.0.0
 */
export abstract class MessageContextSwitcher
{
    /**
     * Returns module configuration in the context of the chat thread the message was received from.
     *
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    abstract ofChatThread(): ModuleConfiguration;

    /**
     * Returns module configuration in the context of the participant that sent the message.
     *
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    abstract ofParticipant(): ModuleConfiguration;
}