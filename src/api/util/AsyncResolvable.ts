export interface AsyncResolvableNewable<T>
{
    new (...args: any[]): T;
}

export interface AsyncResolvableAbstract<T>
{
    prototype: T;
}

export type AsyncResolvableServiceIdentifier<T> = (
    string
    | symbol
    | AsyncResolvableNewable<T>
    | AsyncResolvableAbstract<T>);

/**
 * @since 2.0.0
 */
export abstract class AsyncResolvable<R>
{
    /**
     * Returns the value this resolves into.
     *
     * @return {Promise<R>}
     * @since 2.0.0
     */
    abstract async resolve(): Promise<R>;

    /**
     * Returns the service identifier to be used by the IoC container. This identifier is to be used when you need
     * the IoC container to inject the result of {@link resolve()} into other modules.
     *
     * @return {AsyncResolvableServiceIdentifier<R>} the service identifier
     * @since 2.0.0
     */
    abstract getServiceIdentifier(): AsyncResolvableServiceIdentifier<R>;
}