import { AsyncResolvable, AsyncResolvableServiceIdentifier } from "./AsyncResolvable";

/**
 * @since 2.0.0
 */
export abstract class EmptyAsyncResolvable extends AsyncResolvable<void>
{
    static readonly EMPTY_IDENTIFIER = Symbol("EMPTY_IDENTIFIER");

    getServiceIdentifier(): AsyncResolvableServiceIdentifier<void>
    {
        return EmptyAsyncResolvable.EMPTY_IDENTIFIER;
    }
}