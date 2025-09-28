import mjrLogo from "@/assets/mjr-logo.png";

const Footer = () => {
  return (
    <footer className="bg-graphite text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div>
            <img 
              src={mjrLogo} 
              alt="Mason's Junk Removal"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-4">
              Fast, friendly junk removal with transparent pricing across San Diego County.
            </p>
            <div className="space-y-2">
              <p className="text-white font-semibold">
                Call or Text: 760-331-3925
              </p>
              <p className="text-white/60 text-sm">
                Best reached by text • Available anytime
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-heading font-600 mb-4">Service Areas</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Oceanside</p>
              <p>Carlsbad</p>
              <p>Vista</p>
              <p>San Marcos</p>
              <p>Escondido</p>
              <p>All of San Diego County</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-600 mb-4">What We Remove</h3>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Furniture & Appliances</p>
              <p>Electronics & TVs</p>
              <p>Construction Debris</p>
              <p>Yard Waste</p>
              <p>General Junk</p>
              <p className="text-red-400">No concrete or dirt</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Mason's Junk Removal. All rights reserved. 
            • Locally owned and operated in San Diego County
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;