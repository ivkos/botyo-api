import { Constructor } from "../Constructor";
import { Module } from "../../modules/Module";
import { AsyncResolvable } from "../async/AsyncResolvable";

export interface Bundle
{
    readonly modules: Constructor<Module>[];
    readonly asyncResolvables: Constructor<AsyncResolvable<any>>[];
}