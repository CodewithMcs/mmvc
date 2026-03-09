import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = [],
  url,
  canonical,
  image,
  type = "website",
  children,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {url && <meta property="og:url" content={url} />}
    {image && <meta property="og:image" content={image} />}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}

    {children}
  </Helmet>
);

export default SEO;
