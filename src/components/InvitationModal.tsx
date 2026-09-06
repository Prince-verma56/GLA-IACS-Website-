"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { conference } from "@/lib/conference";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const INVITATION_IMAGE: string | null = "/docs/IACS_Invitation_Form.png";

export function InvitationModal() {
  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setOpen(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        className="p-0 gap-0 flex flex-col overflow-hidden max-w-[860px] w-[calc(100vw-24px)] max-h-[92vh] md:max-h-[88vh] bg-[#fdfdfc] border-0 shadow-2xl rounded-none sm:rounded-none"
      >
        <DialogTitle className="sr-only">IACS 2027 Conference Invitation</DialogTitle>
        
        {/* ── Header ── */}
        <DialogHeader className="flex-none px-5 py-4 sm:px-6 sm:py-5 border-b border-black/5 bg-white shrink-0">
          <div className="flex items-center gap-3 pr-6">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true" className="shrink-0 text-primary">
              <path d="M0 6h3l2-5 3 10 2-5 2 3h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-primary/80">
              IACS 2027 — Official Invitation
            </span>
          </div>
        </DialogHeader>

        {/* ── Scrollable Image Area ── */}
        <ScrollArea className="flex-1 min-h-0 bg-[#f8f7f4]">
          <div className="w-full min-h-full flex flex-col items-center justify-start p-4 sm:p-8 md:p-12">
            {INVITATION_IMAGE ? (
              <div className="w-full relative shadow-sm border border-black/5 bg-white p-3 sm:p-4 rounded-none">
                <img
                  src={INVITATION_IMAGE}
                  alt="IACS 2027 Official Invitation"
                  className="w-full h-auto object-contain rounded-none"
                  loading="eager"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full min-h-[500px] border-2 border-dashed border-primary/20 rounded-none bg-white/50">
                <p className="text-primary/50 text-sm tracking-widest uppercase font-medium">
                  Invitation Placeholder
                </p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* ── Footer ── */}
        <DialogFooter className="flex-none px-5 py-4 sm:px-6 sm:py-5 border-t border-black/5 bg-white shrink-0 sm:justify-between items-center flex-col sm:flex-row gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold text-foreground/80 mb-1">
              {conference.dates}
            </span>
            <span className="text-[13px] sm:text-sm text-foreground/60 leading-tight">
              GLA University, Mathura, Uttar Pradesh
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1 sm:flex-none border-primary/20 text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Close
            </Button>
            <Button asChild className="flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary-deep shadow-sm transition-colors">
              <a href={conference.registrationFormUrl} target="_blank" rel="noreferrer">
                Register Now &rarr;
              </a>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
