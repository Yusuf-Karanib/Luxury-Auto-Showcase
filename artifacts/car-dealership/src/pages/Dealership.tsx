import { useState } from "react";

const VEHICLES = [
  {
    id: 1,
    make: "Lamborghini",
    name: "Huracán EVO",
    trim: "Spyder · RWD · Sensonum Audio",
    price: "$285,000",
    year: "2023",
    km: "3,200 km",
    badge: "New Arrival",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&auto=format&fit=crop&q=80",
    category: "Sports",
  },
  {
    id: 2,
    make: "Ferrari",
    name: "F8 Tributo",
    trim: "Coupe · Carbon Pack · Racing Seats",
    price: "$340,000",
    year: "2022",
    km: "8,750 km",
    badge: "Featured",
    badgeType: "featured",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&auto=format&fit=crop&q=80",
    category: "Hypercars",
  },
  {
    id: 3,
    make: "McLaren",
    name: "720S Spider",
    trim: "Performance Pack · MSO Livery",
    price: "$320,000",
    year: "2023",
    km: "5,100 km",
    badge: "Certified",
    badgeType: "certified",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    category: "GT & Touring",
  },
];

const FILTERS = ["All Vehicles", "Sports", "Hypercars", "GT & Touring", "Certified Pre-Owned"];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GaugeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12" /><path d="M22 12C22 6.48 17.52 2 12 2" /><path d="M12 22C17.52 22 22 17.52 22 12" /><path d="M2 12C2 17.52 6.48 22 12 22" /><path d="M12 12l3.5-3.5" />
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default function Dealership() {
  const [activeFilter, setActiveFilter] = useState("All Vehicles");
  const [chatOpen, setChatOpen] = useState(true);

  const filtered = activeFilter === "All Vehicles"
    ? VEHICLES
    : VEHICLES.filter(v => v.category === activeFilter);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#000", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#fff", borderBottom: "1px solid #E8E8E8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 72,
      }}>
        <a href="#" style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.18em", color: "#000", textDecoration: "none", textTransform: "uppercase" }}>
          APEX<span style={{ color: "#D4AF37" }}>·</span>MOTORS
        </a>
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
          {["Inventory", "New Arrivals", "Finance", "About"].map(link => (
            <li key={link}>
              <a href="#" style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#000", textDecoration: "none" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", cursor: "pointer" }}>
            <span style={{ color: "#000", fontWeight: 700 }}>EN</span>
            <span style={{ color: "#E8E8E8", margin: "0 4px" }}>|</span>
            <span style={{ color: "#888" }}>AR</span>
          </span>
          <a href="#" style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#fff", background: "#000", padding: "10px 24px", textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#D4AF37")}
            onMouseLeave={e => (e.currentTarget.style.background = "#000")}
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "88vh", minHeight: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&auto=format&fit=crop&q=80')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 64px 72px" }}>
          <div style={{
            display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#D4AF37", border: "1px solid #D4AF37",
            padding: "5px 14px", marginBottom: 20,
          }}>
            2024 Premium Collection
          </div>
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 84px)", fontWeight: 900, letterSpacing: "-0.02em",
            lineHeight: 1, color: "#fff", textTransform: "uppercase", margin: "0 0 24px",
          }}>
            Drive Beyond<br /><span style={{ color: "#D4AF37" }}>The Ordinary</span>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.7)", maxWidth: 480, lineHeight: 1.6, marginBottom: 36 }}>
            Curated exotic and ultra-luxury vehicles for discerning collectors. Every car tells a story — find yours.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="#inventory" style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#000", background: "#D4AF37", padding: "16px 36px", textDecoration: "none", display: "inline-block",
            }}
              onClick={e => { e.preventDefault(); document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Explore Inventory
            </a>
            <a href="#" style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#fff", background: "transparent", padding: "15px 36px",
              border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block",
            }}>
              Book a Test Drive
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {[
          { number: "340+", label: "Vehicles in Stock" },
          { number: "18", label: "Luxury Brands" },
          { number: "12K+", label: "Happy Clients" },
          { number: "15", label: "Years of Excellence" },
        ].map((stat, i) => (
          <div key={i} style={{
            flex: 1, maxWidth: 260, textAlign: "center", padding: "28px 24px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <div style={{ fontSize: 30, fontWeight: 900, color: "#D4AF37", letterSpacing: "-0.02em" }}>{stat.number}</div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── BRANDS STRIP ── */}
      <div style={{ background: "#F7F7F7", padding: "48px", textAlign: "center", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: 28 }}>
          Authorized Dealer For
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
          {["Lamborghini", "Ferrari", "Porsche", "Bugatti", "McLaren", "Bentley", "Rolls-Royce"].map(brand => (
            <span key={brand} style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#bbb", cursor: "pointer" }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ── INVENTORY ── */}
      <section style={{ padding: "96px 48px" }} id="inventory">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 14 }}>
            Featured Collection
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1 }}>
            Hand-Picked Vehicles
          </h2>
          <p style={{ fontSize: 15, color: "#888", marginTop: 14, lineHeight: 1.6, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Each vehicle is meticulously inspected, certified, and selected for its exceptional performance and provenance.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 52, flexWrap: "wrap" }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              color: activeFilter === f ? "#000" : "#888",
              background: "transparent",
              border: `1px solid ${activeFilter === f ? "#000" : "#E8E8E8"}`,
              padding: "9px 22px", cursor: "pointer", transition: "all 0.2s",
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, maxWidth: 1280, margin: "0 auto" }}>
          {(filtered.length > 0 ? filtered : VEHICLES).map(car => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#000", background: "transparent", border: "2px solid #D4AF37",
            padding: "16px 52px", display: "inline-block", textDecoration: "none", transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#D4AF37"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            View All Inventory
          </a>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "#000", padding: "96px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 14 }}>
            The Apex Difference
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            Why Choose Us
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginTop: 14, lineHeight: 1.6, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            We don't just sell cars — we curate experiences and build lasting relationships with our clients.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, maxWidth: 1100, margin: "56px auto 0" }}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: "Certified Quality",
              desc: "Every vehicle undergoes a rigorous 150-point inspection by manufacturer-trained technicians.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
              title: "Bespoke Financing",
              desc: "Tailored financing solutions designed around your lifestyle, with competitive rates and flexible terms.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              title: "White-Glove Delivery",
              desc: "We deliver your vehicle anywhere in the world, fully documented and prepared to your specification.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              title: "Private Concierge",
              desc: "Dedicated personal advisors available 24/7 to assist with every aspect of your ownership journey.",
            },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: 56, height: 56, border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                {item.icon}
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 10 }}>{item.title}</p>
              <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{ position: "relative", padding: "96px 48px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 640 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 14 }}>Private Showroom</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            Experience It In Person
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 14, lineHeight: 1.6 }}>
            Schedule an exclusive private viewing at our showroom or request an at-home consultation at your convenience.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
            <a href="#" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#000", background: "#D4AF37", padding: "16px 36px", textDecoration: "none", display: "inline-block" }}>
              Book Appointment
            </a>
            <a href="#" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", background: "transparent", padding: "15px 36px", border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block" }}>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#000", padding: "64px 48px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", marginBottom: 12 }}>
              APEX<span style={{ color: "#D4AF37" }}>·</span>MOTORS
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: 260, marginBottom: 24 }}>
              The world's most desirable automobiles, meticulously curated for the discerning collector.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                <svg key="ig" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                <svg key="x" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M20 4L4 20" /></svg>,
                <svg key="yt" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
                <svg key="wa" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
              ].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {[
            {
              title: "Inventory",
              links: ["New Vehicles", "Pre-Owned", "Certified CPO", "Special Editions", "Classic Cars"],
            },
            {
              title: "Services",
              links: ["Financing", "Trade-In", "Consignment", "Global Delivery", "Maintenance"],
            },
            {
              title: "Contact",
              links: ["+971 4 000 0000", "info@apexmotors.com", "Dubai, UAE", "Mon–Sat: 9am–8pm"],
            },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20 }}>{col.title}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2024 Apex Motors. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── FLOATING CHAT WIDGET ── */}
      <div style={{ position: "fixed", bottom: 28, left: 28, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
        {chatOpen && (
          <div style={{
            background: "#111", color: "#fff", fontSize: 12, fontWeight: 500,
            padding: "12px 16px", maxWidth: 210, lineHeight: 1.5, position: "relative",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}>
            Hello! Looking for your dream car? I'm here to help.
            <div style={{
              position: "absolute", bottom: -7, left: 18,
              width: 0, height: 0,
              borderLeft: "7px solid transparent",
              borderTop: "7px solid #111",
            }} />
          </div>
        )}
        <div
          onClick={() => setChatOpen(o => !o)}
          style={{
            width: 52, height: 52, background: "#111", border: "2px solid #D4AF37",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            position: "relative", boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          }}
        >
          <ChatIcon />
          <span style={{
            position: "absolute", top: -2, right: -2, width: 12, height: 12,
            background: "#22C55E", borderRadius: "50%", border: "2px solid #fff",
          }} />
        </div>
      </div>
    </div>
  );
}

function VehicleCard({ car }: { car: typeof VEHICLES[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", border: "1px solid #E8E8E8", overflow: "hidden", cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 48px rgba(0,0,0,0.12)" : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Image area — dark background */}
      <div style={{ background: "#111", position: "relative", height: 240, overflow: "hidden" }}>
        <span style={{
          position: "absolute", top: 16, left: 16, zIndex: 2,
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "5px 12px",
          background: car.badgeType === "featured" ? "#000" : "#D4AF37",
          color: car.badgeType === "featured" ? "#D4AF37" : "#000",
          border: car.badgeType === "featured" ? "1px solid #D4AF37" : "none",
        }}>
          {car.badge}
        </span>
        <img
          src={car.image}
          alt={`${car.make} ${car.name}`}
          style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "brightness(1)" : "brightness(0.88)",
            transition: "transform 0.5s ease, filter 0.3s ease",
          }}
          loading="lazy"
        />
      </div>

      {/* Text area — white */}
      <div style={{ background: "#fff", padding: "24px 24px 20px", borderTop: "2px solid #D4AF37" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 6 }}>{car.make}</p>
        <h3 style={{ fontSize: 18, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", color: "#000", lineHeight: 1.1, marginBottom: 6 }}>{car.name}</h3>
        <p style={{ fontSize: 12, fontWeight: 400, color: "#888", marginBottom: 16, letterSpacing: "0.03em" }}>{car.trim}</p>
        <p style={{ fontSize: 22, fontWeight: 800, color: "#000", letterSpacing: "-0.01em", marginBottom: 20 }}>
          {car.price} <span style={{ fontSize: 13, fontWeight: 500, color: "#888" }}>USD</span>
        </p>

        {/* Year + KM row */}
        <div style={{ display: "flex", alignItems: "center", paddingTop: 16, borderTop: "1px solid #E8E8E8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, flex: 1 }}>
            <span style={{ color: "#D4AF37", flexShrink: 0 }}><CalendarIcon /></span>
            <div>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", display: "block" }}>Year</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#000", display: "block", letterSpacing: "0.02em" }}>{car.year}</span>
            </div>
          </div>
          <div style={{ width: 1, height: 28, background: "#E8E8E8", margin: "0 16px", flexShrink: 0 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 7, flex: 1 }}>
            <span style={{ color: "#D4AF37", flexShrink: 0 }}><GaugeIcon /></span>
            <div>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", display: "block" }}>Kilometers</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#000", display: "block", letterSpacing: "0.02em" }}>{car.km}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button style={{
            flex: 1, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#000", background: "#D4AF37", border: "none", padding: "12px 16px", cursor: "pointer",
          }}>
            Request Info
          </button>
          <button style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#000", background: "transparent", border: "1px solid #000", padding: "12px 16px", cursor: "pointer",
          }}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
