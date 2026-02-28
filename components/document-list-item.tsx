"use client";

import { Document } from "@/lib/companies-data";
import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentListItemProps {
  document: Document;
}

const iconMap: { [key: string]: React.ReactNode } = {
  building2: "🏢",
  indianrupee: "₹",
  euro: "€",
  dollarsign: "$",
  image: "🖼️",
  video: "📹",
  filetext: "📄",
};

export function DocumentListItem({ document }: DocumentListItemProps) {
  const handleView = () => {
    if (document.url) {
      window.open(document.url, "_blank");
    }
  };

  const handleDownload = () => {
    if (document.url) {
      const link = document.createElement("a");
      link.href = document.url;
      link.download = document.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl">{iconMap[document.icon] || "📄"}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{document.title}</h3>
          <p className="text-sm text-gray-500">{document.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleView}
          disabled={!document.url}
          title="View document"
          className="text-gray-600 hover:text-gray-900"
        >
          <Eye className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
          disabled={!document.url}
          title="Download document"
          className="text-gray-600 hover:text-gray-900"
        >
          <Download className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
