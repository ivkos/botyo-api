import {
    EndTypingIndicatorFunction,
    FacebookId,
    Message,
    ThreadInfo,
    UserIdSearchResult,
    UserInfoResult
} from "./ChatApiTypes";
import { Reaction } from "./Reaction";
import { BotyoSymbol } from "../util/BotyoSymbol";

export namespace ChatApi
{
    export const SYMBOL = BotyoSymbol.forName("ChatApi");
}

export interface ChatApi
{
    /**
     * Sends a message.
     *
     * @param {FacebookId} threadId the thread ID
     * @param {string|object} message plain string message or message object
     * @return {Promise<Message>} promise with message object representing the sent message
     * @since 2.0.0
     */
    sendMessage(threadId: FacebookId, message: Message | string): Promise<Message>;

    /**
     * Changes the chat's color.
     *
     * @param {FacebookId} threadId
     * @param {string} color color hex string
     * @since 2.0.0
     */
    changeThreadColor(threadId: FacebookId, color: string): Promise<void>;

    /**
     * Returns info about the thread.
     *
     * @param {FacebookId} threadId
     * @return {Promise<ThreadInfo>} promise with info object
     * @since 2.0.0
     */
    getThreadInfo(threadId: FacebookId): Promise<ThreadInfo>;

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
    getThreadHistory(threadId: FacebookId, amount: number, timestamp?: number): Promise<Message[]>;

    /**
     * Sends a typing indicator.
     *
     * @param {FacebookId} threadId
     * @return {Promise<EndTypingIndicatorFunction>} promise with a function that ends the typing indicator when called
     * @since 2.0.0
     */
    sendTypingIndicator(threadId: FacebookId): Promise<EndTypingIndicatorFunction>;

    /**
     * Marks the thread as read.
     *
     * @param {FacebookId} threadId
     * @since 2.0.0
     */
    markAsRead(threadId: FacebookId): Promise<void>;

    /**
     * Returns info about the user(s) by their id(s).
     *
     * @param {FacebookId|FacebookId[]} ids
     * @return {Promise<UserInfoResult>} promise with info object
     * @since 2.0.0
     */
    getUserInfo(ids: FacebookId | FacebookId[]): Promise<UserInfoResult>;

    /**
     * Given the full name or vanity name of a Facebook user, event, page, group or app, the call will perform a
     * Facebook Graph search and return all corresponding IDs (order determined by Facebook).
     *
     * @param {string} name
     * @return {Promise<UserIdSearchResult[]>}
     * @since 2.0.0
     */
    getUserId(name: string): Promise<UserIdSearchResult[]>;

    /**
     * Returns the user ID of the user the bot is logged in as.
     *
     * @return {FacebookId} the user ID
     * @since 2.0.0
     */
    getCurrentUserId(): FacebookId;

    /**
     * Handles the message request for the specified thread ID.
     *
     * @param {FacebookId} threadId
     * @param {boolean} shouldAccept whether to accept the request
     * @since 2.0.0
     */
    handleMessageRequest(threadId: FacebookId, shouldAccept: boolean): Promise<void>;

    /**
     * Sets a reaction to a message.
     *
     * @param {string} messageId the message ID
     * @param {Reaction|string} reaction the reaction
     * @since 2.0.0
     */
    setMessageReaction(messageId: string, reaction: Reaction | string): Promise<void>;

    /**
     * Resolves the URL to the full-size photo, given its ID. This function is useful for retrieving the full-size
     * photo URL of image attachments in messages, returned by getThreadHistory.
     *
     * @param {FacebookId} photoId
     * @return {Promise<string>}
     * @since 2.0.0
     */
    resolvePhotoUrl(photoId: FacebookId): Promise<string>;
}