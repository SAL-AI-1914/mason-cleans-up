import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText } from "lucide-react";

const MobileStickyBar = () => {
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
    <div className="mobile-sticky-bar md:hidden">
      <div className="flex items-center justify-between p-3 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 min-h-[44px]"
          aria-label="Call Mason at 760-331-3925"
        >
          <Phone className="h-4 w-4" />
          <span className="text-xs">Call</span>
        </Button>
        <Button
          variant="cta"
          size="sm"
          onClick={handleTextClick}
          className="flex-1 flex items-center justify-center gap-2 min-h-[44px]"
          aria-label="Text Mason at 760-331-3925"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-xs">Text</span>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={scrollToQuote}
          className="flex-1 flex items-center justify-center gap-2 min-h-[44px]"
          aria-label="Get a quote"
        >
          <FileText className="h-4 w-4" />
          <span className="text-xs">Quote</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;