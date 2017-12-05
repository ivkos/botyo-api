import { Module } from "./Module";
import { Message } from "../ChatApi";
import SymbolUtil from "../util/SymbolUtil";

/**
 * Defines a module whose {@link filter()} method is used to manipulate or filter out messages as they arrive.
 *
 * @since 2.0.0
 */
export abstract class FilterModule extends Module
{
    static readonly SYMBOL = SymbolUtil.forClass(FilterModule);

    /**
     * Gets passed a message, optionally executes actions upon it, and returns a message.
     * The filter chain can be broken by returning an empty fulfilled promise.
     *
     * @param {Message} msg The received message object.
     * @return {Promise<Message|void>} The resulting message or an empty promise.
     * @abstract
     * @since 2.0.0
     */
    abstract async filter(msg: Message): Promise<Message | void>;
}