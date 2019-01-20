import { IServiceCollection } from "../Interfaces/IServiceCollection"

declare module "../Interfaces/IServiceCollection"
{
    export interface IServiceCollection 
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
    }
}