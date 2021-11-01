import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {

  return NextResponse.next();
  
  if( req.cookies['teste'] == 'true' ){
    return NextResponse.next();
  }
  var country = req.geo.country || 'BR';
  return new Response('test - ' + country );
}