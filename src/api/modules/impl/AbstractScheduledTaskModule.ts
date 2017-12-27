import { AbstractModule } from "./AbstractModule";
import { ScheduledTaskModule } from "../ScheduledTaskModule";
import { Constants } from "../../util/Constants";

export abstract class AbstractScheduledTaskModule extends AbstractModule implements ScheduledTaskModule
{
    abstract async execute(): Promise<void>;

    getSchedule(): string | number
    {
        return this.getRuntime()
            .getConfiguration()
            .getProperty(Constants.CONFIG_KEY_SCHEDULE);
    }

    shouldExecuteOnStart(): boolean
    {
        return this.getRuntime()
            .getConfiguration()
            .getOrElse(Constants.CONFIG_KEY_EXECUTE_ON_START, false);
    }
}