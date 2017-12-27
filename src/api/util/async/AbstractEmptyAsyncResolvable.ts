import { AsyncResolvable, ServiceIdentifier } from "./AsyncResolvable";
import { BotyoSymbol } from "../BotyoSymbol";

/**
 * @since 2.0.0
 */
export abstract class AbstractEmptyAsyncResolvable implements AsyncResolvable<void>
{
    static readonly EMPTY_IDENTIFIER = BotyoSymbol.forName("AbstractEmptyAsyncResolvable" + "ServiceIdentifier");

    abstract async resolve(): Promise<void>;

    getServiceIdentifier(): ServiceIdentifier<void>
    {
        return AbstractEmptyAsyncResolvable.EMPTY_IDENTIFIER;
    }
}