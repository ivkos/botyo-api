import { Module } from "./Module";

/**
 * Defines a task that is executed periodically or upon the start of the bot.
 *
 * @since 2.0.0
 */
export interface ScheduledTaskModule extends Module
{
    /**
     * The method that gets executed periodically or on start, depending on the module's configuration.
     *
     * @return {Promise<void>} A promise that is used to determine if and when the task completes.
     * @abstract
     * @since 2.0.0
     */
    execute(): Promise<void>;

    /**
     * Returns the schedule that specifies when this commands gets executed. This must be a cron-like string or a
     * number in milliseconds. If this returns 0 or undefined or null, this task will never be scheduled to run.
     *
     * @return {string | number}
     * @since 2.0.0
     */
    getSchedule(): string | number;

    /**
     * Returns true if the scheduled task should run when the bot starts, or false otherwise.
     *
     * @return {boolean}
     * @since 2.0.0
     */
    shouldExecuteOnStart(): boolean;
}