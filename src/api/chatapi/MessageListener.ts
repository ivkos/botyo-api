import { Message } from "./ChatApiTypes";

/**
 * Function that gets called upon receiving a message.
 *
 * @callback MessageHandler
 * @param {*} msg the message object
 */
export type MessageHandler = (err: any, msg: Message) => void;

/**
 * Function, returned by listen(), that when invoked makes the API stop listening for incoming messages and events
 *
 * @function
 */
export type StopListeningFunction = () => void;

export interface MessageListener
{
    /**
     * Sets a callback function to be called upon receiving a message that gets passed the received message.
     *
     * @param {MessageHandler} handler
     * @return {StopListeningFunction} function that when invoked makes the API stop listening for incoming messages and
     * events
     * @since 2.0.0
     */
    listen(handler: MessageHandler): StopListeningFunction;
}