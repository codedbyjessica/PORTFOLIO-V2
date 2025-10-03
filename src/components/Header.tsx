import Image from 'next/image'
import hero from '../images/hero.png'
import Container from './Container'

export default function Header() {
  return (
    <header className="relative">
      <Image src={hero} alt="Logo" width={900} height={900} className="w-1/2 h-auto absolute bottom-0 right-0" />

      <div className="bg-gradient-to-br 45deg from-secondaryColorDark to-tertiaryColorDark opacity-75 relative z-10">
        
        
      <Container>
        <article className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="w-[60%] p-8 bg-white/80">
          <p id="hello">hello. my name is</p>
          <h1>Jessica Zhang</h1>
          <p>and I'm a <span className="text-secondaryColorDark">Front-End Developer</span></p>
          <p>
            <a href="#portfolio">see my work</a>
          </p>
          </div>
        </article>
      </Container>
      </div>
    </header>
  )
}
