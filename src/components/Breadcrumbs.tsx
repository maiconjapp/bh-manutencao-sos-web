import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const baseUrl = 'https://www.sosmaridodealuguelbh.com.br';
  
  // Create structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": baseUrl
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `${baseUrl}${item.href}` : undefined
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="bg-muted/30 py-3 px-4 border-b">
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Voltar para página inicial"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </li>
                <li>
                  {item.href && index < items.length - 1 ? (
                    <Link 
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-foreground font-medium" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
