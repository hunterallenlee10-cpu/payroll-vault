import { FileText, MessageSquareText, Phone } from "lucide-react";
import { business } from "@/lib/business";
import BackToTop from "../BackToTop";
import QuoteButton from "../QuoteButton";

// Mobile only: always-visible Call, Text and Get a quote.
export default function MobileBar() {
  const item =
    "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[0.8125rem] font-semibold leading-none";
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="flex items-stretch gap-1.5 px-2 py-1.5">
        <BackToTop variant="bar" />
        <a href={business.tel} className={`${item} rounded text-ink`} aria-label={`Call ${business.phoneDisplay}`}>
          <Phone className="size-5 text-vault" strokeWidth={1.5} aria-hidden="true" />
          Call
        </a>
        <a href={business.sms} className={`${item} rounded text-ink`} aria-label={`Text ${business.phoneDisplay}`}>
          <MessageSquareText className="size-5 text-vault" strokeWidth={1.5} aria-hidden="true" />
          Text
        </a>
        <QuoteButton preset={{ source: "mobile-bar" }} className={`${item} flex-[1.6] rounded-[6px] bg-vault text-white`}>
          <FileText className="size-5" strokeWidth={1.5} aria-hidden="true" />
          Get a quote
        </QuoteButton>
      </div>
    </div>
  );
}
