import { LoggerInstance } from "winston";
import { BotyoSymbol } from "./BotyoSymbol";

/**
 * Service identifier for the logger.
 *
 * @type {symbol}
 * @since 2.0.0
 */
export type Logger = LoggerInstance;
export namespace Logger
{
    export const SYMBOL = BotyoSymbol.forName("Logger");
}
