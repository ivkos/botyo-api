import { FacebookId, Message } from "../ChatApi";
import SymbolUtil from "./SymbolUtil";

/**
 * @since 2.0.0
 */
export abstract class ChatThreadUtils
{
    static readonly SYMBOL = SymbolUtil.forClass(ChatThreadUtils);

    /**
     * Returns the chat-thread-specific nickname of a participant, given a threadId and a participantId.
     *
     * @param {FacebookId} threadId
     * @param {FacebookId} participantId
     * @return {string} the nickname, or undefined if it's not set
     * @since 2.0.0
     */
    abstract getNickname(threadId: FacebookId, participantId: FacebookId): string | undefined;

    /**
     * Returns the chat-thread-specific nickname of the participant that sent the supplied message.
     *
     * @param {Message} msg
     * @return {string | undefined} the nickname, or undefined if it's not set
     * @since 2.0.0
     */
    getNicknameByMessage(msg: Message): string | undefined
    {
        return this.getNickname(msg.threadID, msg.senderID);
    }

    /**
     * Returns the user's full name. The user must be a part of at least one chat thread Botyo listens to.
     *
     * @param {FacebookId} userId
     * @return {string}
     * @since 2.0.0
     */
    abstract getName(userId: FacebookId): string;

    /**
     * Return the full name of the user that sent the supplied message. The user must be a part of at least one chat
     * thread Botyo listens to.
     *
     * @param {Message} msg
     * @return {string}
     * @since 2.0.0
     */
    getNameByMessage(msg: Message): string
    {
        return this.getName(msg.senderID);
    }

    /**
     * Returns the user's first name.
     *
     * @param {FacebookId} userId
     * @return {string}
     * @since 2.0.0
     */
    abstract getFirstName(userId: FacebookId): string;

    /**
     * Returns the first name of the user that sent the supplied message. The user must be a part of at least one chat
     * thread Botyo listens to.
     *
     * @param {Message} msg
     * @return {string}
     * @since 2.0.0
     */
    getFirstNameByMessage(msg: Message): string
    {
        return this.getFirstName(msg.senderID);
    }

    /**
     * Returns the ID of the user that is the addressee of an action. For example, in the command '#quote Jeff' the
     * addressee would be 'Jeff'.
     *
     * This works by comparing the similarity of the supplied addressee string to aliases, nicknames, first names, full
     * names, and vanity names of the participants in the specified thread, in that order.
     *
     * @param {FacebookId} threadId
     * @param {string} addressee
     * @return {FacebookId|undefined} the ID of the user, or undefined if there are no matches over a certain
     *                                similarity threshold
     * @since 2.0.0
     */
    abstract getParticipantIdByAddressee(threadId: FacebookId, addressee: string): FacebookId | undefined;

    /**
     * Executes on the supplied consumer on each participant in each chat thread.
     *
     * @param {ChatThreadParticipantConsumer} consumer
     * @return {void | Promise<void>}
     * @since 2.0.0
     */
    abstract forEachParticipantInEachChatThread(consumer: ChatThreadParticipantConsumer): void | Promise<void>;
}

export const CONFIG_KEY_CHAT_THREADS = "chat-threads";
export const CONFIG_KEY_PARTICIPANTS = "participants";

export type ConfigurationParticipantObject = {
    [index: string]: any,
    name: string,
    firstName: string,
    id: FacebookId,
    vanity?: string,
    nickname?: string,
    isAdmin?: boolean,
    aliases?: string[],
    overrides?: {}
};

export type ConfigurationParticipantsObject = { [index: string]: ConfigurationParticipantObject };

export type ConfigurationChatThreadObject = {
    name?: string,
    participants: ConfigurationParticipantsObject,
    overrides?: {},
}

export type ConfigurationChatThreadsObject = { [index: string]: ConfigurationChatThreadObject }

export type ChatThreadParticipantConsumer = (chatThreadId: FacebookId,
                                             participantVanityOrId: FacebookId,
                                             participantObj: ConfigurationParticipantObject,
                                             participantsObj: ConfigurationParticipantsObject)
    => boolean | void | Promise<boolean | void>;
