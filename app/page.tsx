'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight, BarChart3, DollarSign, Image as ImageIcon, FileText, Instagram, Youtube, Facebook, Phone, Twitter } from 'lucide-react';
import { companiesData } from '@/lib/companies-data';

const companyLogos: Record<string, string> = {
  kairali: '/KTAHV.png',
  products: '/PRODUCTS.png',
  centre: '/CENTER.png',
  villas: '/VILLARAAG.png',
};

export default function Home() {
  const router = useRouter();

  const handleCompanyClick = (companyId: string) => {
    router.push(`/company/${companyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl mx-auto px-3 sm:px-6 py-5 sm:py-10">

        {/* ── COMBINED BLOCK ── */}
        <div className="shadow-lg overflow-hidden">

          <div className="bg-white">

            {/* ── HEADER ── */}
            <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <img src="/main2.png" alt="Kairali Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              </div>
              <div className="text-right">
                <h2 className="text-lg sm:text-2xl font-bold leading-tight" style={{ color: '#8e9d35' }}>Kairali Ayurvedic Group</h2>
                {/* 1. Header paragraph font -1px: was text-xs sm:text-sm, now text-[11px] sm:text-xs */}
                <p className="text-[11px] sm:text-xs font-medium" style={{ color: '#c1882c' }}>Health through Ayurveda · Since 1990</p>
              </div>
            </div>

            {/* Amber divider */}
            <div className="h-0.5" style={{ backgroundColor: '#c1882c' }}></div>

            {/* ── TEAL SECTION ── */}
            <div className="px-4 py-4 sm:p-6 lg:p-8 overflow-visible" style={{ backgroundColor: '#21606b' }}>

              {/* 2. White pill card — rounded left, extends to right edge */}
              <div
                className="bg-white pl-10 sm:pl-10 flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 overflow-hidden -mr-4 sm:-mr-6 lg:-mr-8 sm:ml-0"
                style={{
                  borderRadius: '999px 0 0 999px',
                  paddingTop: '10px',
                  paddingBottom: '10px'
                }}
              >
                <div className="flex-1 min-w-0">
                  {/* 2. Font increase on mobile: text-base instead of text-sm */}
                  <h3 className="text-base sm:text-xl font-bold mb-0.5 sm:mb-1 leading-tight" style={{ color: '#c1882c' }}>
                    Media & Download Center
                  </h3>
                  {/* 2. Paragraph -1px on mobile: text-[11px] instead of text-xs */}
                  <p className="text-[11px] sm:text-sm text-gray-700 leading-relaxed">
                    Access brochures, price lists, photo galleries, video tours, and official documents for all Kairali Group brands — in one place.
                  </p>
                </div>
                <div className="w-20 h-20 sm:w-36 sm:h-36 flex-shrink-0 flex items-center justify-center self-stretch">
                  <img
                    src="/icons.png"
                    alt="Media Center Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* What You Get */}
              <div>
                <h4 className="text-xs font-bold mb-4 sm:mb-5 uppercase tracking-widest text-center text-white">
                  What You Get Inside Each Company
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="text-center">
                    <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-white" />
                    <p className="text-xs font-bold text-white mb-0.5 sm:mb-1">Price Lists</p>
                    <p className="text-xs hidden sm:block" style={{ color: '#a8d5db' }}>INR · EUR · USD</p>
                    <p className="text-xs sm:hidden" style={{ color: '#a8d5db' }}>INR · EUR</p>
                  </div>
                  <div className="text-center">
                    <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-white" />
                    <p className="text-xs font-bold text-white mb-0.5 sm:mb-1">Media Assets</p>
                    <p className="text-xs hidden sm:block" style={{ color: '#a8d5db' }}>Photos & Videos</p>
                    <p className="text-xs sm:hidden" style={{ color: '#a8d5db' }}>Photos</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-white" />
                    <p className="text-xs font-bold text-white mb-0.5 sm:mb-1">Documents</p>
                    <p className="text-xs hidden sm:block" style={{ color: '#a8d5db' }}>Profiles & Brochures</p>
                    <p className="text-xs sm:hidden" style={{ color: '#a8d5db' }}>Brochures</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── SELECT A COMPANY ── */}
          <div className="border-x border-b border-gray-100 p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#fffbf5' }}>

            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700 flex-shrink-0" />
              {/* 3. Font same as Media & Download Center heading: text-base sm:text-xl */}
              <h3 className="text-base sm:text-xl font-bold text-gray-700">Select a Company</h3>
            </div>
            {/* 3. Subtext same as pill card paragraph */}
            <p className="text-[11px] sm:text-sm text-gray-600 mb-4 sm:mb-6">
              Tap any brand below to view and download their official marketing materials, price lists, and media content.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
              {companiesData.map((company) => (
                <div
                  key={company.id}
                  onClick={() => handleCompanyClick(company.id)}
                  className="border border-gray-100 rounded bg-white flex flex-col items-center text-center p-4 sm:p-6 cursor-pointer hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-2 sm:mb-3 flex items-center justify-center flex-shrink-0">
                    <img
                      src={companyLogos[company.id]}
                      alt={company.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                    />
                  </div>

                  {/* 5. Divider full width */}
                  <div className="w-full h-px bg-gray-300 mb-2 sm:mb-3"></div>

                  <h4 className="text-[11px] sm:text-xs font-bold text-gray-800 mb-1 sm:mb-2 leading-tight">{company.name}</h4>

                  {/* 4. Tagline visible on mobile too — removed hidden sm:block */}
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-3 sm:mb-4 line-clamp-2">{company.description}</p>

                  {/* 4. Always show "View & Download", arrow ">" */}
                  <span
                    className="text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs font-bold flex items-center justify-center gap-1 transition-colors mt-auto w-full"
                    style={{ backgroundColor: '#21606b' }}
                  >
                    View & Download
                    <ChevronRight size={12} />
                  </span>
                </div>
              ))}
            </div>

            <div className="text-xs text-gray-600 text-center border-t border-gray-300 pt-4 sm:pt-5">
              <p className="font-bold text-gray-800 mb-1">💡 All documents are free to access</p>
              <p>Preview any document in your browser or download it directly. Price lists are available in INR, Euro, and USD. Switch between companies anytime using the "Change Company" button.</p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-white shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <div className="flex gap-4 sm:gap-5">
            <a href="https://www.instagram.com/kairali_the_healing_village/" className="transition-colors" style={{ color: '#8e9d35' }}><Instagram size={20} className="sm:w-6 sm:h-6" /></a>
            <a href="https://www.youtube.com/user/kairaliayurvedagroup" className="transition-colors" style={{ color: '#8e9d35' }}><Youtube size={20} className="sm:w-6 sm:h-6" /></a>
            <a href="https://www.facebook.com/KairaliGroup" className="transition-colors" style={{ color: '#8e9d35' }}><Facebook size={20} className="sm:w-6 sm:h-6" /></a>
            <a href="https://twitter.com/Kairali_Group" className="transition-colors" style={{ color: '#8e9d35' }}><Twitter size={20} className="sm:w-6 sm:h-6" /></a>
            <a href="tel:+91-9555156156" className="transition-colors" style={{ color: '#8e9d35' }}><Phone size={20} className="sm:w-6 sm:h-6" /></a>
          </div>
          <p style={{ fontSize: '11px', color: 'rgb(0, 0, 0)' }}>
            © 2026 Kairali Ayurvedic Group. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}