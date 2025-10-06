'use client'
import Image from 'next/image'
import logo from '../images/logo.svg'
import { useEffect, useState } from 'react'
import Container from './Container'
import { NAV_ITEMS } from '@/data/nav'

export default function Nav() {

    const [navActive, setNavActive] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            const scrollTop = window.scrollY
            
            sections.forEach((section, index) => {
                // Use larger offset for projects section (index 1) since it's tall
                const offset = index === 1 ? 200 : 100
                const sectionTop = section.offsetTop - offset
                
                if (scrollTop >= sectionTop) {
                    setNavActive(index)
                }
            })
        }
        
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Run once on mount
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="bg-mainColorLight relative z-20 py-4 sticky top-0 left-0 right-0">
            <Container> 
                <div className="flex justify-between items-center">
                    <div className="w-[110px] md:w-auto">
                        <a href="#top"><Image src={logo} alt="Logo" width={150} /></a>
                    </div>
                    <div className="flex space-x-2 md:space-x-4 uppercase">
                        {NAV_ITEMS.map((item, index) => (
                            <a key={index} href={item.href} className={`${index === 0 && "hidden"} ${navActive === index ? 'text-secondaryColorDark' : 'text-darkdarkgray'}`} onClick={() => setNavActive(index)}>{item.title}</a>
                        ))}
                    </div>
                </div>
            </Container>
        </nav>
  )
}
