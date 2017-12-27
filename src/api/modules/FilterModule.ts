import { Module } from "./Module";
import { Message } from "../chatapi/ChatApiTypes";

/**
 * Defines a module whose {@link filter()} method is used to manipulate or filter out messages as they arrive.
 *
 * @since 2.0.0
 */
export interface FilterModule extends Module
{
    /**
     * Gets passed a message, optionally executes actions upon it, and returns a message.
     * The filter chain can be broken by returning an empty fulfilled promise.
     *
     * @param {Message} msg The received message object.
     * @return {Promise<Message|void>} The resulting message or an empty promise.
     * @abstract
     * @since 2.0.0
     */
    filter(msg: Message): Promise<Message | void>;
}