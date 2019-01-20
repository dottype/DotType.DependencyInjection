import { ServiceDescriptor } from "./ServiceDescriptor";
import { Collection } from "dottype/Collections/Collection<T>";
import { IServiceCollection } from "./Interfaces/IServiceCollection";

/** Represents a collection of Services. */
export class ServiceCollection implements IServiceCollection
{
    public Items: Collection<ServiceDescriptor> = new Collection<ServiceDescriptor>();
}