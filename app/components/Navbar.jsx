import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-700 sticky'>
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
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar