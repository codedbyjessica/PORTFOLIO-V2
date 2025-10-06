'use client'

import { useRef } from 'react'
import hero from '../images/hero.png'
import Container from './Container'
import ParallaxImage from './ParallaxImage'

export default function Header() {
	const headerRef = useRef<HTMLElement>(null)

	return (
		<header ref={headerRef} className="relative text-black bg-white">
			<ParallaxImage 
				src={hero}
				alt="Hero Image"
				height={650}
				className="w-[400px] h-[400px] lg:w-auto lg:h-[90%] max-h-[650px] bottom-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-[10%]"
				triggerRef={headerRef}
			/>

			<div className="bg-gradient-to-br 45deg from-secondaryColorDark to-tertiaryColorDark opacity-75 relative z-10">
				<Container>
					<article className="min-h-[calc(100vh-53px-67px)] flex items-center justify-center lg:justify-start">
						<div className="mb-44 lg:mb-0 w-3/4 lg:w-[50%] xl:w-[60%] p-12 bg-white/80 tracking-wide text-center lg:text-left">
							<p className="text-[12px] lg:text-lg">hello. my name is</p>
							<h1 className="text-3xl leading-[100%] font-medium my-2 lg:my-1">Jessica Zhang</h1>
							<p className="text-[12px] lg:text-lg">and I'm a <span className="text-secondaryColorDark">Front-End Developer</span></p>
							<a className="button mt-4 inline-block" href="#projects">see my work</a>
						</div>
					</article>
				</Container>
			</div>
		</header>
	)
}
