import { ServiceDescriptor } from "../ServiceDescriptor";
import { Collection } from "dottype/Collections/Collection<T>";

/** Represents a contract for Services Collection. */
export interface IServiceCollection
{
    /** Gets or sets the ServiceCollection Items. */
    Items: Collection<ServiceDescriptor>;
}