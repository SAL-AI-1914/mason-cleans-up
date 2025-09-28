import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseMason from "@/components/WhyChooseMason";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Mason's Junk Removal | Fast, Friendly Service in San Diego County";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional junk removal in San Diego County. Call or text 760-331-3925 for free estimates. Same-day service, transparent pricing, locally owned.');
    }

    // Add structured data for LocalBusiness
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mason's Junk Removal",
      "image": window.location.origin + "/src/assets/mjr-logo.png",
      "telephone": "760-331-3925",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego County",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "areaServed": [
        "Oceanside, CA",
        "Carlsbad, CA", 
        "Vista, CA",
        "San Marcos, CA",
        "Escondido, CA",
        "San Diego County, CA"
      ],
      "serviceType": "Junk Removal Service",
      "priceRange": "$$",
      "url": window.location.origin,
      "description": "Fast, friendly junk removal with free estimates. Same-day or next-day service across San Diego County."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white-base">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <WhyChooseMason />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
