import React from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-10 bg-[#080808] text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          {/* Ícone com gradiente oficial do Instagram */}
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg flex-shrink-0">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>

          <div>
            <h3 className="font-mono text-xl sm:text-2xl font-black text-white">
              {SITE_CONFIG.contact.instagramHandle}
            </h3>
            <p className="font-heading text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase mt-0.5">
              ACOMPANHE OS TREINOS
            </p>
          </div>
        </div>

        <a
          href={SITE_CONFIG.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-white text-xs font-heading font-black uppercase tracking-wider text-white transition-all hover:bg-white/5 active:scale-95"
        >
          <span>VER INSTAGRAM</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
