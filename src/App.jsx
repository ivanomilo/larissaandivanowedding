import './App.css'
import { TwoPanelSection } from './components/Section'

// ─── Theme ───────────────────────────────────────────────────────────────────
const c = {
  gold:        '#BC9346',
  slate:       '#697F87',
  slateHover:  '#7C959E',
  olive:       '#747256',
  tan:         '#BCB196',
  textDark:    '#2C2A1E',
  textLight:   '#FAF7F0',
  textSubtle:  '#EDE8D8',
  // cardBg:      '#F0EBD8',
  cardBg: 'rgba(250, 247, 240, 0.85)',  // adjust the last value (0–1)

  cardBgAccent: '#697F87',
  overlay:     'radial-gradient(ellipse 70% 50% at 50% 35%, rgba(0,0,0,0.28) 0%, transparent 100%)',
}

const s = {
  label:      { color: c.gold      },
  title:      { color: c.textDark  },
  subtitle:   { color: c.olive     },
  heroTitle:  { color: c.textLight },
  heroSub:    { color: c.textSubtle},
  divider:    { backgroundColor: c.gold },
  dividerTxt: { color: c.gold },
  rowBorder:  { borderBottom: `1px solid ${c.tan}` },
  card:       { backgroundColor: c.cardBg,      border: `1px solid ${c.gold}`,   color: c.textDark,   },
  cardAccent: { backgroundColor: c.cardBgAccent, border: `1.5px solid ${c.gold}`, color: c.textLight },
  button:     { backgroundColor: c.slate, border: `1.5px solid ${c.gold}`, color: c.textLight },
  navLink:    { color: c.textSubtle },
  warning:    { color: c.gold },
  link:       { color: c.textDark, textDecoration: 'underline', textUnderlineOffset: '3px' },
}

