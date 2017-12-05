import { Module } from "./Module";
import { Message } from "../ChatApi";
import { CommandModule } from "./CommandModule";
import SymbolUtil from "../util/SymbolUtil";

/**
 * Handles failures caused by a command's execution.
 *
 * This is useful for example for sending  a user-friendly message to the chat to let know the user that their
 * command could not be executed, or sending the details of the failure to the user that manages the bot.
 *
 * @since 2.0.0
 */
export abstract class CommandErrorHandlerModule extends Module
{
    static readonly SYMBOL = SymbolUtil.forClass(CommandErrorHandlerModule);

    /**
     * This method gets executed when a command invoked by a participant fails.
     *
     * @param {Error} err the error
     * @param {Message} message the message the user sent that caused the error
     * @param {CommandModule} commandModule the command module whose execution failed
     * @abstract
     * @since 2.0.0
     */
    abstract async handle(err: Error, message: Message, commandModule: CommandModule): Promise<void>;
}