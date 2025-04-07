import { MetadataRoute } from 'next';
import { languages } from './i18n/settings';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pulizieperricchi.it';
  const lastModified = new Date();

  const routes = [
    '',
    '/chi-siamo',
    '/servizi',
    '/galleria',
    '/contatti',
    '/privacy-policy'
  ];

  // Generate sitemap entries for each route and language
  const entries = languages.flatMap(lang => {
    return routes.map(route => {
      return {
        url: `${baseUrl}/${lang}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
        priority: route === '' ? 1 : 0.8,
      };
    });
  });

  // Add specific location-based entries for better SEO
  const locationEntries = [
    {
      url: `${baseUrl}/servizi-pulizia-lusso-novi-ligure`,
      lastModified,
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pulizie-ville-lusso-serravalle-scrivia`,
      lastModified,
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servizi-pulizia-yacht-portofino`,
      lastModified,
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pulizie-jet-privati-milano`,
      lastModified,
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pulizie-eventi-esclusivi-italia`,
      lastModified,
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    }
  ];

  return [...entries, ...locationEntries];
}
