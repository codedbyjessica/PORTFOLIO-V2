import Image from "next/image"
import Container from "@/components/Container"
import jessysMenuThumbnail from "@/images/portfolio-menu.png"
import anatomyThumbnail from "@/images/portfolio-anatomy.png"
import colorsThumbnail from "@/images/portfolio-colors.png"
import sexybacThumbnail from "@/images/portfolio-sexybac.png"
import Contact from "@/components/Contact"
import ContactForm from "@/components/ContactForm"
import html from "@/images/skills/skills-html.svg"
import css from "@/images/skills/skills-css.svg"
import javascript from "@/images/skills/skills-js.svg"
import react from "@/images/skills/skills-react.svg"
import gatsby from "@/images/skills/skills-gatsby.svg"
import tailwind from "@/images/skills/skills-tailwind.svg"

export default function Home() {

  const ABOUT_ME = [
    <>Welcome! My name is Jessica. I'm a front-end developer based in Canada. I am passionate about creating beautiful online experiences that engage and communicate with the&nbsp;user.</>,

	<>I have <span className="bg-tertiaryColorDark bg-opacity-25 p-0.5">over {new Date().getFullYear() - 2017} years</span> of full-time experience as a web developer. My background in biology and <a href="http://medartbyjessica.com/" target="_blank" rel="noopener noreferrer">medical illustration</a> brings an additional layer of perspective and creativity to my&nbsp;work.</>,

    "I love exploring new realms of modern tech and diving deep into fascinating projects. My goal is to combine my technical and creative abilities and make the web an even friendlier place."
  ]

  const PROJECTS = [
    {
      title: "Jessy's Menu",
      thumbnail: jessysMenuThumbnail,
	  type: "React Web App",
      stack: ["React", "Firebase", "Sass"],
      description: "Sometimes you just need measurements, a few notes, and a place to keep them all. This is my go-to stash of favorite recipes.",
      links: {
        live: "https://menu.codedbyjessica.com/",
        github: "https://github.com/codedbyjessica/meals2"
      }
    },
	{
		title: "SexyBAC",
		thumbnail: sexybacThumbnail,
		type: "React Three Fiber Game",
		stack: ["Gatsby", "React Three Fiber"],
		description: <>It started as a bacteriophage model I built in grad school, mixed with a <a href="https://youtu.be/JSRasvSnqf8?si=yP4CS1cNIJsWHAn8" target="_blank" rel="noopener noreferrer">troll&nbsp;concept</a>, and then I took it way too far until it became an interactive dancing&nbsp;bacteriophage. <span className="whitespace-nowrap text-[10px]">¯\_(ツ)_/¯</span>
		</>,
		links: {
			live: "https://sexybac.codedbyjessica.com/",
			github: "https://github.com/codedbyjessica/sexybac-r3f"
		}
	},
    {
      title: "Colors",
      thumbnail: colorsThumbnail,
	  type: "Gatsby Web App",
      stack: ["Gatsby", "twin.macros"],
      description: "One screen, two jobs: convert hex colors to RGB and check contrast so your designs stay accessible.",
      links: {
        live: "https://colors.codedbyjessica.com/",
        github: "https://github.com/codedbyjessica/colors"
      }
    },
	{
		title: "Muscle Anatomy",
		thumbnail: anatomyThumbnail,
		type: "jQuery Interactive App",
		stack: ["jQuery", "HTML", 'SASS'],
		description: "An interactive way to study major muscles and test what you know — powered by medical art and custom SVGs to make it more engaging.",
		links: {
			live: "https://anatomy.codedbyjessica.com/",
			github: "https://github.com/codedbyjessica/HYAnatomy"
		}
	}
	
  ]

  const STACK = [
	{
		image: html,
		name: "HTML5"
	},
	{
		image: css,
		name: "CSS3"
	},
	{
		image: javascript,
		name: "JavaScript"
	},
	{
		image: react,
		name: "React"
	},
	{
		image: gatsby,
		name: "Gatsby"
	},
	{
		image: tailwind,
		name: "Tailwind"
	},
	
  ]

  const SKILLS = [
	{
		title: "foundational",
		skills: ["HTML5", "CSS3", "JavaScript", "Git and GitHub", "Command Line"]
	},
	{
		title: "front-end",
		skills: ["React, Gatsby, Next.js", "Tailwind, Sass/SCSS", "responsive layout, WCAG guidelines, cross-browser compatibility", "Webpack, vite"]
	},
	{
		title: "back-end",
		skills: ["Node.js", "RESTful APIs", "PostgreSQL, dynamoDB, Firebase, Supabase"]
	},
	{
		title: "supporting",
		skills: [<>AWS (S3, CloudFront, Route&nbsp;53, Amplify)</>, "Azure (Static Web Apps)", "Lighthouse", "Google Tag Manager"]
	}


  ]
  return (
    <main className="relative z-10 bg-white">
		<section id="about">
			<Container>
			<h2 className="mb-8"><span>About Me</span></h2>
			<div className="flex flex-col lg:flex-row gap-8">
				{ABOUT_ME.map((item, index) => (
				<p key={index}>{item}</p>
				))}
			</div>
			<div className="mt-8 text-center">
				<a className="button" href="/Resume-JessicaZhang.pdf" target="_blank" rel="noopener noreferrer">View my resume</a>
			</div>
			</Container>
		</section>

		<section id="projects">
			<Container>
				<h2><span>Projects</span></h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

				{PROJECTS.map((project, index) => (
					<article key={index} className="relative">
						<a href={project.links.live} target="_blank" className="absolute w-[160px] sm:w-[180px] z-10 bottom-1/2 translate-y-1/2 right-0">
							<Image src={project.thumbnail} alt={project.title} width={180} />
						</a>
						<div className="border border-mainColorDark pt-3 pb-8 mr-20 relative bottom-0 flex flex-col justify-between lg:h-[300px]">
							
							<div>
								<h3><span>{project.title}</span></h3>
								<h4 className="text-center">{project.type}</h4>
								<div className="flex gap-2 px-8 mt-4">
									{project.stack.map((skill, index) => (
										<div key={index}><span className="bg-tertiaryColorDark p-0.5 bg-opacity-25">{skill}</span></div>
									))}
								</div>
								
								<p className="px-8 mt-4 max-w-[calc(100%-80px)] sm:max-w-[calc(100%-90px)]"> {project.description} </p>
							</div>
							<div className="flex gap-2 px-8 mt-4">
								<a href={project.links.live} target="_blank" className="button">view live</a>

								<a href={project.links.github} target="_blank" className="button">GitHub</a>
							</div>
						</div>
					</article>
				))}
				</div>
			</Container>
		</section>

		<section id="skills">
			<Container>
				<h2><span>Skills</span></h2>

				<div className="flex flex-col lg:flex-row justify-between gap-8">
					
					{SKILLS.map((skill, index) => {
						return (
							<div key={index} className="w-full lg:w-1/4 border border-mainColorDark py-4 relative">
								<h3><span>{skill.title}</span></h3>
								<ul className="list-disc list-outside pl-10 pt-2">
									{skill.skills.map((skill, index) => (
										<li className="mt-1" key={index}>{skill}</li>
									))}
								</ul>
							</div>
						)
					})}
				</div>
				<div className="border border-mainColorDark py-4 relative mt-10">
					<h3><span>My Everyday Stack</span></h3>
					<div className="w-full px-8 mt-4 grid grid-cols-3 md:grid-cols-6 gap-4">
						{STACK.map((skill, index) => (
							<div key={index} className="flex flex-col items-center justify-between">
								<Image src={skill.image} alt={skill.name} width={30} />
								<span>{skill.name}</span>
							</div>
						))}	
					</div>
				</div>
			</Container>
		</section>

		<section id="contact">
			<Container>
				<h2 className="mb-8"><span>Contact</span></h2>
				<p className="text-center mb-4">codedbyjessicadotcom@gmail.com</p>
				
				<Contact />

				<ContactForm className="mt-8 max-w-md mx-auto" />
			</Container>
		</section>
    </main>
  )
}
