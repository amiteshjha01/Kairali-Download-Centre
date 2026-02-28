"use client";

import Link from "next/link";
import { Company } from "@/lib/companies-data";
import { Button } from "@/components/ui/button";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
      {/* Logo and Title Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-3">
          {company.logoUrl ? (
            <img
              src={company.logoUrl}
              alt={company.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600 flex-shrink-0">
              Logo
            </div>
          )}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white text-sm line-clamp-2">{company.name}</h3>
            <p className="text-amber-300 text-xs">{company.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-gray-700 mb-4">{company.description}</p>

        {/* What You Get Section */}
        <div className="bg-teal-700 text-white rounded-lg p-2 sm:p-3 mb-4">
          <h4 className="font-bold text-xs mb-2 sm:mb-3 uppercase tracking-wider text-center sm:text-left">
            What You Get Inside Each Company
          </h4>
          <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
            <div>
              <div className="text-lg sm:text-xl mb-1">💰</div>
              <p className="text-xs">Price Lists</p>
              <p className="text-xs text-gray-200">INR, EUR, USD</p>
            </div>
            <div>
              <div className="text-lg sm:text-xl mb-1">🎨</div>
              <p className="text-xs">Media Assets</p>
              <p className="text-xs text-gray-200">Photos & Videos</p>
            </div>
            <div>
              <div className="text-lg sm:text-xl mb-1">📄</div>
              <p className="text-xs">Documents</p>
              <p className="text-xs text-gray-200">Profiles & Brochures</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <Link href={`/company/${company.id}`} className="block">
          <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">
            View & Download
          </Button>
        </Link>
      </div>
    </div>
  );
}
