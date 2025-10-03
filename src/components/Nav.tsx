'use client'
import Image from 'next/image'
import logo from '../images/logo.svg'
import { useEffect, useState } from 'react'
import Container from './Container'

export default function Nav() {

    const [navActive, setNavActive] = useState(0)


    const NAV_ITEMS = [
        {
            title: 'Home',
            href: '#home'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Projects',
            href: '#projects'
        },
        {
            title: 'Contact',
            href: '#contact'
        }
    ]   

    useEffect(() => {
        // set up scroll handler so nav active gets set when scrolled to section
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            sections.forEach((section, index) => {
                if (window.scrollY >= section.offsetTop - 100) {
                    setNavActive(index)
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="bg-mainColorLight relative z-10 py-4 sticky top-0 left-0 right-0">
            <Container> 
                <div className="flex justify-between items-center">
                    <div>
                        <a><Image src={logo} alt="Logo" width={150} /></a>
                    </div>
                    <div className="flex space-x-4 uppercase">
                        {NAV_ITEMS.map((item, index) => (
                            <a key={index} href={item.href} className={navActive === index ? 'text-secondaryColorDark' : 'text-mainColorDark'} onClick={() => setNavActive(index)}>{item.title}</a>
                        ))}
                    </div>
                </div>
            </Container>
        </nav>
  )
}
