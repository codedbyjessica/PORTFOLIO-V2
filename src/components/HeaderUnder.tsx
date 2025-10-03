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
    <article className="py-4">
        <Container> 
            <div className="flex justify-between items-center uppercase leading-tight">
                {CONTENT.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p><p className="text-secondaryColorDark">{item.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    </article>
  )
}
