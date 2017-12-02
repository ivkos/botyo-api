import { Module } from "../modules/Module";

export type ModuleConstructor<M extends Module = any> = new (...args: any[]) => M;