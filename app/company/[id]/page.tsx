"use client";

import { useState } from "react";
import { DM_Sans } from 'next/font/google';
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

import { useParams, useRouter } from "next/navigation";
import { companiesData, getCompanyById } from "@/lib/companies-data";
import { Eye, Download, Search, ChevronDown, Twitter, Instagram, Youtube, Facebook, Phone, BarChart3 } from "lucide-react";
import Link from "next/link";

const companyLogos: Record<string, string> = {
  kairali: '/KTAHV.png',
  products: '/PRODUCTS.png',
  centre: '/CENTER.png',
  villas: '/VILLARAAG.png',
};

const iconMap: Record<string, JSX.Element> = {
  building2: <span className="text-base">🏢</span>,
  indianrupee: <span className="text-base">₹</span>,
  euro: <span className="text-base">€</span>,
  dollarsign: <span className="text-base">$</span>,
  image: <span className="text-base">🖼️</span>,
  video: <span className="text-base">🎬</span>,
  filetext: <span className="text-base">📄</span>,
  bookopen: <span className="text-base">📖</span>,
  presentation: <span className="text-base">📊</span>,
  heart: <span className="text-base">❤️</span>,
  list: <span className="text-base">📋</span>,
};

export default function CompanyPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const company = getCompanyById(id);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Company Not Found</h1>
          <Link href="/" className="text-white text-sm font-bold px-6 py-2 rounded" style={{ backgroundColor: '#21606b' }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const filteredDocuments = company.documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (url: string) => {
    if (url) window.open(url.trim(), '_blank');
  };

  const handleDownload = (url: string, title: string) => {
    if (url) {
      const a = document.createElement('a');
      a.href = url.trim();
      a.target = '_blank';
      a.download = title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl mx-auto px-3 sm:px-6 py-5 sm:py-10">

        <div className="shadow-lg overflow-hidden bg-white">

          {/* ── CHANGE COMPANY BAR ── */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full py-3 sm:py-4 flex items-center justify-center gap-2 font-bold tracking-widest uppercase text-white text-sm sm:text-base transition-colors"
              style={{ backgroundColor: '#21606b' }}
            >
              Change Company
              <ChevronDown
                size={18}
                className="transition-transform duration-200"
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-30 bg-white border border-gray-200 shadow-xl">
                {companiesData.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      router.push(`/company/${c.id}`);
                      setDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-5 py-3 hover:bg-teal-50 transition-colors border-b border-gray-100 last:border-b-0"
                    style={c.id === id ? { backgroundColor: '#f0f9fa' } : {}}
                  >
                    <img
                      src={companyLogos[c.id]}
                      alt={c.name}
                      className="w-8 h-8 object-contain flex-shrink-0"
                    />
                    <span
                      className="text-sm font-bold text-left"
                      style={{ color: c.id === id ? '#21606b' : '#374151' }}
                    >
                      {c.name}
                    </span>
                    {/* {c.id === id && (
                      <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#21606b', color: '#fff' }}>
                        Active
                      </span>
                    )} */}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Amber divider */}
          <div className="h-0.5" style={{ backgroundColor: '#c1882c' }}></div>

          {/* ── LOGO (centered) ── */}
          <div className="bg-white px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center">
              <img
                src={companyLogos[id] || '/placeholder-logo.png'}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* ── BANNER IMAGE ── */}
          <div className="h-44 sm:h-56 bg-gray-200 overflow-hidden">
            {company.bannerImageUrl ? (
              <img src={company.bannerImageUrl} alt={company.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #21606b 0%, #a8d5db 100%)' }}>
                <span className="text-white text-sm opacity-60">Banner Image</span>
              </div>
            )}
          </div>

          {/* ── SEARCH + DOCUMENTS ── */}
          <div className={`${dmSans.className} px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sm:pb-6`} style={{ backgroundColor: '#fffbf5' }}>

            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" style={{ color: '#21606b' }} />
              <h3 className="text-base sm:text-xl font-bold text-gray-700">Documents</h3>
            </div>
            <p className="text-[11px] sm:text-sm text-gray-600 mb-4 sm:mb-6">
              Preview or download official materials for {company.shortName}.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 mb-3 shadow-sm bg-white">
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search Document"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-xs sm:text-sm text-gray-600 bg-transparent"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600 text-xs">✕</button>
              )}
            </div>

            {/* Documents list */}
            <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm mb-4 sm:mb-5 bg-white">
              {filteredDocuments.length > 0 ? (
                <div className="divide-y divide-gray-100 max-h-72 sm:max-h-96 overflow-y-auto">
                  {filteredDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between px-4 py-3.5 hover:bg-amber-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          {iconMap[doc.icon] || <span className="text-base">📁</span>}
                        </div>
                        <p className="text-[11px] sm:text-xs font-bold text-gray-800 truncate">{doc.title}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                        <div className="relative group/btn">
                          <button
                            className="p-2 rounded-full transition-colors"
                            style={{ backgroundColor: '#21606b' }}
                            onClick={() => handleView(doc.url)}
                          >
                            <Eye size={16} className="text-white" />
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-white text-[10px] font-medium rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-10" style={{ backgroundColor: '#21606b' }}>
                            View PDF
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent" style={{ borderTopColor: '#21606b' }}></span>
                          </span>
                        </div>
                        <div className="relative group/btn">
                          <button
                            className="p-2 rounded-full transition-colors"
                            style={{ backgroundColor: '#21606b' }}
                            onClick={() => handleDownload(doc.url, doc.title)}
                          >
                            <Download size={16} className="text-white" />
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-white text-[10px] font-medium rounded whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-10" style={{ backgroundColor: '#21606b' }}>
                            Download
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent" style={{ borderTopColor: '#21606b' }}></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400 text-xs sm:text-sm">
                  No documents found matching "{searchTerm}"
                </div>
              )}
            </div>

            {/* Bottom note */}
            <div className="text-xs text-gray-600 text-center border-t border-gray-300 pt-4 sm:pt-5">
              <p className="font-bold text-gray-800 mb-1">💡 All documents are free to access</p>
              <p>Preview any document in your browser or download it directly. Price lists are available in INR, Euro, and USD.</p>
            </div>

          </div>

          {/* ── FOOTER ── */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center gap-2 sm:gap-3" style={{ backgroundColor: '#21606b' }}>
            <div className="flex gap-4 sm:gap-5">
              {company.socialLinks?.instagram && (
                <a href={company.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
              {company.socialLinks?.youtube && (
                <a href={company.socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <Youtube size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
              {company.socialLinks?.facebook && (
                <a href={company.socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <Facebook size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
              {company.socialLinks?.twitter && (
                <a href={company.socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <Twitter size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
              {company.socialLinks?.phone && (
                <a href={company.socialLinks.phone} style={{ color: '#ffffff' }}>
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
            </div>
            <p style={{ fontSize: '11px', color: '#ffffff' }}>
              © 2026 Kairali Ayurvedic Group. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}