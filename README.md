# Botyo API
[![npm](https://img.shields.io/npm/v/botyo-api.svg)](https://www.npmjs.com/package/botyo-api)
[![npm](https://img.shields.io/npm/dt/botyo-api.svg)](https://www.npmjs.com/package/botyo-api)
[![npm](https://img.shields.io/npm/l/botyo-api.svg)]()

The **Botyo API** module is a collection of types, interfaces and classes for developing modules for [Botyo](https://github.com/ivkos/botyo).

## Requirements
* Node.js >= 6.50

## Install
`npm install --save botyo-api`

## Example
### TypeScript
```ts
import { AbstractCommandModule, Message } from "botyo-api";

export default class HelloCommand extends AbstractCommandModule
{
    getCommand(): string
    {
        return "hello";
    }

    getDescription(): string
    {
        return "Responds to the hello";
    }

    getUsage(): string
    {
        return "";
    }

    validate(msg: Message, args: string): boolean
    {
        return true;
    }

    async execute(msg: Message, args: string): Promise<any>
    {
        return this.getRuntime().getChatApi().sendMessage("Hello world!", msg.threadID);
    }
}
```

### JavaScript
```js
const AbstractCommandModule = require('botyo-api').AbstractCommandModule;

class HelloCommand extends AbstractCommandModule
{
    getCommand() {
        return "hello";
    }

    getDescription() {
        return "Responds to the hello";
    }

    getUsage() {
        return "";
    }

    validate(msg, args) {
        return true;
    }

    async execute(msg, args) {
        return this.getRuntime().getChatApi().sendMessage("Hello world!", msg.threadID);
    }
}

module.exports = HelloCommand;
```
