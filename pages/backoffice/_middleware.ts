import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {

    if (req.cookies['loggedIn'] == `true`){
        return NextResponse.next();
    } else {
        return NextResponse.redirect( `/login` )
    }
}