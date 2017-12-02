/**
 * @since 2.0.0
 */
export abstract class Configuration
{
    /**
     * Returns the configuration indicated by its property
     *
     * @param {string} property
     * @return {*}
     * @throws {Error} if there is no such configuration property
     * @since 2.0.0
     */
    abstract getProperty<T = any>(property: string): T;

    /**
     * Returns the configuration indicated by its 'property' if it exists, or a default value passed as 'other'
     *
     * @param {string} property
     * @param {*} other default value to return if property is not defined in configuration
     * @return {*}
     * @since 2.0.0
     */
    getOrElse<O, T = any>(property: string, other: O): T | O
    {
        return this.hasProperty(property) ? this.getProperty(property) : other;
    }

    /**
     * Returns true if the property is defined in the configuration file, otherwise false
     *
     * @param {string} property
     * @return {boolean} true if the property is defined in the configuration file, otherwise false
     * @since 2.0.0
     */
    abstract hasProperty(property: string): boolean;

    /**
     * Assigns a value to a property.
     *
     * @param {string} property
     * @param {*} value
     * @since 2.0.0
     */
    abstract setProperty<T = any>(property: string, value: T): void;

    /**
     * Returns the raw object holding the configuration.
     *
     * @return {{}}
     * @since 2.0.0
     */
    abstract getRawObject(): {};
}