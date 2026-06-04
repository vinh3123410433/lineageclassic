/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Coins, Heart, FileText, Info } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="w-full py-12 mt-20 border-t border-outline-variant/40 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
        
        {/* Brand Left */}
        <div className="space-y-4">
          <div 
            onClick={() => setActiveTab("home")}
            className="font-sans text-2xl font-black tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity uppercase"
          >
            LVE&trade;
          </div>
          <p className="text-on-surface-variant font-body-md text-sm md:text-base max-w-md leading-relaxed">
            © Lineage Vietnamese Encyclopedia. A community tribute to the legendary Aden lore. Discover items, monsters, and spells from the classic saga.
          </p>
          <div className="flex gap-4 pt-2">
            <span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Verified Alliance">
              <Shield size={18} className="stroke-[1.5]" />
            </span>
            <span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Gold Reserve">
              <Coins size={18} className="stroke-[1.5]" />
            </span>
            <span className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" title="Community Loved">
              <Heart size={18} className="stroke-[1.5]" />
            </span>
          </div>
        </div>

        {/* Links Right */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setActiveTab("guide")}
              className="text-left text-on-surface-variant hover:text-primary transition-colors font-body-md text-[11px] uppercase tracking-wider cursor-pointer"
            >
              Credits & Thanks
            </button>
            <button 
              onClick={() => setActiveTab("guide")}
              className="text-left text-on-surface-variant hover:text-primary transition-colors font-body-md text-[11px] uppercase tracking-wider cursor-pointer"
            >
              Community Contribution
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <a 
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-[11px] uppercase tracking-wider"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
            <a 
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-[11px] uppercase tracking-wider"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <span className="text-[10px] uppercase tracking-[0.20em] font-bold text-primary">
            Cataloging ancient items for community preservation
          </span>
        </div>
        <div className="text-[12px] font-serif italic text-on-surface-variant/80">
          Turning complex gaming metadata into curated clarity.
        </div>
      </div>
    </footer>
  );
}
