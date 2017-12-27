import { Constructor } from "../Constructor";

export interface Abstract<T>
{
    prototype: T;
}

export type ServiceIdentifier<T> = (string | symbol | Constructor<T> | Abstract<T>);

/**
 * @template R
 * @since 2.0.0
 */
export interface AsyncResolvable<R>
{
    /**
     * Returns the value this resolves into.
     *
     * @return {Promise<R>}
     * @since 2.0.0
     */
    resolve(): Promise<R>;

    /**
     * Returns the service identifier to be used by the IoC container. This identifier is to be used when you need
     * the IoC container to inject the result of {@link resolve()} into other modules.
     *
     * @return {ServiceIdentifier<R>} the service identifier
     * @since 2.0.0
     */
    getServiceIdentifier(): ServiceIdentifier<R>;
}