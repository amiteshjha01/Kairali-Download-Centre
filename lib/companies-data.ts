export interface Document {
  id: string;
  title: string;
  icon: string;
  description: string;
  url: string;
}

export interface SocialLinks {
  instagram?: string;
  youtube?: string;
  facebook?: string;
  twitter?: string;
  phone?: string;
}

export interface Company {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  location: string;
  logoUrl: string;
  bannerImageUrl: string;
  socialLinks: SocialLinks;
  documents: Document[];
}

export const companiesData: Company[] = [
  {
    id: "kairali",
    name: "KTAHV",
    shortName: "Kairali",
    tagline: "The Ayurvedic Healing Village",
    description: "Authentic Ayurvedic retreat in lush greenery",
    location: "Palakkad, Kerala",
    logoUrl: "/KTAHV.png",
    bannerImageUrl: "/KTAHV.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/kairaliayurvedichealingvillage/",
      youtube: "https://www.youtube.com/user/kairaliayurvedagroup",
      facebook: "https://www.facebook.com/KairaliTheAyurvedicHealingVillage",
      twitter: "https://twitter.com/Kairali_Group",
      phone: "tel:+91-9555156156",
    },
    documents: [
      {
        id: "ayurveda-inr",
        title: "Rates of Ayurveda Packages INR",
        icon: "indianrupee",
        description: "Ayurveda package rates in INR",
        url: "https://www.kairali.com/download/KTAHV-Ayurveda-Packages-INR-Price-List-2025-26.pdf",
      },
      {
        id: "ayurveda-euro",
        title: "Rates of Ayurveda Packages EURO",
        icon: "euro",
        description: "Ayurveda package rates in EURO",
        url: "https://www.kairali.com/download/KTAHV-Ayurveda-Packages-EURO-Price-List-25-26.pdf",
      },
      {
        id: "ayurveda-usd",
        title: "Rates of Ayurveda Packages USD",
        icon: "dollarsign",
        description: "Ayurveda package rates in USD",
        url: "https://www.kairali.com/download/KTAHV-Ayurveda-Packages-USD-Price-List-25-26.pdf",
      },
      {
        id: "yoga-inr",
        title: "Rates of Yoga & Meditation Packages INR",
        icon: "indianrupee",
        description: "Yoga & Meditation package rates in INR",
        url: "https://www.kairali.com/download/KTAHV-Yoga-Packages-INR-Price-List-25-26.pdf",
      },
      {
        id: "yoga-euro",
        title: "Rates of Yoga & Meditation Packages EURO",
        icon: "euro",
        description: "Yoga & Meditation package rates in EURO",
        url: "https://www.kairali.com/download/KTAHV-Yoga-Packages-EURO-Price-List-25-26.pdf",
      },
      {
        id: "yoga-usd",
        title: "Rates of Yoga & Meditation Packages USD",
        icon: "dollarsign",
        description: "Yoga & Meditation package rates in USD",
        url: "https://www.kairali.com/download/KTAHV-Yoga-Packages-USD-Price-List-25-26.pdf",
      },
      {
        id: "presentation",
        title: "Kairali - The Ayurvedic Healing Village, Presentation",
        icon: "presentation",
        description: "Company presentation",
        url: "https://www.kairali.com/download/Profile-of-Kairali-Ayurvedic-Healing-Village-Palakkad.pdf",
      },
      {
        id: "palakkad-profile",
        title: "Kairali - The Ayurvedic Healing Village Palakkad Profile",
        icon: "building2",
        description: "Palakkad property profile",
        url: "https://www.kairali.com/download/the-ayurvedic-healing-village-corporate-brochure.pdf",
      },
      {
        id: "social-responsibility",
        title: "Social Responsibility",
        icon: "heart",
        description: "Corporate social responsibility information",
        url: "https://www.kairali.com/download/Social-Responsibility.pdf",
      },
      {
        id: "corporate-brochure",
        title: "Kairali - The Ayurvedic Healing Village Corporate Brochure",
        icon: "bookopen",
        description: "Corporate brochure document",
        url: "https://www.kairali.com/download/the-ayurvedic-healing-village-corporate-brochure.pdf",
      },
    ],
  },

  {
    id: "products",
    name: "KAPPL",
    shortName: "Kairali Products",
    tagline: "Premium Ayurvedic formulations for health & wellness",
    description: "High-quality health & wellness products",
    location: "Kerala, India",
    logoUrl: "/PRODUCTS.png",
    bannerImageUrl: "/PRODUCT.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/kairali_ayurvedic_products",
      youtube: "https://www.youtube.com/user/kairaliayurvedagroup",
      facebook: "https://www.facebook.com/KairaliAyurvedicProducts",
      twitter: "https://twitter.com/Kairali_Group",
      phone: "tel:+91-9555156156",
    },
    documents: [
      {
        id: "products-catalogue",
        title: "Kairali Ayurvedic Products Catalogue",
        icon: "bookopen",
        description: "Complete product catalogue",
        url: "https://www.kairali.com/download/Kairali-Ayurvedic-Products-Catalogue.pdf",
      },
      {
        id: "products-price-inr-2019",
        title: "Products Price List INR 2019-20",
        icon: "indianrupee",
        description: "INR price list 2019-20",
        url: "https://www.kairali.com/download/INR-Product-Price-List-2019-20.pdf",
      },
      {
        id: "products-price-usd-2019",
        title: "Products Price List USD 2019-20",
        icon: "dollarsign",
        description: "USD price list 2019-20",
        url: "https://www.kairali.com/download/USD-Product-Price-List-2019-20.pdf",
      },
      {
        id: "products-price-euro-2019",
        title: "Products Price List EURO 2019-20",
        icon: "euro",
        description: "EURO price list 2019-20",
        url: "https://www.kairali.com/download/Euro-Product-Price-List-2019-20.pdf",
      },
      {
        id: "patent-products-brochure",
        title: "Kairali Ayurvedic Patent Products Brochure",
        icon: "bookopen",
        description: "Patent products brochure",
        url: "https://www.kairali.com/download/kairali-ayurvedic-patent-products.pdf",
      },
      {
        id: "product-manual",
        title: "Product Manual",
        icon: "filetext",
        description: "Product usage manual",
        url: "https://www.kairali.com/download/Product-Manual.pdf",
      },
      {
        id: "classical-products-price-inr",
        title: "Classical Products Price List INR",
        icon: "indianrupee",
        description: "Classical products price list in INR",
        url: "https://www.kairali.com/download/INR-PRICE-LIST-FOR-CLASSICAL-PRODUCTS-wef-01-04-16to31-03-17.pdf",
      },
      {
        id: "cosmetics-products-price-inr",
        title: "Cosmetics Products Price List INR",
        icon: "indianrupee",
        description: "Cosmetics products price list in INR",
        url: "https://www.kairali.com/download/INR-PRICE-LIST-FOR-COSMETICS-wef-01-04-16to31-03-17.pdf",
      },
      {
        id: "proprietary-products-price-inr",
        title: "Proprietary Products Price List INR",
        icon: "indianrupee",
        description: "Proprietary products price list in INR",
        url: "https://www.kairali.com/download/INR-PRICE-LIST-FOR-PROPRIETARY-PRODUCTS-wef-01-04-16to31-03-17.pdf",
      },
      {
        id: "beauty-products-brochure",
        title: "Kairali Ayurvedic Beauty Products Brochure",
        icon: "bookopen",
        description: "Beauty products brochure",
        url: "https://www.kairali.com/download/Kairali-Beauty-Products-Brochure.pdf",
      },
      {
        id: "classical-products-brochure",
        title: "Kairali Classical Products Brochure",
        icon: "bookopen",
        description: "Classical products brochure",
        url: "https://www.kairali.com/download/kairali-classical-products.pdf",
      },
      {
        id: "full-product-list",
        title: "Kairali Products Full Product List",
        icon: "list",
        description: "Complete product listing",
        url: "https://www.kairali.com/download/kairali-products-full-list.pdf",
      },
      {
        id: "oil-products-brochure",
        title: "Kairali Oil Products Brochure",
        icon: "bookopen",
        description: "Oil products brochure",
        url: "https://www.kairali.com/download/Kairali-Oil-Prodcuts.pdf",
      },
      {
        id: "bulk-classical-price-inr",
        title: "Kairali BULK CLASSICAL PRODUCTS Price List INR",
        icon: "indianrupee",
        description: "Bulk classical products price list in INR",
        url: "https://www.kairali.com/download/BULK-CLASSICAL-PRODUCTS.pdf",
      },
      {
        id: "bulk-cosmetics-price-inr",
        title: "Kairali BULK COSMETICS PRODUCTS Price List INR",
        icon: "indianrupee",
        description: "Bulk cosmetics products price list in INR",
        url: "https://www.kairali.com/download/BULK-COSMETICS-PRODUCTS.pdf",
      },
      {
        id: "bulk-proprietary-price-inr",
        title: "Kairali BULK PROPRIETARY PRODUCTS Price List INR",
        icon: "indianrupee",
        description: "Bulk proprietary products price list in INR",
        url: "https://www.kairali.com/download/BULK-PROPRIETARY-PRODUCTS.pdf",
      },
    ],
  },

  {
    id: "centre",
    name: "KAC",
    shortName: "Kairali Centre",
    tagline: "Wellness centers offering authentic treatments",
    description: "Panchakarma center offering authentic treatments",
    location: "Multiple Locations",
    logoUrl: "/CENTER.png",
    bannerImageUrl: "/CENTER.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/kairaliayurvediccentre/",
      youtube: "https://www.youtube.com/user/kairaliayurvedagroup",
      facebook: "https://www.facebook.com/KairaliAyurvedicTreatmentCentre/",
      twitter: "https://twitter.com/Kairali_Group",
      phone: "tel:+91-9555156156",
    },
    documents: [
      {
        id: "centre-profile",
        title: "Kairali Ayurvedic Centre Corporate Profile",
        icon: "building2",
        description: "Company overview and information",
        url: "https://www.kairali.com/download/kairali-ayurvedi-centres-corporate-profile.pdf",
      },
      {
        id: "centre-brochure",
        title: "Kairali Ayurvedic Centre Broucher",
        icon: "bookopen",
        description: "Centre brochure document",
        url: "https://www.kairali.com/download/KairaliCentreBroucher.pdf",
      },
      {
        id: "centre-delhi-price",
        title: "Kairali Ayurvedic Centre Delhi Price Card",
        icon: "indianrupee",
        description: "Delhi centre pricing details",
        url: "https://www.kairali.com/download/PriceCard-DelhiCentre.pdf",
      },
    ],
  },

  {
    id: "villas",
    name: "Villa Raag",
    shortName: "Villa Raag",
    tagline: "Luxury residential villa offerings",
    description: "Premium villa offerings with mindful living",
    location: "South Goa, India",
    logoUrl: "/VILLARAAG.png",
    bannerImageUrl: "/VILLA RAAG.jpg",
    socialLinks: {
      instagram: "https://instagram.com/villaraag",
      youtube: "https://www.youtube.com/@VillaRaag",
      facebook: "https://www.facebook.com/profile.php?id=61571732036874",
      twitter: "https://twitter.com/Kairali_Group",
      phone: "tel:+91-9555156156",
    },
    documents: [
      {
        id: "villa-brochure",
        title: "Villa Raag Brochure",
        icon: "bookopen",
        description: "Villa brochure document",
        url: "https://www.kairali.com/download/Villa-Raag-brochure.pdf",
      },
      {
        id: "villa-price-inr",
        title: "Villa Raag Price Terrif Room Wise - INR",
        icon: "indianrupee",
        description: "Room wise pricing in INR",
        url: "https://www.kairali.com/download/Villa-Raag-Price-Terrif-Room-Wise-INR.pdf",
      },
      {
        id: "villa-price-euro",
        title: "Villa Raag Price Terrif Room Wise - Euro",
        icon: "euro",
        description: "Room wise pricing in Euro",
        url: "https://www.kairali.com/download/Villa-Raag-Price-Terrif-Room-Wise-Euro.pdf",
      },
      {
        id: "villa-price-usd",
        title: "Villa Raag Price Terrif Room Wise - USD",
        icon: "dollarsign",
        description: "Room wise pricing in USD",
        url: "https://www.kairali.com/download/Villa-Raag-Price-Terrif-Room-Wise-USD.pdf",
      },
    ],
  },
];

export function getCompanyById(id: string): Company | undefined {
  return companiesData.find((company) => company.id === id);
}