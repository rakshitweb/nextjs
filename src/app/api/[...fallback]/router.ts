import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('I AM COMING IN REQUEST', { request });
  const response = NextResponse.next();
  return response;
}
