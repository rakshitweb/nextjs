import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  console.log(request);
}

export const config = {
  matcher: '/api/:path',
};
