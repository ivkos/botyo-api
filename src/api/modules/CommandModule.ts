import { Module } from "./Module";
import { Message } from "../ChatApi";
import SymbolUtil from "../util/SymbolUtil";

/**
 * Defines a command that users can send to the bot. Commands must begin with a prefix that can be configured
 * globally, or on a per-chat-thread or per-user basis.
 *
 * Unless configured, the default prefix is '#'. An example command would be '#help'.
 *
 * @since 2.0.0
 */
export abstract class CommandModule extends Module
{
    static readonly SYMBOL = SymbolUtil.forClass(CommandModule);

    /**
     * Returns the command this module acts on. This string should not include the command prefix.
     *
     * @return {string} the command
     * @abstract
     * @since 2.0.0
     */
    abstract getCommand(): string

    /**
     * Returns the description of the command.
     *
     * @return {string} the description
     * @abstract
     * @since 2.0.0
     */
    abstract getDescription(): string

    /**
     * Returns a user-friendly description of the arguments this command accepts.
     * This is used in descriptions and error messages.
     *
     * @return {string}
     * @abstract
     * @since 2.0.0
     */
    abstract getUsage(): string

    /**
     * Validates the message containing the command. If this returns true, the execute() method will be invoked.
     * If this returns false, an error message with the correct usage of the command will be sent to the chat.
     *
     * @param {object} msg The received message object.
     * @param {string} args String containing everything after the command.
     *                      For example, if the message is "#quote me", this parameter will be "me".
     * @return {boolean} true if the command is valid and should be executed, false otherwise.
     * @abstract
     * @since 2.0.0
     */
    abstract validate(msg: Message, args: string): boolean

    /**
     * The method that gets executed when the received message is a valid command.
     *
     * @param {object} msg The received message object.
     * @param {string} args String containing everything after the command.
     *                      For example, if the message is "#quote me", this parameter will be "me".
     * @return {Promise<*>}
     * @abstract
     * @since 2.0.0
     */
    abstract async execute(msg: Message, args: string): Promise<any>
}