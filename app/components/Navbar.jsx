import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-700 fixed top-0 left-0 right-0 w-full z-50 shadow-lg '>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/" > 
                        <Image
                            src="/Nior Events.png" alt="Noir Events" className="h-[45px] object-cover"
                            height={135}
                            width={135}
                        />
                    </Link>
                </div>

                <ul className="flex gap-4 ">
                    <li> <Link href='/login'>Login</Link> </li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar