import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: ReadonlyArray<{ source: string; destination: string }> = [
  {
    // Match both /path and /path/ (trailing slash) to prevent infinite redirect loops
    // when Next.js trailingSlash: true adds a slash after our destination
    source: '/fix/chrome-extension-disabled',
    destination: '/fix/chrome-disabled-extension/',
  },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const redirect of REDIRECTS) {
    if (pathname === redirect.source || pathname === redirect.source + '/') {
      return NextResponse.redirect(
        new URL(redirect.destination, request.url),
        308
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match both /path and /path/ to prevent trailingSlash: true redirect loop
  matcher: ['/fix/chrome-extension-disabled', '/fix/chrome-extension-disabled/'],
};
