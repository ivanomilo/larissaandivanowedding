import './App.css'
import { TwoPanelSection } from './components/Section'

function App() {
  
  const hamptonUrl = "https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHABRHX&groupCode=CHH90T&arrivaldate=2026-09-04&departuredate=2026-09-06&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT";
  return (
    <div className="w-full m-auto bg font-">
      <div className="flex flex-col w-full m-auto justify-center">
        <div className="flex m-auto text-3xl"> Larissa & Ivano </div>
        <div className="flex m-auto text-xl"> September 5, 2026 - Elijay, GA</div>
        <button className="text-xl my-2 bg-[#505B32] border-2 border-[#A4AB5C] w-fit px-5 py-2 text-[#D6D8A2] m-auto"><a target="_blank" href="https://forms.gle/YNsd6cj9RvLKqFi19">RSVP</a></button>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row m-auto">
            <a href="#where" className="m-2">Where & When</a>
            <a href="#travel" className="m-2">Travel & Accomodations</a>
          </div>
        </div>
        <div className="w-1/2 m-auto"> 
          <TwoPanelSection
           id="where"
           leftBigger={true}
            leftContent={
              <div className="flex flex-col items-center text-center gap-6 py-6 font-light">

              {/* Location */}
              <div className="flex flex-col gap-1">
                <p className="uppercase tracking-widest text-xs text-stone-400">Location</p>
                <p className="text-xl font-semibold text-stone-800">The Falls at Blue Ridge</p>
                <p className="text-sm text-stone-500">1654 Old Northcutt Rd, Ellijay, GA 30536</p>
              </div>
            
              {/* Divider */}
              <div className="flex items-center gap-3 w-40">
                <div className="flex-1 h-px bg-stone-300" />
                <span className="text-stone-300 text-xs">◈</span>
                <div className="flex-1 h-px bg-stone-300" />
              </div>
            
              {/* Date */}
              <div className="flex flex-col gap-1">
                <p className="uppercase tracking-widest text-xs text-stone-400">Date</p>
                <p className="text-xl font-semibold text-stone-800">Saturday, September 5, 2026</p>
              </div>
            
              {/* Schedule */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <p className="uppercase tracking-widest text-xs text-stone-400">Schedule</p>
                {[
                  { label: "Arrive By", time: "4:15 - 4:45 PM"},
                  { label: "Ceremony",            time: "5:00 – 5:30 PM"  },
                  { label: "Cocktail Hour",       time: "5:30 – 6:30 PM"  },
                  { label: "Dinner & Reception",  time: "6:30 – 11:00 PM" },
                ].map(({ label, time }) => (
                  <div key={label} className="flex justify-between items-center border-b border-stone-100 pb-2">
                    <span className="text-stone-700 font-medium text-sm">{label}</span>
                    <span className="text-stone-400 text-xs tracking-wide">{time}</span>
                  </div>
                ))}
              </div>
            
            </div>
            }
            rightContent={
              <img className="w-fit" src='/kitty.jpeg'></img>
            }
            ></TwoPanelSection>
        
        <TwoPanelSection
           leftBigger={false}
            leftContent={
              <img className="w-fit" src='/kitty.jpeg'></img>
             
            }
            rightContent={
              <div className="flex flex-col items-center text-center gap-2 py-4">
                <p className="uppercase tracking-widest text-xs text-stone-400">Dress Code</p>
                <p className="text-xl font-semibold text-stone-800">Garden Cocktail</p>
              </div>
            }
            ></TwoPanelSection>
       <TwoPanelSection
            id="travel"
           leftBigger={true}
            leftContent={
              

                <div className="flex flex-col items-center text-center gap-6 py-6 font-light">
              
                  <div className="flex flex-col gap-1">
                    <p className="uppercase tracking-widest text-xs text-stone-400">Places to Stay</p>
                    <p className="text-xs text-amber-600 font-medium">Book ASAP — this is a holiday weekend!</p>
                  </div>
              
                  <div className="flex flex-col gap-2 w-full max-w-xs bg-stone-50 border border-stone-200 rounded-lg p-4">
                    <p className="uppercase tracking-widest text-xs text-stone-400">Room Block</p>
                    <p className="text-lg font-semibold text-stone-800">Hampton Inn Blue Ridge</p>
                    <p className="text-sm text-stone-500">50 West Main Street, Blue Ridge, GA 30513</p>
                    <p className="text-sm text-stone-500">706.642.9001</p>
                    <a href={hamptonUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-1 inline-block bg-stone-800 text-white text-xs uppercase tracking-widest py-2 px-4 rounded hover:bg-stone-700 transition-colors">
                      Book Your Room
                    </a>
                  </div>
              
                  <div className="flex items-center gap-3 w-40">
                    <div className="flex-1 h-px bg-stone-300" />
                    <span className="text-stone-300 text-xs">◈</span>
                    <div className="flex-1 h-px bg-stone-300" />
                  </div>
              
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <p className="uppercase tracking-widest text-xs text-stone-400">Other Options</p>
                    {[
                      {name: "Blue Ridge Inn Bed and Breakfast", url: "https://blueridgeinnbandb.com"},
                      {name: "Comfort Inn and Suites Blue Ridge", url: "https://www.reservationdesk.com/hotel/602a4a1/the-blue-ridge-lodge-by-comfort-inn-suites-blue-ridge-ga/?cid=sem::TPRD::AW::Reservation_Desk_US_South_Georgia_Central_Georgia::US_Georgia_Blue_Ridge_Comfort_Inn_&_Suites_did-602a4a1_100836513::comfort%20inn%20blue%20ridge%20ga::e&creative=611417188500&device=c&AdPos=&utm_source=google&utm_medium=cpc&utm_term=comfort%20inn%20blue%20ridge%20ga&utm_campaign=Reservation_Desk_US_South_Georgia_Central_Georgia&iv_=__iv_p_1_a_809083804_g_60506285499_w_kwd-327941837444_h_9052147_ii__d_c_v__n_g_c_611417188500_k_comfort%20inn%20blue%20ridge%20ga_m_e_l__t__e__r__vi__&gad_source=1&gad_campaignid=809083804&gbraid=0AAAAADfFhbKYaaDOJlu4liu4OJKfn3tVo"},
                      {name: "Blue Sky Cabin Rentals", url: "https://www.blueskycabinrentals.com"}
                    ].map((place) => (
                      <div key={place.name} className="border-b border-stone-100 pb-2 text-sm text-stone-700">
                        <a href={place.url} target="_blank"> {place.name} </a>
                      </div>
                    ))}
                  </div>
              
                </div>
              
            }
            rightContent={
              <img className="w-fit" src='/kitty.jpeg'></img>
            }
            ></TwoPanelSection>

         <TwoPanelSection
           leftBigger={false}
            leftContent={
              <img className="w-fit" src='/kitty.jpeg'></img>
             
            }
            rightContent={
              <div className="flex flex-col items-center text-center gap-2 py-4">
                <button className="bg-[#505B32] border-2 border-[#A4AB5C] w-fit px-5 py-2 text-[#D6D8A2] m-auto">Registry</button>
              </div>
            }
            ></TwoPanelSection> 
        </div>
      </div> 
    </div>
  )
}

export default App
