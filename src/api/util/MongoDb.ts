import { Db } from "mongodb";
import { BotyoSymbol } from "./BotyoSymbol";

/**
 * Service identifier for the MongoDB's Db instance.
 *
 * @type {symbol}
 * @since 2.0.0
 */
export type MongoDb = Db;
export namespace MongoDb
{
    export const SYMBOL = BotyoSymbol.forName("MongoDb");
}
