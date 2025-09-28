import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.description.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your quote request.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Quote request sent!",
        description: "I'll get back to you within a few hours. For faster service, text me directly at 760-331-3925.",
      });
    } catch (error) {
      toast({
        title: "Error sending request",
        description: "Please try again or text me directly at 760-331-3925.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:7603313925";
  };

  const handleTextClick = () => {
    window.location.href = "sms:7603313925";
  };

  return (
    <section id="quote" className="py-16 md:py-20 bg-white-base">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-700 text-graphite mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Text a photo to <span className="font-semibold text-mjr-blue">760-331-3925</span> for a faster estimate, or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white-base rounded-[var(--radius)] p-8 shadow-mjr-md border border-steel/20">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-600 text-graphite mb-2">
                  Request Sent!
                </h3>
                <p className="text-slate mb-6">
                  I'll get back to you within a few hours. For immediate service, text me directly.
                </p>
                <Button
                  variant="cta"
                  onClick={handleTextClick}
                  className="flex items-center gap-2 mx-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Text 760-331-3925
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-graphite font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-graphite font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(760) 555-0123"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-graphite font-medium">
                    Job Description *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe what you need removed (furniture, appliances, etc.) and any access details..."
                    className="mt-2 min-h-[100px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>

                <p className="text-sm text-slate text-center">
                  <AlertCircle className="h-4 w-4 inline mr-1" />
                  For faster response, text a photo to 760-331-3925
                </p>
              </form>
            )}
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Call/Text Card */}
            <div className="bg-mjr-blue text-white rounded-[var(--radius)] p-8 shadow-mjr-lg">
              <h3 className="text-2xl font-heading font-600 mb-4">
                Call or Text Mason
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <span className="text-xl font-heading font-600">760-331-3925</span>
                </div>
                <p className="text-white/90 mb-6">
                  Best reached by text. I'm available anytime for questions or quick estimates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleCallClick}
                    className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-mjr-blue"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleTextClick}
                    className="flex-1 bg-white text-mjr-blue hover:bg-white/90"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Text
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-white-base rounded-[var(--radius)] p-8 shadow-mjr-md border border-steel/20">
              <h3 className="text-2xl font-heading font-600 text-graphite mb-4">
                Service Area
              </h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-6 w-6 text-mjr-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-graphite font-medium mb-2">
                    All of San Diego County
                  </p>
                  <p className="text-slate text-sm leading-relaxed">
                    Oceanside, Carlsbad, Vista, San Marcos, Escondido, and surrounding areas
                  </p>
                </div>
              </div>
              <div className="bg-sky-tint-bg rounded-lg p-4">
                <p className="text-mjr-blue font-medium text-sm">
                  Free estimates by text, phone, or in-person. Final pricing confirmed when I see the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;