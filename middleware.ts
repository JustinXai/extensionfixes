import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: ReadonlyArray<{ source: string; destination: string }> = [
  {
    source: '/fix/chrome-extension-disabled',
    destination: '/fix/chrome-disabled-extension/',
  },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const redirect of REDIRECTS) {
    const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (normalizedPath === redirect.source) {
      return NextResponse.redirect(
        new URL(redirect.destination, request.url),
        308
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/fix/chrome-extension-disabled'],
};
