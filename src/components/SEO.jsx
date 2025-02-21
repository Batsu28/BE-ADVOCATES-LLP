import { Helmet } from "react-helmet-async";
import { siteConfig, seoData, structuredData } from "../data/siteData";

const SEO = ({ title, description, name, type, image }) => {
  const siteUrl = siteConfig.url;
  const defaultDescription = siteConfig.description;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`${siteUrl}${window.location.pathname}`} />

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={`${siteUrl}${window.location.pathname}`}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type || seoData.openGraph.type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={seoData.openGraph.locale} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={seoData.twitter.cardType} />
      <meta name="twitter:creator" content={seoData.twitter.handle} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
