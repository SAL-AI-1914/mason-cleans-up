import { 
  Sofa, 
  Monitor, 
  Trash2, 
  Truck, 
  Recycle, 
  DollarSign 
} from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Furniture & Appliances",
    description: "Sofas, chairs, refrigerators, washers, and more"
  },
  {
    icon: Monitor,
    title: "Electronics & TVs",
    description: "Safe disposal of old electronics and entertainment systems"
  },
  {
    icon: Trash2,
    title: "Trash & Debris",
    description: "Construction waste, yard debris, and general junk"
  },
  {
    icon: Truck,
    title: "Pick-up & Delivery",
    description: "Convenient scheduling that works with your timeline"
  },
  {
    icon: Recycle,
    title: "Recycling & Donations",
    description: "Eco-friendly disposal and donation to local charities"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees - final price confirmed when I see the job"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-20 bg-white-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-700 text-graphite mb-4">
            What I Remove
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From single items to complete cleanouts, I handle it all with care and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white-base rounded-[var(--radius)] border border-steel/30 hover:border-mjr-blue/50 transition-mjr hover:shadow-mjr-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-tint-bg rounded-lg flex items-center justify-center group-hover:bg-mjr-blue group-hover:text-white transition-mjr">
                    <IconComponent className="h-6 w-6 text-mjr-blue group-hover:text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-heading font-600 text-graphite group-hover:text-mjr-blue transition-mjr">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;