const hover = {
  over: (e) => (e.currentTarget.style.backgroundColor = c.slateHover),
  out:  (e) => (e.currentTarget.style.backgroundColor = c.slate),
}
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const hamptonUrl = "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHABRHX&groupCode=CHH90T&arrivaldate=2026-09-04&departuredate=2026-09-06&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT";

  return (
    <div className="w-full m-auto bg-[url('/websitebg.jpeg')] bg-top bg-[length:150%_auto] md:bg-cover">

      {/* Subtle radial overlay so hero text pops */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: c.overlay }} />

      <div className="relative flex flex-col w-full m-auto justify-center pt-[20%]">

        {/* Hero title */}
        <div className="flex m-auto text-3xl font-semibold tracking-wide" style={s.heroTitle}>
          Larissa &amp; Ivano
        </div>
        <div className="flex m-auto text-xl mt-1 font-light" style={s.heroSub}>
          September 5, 2026 — Ellijay, GA
        </div>

        {/* RSVP Button */}
        <button
          className="text-sm my-3 w-fit px-6 py-2 rounded m-auto uppercase tracking-widest transition-colors"
          style={s.button}
          onMouseOver={hover.over}
          onMouseOut={hover.out}
        >
          <a target="_blank" href="https://forms.gle/YNsd6cj9RvLKqFi19">RSVP</a>
        </button>

        {/* Nav */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row m-auto gap-1">
            <a href="#where" className="m-2 text-sm underline underline-offset-4" style={s.navLink}>
              Where &amp; When
            </a>
            <a href="#travel" className="m-2 text-sm underline underline-offset-4" style={s.navLink}>
              Travel &amp; Accommodations
            </a>
          </div>
        </div>

        {/* Content sections */}
        <div className="md:w-[66%] m-auto">

          {/* WHERE & WHEN */}
          <TwoPanelSection
            className="md: mt-[50%]"
            id="where"
            leftBigger={true}
            leftContent={
              <div
                className="flex flex-col items-center text-center gap-6 py-6 font-light rounded-lg p-6"
                style={s.card}
              >
                <div className="flex flex-col gap-1">
                  <p className="uppercase tracking-widest text-xs" style={s.label}>Location</p>
                  <p className="text-xl font-semibold" style={s.title}>The Falls at Blue Ridge</p>
                  <p className="text-sm" style={s.subtitle}>1654 Old Northcutt Rd, Ellijay, GA 30536</p>
                </div>

                <div className="flex items-center gap-3 w-40">
                  <div className="flex-1 h-px" style={s.divider} />
                  <span className="text-xs" style={s.dividerTxt}>◈</span>
                  <div className="flex-1 h-px" style={s.divider} />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="uppercase tracking-widest text-xs" style={s.label}>Date</p>
                  <p className="text-xl font-semibold" style={s.title}>Saturday, September 5, 2026</p>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <p className="uppercase tracking-widest text-xs" style={s.label}>Schedule</p>
                  {[
                    { label: "Arrive By",          time: "4:15 – 4:45 PM"  },
                    { label: "Ceremony",            time: "5:00 – 5:30 PM"  },
                    { label: "Cocktail Hour",       time: "5:30 – 6:30 PM"  },
                    { label: "Dinner & Reception",  time: "6:30 – 11:00 PM" },
                  ].map(({ label, time }) => (
                    <div key={label} className="flex justify-between items-center pb-2" style={s.rowBorder}>
                      <span className="text-sm font-medium" style={s.title}>{label}</span>
                      <span className="text-xs tracking-wide" style={s.subtitle}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
            rightContent={<></>}
          />

          {/* DRESS CODE */}
          <TwoPanelSection
            leftBigger={false}
            rightContent={
              <div className="flex flex-col items-center text-center gap-2 py-4 rounded-lg p-6" style={s.card}>
                <p className="uppercase tracking-widest text-xs" style={s.label}>Dress Code</p>
                <p className="text-xl font-semibold" style={s.title}>Garden Cocktail</p>
              </div>
            }
            leftContent={<></>}
          />

          {/* TRAVEL & ACCOMMODATIONS */}
          <TwoPanelSection
            id="travel"
            leftBigger={false}
            rightContent={
              <div
                className="flex flex-col items-center text-center gap-6 py-6 font-light rounded-lg p-6"
                style={s.card}
              >
                <div className="flex flex-col gap-1">
                  <p className="uppercase tracking-widest text-xs" style={s.label}>Places to Stay</p>
                  <p className="text-xs font-medium" style={s.warning}>Book ASAP — this is a holiday weekend!</p>
                </div>

                {/* Room Block — accent card */}
                <div className="flex flex-col gap-2 w-full max-w-xs rounded-lg p-4" style={s.cardAccent}>
                  <p className="uppercase tracking-widest text-xs" style={s.textLight}>Room Block</p>
                  <p className="text-lg font-semibold" style={{ color: c.textLight }}>Hampton Inn Blue Ridge</p>
                  <p className="text-sm" style={{ color: c.textSubtle }}>50 West Main Street, Blue Ridge, GA 30513</p>
                  <p className="text-sm" style={{ color: c.textSubtle }}>706.642.9001</p>
                  <a
                    href={hamptonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs uppercase tracking-widest py-2 px-4 rounded transition-colors"
                    style={s.button}
                    onMouseOver={hover.over}
                    onMouseOut={hover.out}
                  >
                    Book Your Room
                  </a>
                </div>

                <div className="flex items-center gap-3 w-40">
                  <div className="flex-1 h-px" style={s.divider} />
                  <span className="text-xs" style={s.dividerTxt}>◈</span>
                  <div className="flex-1 h-px" style={s.divider} />
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <p className="uppercase tracking-widest text-xs" style={s.label}>Other Options</p>
                  {[
                    { name: "Blue Ridge Inn Bed and Breakfast",  url: "https://blueridgeinnbandb.com" },
                    { name: "Comfort Inn and Suites Blue Ridge", url: "https://www.reservationdesk.com/hotel/602a4a1/the-blue-ridge-lodge-by-comfort-inn-suites-blue-ridge-ga/" },
                    { name: "Blue Sky Cabin Rentals",            url: "https://www.blueskycabinrentals.com" },
                  ].map((place) => (
                    <div key={place.name} className="pb-2 text-sm" style={s.rowBorder}>
                      <a href={place.url} target="_blank" style={s.link}>{place.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            }
            leftContent={<></>}
          />

          {/* REGISTRY */}
          <TwoPanelSection
            leftBigger={false}
            leftContent={<></>}
            rightContent={
              <div className="flex flex-col items-center text-center gap-2 py-4 rounded-lg p-6" style={s.card}>
                <button
                  className="text-sm uppercase tracking-widest w-fit px-6 py-2 transition-colors"
                  style={s.button}
                  onMouseOver={hover.over}
                  onMouseOut={hover.out}
                >
                  Registry
                </button>
              </div>
            }
          />

        </div>
      </div>
    </div>
  )
}

export default App