import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Menu, X, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    number: "01",
    title: "Conversion-first structure",
    text: "Your page is organized around the questions, desires, objections, and decisions that move a visitor toward action.",
    visual: "RESULT → PROOF → PROBLEM → SOLUTION",
  },
  {
    number: "02",
    title: "No template thinking",
    text: "We start from your business, offer, audience, and customer journey — not from a pre-made website layout.",
    visual: "YOUR BUSINESS ≠ SOMEONE ELSE'S TEMPLATE",
  },
  {
    number: "03",
    title: "Built to make sense fast",
    text: "Clear hierarchy, sharp messaging, and purposeful visuals help visitors understand what you do without hunting for answers.",
    visual: "WHAT → WHY → PROOF → NEXT",
  },
  {
    number: "04",
    title: "Premium visual direction",
    text: "A strong first impression matters. We create a visual system that makes your business look credible, modern, and worth choosing.",
    visual: "LOOK GOOD. FEEL TRUSTED. GET CHOSEN.",
  },
  {
    number: "05",
    title: "Mobile-first experience",
    text: "Your customers are on their phones. The experience is designed to feel intentional on small screens, not like a squeezed desktop page.",
    visual: "MOBILE IS NOT THE AFTERTHOUGHT",
  },
  {
    number: "06",
    title: "Built around one action",
    text: "Calls, WhatsApp, bookings, purchases, enquiries — the page is designed around the action that actually matters to your business.",
    visual: "ATTENTION → ACTION",
  },
];

const faqs = [
  ["Is this a normal website?", "No. Cool URLs is focused on conversion-first landing pages and business websites. The design and structure are built around turning the right visitors into enquiries, bookings, or customers — not simply filling pages with information."],
  ["Why only PKR 5,000?", "We are making high-quality conversion-focused websites accessible to Pakistani businesses. The first step is a PKR 1,000 booking payment. The remaining PKR 4,000 is paid after the sales meeting once you are convinced by the quality and direction."],
  ["Do you use templates?", "We use proven conversion principles, but we do not treat your business like a template. Your positioning, offer, customer journey, visuals, and calls-to-action shape the page."],
  ["Do I need to provide all the content?", "No. You can give us the information you have. We can help turn your raw business information into a clear conversion-focused page. Additional assets and details can be added as the project develops."],
  ["Can you build a website for any type of business?", "Yes. Cool URLs is designed for Pakistani business owners across industries. The strategy changes depending on whether the business sells services, products, appointments, memberships, or another offer."],
  ["What happens after I book?", "You pay PKR 1,000 to book your sales call. We use the meeting to understand your business, show you the direction, and answer your questions. If you are convinced, the remaining PKR 4,000 completes the package."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="cu-site">
      <nav className="cu-nav">
        <button className="cu-brand" onClick={() => goTo("top")} aria-label="Cool URLs home">
          <span className="cu-brand-mark">◒</span>
          <span>COOL URLS</span>
        </button>
        <div className={`cu-nav-links ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => goTo("why")}>Why Cool URLs</button>
          <button onClick={() => goTo("how")}>How it works</button>
          <button onClick={() => goTo("faq")}>FAQ</button>
          <button className="cu-nav-cta" onClick={() => goTo("book")}>Book a call <ArrowRight size={15} /></button>
        </div>
        <button className="cu-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section id="top" className="cu-hero cu-section">
        <div className="cu-hero-copy">
          <div className="cu-eyebrow"><span className="cu-dot" /> FOR PAKISTANI BUSINESS OWNERS</div>
          <h1>Get customers<br /><span>without convincing them.</span></h1>
          <p className="cu-hero-sub">We turn ordinary business websites into high-converting pages that make the right people understand, trust, and choose you.</p>
          <div className="cu-actions">
            <button className="cu-btn cu-btn-lime" onClick={() => goTo("book")}>Make My Website Cool <ArrowRight size={18} /></button>
            <button className="cu-text-btn" onClick={() => goTo("why")}>See how it works <ArrowRight size={16} /></button>
          </div>
          <div className="cu-trust-row">
            <span>PKR 5,000</span><i /> <span>PKR 1,000 to book</span><i /> <span>Built for Pakistan</span>
          </div>
        </div>

        <div className="cu-hero-visual" aria-label="Conversion-focused website visual">
          <div className="cu-window">
            <div className="cu-window-top"><span /><span /><span /><b>yourbusiness.pk</b></div>
            <div className="cu-mock-body">
              <div className="cu-mock-label">THE FIRST 5 SECONDS MATTER</div>
              <div className="cu-mock-title">A website with<br /><em>a job to do.</em></div>
              <div className="cu-mock-copy">Clear offer. Strong proof. Less friction. One obvious next step.</div>
              <div className="cu-mock-button">GET MORE CUSTOMERS <ArrowRight size={13} /></div>
              <div className="cu-mock-grid"><span>01 / ATTENTION</span><span>02 / TRUST</span><span>03 / ACTION</span></div>
            </div>
          </div>
          <div className="cu-float cu-float-one"><span>+ CRO</span><small>conversion focused</small></div>
          <div className="cu-float cu-float-two"><Zap size={15} /> NO TEMPLATES</div>
        </div>
      </section>

      <section className="cu-proof-strip">
        <div>YOUR WEBSITE SHOULD NOT JUST <strong>EXIST.</strong></div>
        <div>IT SHOULD <strong>WORK.</strong></div>
        <div>IT SHOULD <strong>SELL.</strong></div>
      </section>

      <section id="why" className="cu-section cu-dark-section">
        <div className="cu-section-head">
          <div className="cu-eyebrow"><span className="cu-dot" /> THE PROBLEM</div>
          <h2>Most business websites<br /><span>are doing nothing.</span></h2>
          <p>They look like websites. They don't behave like salespeople.</p>
        </div>
        <div className="cu-problem-grid">
          <div className="cu-problem-card"><span>01</span><h3>“Here are our services.”</h3><p>A list doesn't create desire. Your customer needs to see why the service matters to them.</p></div>
          <div className="cu-problem-card"><span>02</span><h3>“We've been in business since…”</h3><p>Credibility helps, but credibility without a compelling reason to act still leaves the visitor thinking.</p></div>
          <div className="cu-problem-card"><span>03</span><h3>“Contact us.”</h3><p>One generic button is not a customer journey. The next step should feel obvious and low-friction.</p></div>
        </div>
        <div className="cu-transition"><span>SO WE BUILT A BETTER WAY.</span><ArrowDown /></div>
      </section>

      <section className="cu-section cu-lime-section">
        <div className="cu-results-layout">
          <div>
            <div className="cu-eyebrow cu-eyebrow-dark"><span className="cu-dot-dark" /> THE SOLUTION</div>
            <h2>Not a prettier website.<br /><span>A better customer journey.</span></h2>
          </div>
          <div className="cu-results-copy">
            <p>Cool URLs combines sharp positioning, persuasive copy, intentional design, proof, and conversion psychology into one page built around your business.</p>
            <div className="cu-result-statement"><b>ATTENTION</b><ArrowRight /><b>UNDERSTANDING</b><ArrowRight /><b>TRUST</b><ArrowRight /><b>ACTION</b></div>
          </div>
        </div>
      </section>

      <section className="cu-section cu-features-section">
        <div className="cu-section-head centered">
          <div className="cu-eyebrow"><span className="cu-dot" /> WHAT YOU GET</div>
          <h2>Everything on the page<br /><span>has a purpose.</span></h2>
          <p>Six building blocks. One job: make your website easier to choose.</p>
        </div>
        <div className="cu-feature-grid">
          {features.map((feature) => (
            <article className="cu-feature-card" key={feature.number}>
              <div className="cu-feature-top"><span>{feature.number}</span><ArrowUpRight /></div>
              <div className="cu-feature-visual">{feature.visual}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="cu-section cu-dark-section cu-how-section">
        <div className="cu-section-head centered">
          <div className="cu-eyebrow"><span className="cu-dot" /> HOW IT WORKS</div>
          <h2>Four steps.<br /><span>Zero website headache.</span></h2>
        </div>
        <div className="cu-steps">
          {[
            ["01", "Book your call", "Put down PKR 1,000 and choose a time for your sales call."],
            ["02", "Show us your business", "We learn what you sell, who you sell to, and what you want the website to achieve."],
            ["03", "See the direction", "We show you the thinking behind the page and how we would turn your website into a conversion journey."],
            ["04", "Get it built", "If you're convinced, pay the remaining PKR 4,000 and we move forward with the website."],
          ].map(([num, title, text]) => (
            <div className="cu-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>
          ))}
        </div>
      </section>

      <section id="faq" className="cu-section cu-faq-section">
        <div className="cu-faq-intro"><div className="cu-eyebrow"><span className="cu-dot" /> QUESTIONS</div><h2>Still thinking<br /><span>about it?</span></h2><p>Good. Here's what you probably want to know.</p></div>
        <div className="cu-faq-list">
          {faqs.map(([question, answer], i) => (
            <div className={`cu-faq ${openFaq === i ? "open" : ""}`} key={question}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{question}</span>{openFaq === i ? <X size={19} /> : <ChevronDown size={19} />}</button>
              {openFaq === i && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="cu-section cu-final-section">
        <div className="cu-final-card">
          <div className="cu-final-main">
            <div className="cu-eyebrow cu-eyebrow-dark"><span className="cu-dot-dark" /> READY WHEN YOU ARE</div>
            <h2>Your website could be<br /><span>your best salesperson.</span></h2>
            <p>Stop sending customers to a website that just sits there. Give it a job.</p>
            <button className="cu-btn cu-btn-black" onClick={() => window.location.href = "#contact"}>Book My Sales Call <ArrowRight size={18} /></button>
          </div>
          <div className="cu-price-card"><div className="cu-price-label">COOL URLS / STARTING OFFER</div><div className="cu-price">PKR 5,000</div><div className="cu-price-line"><Check size={15} /> PKR 1,000 to book</div><div className="cu-price-line"><Check size={15} /> PKR 4,000 after the meeting</div><div className="cu-price-line"><Check size={15} /> Conversion-first website</div></div>
        </div>
      </section>

      <footer className="cu-footer" id="contact">
        <div className="cu-footer-brand"><div className="cu-footer-logo">COOL URLS<span>Make Websites Great Again</span></div><p>High-converting websites for Pakistani businesses.</p></div>
        <div className="cu-footer-links"><button onClick={() => goTo("why")}>Why Cool URLs</button><button onClick={() => goTo("how")}>How it works</button><button onClick={() => goTo("faq")}>FAQ</button><button onClick={() => goTo("book")}>Book a call</button></div>
        <div className="cu-footer-bottom"><span>© 2026 Cool URLs</span><span>BUILT FOR BUSINESSES THAT WANT TO GROW.</span></div>
      </footer>
    </main>
  );
}

function ArrowDown() { return <span className="cu-arrow-down">↓</span>; }
function ArrowUpRight() { return <span className="cu-arrow-up-right">↗</span>; }
