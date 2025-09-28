import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhyChooseMason = () => {
  const handleTextClick = () => {
    window.location.href = "sms:7603313925";
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Why Choose Mason */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-graphite mb-6">
              Why Choose Mason?
            </h2>
            <div className="space-y-4">
              {[
                "Locally owned and operated in San Diego County",
                "Best reached by text for fastest response",
                "One-man company means personalized service",
                "County-wide coverage from Oceanside to Escondido",
                "No job too big or too small",
                "Same-day or next-day service in most cases"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mjr-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                variant="cta"
                size="lg"
                onClick={handleTextClick}
                className="flex items-center gap-3"
                aria-label="Text Mason at 760-331-3925"
              >
                <MessageCircle className="h-5 w-5" />
                Text me anytime
              </Button>
            </div>
          </div>

          {/* Truck & Capacity */}
          <div className="bg-white-base rounded-[var(--radius)] p-8 shadow-mjr-md border border-steel/20">
            <h3 className="text-2xl font-heading font-600 text-graphite mb-6">
              Truck & Capacity
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-600 text-mjr-blue mb-2">
                  2010 Ford F-150
                </h4>
                <p className="text-slate">
                  8-foot bed with high capacity for most residential and small commercial jobs
                </p>
              </div>
              <div>
                <h4 className="font-heading font-600 text-mjr-blue mb-2">
                  Availability
                </h4>
                <p className="text-slate">
                  Same-day or next-day service in most cases. I'm available anytime - just text!
                </p>
              </div>
              <div>
                <h4 className="font-heading font-600 text-mjr-blue mb-2">
                  What I Don't Take
                </h4>
                <p className="text-slate">
                  No concrete or dirt removal. Everything else is fair game!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMason;