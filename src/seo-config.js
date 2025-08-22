// This is a conceptual sitemap.xml generator for better SEO
// You would typically generate this server-side or as a static file
export const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://colequest.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://colequest.com/#about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://colequest.com/#shows</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://colequest.com/#videos</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://colequest.com/#merchandise</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://colequest.com/#contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;
  
  return sitemap;
};

// Brooklyn Bluegrass Keywords for reference:
export const seoKeywords = [
  'Brooklyn bluegrass',
  'NYC bluegrass band',
  'dobro Brooklyn',
  'banjo NYC',
  'harmonica bluegrass',
  'Cole Quest Brooklyn',
  'Woody Guthrie grandson',
  'Brooklyn acoustic music',
  'NYC folk music',
  'City Pickers bluegrass',
  'Brooklyn folk band',
  'NYC roots music'
];
