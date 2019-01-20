import { ServiceLifetime } from "./ServiceLifetime";
import { ArgumentNullException } from "dottype/Exceptions/ArgumentNullException";

/**
 * Represents a service class.
 */
export class ServiceDescriptor
{
    /** Gets or sets the service lifetime. */
    public readonly Lifetime: ServiceLifetime;

    /** Gets or sets the service object */
    public readonly ServiceType: any;

    /** Gets or sets the service implementation type */
    public readonly ImplementationType: any | null = null;

    /**
     * Initializes a new instance of Service class.
     * @param serviceType The service type.
     * @param implementationType The service implementation type.
     * @param lifetime The service lifetime.
     */
    constructor(serviceType: any, implementationType: any | null, lifetime: ServiceLifetime)
    {
        if(serviceType == null)
        {
            throw new ArgumentNullException("serviceType");
        }
        if(lifetime == null)
        {
            throw new ArgumentNullException("lifetime");
        }
        
        this.ServiceType = serviceType;
        this.Lifetime = lifetime;
        if(implementationType)
        {
            this.ImplementationType = implementationType;
        }
    }
}