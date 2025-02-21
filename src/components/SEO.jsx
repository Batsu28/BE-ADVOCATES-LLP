import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type, image }) => {
  const siteUrl = "https://www.lrcm.mn";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "BE ADVOCATES LLP",
    image: "https://www.lrcm.mn/logo.jpg",
    description:
      "BE ADVOCATES LLP нь 2013 оноос хойш мэргэжлийн өндөр төвшинд хууль зүйн үйлчилгээг үзүүлж байна.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Макс Тоуэр, 7 давхар, 706 тоот",
      addressLocality: "Улаанбаатар",
      addressRegion: "Чингэлтэй дүүрэг",
      postalCode: "",
      addressCountry: "MN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.92053977653079",
      longitude: "106.91005885038494",
    },
    telephone: "976-99115442",
    email: "info@lrcm.mn",
    openingHours: "Mo-Fr 09:00-18:00",
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="хууль зүйн үйлчилгээ, өмгөөлөгч, BE ADVOCATES LLP, хуулийн фирм, өмгөөллийн үйлчилгээ"
      />
      <link rel="canonical" href={`${siteUrl}${window.location.pathname}`} />

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={`${siteUrl}${window.location.pathname}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BE ADVOCATES LLP" />
      <meta property="og:locale" content="mn_MN" />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
