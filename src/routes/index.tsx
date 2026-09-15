import { useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Menu, X, Sparkles, MousePointerClick, Smartphone, Target, ShieldCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const benefits = [
  [Target, "Conversion-first strategy", "We start with what your customer needs to believe before taking action — not with a generic layout."],
  [Sparkles, "Custom, not template-based", "Your page is shaped around your business, offer, audience and customer journey."],
  [MousePointerClick, "One clear next step", "Calls, WhatsApp, bookings, enquiries or purchases. We make the action obvious."],
  [Smartphone, "Designed for phones", "The experience is designed around how customers actually browse on mobile."],
  [Sparkles, "Premium visual direction", "Strong hierarchy, typography and purposeful visuals make your business feel worth choosing."],
  [ShieldCheck, "Built to reduce doubt", "Proof, objections and reassurance appear where they help the visitor decide."],
];

const faqs = [
  ["Is this a normal website?", "Not really. Cool URLs is about building a conversion-focused customer journey. It can be a landing page or business website, but the thinking starts with getting the visitor to take the right action."],
  ["Do you use templates?", "We use proven conversion principles, but we don't drop your business into a generic template. Structure, messaging and visual direction are built around your business."],
  ["Why only PKR 5,000?", "We're making high-quality conversion-focused websites accessible to Pakistani businesses. Start with PKR 1,000 to book the call, then pay PKR 4,000 after the meeting once you're convinced by the direction and quality."],
  ["What do I need to provide?", "Give us what you already have: what you sell, who you serve, your offer, photos, logo and important details. We help turn that raw information into a clear customer journey."],
  ["Can you build one for any business?", "Yes. The framework can adapt to local businesses, service providers, consultants, clinics, agencies, ecommerce offers and more."],
  ["What happens after I book?", "We use the call to understand your business and show you the direction we'd take. If you're convinced, you pay the remaining PKR 4,000 and we move ahead."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <main className="cu-page">
    <div className="cu-announcement"><b>COOL URLS</b> — HIGH-CONVERTING WEBSITES FOR PAKISTANI BUSINESSES</div>
    <header className="cu-header">
      <button className="cu-logo" onClick={() => goTo("top")}><img src="/cool-urls-logo.svg" alt="Cool URLs" /></button>
      <nav className={menuOpen ? "cu-nav open" : "cu-nav"}>
        <button onClick={() => goTo("problem")}>The problem</button><button onClick={() => goTo("solution")}>The solution</button><button onClick={() => goTo("process")}>How it works</button><button onClick={() => goTo("faq")}>FAQs</button><button className="cu-nav-cta" onClick={() => goTo("offer")}>Make My Website Cool <ArrowRight size={14}/></button>
      </nav>
      <button className="cu-mobile" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section id="top" className="cu-hero">
      <div className="cu-hero-copy">
        <div className="cu-label"><i/> FOR BUSINESS OWNERS WHO WANT MORE THAN A WEBSITE</div>
        <h1>Get customers<br/><em>without convincing them.</em></h1>
        <p>We turn ordinary business websites into conversion-focused experiences that make the right people understand, trust and choose you.</p>
        <div className="cu-actions"><button className="cu-btn lime" onClick={() => goTo("offer")}>Make My Website Cool <ArrowRight size={17}/></button><button className="cu-text-btn" onClick={() => goTo("solution")}>See how it works <ArrowDown size={16}/></button></div>
        <div className="cu-risk"><Check size={14}/> PKR 1,000 to book <span>•</span><Check size={14}/> PKR 4,000 after the meeting <span>•</span><Check size={14}/> No template website</div>
      </div>
      <div className="cu-hero-visual">
        <div className="cu-hero-glow"/>
        <div className="cu-website-card"><div className="cu-browser"><span/><span/><span/><b>yourbusiness.pk</b></div><div className="cu-browser-content"><small>YOUR WEBSITE HAS ONE JOB</small><h2>Make it easy<br/>to say <em>yes.</em></h2><p>Clear offer. Strong proof. Less friction. One obvious next step.</p><div className="cu-mock-cta">GET MORE CUSTOMERS <ArrowRight size={13}/></div><div className="cu-mock-footer"><span>01 ATTENTION</span><span>02 TRUST</span><span>03 ACTION</span></div></div></div>
        <div className="cu-sticker one"><strong>+ CRO</strong><small>conversion focused</small></div><div className="cu-sticker two">NO TEMPLATES ↗</div>
      </div>
    </section>

    <section className="cu-marquee"><span>YOUR WEBSITE SHOULD NOT JUST <b>EXIST.</b></span><i>→</i><span>IT SHOULD <b>WORK.</b></span><i>→</i><span>IT SHOULD <b>SELL.</b></span></section>

    <section id="problem" className="cu-section cu-section-block"><div className="cu-label"><i/> THE PROBLEM</div><h2>You've got a website.<br/><em>But is it actually selling?</em></h2><p className="cu-intro">A lot of Pakistani business websites are built to look complete — not to help a customer make a decision.</p><div className="cu-problem-grid"><article><b>01</b><h3>They explain.<br/>They don't persuade.</h3><p>A list of services is not a reason to choose you. Visitors need relevance, value and a reason to act.</p></article><article><b>02</b><h3>They look familiar.<br/>Too familiar.</h3><p>Generic layouts and stock messaging make businesses blend together when they should stand apart.</p></article><article><b>03</b><h3>They leave the<br/>customer guessing.</h3><p>Too many choices, weak CTAs and missing proof create friction — and friction kills action.</p></article></div></section>

    <section id="solution" className="cu-green"><div className="cu-section cu-solution"><div><div className="cu-label dark"><i/> THE COOL URLS METHOD</div><h2>Not a prettier website.<br/><em>A better customer journey.</em></h2></div><div className="cu-solution-copy"><p>We combine conversion psychology, sharp messaging, premium design and deliberate structure into a page that has a job to do.</p><div className="cu-flow"><b>ATTENTION</b><ArrowRight/><b>UNDERSTANDING</b><ArrowRight/><b>TRUST</b><ArrowRight/><b>ACTION</b></div></div></div></section>

    <section className="cu-section cu-section-block"><div className="cu-label"><i/> WHAT YOU GET</div><h2>Every part of your page<br/><em>has a reason to exist.</em></h2><p className="cu-intro">No filler. No “every website needs this” sections. We build around what moves your customer forward.</p><div className="cu-benefits">{benefits.map(([Icon,title,text],i)=><article key={title}><div><span>0{i+1}</span><Icon size={20}/></div><h3>{title as string}</h3><p>{text as string}</p><hr/></article>)}</div></section>

    <section id="process" className="cu-process-wrap"><div className="cu-section cu-section-block"><div className="cu-label"><i/> HOW IT WORKS</div><h2>Simple for you.<br/><em>Serious about the result.</em></h2><p className="cu-intro">A low-risk buying decision with high-quality website thinking.</p><div className="cu-steps">{[['01','Book the conversation','Pay PKR 1,000 to reserve your sales call.'],['02','Tell us what you do','We learn about your business, customer, offer and desired action.'],['03','See the direction','We show you how we'd turn that information into a conversion-focused page.'],['04','Get it built','If you're convinced, pay the remaining PKR 4,000 and we move forward.']].map(([n,t,d])=><div className="cu-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowRight size={19}/></div>)}</div></div></section>

    <section id="offer" className="cu-section cu-offer"><div className="cu-offer-card"><div><div className="cu-label dark"><i/> THE COOL URLS STARTING OFFER</div><h2>Don't pay<br/><em>blind.</em></h2><p>Start with a conversation. See the quality. Understand the direction. Then decide.</p><button className="cu-btn black" onClick={() => goTo("contact")}>Book My Sales Call <ArrowRight size={17}/></button></div><div className="cu-price-box"><small>ONE WEBSITE / ONE CLEAR PRICE</small><strong>PKR 5,000</strong><div><b>PKR 1,000</b><span>Book your call</span></div><div><b>PKR 4,000</b><span>After the meeting</span></div><div><Check size={14}/><span>Conversion-focused website</span></div><div><Check size={14}/><span>Custom page structure</span></div><div><Check size={14}/><span>Built around your customer</span></div></div></div></section>

    <section id="faq" className="cu-section cu-faq"><div><div className="cu-label"><i/> QUESTIONS</div><h2>Before you<br/><em>book.</em></h2><p className="cu-intro">Fair questions deserve clear answers.</p></div><div className="cu-faq-list">{faqs.map(([q,a],i)=><div className="cu-faq-item" key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span>{openFaq===i?<X size={18}/>:<ChevronDown size={18}/>}</button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="cu-final" id="contact"><div><div className="cu-label dark"><i/> READY TO MAKE YOUR WEBSITE WORK?</div><h2>Give your website<br/><em>a job to do.</em></h2><p>Make it easier for the right customer to understand you, trust you and take the next step.</p><button className="cu-btn black" onClick={() => goTo("offer")}>Make My Website Cool <ArrowRight size={17}/></button><small>PKR 1,000 TO BOOK <span>•</span> PKR 4,000 AFTER THE MEETING</small></div></section>

    <footer className="cu-footer"><div className="cu-section cu-footer-main"><div><img src="/cool-urls-logo.svg" alt="Cool URLs"/><p>High-converting websites for Pakistani businesses.</p></div><div className="cu-footer-links"><button onClick={() => goTo("problem")}>The problem</button><button onClick={() => goTo("solution")}>The solution</button><button onClick={() => goTo("process")}>How it works</button><button onClick={() => goTo("faq")}>FAQs</button></div></div><div className="cu-section cu-footer-bottom"><span>© 2026 Cool URLs</span><span>MAKE WEBSITES GREAT AGAIN.</span></div></footer>
  </main>;
}
