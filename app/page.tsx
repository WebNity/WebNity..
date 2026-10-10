'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MoveUpRight,
  PenTool,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const services = [
  { icon: Globe2, number: '01', title: 'Site-uri web', text: 'Experiențe digitale care transformă vizitatorii în clienți și brandurile în repere.' },
  { icon: Layers3, number: '02', title: 'Identitate vizuală', text: 'Sisteme vizuale coerente, memorabile și construite pentru a rezista în timp.' },
  { icon: Code2, number: '03', title: 'Produse digitale', text: 'Platforme și produse digitale rapide, intuitive și pregătite să crească odată cu afacerea.' },
  { icon: PenTool, number: '04', title: 'Strategie & UX', text: 'Claritate strategică și interfețe care fac fiecare interacțiune să pară firească.' },
]

const projects = [
  { type: 'Tech / Platformă', title: 'NOVA SYSTEMS', className: 'project-nova', tag: 'SaaS / Product design', mark: 'N' },
  { type: 'Fashion / E-commerce', title: 'ATELIER 09', className: 'project-atelier', tag: 'Editorial / Commerce', mark: '09' },
  { type: 'Restaurant / Hospitality', title: 'MØRPH', className: 'project-morph', tag: 'Identity / Digital', mark: 'MØ' },
  { type: 'Imobiliare / Premium', title: 'SOLA RESIDENCES', className: 'project-sola', tag: 'Real estate / Launch', mark: 'SOL' },
  { type: 'Fitness / Wellness', title: 'FORME', className: 'project-forme', tag: 'Wellness / Community', mark: 'FORME' },
  { type: 'Brand premium', title: 'NOCTURNE', className: 'project-nocturne', tag: 'Luxury / Campaign', mark: 'N' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Formularul este valid, însă trimiterea nu este configurată încă. Conectează un serviciu de e-mail pentru a expedia mesajul.')
  }

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Navigare principală">
        <a href="#acasa" className="wordmark" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a266d361-f21d-4a59-a48d-3d91a3485beb-removebg-preview-5o6HS9xiaVsxRBlKpdFxUYQVeipJxI.png" alt="Webnity" /><span className="brand-name">Webnity</span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Acasă', 'Servicii', 'Portofoliu', 'Despre noi', 'Contact'].map((item, index) => (
            <a key={item} href={`#${['acasa', 'servicii', 'portofoliu', 'despre', 'contact'][index]}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Hai să vorbim <ArrowUpRight /></a>
        </div>
      </nav>

      <section id="acasa" className="hero section-pad">
        <div className="hero-glow" />
        <div className="eyebrow"><span className="pulse-dot" /> Studio digital independent <span className="eyebrow-line" /> Webnity</div>
        <h1>Idei clare.<br /><em>Impact</em> real.</h1>
        <div className="hero-bottom">
          <p className="hero-copy">Construim identități și experiențe digitale pentru branduri care aleg să fie <strong>imposibil de ignorat.</strong></p>
          <a className="round-link" href="#portofoliu" aria-label="Vezi proiectele"><ArrowDownRight /></a>
        </div>
        <div className="hero-stats"><span>01 — 04</span><span>Branding · Digital · Strategie</span><span className="scroll-note">Scroll pentru mai mult <ArrowDownRight /></span></div>
      </section>

      <section id="servicii" className="section-pad services-section">
        <div className="section-heading"><p className="section-kicker">Ce facem <span>01</span></p><h2>De la prima impresie<br />la <em>experiența completă.</em></h2></div>
        <div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Află mai multe despre ${title}`}><ArrowUpRight /></a></article>)}</div>
      </section>

      <section id="portofoliu" className="section-pad portfolio-section">
        <div className="section-heading portfolio-heading"><p className="section-kicker">Selecție de proiecte <span>02</span></p><h2>Lucruri pe care<br /><em>le-am făcut cu sens.</em></h2><a href="#contact" className="text-link">Vezi toate proiectele <ArrowUpRight /></a></div>
        <div className="projects-grid">{projects.map((project, index) => <a href="#contact" className={`project-card ${project.className}`} key={project.title}><div className="project-meta"><span>{project.type}</span><span>0{index + 1} / 06</span></div><div className="project-art"><span className="project-mark">{project.mark}</span><span className="project-caption">{project.title}</span><span className="project-orbit" /></div><div className="project-footer"><span>{project.tag}</span><MoveUpRight /></div></a>)}</div>
      </section>

      <section id="despre" className="about-section section-pad"><div className="about-label"><span className="section-kicker">Despre noi <span>03</span></span><Sparkles /></div><div className="about-content"><div className="about-intro"><span className="about-kicker">Webnity / studio digital</span><h2>Mică echipă.<br /><em>Idei bine făcute.</em></h2></div><div className="about-copy"><p>Webnity este un studio digital independent pentru branduri care vor să fie clare, relevante și ușor de ținut minte.</p><p>Lucrăm aproape de oamenii din spatele fiecărui proiect și transformăm ideile bune în identități și experiențe digitale care funcționează.</p><a className="about-link" href="#contact">Hai să ne cunoaștem <ArrowUpRight /></a></div></div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-intro"><p className="section-kicker">Spune-ne salut <span>04</span></p><h2>Ai o idee?<br /><em>Hai s-o facem reală.</em></h2><a className="phone-link" href="tel:+40746019183">+40 746 019 183 <ArrowUpRight /></a><p className="contact-mail">sau scrie-ne la <a href="mailto:WebNity@yahoo.com">WebNity@yahoo.com</a></p></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Numele tău<input name="name" placeholder="Cum te cheamă?" required /></label><label>E-mail<input type="email" name="email" placeholder="nume@companie.ro" required /></label></div><div className="form-row"><label>Telefon<input type="tel" name="phone" placeholder="+40 ..." required /></label><label>Despre proiect<textarea name="message" placeholder="Spune-ne câteva cuvinte..." required rows={2} /></label></div><button className="submit-button" type="submit">Trimite mesajul <Send /></button>{status && <p className="form-status" role="status">{status}</p>}</form></section>

      <footer className="footer"><a href="#acasa" className="wordmark"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a266d361-f21d-4a59-a48d-3d91a3485beb-removebg-preview-5o6HS9xiaVsxRBlKpdFxUYQVeipJxI.png" alt="Webnity" /><span className="brand-name">Webnity</span></a><p>Strategie, design & tehnologie<br />pentru branduri cu direcție.</p><div className="footer-links"><a href="#servicii">Servicii</a><a href="#portofoliu">Portofoliu</a><a href="#contact">Contact</a></div><span className="copyright">© 2024 Webnity. Toate drepturile rezervate.</span></footer>
    </main>
  )
}
