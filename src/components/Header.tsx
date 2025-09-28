import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import mjrLogo from "@/assets/mjr-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = "tel:7603313925";
  };

  const handleTextClick = () => {
    window.location.href = "sms:7603313925";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white-base/95 backdrop-blur-sm border-b border-steel/20 shadow-mjr-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Business Name */}
          <div className="flex items-center space-x-3">
            <img 
              src={mjrLogo} 
              alt="Mason's Junk Removal"
              className="h-10 md:h-12 w-auto"
            />
            <h1 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
              MASON'S JUNK REMOVAL
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="default"
              onClick={handleCallClick}
              className="flex items-center gap-2"
              aria-label="Call Mason at 760-331-3925"
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button
              variant="cta"
              size="default"
              onClick={handleTextClick}
              className="flex items-center gap-2"
              aria-label="Text Mason at 760-331-3925"
            >
              <MessageCircle className="h-4 w-4" />
              Text
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-steel/20">
            <Button
              variant="outline"
              size="lg"
              onClick={handleCallClick}
              className="w-full flex items-center gap-2"
              aria-label="Call Mason at 760-331-3925"
            >
              <Phone className="h-4 w-4" />
              Call 760-331-3925
            </Button>
            <Button
              variant="cta"
              size="lg"
              onClick={handleTextClick}
              className="w-full flex items-center gap-2"
              aria-label="Text Mason at 760-331-3925"
            >
              <MessageCircle className="h-4 w-4" />
              Text 760-331-3925
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;