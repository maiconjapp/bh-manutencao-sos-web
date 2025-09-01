import { useEffect } from 'react';

const SitemapRoute = () => {
  useEffect(() => {
    // Redirect directly to the sitemap edge function
    const sitemapUrl = 'https://blmauyummcnxiwumbril.supabase.co/functions/v1/sitemap';
    window.location.replace(sitemapUrl);
  }, []);

  // Show loading while redirecting
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      Redirecting to sitemap...
    </div>
  );
};

export default SitemapRoute;