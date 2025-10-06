import Container from './Container'

export default function HeaderUnder() {
    const CONTENT = [
        {
            title: 'code',
            description: 'optimizer'
        },
        {
            title: 'visual',
            description: 'storyteller'
        },
        {
            title: 'user',
            description: 'oriented'
        },
        {
            title: 'email me:',
            description: <a className="lowercase" href="mailto:codedbyjessicadotcom@gmail.com">codedbyjessicadotcom@gmail.com</a>
        }
    ]
  return (
    <article className="py-4 relative z-10 bg-white">
        <Container> 
            <div className="flex lg:justify-between justify-center items-center uppercase leading-tight tracking-wide">
                {CONTENT.map((item, index) => (
                    <div key={index} className={`text-center lg:text-left ${index < 3 ? 'hidden lg:block' : 'block'}`}>
                        <p>{item.title}</p><p className="text-secondaryColorDark">{item.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    </article>
  )
}
