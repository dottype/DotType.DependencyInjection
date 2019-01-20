import { ServiceCollection } from "../ServiceCollection"
import { IServiceCollection } from "../Interfaces/IServiceCollection";
import { ServiceDescriptor } from "../ServiceDescriptor";
import { ServiceLifetime } from "../ServiceLifetime";

declare module "../ServiceCollection"
{
    export interface ServiceCollection
    {
        AddSingleton(serviceType: any): IServiceCollection;

        AddSingleton(serviceType: any, implementationType: any): IServiceCollection;

        /**
         * Adds a singleton service of the type specified in serviceType with an
         * implementation of the type specified in implementationType to the
         * specified IServiceCollection.
         * @param serviceType The type of the service to register.
         * @param implementationType The implementation type of the service.
         */
        AddSingleton(serviceType: any, implementationType?: any): IServiceCollection;

        AddScoped(serviceType: any): IServiceCollection;

        AddScoped(serviceType: any, implementationType: any): IServiceCollection

        /**
         * Adds a scoped service of the type specified in serviceType with an
         * implementation of the type specified in implementationType to the
         * specified IServiceCollection.
         * @param serviceType The type of the service to register.
         * @param implementationType The implementation type of the service.
         */
        AddScoped(serviceType: any, implementationType?: any): IServiceCollection

        AddTransient(serviceType: any): IServiceCollection;

        AddTransient(serviceType: any, implementationType: any): IServiceCollection

        /**
         * Adds a transient service of the type specified in serviceType with an
         * implementation of the type specified in implementationType to the
         * specified IServiceCollection.
         * @param serviceType The type of the service to register.
         * @param implementationType The implementation type of the service.
         */
        AddTransient(serviceType: any, implementationType?: any): IServiceCollection
    }
}

ServiceCollection.prototype.AddSingleton = function(serviceType: any, implementationType?: any)
{
    return AddService(this, serviceType, implementationType, ServiceLifetime.Singleton);
}

ServiceCollection.prototype.AddScoped = function(serviceType: any, implementationType?: any)
{
    return AddService(this, serviceType, implementationType, ServiceLifetime.Scoped);
}

ServiceCollection.prototype.AddTransient = function(serviceType: any, implementationType?: any)
{
    return AddService(this, serviceType, implementationType, ServiceLifetime.Transient);
}

function AddService(serviceCollection: ServiceCollection, serviceType: any, implementationType: any, lifetime: ServiceLifetime): IServiceCollection
{
    var service = implementationType ? new ServiceDescriptor(serviceType, implementationType, lifetime) : new ServiceDescriptor(serviceType, null, lifetime)
    serviceCollection.Items.Add(service);
    return serviceCollection;
}