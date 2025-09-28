import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import mjrLogo from "@/assets/mjr-logo.png";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:7603313925";
  };

  const handleTextClick = () => {
    window.location.href = "sms:7603313925";
  };

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-subtle overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Orbit Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="animate-orbit">
          <div className="w-96 h-96 rounded-full border-4 border-sky-tint">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-mjr-blue rounded-full"></div>
              <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 w-3 h-3 bg-mjr-blue-light rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-2 h-2 bg-sky-tint rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-800 text-graphite mb-6 leading-tight">
            Fast, friendly junk removal with{" "}
            <span className="text-mjr-blue">free estimates</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto leading-relaxed">
            Text me a photo for a free estimate. I'll confirm the final price when I see the job. No job too big or too small.
          </p>

          {/* Phone Number Display */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-white-base rounded-[var(--radius-pill)] px-6 py-4 shadow-mjr-md border border-steel/20">
              <Phone className="h-6 w-6 text-mjr-blue" />
              <span className="text-2xl md:text-3xl font-heading font-700 text-graphite tracking-wide">
                760-331-3925
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={handleCallClick}
              className="w-full sm:w-auto flex items-center gap-3"
              aria-label="Call Mason at 760-331-3925"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
            <Button
              variant="cta"
              size="xl"
              onClick={handleTextClick}
              className="w-full sm:w-auto flex items-center gap-3"
              aria-label="Text Mason at 760-331-3925"
            >
              <MessageCircle className="h-5 w-5" />
              Text for Quote
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mjr-blue rounded-full"></div>
              <span>Locally owned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mjr-blue rounded-full"></div>
              <span>Same-day options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mjr-blue rounded-full"></div>
              <span>Transparent pricing</span>
            </div>
          </div>

          {/* Logo Watermark */}
          <div className="absolute right-4 bottom-4 opacity-10 hidden lg:block">
            <img 
              src={mjrLogo} 
              alt=""
              className="h-32 w-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;