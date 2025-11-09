import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'Transform Your Business with Smart IT Solutions',
  description = 'I help companies streamline operations, eliminate manual tasks, and boost efficiency through custom automation and integration solutions.',
  keywords = 'business automation, IT solutions, process optimization, custom software, integration, efficiency, productivity',
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl = window.location.href,
  twitterCard = 'summary_large_image',
  twitterCreator = '@yourtwitterhandle', // Replace with actual handle
  twitterSite = '@yourtwitterhandle', // Replace with actual handle
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
    </Helmet>
  );
};

export default Seo;