import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from './app/i18n/settings';

// Get the preferred language from a request
function getLanguage(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';

  // Parse accept-language header into an array of language codes
  const preferredLanguages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim());

  // Find the first language in the accept-language header that's in our supported languages
  const prefLang = preferredLanguages.find(lang => {
    const langCode = lang.substring(0, 2); // Get the first 2 chars (e.g. 'en' from 'en-US')
    return languages.includes(langCode);
  });

  return prefLang ? prefLang.substring(0, 2) : fallbackLng;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a language
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // Skip if the pathname already has a language prefix
  if (pathnameHasLanguage) return NextResponse.next();

  // Skip for assets, api routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Detect language
  const language = getLanguage(request);
  const url = request.nextUrl.clone();

  if (pathname === '/') {
    // For the root path, redirect to the language root
    url.pathname = `/${language}`;
  } else {
    // For other paths, add the language prefix
    url.pathname = `/${language}${pathname}`;
  }

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};
