import { Helmet } from 'react-helmet-async';


export default function SEO({ title, description, keywords, type = 'website' }) {
    // In a real router setup, useLocation would be better, but for single page scroll, window.location is fine fallback
    const siteUrl = window.location.origin;
    const currentUrl = window.location.href;

    const defaultTitle = "Krishna Bansode | Backend Architect & Laravel Developer";
    const defaultDescription = "Senior Backend Developer specialized in building scalable APIs, optimizing database performance, and architecting robust Laravel systems.";
    const defaultKeywords = "Krishna Bansode, Laravel Developer, Backend Developer, PHP, API Architecture, System Design, Microservices, Redis, SQL";

    const metaTitle = title ? `${title} | Krishna Bansode` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        </Helmet>
    );
}
