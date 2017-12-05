import SymbolUtil from "./util/SymbolUtil";

// TODO Define
export type Message = any;

/**
 * Function that gets called upon receiving a message.
 *
 * @callback MessageHandler
 * @param {*} msg the message object
 */
export type MessageHandler = (err: any, msg: Message) => void;

/**
 * Ends the typing indicator.
 *
 * @callback EndTypingIndicatorFunction
 * @return {Promise} empty promise
 */
export type EndTypingIndicatorFunction = () => Promise<void>;

export type UserIdSearchResult = {
    userID: string,
    photoUrl: string,
    indexRank: number,
    name: string,
    isVerified: boolean,
    profileUrl: string,
    // category: null, // unknown
    score: number,
    type: "user" | "group" | "page" | "event" | "app"
};

export type UserInfoObject = {
    name: string,
    firstName: string,
    vanity: string,
    thumbSrc: string,
    profileUrl: string,
    gender: number,
    type: "user" | "group" | "page" | "event" | "app",
    isFriend: boolean,
    isBirthday: boolean
};

export type UserInfoResult = {
    [index: string]: UserInfoObject;
}

export type FacebookId = string | number;

export type ThreadInfo = {
    threadID: FacebookId,
    threadName: string,
    participantIDs: FacebookId[],
    unreadCount: number,
    messageCount: number,
    threadType: string,
    topEmojis: string[],
    emoji: string | null,
    color: string | null,
    nicknames: { [index: string]: string },
}

export const enum Reaction
{
    Love = ":love:",
    Haha = ":haha:",
    Wow = ":wow:",
    Sad = ":sad:",
    Angry = ":angry:",
    Like = ":like:",
    Dislike = ":dislike:"
}

export interface MessageListener
{
    /**
     * Sets a callback function to be called upon receiving a message that gets passed the received message.
     *
     * @param {MessageHandler} handler
     * @since 2.0.0
     */
    listen(handler: MessageHandler): void;
}

export abstract class ChatApi
{
    static readonly SYMBOL = SymbolUtil.forClass(ChatApi);

    /**
     * Sends a message.
     *
     * @param {FacebookId} threadId the thread ID
     * @param {string|object} message plain string message or message object
     * @return {Promise<Message>} promise with message object representing the sent message
     * @since 2.0.0
     */
    abstract async sendMessage(threadId: FacebookId, message: Message | string): Promise<Message>

    /**
     * Changes the chat's color.
     *
     * @param {FacebookId} threadId
     * @param {string} color color hex string
     * @since 2.0.0
     */
    abstract async changeThreadColor(threadId: FacebookId, color: string): Promise<void>

    /**
     * Returns info about the thread.
     *
     * @param {FacebookId} threadId
     * @return {Promise<ThreadInfo>} promise with info object
     * @since 2.0.0
     */
    abstract async getThreadInfo(threadId: FacebookId): Promise<ThreadInfo>

    /**
     * Returns chat history for the thread indicated by threadId.
     *
     * @param {number} threadId The thread ID
     * @param {number} amount The amount of messages to request
     * @param {number=} timestamp Used to describe the time of the most recent message to load. If timestamp is
     *     undefined, facebook will load the most recent messages.
     *
     * @return {Promise<Message[]>} promise with array of messages
     * @since 2.0.0
     */
    abstract async getThreadHistory(threadId: FacebookId, amount: number, timestamp?: number): Promise<Message[]>


    /**
     * Sends a typing indicator.
     *
     * @param {FacebookId} threadId
     * @return {Promise<EndTypingIndicatorFunction>} promise with a function that ends the typing indicator when called
     * @since 2.0.0
     */
    abstract async sendTypingIndicator(threadId: FacebookId): Promise<EndTypingIndicatorFunction>

    /**
     * Marks the thread as read.
     *
     * @param {FacebookId} threadId
     * @since 2.0.0
     */
    abstract async markAsRead(threadId: FacebookId): Promise<void>

    /**
     * Returns info about the user(s) by their id(s).
     *
     * @param {FacebookId|FacebookId[]} ids
     * @return {Promise<UserInfoResult>} promise with info object
     * @since 2.0.0
     */
    abstract async getUserInfo(ids: FacebookId | FacebookId[]): Promise<UserInfoResult>;

    /**
     * Given the full name or vanity name of a Facebook user, event, page, group or app, the call will perform a
     * Facebook Graph search and return all corresponding IDs (order determined by Facebook).
     *
     * @param {string} name
     * @return {Promise<UserIdSearchResult[]>}
     * @since 2.0.0
     */
    abstract async getUserId(name: string): Promise<UserIdSearchResult[]>;

    /**
     * Returns the user ID of the user the bot is logged in as.
     *
     * @return {FacebookId} the user ID
     * @since 2.0.0
     */
    abstract getCurrentUserId(): FacebookId;

    /**
     * Handles the message request for the specified thread ID.
     *
     * @param {FacebookId} threadId
     * @param {boolean} shouldAccept whether to accept the request
     * @since 2.0.0
     */
    abstract async handleMessageRequest(threadId: FacebookId, shouldAccept: boolean): Promise<void>;

    /**
     * Sets a reaction to a message.
     *
     * @param {string} messageId the message ID
     * @param {Reaction|string} reaction the reaction
     * @since 2.0.0
     */
    abstract async setMessageReaction(messageId: string, reaction: Reaction | string): Promise<void>;
}