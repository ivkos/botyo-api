import { AbstractModule } from "./AbstractModule";
import { CommandModule } from "../CommandModule";
import { Message } from "../../chatapi/ChatApiTypes";

export abstract class AbstractCommandModule extends AbstractModule implements CommandModule
{
    abstract getCommand(): string | string[];

    abstract getDescription(): string;

    abstract getUsage(): string;

    abstract validate(msg: Message, args: string): boolean;

    abstract async execute(msg: Message, args: string): Promise<any>;
}