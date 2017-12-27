import { ModuleConfiguration } from "./ModuleConfiguration";

/**
 * @since 2.0.0
 */
export interface MessageContextSwitcher
{
    /**
     * Returns module configuration in the context of the chat thread the message was received from.
     *
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    ofChatThread(): ModuleConfiguration;

    /**
     * Returns module configuration in the context of the participant that sent the message.
     *
     * @return {ModuleConfiguration}
     * @since 2.0.0
     */
    ofParticipant(): ModuleConfiguration;
}