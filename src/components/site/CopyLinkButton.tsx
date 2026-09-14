"use client";

import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
        copied ? "text-emerald-600" : "text-muted-foreground",
      )}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <LinkIcon className="h-3.5 w-3.5" />}
      {copied ? "복사됨" : "URL 복사"}
    </button>
  );
}
