import { AbstractModule } from "./AbstractModule";
import { FilterModule } from "../FilterModule";
import { Message } from "../../chatapi/ChatApiTypes";

export abstract class AbstractFilterModule extends AbstractModule implements FilterModule
{
    abstract async filter(msg: Message): Promise<Message | void>;
}