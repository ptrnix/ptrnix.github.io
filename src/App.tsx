import {useState} from "react"
import type {ReactNode} from "react"
import {projects} from "./data/projects"
import {skills} from "./data/skills"

const EMAIL = "alexander.vanek-rupp@gmx.at"
const GITHUB = "https://github.com/ptrnix"

const CV = "./CV.pdf"

const links = [
    {id: "about", label: "Über mich"},
    {id: "projects", label: "Projekte"},
    {id: "skills", label: "Skills"},
    {id: "contact", label: "Kontakt"}
]

const primaryButton = "rounded-lg bg-brand-blue px-5 py-3 font-medium text-white hover:bg-brand-dark"
const secondaryButton = "rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-brand-blue"
const textLink = "font-medium text-brand-blue underline underline-offset-4"

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav aria-label="Hauptnavigation" className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
                <a href="#top" className="font-semibold">Vanek-Rupp Alexander</a>
                <ul className="hidden gap-6 sm:flex">
                    {links.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:text-brand-blue">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="rounded-lg px-3 py-2 hover:bg-slate-100 sm:hidden"
                >
                    {open ? "Schließen" : "Menü"}
                </button>
            </nav>
            {open && (
                <ul className="border-t border-slate-200 px-5 py-2 sm:hidden">
                    {links.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} onClick={() => setOpen(false)}
                               className="block py-3">{link.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

function Hero() {
    return (
        <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                <span
                    className="bg-linear-to-r from-brand-light to-brand-violet bg-clip-text text-transparent">Vanek-Rupp</span>
                <br/>
                Alexander
            </h1>
            <p className="mt-6 max-w-xl text-xl text-slate-600">
                Informatik-Schüler an der <br/> HTBLA Kaindorf mit Schwerpunkt Cybersecurity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
                <a href={GITHUB} target="_blank" rel="noreferrer" className={primaryButton}>GitHub</a>
                <a href={CV} target="_blank" rel="noreferrer" className={secondaryButton}>Lebenslauf als PDF</a>
            </div>
        </section>
    )
}

interface SectionProps {
    id: string
    title: string
    children: ReactNode
}

function Section({id, title, children}: SectionProps) {
    return (
        <section id={id} className="scroll-mt-16 border-t border-slate-200 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-5">
                <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
                {children}
            </div>
        </section>
    )
}

function Projects() {
    const tags = [...new Set(projects.flatMap(project => project.tags))]
    const [active, setActive] = useState<string | null>(null)
    const shown = active ? projects.filter(project => project.tags.includes(active)) : projects

    return (
        <>
            {tags.length > 1 && (
                <div className="mb-6 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            aria-pressed={active === tag}
                            onClick={() => setActive(active === tag ? null : tag)}
                            className={`rounded-full border px-4 py-1.5 text-sm ${
                                active === tag
                                    ? "border-brand-blue bg-brand-blue text-white"
                                    : "border-slate-300 hover:border-brand-blue"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map(project => (
                    <article key={project.title} className="flex flex-col rounded-xl border border-slate-200 p-6">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-3 flex-1 text-slate-600">{project.description}</p>
                        <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                            {project.tags.map(tag => (
                                <li key={tag} className="rounded-md bg-slate-100 px-2 py-1">{tag}</li>
                            ))}
                        </ul>
                        {project.repo && (
                            <a href={project.repo} target="_blank" rel="noreferrer" className={`mt-5 ${textLink}`}>
                                Code auf GitHub ansehen
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </>
    )
}

function Contact() {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Clipboard access can be denied, the mailto link still works
        }
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <a href={`mailto:${EMAIL}`} className={`text-xl ${textLink}`}>{EMAIL}</a>
            <div className="flex flex-wrap gap-3">
                <button onClick={copy} className={secondaryButton}>
                    {copied ? "Adresse kopiert" : "Adresse kopieren"}
                </button>
                <a href={GITHUB} target="_blank" rel="noreferrer" className={secondaryButton}>github.com/ptrnix</a>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Header/>
            <main>
                <Hero/>
                <Section id="about" title="Über mich">
                    <p className="max-w-2xl text-lg leading-relaxed">
                        Ich bin Alexander, Informatik-Schüler an der HTBLA Kaindorf mit Schwerpunkt Cybersecurity.
                        Ich entwickle mit Java, TypeScript und React und will Software bauen, die auch sicher ist.
                        Nach der Schule möchte ich als Entwickler arbeiten.
                    </p>
                </Section>
                <Section id="projects" title="Projekte">
                    <Projects/>
                </Section>
                <Section id="skills" title="Skills">
                    <dl className="grid gap-6 sm:grid-cols-2">
                        {skills.map(skill => (
                            <div key={skill.group}>
                                <dt className="font-semibold">{skill.group}</dt>
                                <dd className="mt-1 text-slate-600">{skill.items.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </Section>
                <Section id="contact" title="Kontakt">
                    <Contact/>
                </Section>
            </main>
            <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
                © 2026 Vanek-Rupp Alexander
            </footer>
        </div>
    )
}