import { useState } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

const features = [
  ["01", "Conversion-first structure", "Every section has a job: grab attention, build trust, remove doubt, and move the visitor toward the next action."],
  ["02", "Custom, not template-based", "We start with your business, offer, customer and positioning instead of squeezing you into a generic website template."],
  ["03", "Clear messaging", "Visitors should understand what you do, who it is for, why it matters and what to do next without hunting for answers."],
  ["04", "Premium visual direction", "Your website becomes a credibility asset — clean, modern and designed to make the business behind it look worth choosing."],
  ["05", "Mobile-first experience", "A large share of your customers will see your page on a phone, so the experience is designed around mobile behaviour from the start."],
  ["06", "One clear conversion goal", "Whether you need calls, WhatsApp messages, bookings, enquiries or purchases, the page is built around the action that matters."],
];

const faqs = [
  ["Is Cool URLs just another website service?", "No. The point is not to give you more pages. The point is to create a customer journey that makes your business easier to understand, trust and choose."],
  ["Do you use website templates?", "No. We use proven conversion principles, but your page is shaped around your business, audience, offer, positioning and desired customer action."],
  ["Why is the price only PKR 5,000?", "Cool URLs is intentionally making high-quality conversion-focused websites accessible to Pakistani businesses. You book with PKR 1,000, then pay the remaining PKR 4,000 after the meeting once you're convinced by the direction and quality."],
  ["Do I need to write all the website copy myself?", "No. You give us the raw information about your business. We turn it into clearer, more persuasive messaging and structure the page around your customer's decision-making process."],
  ["Can you build this for any type of business?", "Yes. The same conversion principles can be adapted for service businesses, clinics, consultants, agencies, local businesses, product businesses and more."],
  ["What happens after I book?", "We use the call to understand your business, show you how we would approach the page, answer your questions and make sure the direction makes sense before you commit to the remaining amount."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main className="cu-page">
      <div className="cu-topbar">BUILT FOR PAKISTANI BUSINESSES <span>•</span> HIGH-CONVERTING WEBSITES, NOT DIGITAL BROCHURES</div>

      <header className="cu-header">
        <button className="cu-logo" onClick={() => goTo("hero")} aria-label="Cool URLs home">
          <img src="/cool-urls-logo.svg" alt="Cool URLs" />
        </button>
        <nav className={menuOpen ? "cu-nav open" : "cu-nav"}>
          <button onClick={() => goTo("solution")}>What we do</button>
          <button onClick={() => goTo("process")}>How it works</button>
          <button onClick={() => goTo("faq")}>FAQs</button>
          <button className="cu-nav-button" onClick={() => goTo("book")}>Make My Website Cool <ArrowRight size={15} /></button>
        </nav>
        <button className="cu-mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="hero" className="cu-hero-sales">
        <div className="cu-hero-kicker">FOR BUSINESS OWNERS WHO ARE DONE WITH BORING WEBSITES</div>
        <h1>Get customers<br /><em>without convincing them.</em></h1>
        <p className="cu-hero-lead">We turn ordinary business websites into high-converting pages that make the right people understand, trust and choose your business.</p>
        <div className="cu-hero-actions">
          <button className="cu-primary" onClick={() => goTo("book")}>Make My Website Cool <ArrowRight size={18} /></button>
          <button className="cu-secondary" onClick={() => goTo("solution")}>See what makes it different <ArrowDown size={17} /></button>
        </div>
        <div className="cu-risk-line"><Check size={16} /> PKR 1,000 to book <span>•</span> <Check size={16} /> PKR 4,000 after the meeting <span>•</span> <Check size={16} /> No template website</div>

        <div className="cu-hero-proof">
          <div className="cu-proof-window">
            <div className="cu-browser"><span></span><span></span><span></span><b>yourbusiness.pk</b></div>
            <div className="cu-browser-body">
              <div className="cu-browser-mini">A WEBSITE WITH A JOB TO DO</div>
              <div className="cu-browser-title">Don't just look<br /><strong>professional.</strong></div>
              <p>Make the visitor know exactly why they should choose you.</p>
              <div className="cu-browser-cta">GET MORE CUSTOMERS <ArrowRight size={13} /></div>
              <div className="cu-browser-stats"><span><b>01</b> ATTENTION</span><span><b>02</b> TRUST</span><span><b>03</b> ACTION</span></div>
            </div>
          </div>
          <div className="cu-proof-note note-one"><b>+ CRO</b><small>conversion focused</small></div>
          <div className="cu-proof-note note-two">NO TEMPLATES</div>
        </div>
      </section>

      <section className="cu-trust-band">
        <p>YOUR WEBSITE SHOULD NOT JUST <b>EXIST.</b></p><span>→</span><p>IT SHOULD <b>WORK.</b></p><span>→</span><p>IT SHOULD <b>SELL.</b></p>
      </section>

      <section className="cu-section cu-proof-section">
        <div className="cu-section-label">THE PROBLEM</div>
        <h2>Most Pakistani business websites<br /><em>look like websites.</em></h2>
        <p className="cu-section-intro">But they don't actually help the visitor make a decision.</p>
        <div className="cu-problem-cards">
          <article><span>01</span><h3>Too much information.</h3><p>Services, paragraphs and buttons everywhere — but no clear answer to the question: “Why should I choose you?”</p></article>
          <article><span>02</span><h3>Generic positioning.</h3><p>Same template. Same stock sections. Same “Welcome to our company” messaging that could belong to anyone.</p></article>
          <article><span>03</span><h3>No customer journey.</h3><p>The visitor lands, scrolls, gets confused and leaves. There is no deliberate path from attention to action.</p></article>
        </div>
      </section>

      <section id="solution" className="cu-green-section">
        <div className="cu-section cu-solution-grid">
          <div><div className="cu-section-label dark">THE COOL URLS APPROACH</div><h2>Not a prettier website.<br /><em>A better way to get chosen.</em></h2></div>
          <div><p>Cool URLs combines conversion psychology, clear messaging, premium design and a deliberate customer journey into one focused page.</p><div className="cu-flow"><b>ATTENTION</b><ArrowRight /><b>UNDERSTANDING</b><ArrowRight /><b>TRUST</b><ArrowRight /><b>ACTION</b></div></div>
        </div>
      </section>

      <section className="cu-section cu-features">
        <div className="cu-section-label">WHAT YOU GET</div>
        <h2>Everything on the page<br /><em>has a purpose.</em></h2>
        <p className="cu-section-intro">No filler sections. No “because every website needs an About page.” Every element earns its place.</p>
        <div className="cu-feature-list">
          {features.map(([num, title, text]) => <article key={num}><div className="cu-feature-number">{num}</div><div className="cu-feature-copy"><h3>{title}</h3><p>{text}</p></div><div className="cu-feature-arrow">↗</div></article>)}
        </div>
      </section>

      <section id="process" className="cu-process-section">
        <div className="cu-section cu-process">
          <div className="cu-section-label">HOW IT WORKS</div>
          <h2>From “I need a website”<br /><em>to “this actually works.”</em></h2>
          <div className="cu-steps">
            {[['01','Book your call','Start with PKR 1,000 and choose a time for your sales call.'],['02','Tell us about your business','We learn what you sell, who you serve, what makes you different and what action you want visitors to take.'],['03','See the direction','We show you the thinking, structure and creative direction behind a Cool URLs page for your business.'],['04','Get it built','If you are convinced, pay the remaining PKR 4,000 and we move forward with the website.']].map(([n,t,d]) => <div className="cu-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="cu-section cu-objection">
        <div className="cu-objection-card"><div><div className="cu-section-label dark">WHY THIS MODEL?</div><h2>You're not paying<br />PKR 5,000 <em>blind.</em></h2></div><div><p>Book the conversation for PKR 1,000. See the quality, understand the direction and decide with confidence.</p><div className="cu-price-stack"><strong>PKR 5,000</strong><span>Total</span><hr /><b>PKR 1,000</b><span>To book</span><b>PKR 4,000</b><span>After the meeting</span></div></div></div>
      </section>

      <section id="faq" className="cu-section cu-faq-section">
        <div><div className="cu-section-label">QUESTIONS</div><h2>Before you<br /><em>book.</em></h2><p>Everything you probably want to know before taking the first step.</p></div>
        <div className="cu-faq-list">{faqs.map(([q,a],i) => <div className={openFaq === i ? "cu-faq open" : "cu-faq"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span>{openFaq === i ? <X size={18} /> : <ChevronDown size={18} />}</button>{openFaq === i && <p>{a}</p>}</div>)}</div>
      </section>

      <section id="book" className="cu-final">
        <div className="cu-final-inner">
          <div className="cu-section-label dark">READY TO STOP SETTLING?</div>
          <h2>Your website should be<br /><em>your best salesperson.</em></h2>
          <p>Give your business a page that does more than sit online. Make it easier for the right customer to say yes.</p>
          <button className="cu-black-button" onClick={() => window.location.href = "#contact"}>Book My Sales Call <ArrowRight size={18} /></button>
          <div className="cu-final-price"><strong>PKR 5,000</strong><span>PKR 1,000 to book • PKR 4,000 after the meeting</span></div>
        </div>
      </section>

      <footer id="contact" className="cu-footer">
        <div className="cu-section cu-footer-inner"><div><img src="/cool-urls-logo.svg" alt="Cool URLs" /><p>High-converting websites for Pakistani businesses.</p></div><div className="cu-footer-links"><button onClick={() => goTo("solution")}>What we do</button><button onClick={() => goTo("process")}>How it works</button><button onClick={() => goTo("faq")}>FAQs</button><button onClick={() => goTo("book")}>Book a call</button></div></div>
        <div className="cu-section cu-footer-bottom"><span>© 2026 Cool URLs</span><span>MAKE WEBSITES GREAT AGAIN.</span></div>
      </footer>
    </main>
  );
}
