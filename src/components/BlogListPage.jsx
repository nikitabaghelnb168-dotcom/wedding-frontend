import React, { useState } from 'react';

const BlogListPage = ({ onBack }) => {
  const [activePostId, setActivePostId] = useState(null);

  const blogs = [
    {
      id: 'triyuginarayan-permit-guide',
      tag: 'POOJA & PERMITS',
      date: 'July 12, 2026',
      title: 'Triyuginarayan Temple: Complete Wedding Guide & Registration Process',
      excerpt: 'Mandir ke niyam, booking process, aur pandit ji ke sath pooja ki taiyari kaise karein—sab kuch aasan shabdon mein taaki aapka dhyan sirf aashirwad lene par rahe.',
      content: (
        <div style={{ fontFamily: "'Jost', sans-serif", color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '25px', fontSize: '17px', fontWeight: '300', color: '#555' }}>
            Pahadon ki god mein, bhagwan Shiva aur Mata Parvati ke pavitra vivah sthal—<strong>Triyuginarayan Temple</strong> mein saat phere lena har ek couple ka sapna hota hai. Agar aap bhi yahan apni destination wedding plan kar rahe hain, toh yeh simple step-by-step guide aapke bohot kaam aane wali hai. Mandir ki booking se le kar pandit ji ki pooja tak, humne sab kuch aasan shabdon mein samjhaya hai.
          </p>
          
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            1. Triyuginarayan Temple Wedding Booking & Registration Kaise Karein? (Step-by-Step)
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Triyuginarayan mandir mein shaadi karne ke liye sabse pehla aur zaroori step hai <strong>Official Registration</strong>. Kyunki yeh ek ancient heritage site hai, isliye yahan ki vyavastha local committee aur administration sambhalti hai.
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Offline / On-Spot Registration:</strong> Mandir complex ke paas Badri-Kedar Temple Committee (BKTC) ya local samiti ka office hota hai. Wahan ja kar aapko ek simple form bharna hota hai.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Zaroori Documents:</strong> Bride aur Groom ke Identification Cards (jaise Identity/Aadhaar details) aur Passport Size Photos. Saath hi dono side ke parents ya witnesses ke ID proofs bhi zaroori hote hain.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Wedding Slots:</strong> Shubh muhoorat aur saal ke bade wedding dates par yahan bohot rush hota hai. Isliye aane se pehle slot ki availability check karna ya hamare coordinators ke through pehle se coordination rakhna best rehta hai.
            </li>
          </ul>

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            2. Mandir Ke Niyam aur Pavitra Akhand Dhuni Ke Phere
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Triyuginarayan Mandir ka har ek kona adhyatmik urja se bhara hai. Yahan shaadi karte waqt kuch khas baaton aur paramparaon ka dhyan rakhna zaroori hai:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Akhand Dhuni Ke Saat Phere:</strong> Yahan vivah kisi aam agni kunda ke samne nahi, balki us <strong>Akhand Dhuni (Eternal Flame)</strong> ke samne hota hai jo Satyug se nirantar jal rahi hai. Maana jaata hai ki is agni ke samne liye gaye vachan kabhi nahi toot-te.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Traditional Dress Code & Ethics:</strong> Mandir ki maryada ke hisab se ekdum traditional Indian wedding attire (Saree, Lehanga, Sherwani) hi pehnein. Mandir premises ke andar plastic, smoking, ya non-traditional activities poori tarah ban hain.
            </li>
          </ul>

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            3. Pandit Ji Se Coordination Aur Pooja Ki Taiyari
          </h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Samagri Aur Pooja:</strong> Vedic shaadi ke liye jo bhi puja samagri chahiye hoti hai, uski list pandit ji pehle hi de dete hain. Pahadi kshetra hone ke karan, zaroori samagri (jaise khas phool ya phala) pehle se hi arrange karni padti hai.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Aashirwad Aur Shubh Muhoorat:</strong> Pandit ji mandir ke niyam anusar shubh lagna aur muhoorat par hi phere karwate hain. Hamari team mandir ke local pandit ji ke sath lagatar touch mein rehti hai taaki aapko wahan pahunch kar koi wait na karna pade.
            </li>
          </ul>

          <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #d97706', marginTop: '40px', marginBottom: '20px' }}>
            <span style={{ fontWeight: '600', color: '#c2410c', display: 'block', marginBottom: '8px', fontSize: '14px', letterSpacing: '1px' }}>PRO-TIP FOR COUPLES ✨</span>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#4a4a4a', fontSize: '15px' }}>
              "Triyuginarayan mein resources limited hote hain. Agar aap ek flawless, bina kisi tension wali Vedic shaadi chahte hain jahan registration se le kar guest management aur pandit ji ki pooja tak sab sorted ho, toh ek experienced wedding team ki help zaroori hai."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'high-altitude-wedding-travel',
      tag: 'GUEST COMFORT',
      date: 'July 10, 2026',
      title: 'Welcoming Your Loved Ones: Smooth Travel from Delhi, Mumbai & Beyond',
      excerpt: 'Flight aur train se aane wale rishtedaron ke liye airport se le kar hills tak ka safar aaramdayak kaise banayein, taaki mandap tak pahunchte hi sab ke chehre muskurate rahein.',
      content: (
        <div style={{ fontFamily: "'Jost', sans-serif", color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '25px', fontSize: '17px', fontWeight: '300', color: '#555' }}>
            Jab baat pahadon mein destination wedding ki aati hai, toh sabse bada sawal hota hai—<em>"Hum apne door-door se aane wale rishtedaron aur doston ko venue tak safely aur comfortable tarike se kaise lekar aayein?"</em> Delhi, Mumbai, Bengaluru ya India ke kisi bhi kone se aane wale guests ke liye hills ka safar aasan banana hi is guide ka maqsad hai.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            1. Gateway to Triyuginarayan: Nearest Airport & Railway Station
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Pahadon ka lamba safar shuru hone se pehle aapko apne guests ke liye transit point chunna hota hai. Google Maps aur standard travel guidelines ke mutabik ye do main entry points hain:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Jolly Grant Airport (Dehradun):</strong> Mumbai aur Bengaluru jaise door ke shehron se aane wale guests ke liye yeh sabse convenient hai. Dehradun airport se Triyuginarayan ki doori lagbhag 220 km hai.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Yog Nagari Rishikesh / Haridwar Railway Station:</strong> Delhi NCR se train se aane wale rishtedaron ke liye yeh best option hai. Rishikesh se aage ka safar hills ka hota hai.
            </li>
          </ul>

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            2. The Mountain Journey: Smooth Travel & Route Planning
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Rishikesh ya Dehradun se jab gaadiyaan chalti hain, toh rasta pahadon ke khoobsurat mod se hokar guzarta hai (Devprayag, Srinagar, Rudraprayag, Guptkashi se hote hue). Is lambe safar ko aasan banane ke liye ye tips zaroori hain:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Right Vehicle Selection:</strong> Hills par chalne ke liye normal hatchbacks ke bajay achhi condition wali SUVs (Innova Crysta) ya luxury Force Travelers hi book karein. Inka suspension aur space guests ko thakne nahi deta.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Refreshment & Sightseeing Stops:</strong> Pure 7-8 ghante ka safar lagatar na karein. Sangam points (jaise Devprayag jahan Alaknanda aur Bhagirathi milti hain) par chhote breaks plan karein taaki guests fresh rahein aur pictures click kar sakein.
            </li>
          </ul>

          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            3. Dealing with High Altitude & Acclimatization
          </h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Welcome Kits & Medicines:</strong> Har ek gaadi mein basic mountain travel medicines (jaise motion sickness pills), hydration drinks, aur chote snacks pehle se rakhein.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Buffer Day Policy:</strong> Shaadi ke main functions se theek ek din pehle sabhi guests ko pahunchne ka schedule banayein taaki unhe thoda aaram mile aur unki body wahan ke thande mausam ke sath dhal (acclimatize) jaye.
            </li>
          </ul>

          <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #d97706', marginTop: '40px', marginBottom: '20px' }}>
            <span style={{ fontWeight: '600', color: '#c2410c', display: 'block', marginBottom: '8px', fontSize: '14px', letterSpacing: '1px' }}>HOSPITALITY INSIGHT ✨</span>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#4a4a4a', fontSize: '15px' }}>
              "Hamare senior transport coordinators airport aur stations par hi har ek family group ko personally receive karte hain. Luggage loading se le kar raste ke premium pit-stops tak, har choti cheez hum pehle se manage rakhte hain."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'november-wedding-weather-strategy',
      tag: 'WINTER WEDDING TIPS',
      date: 'July 08, 2026',
      title: 'November & Winter Weddings: Keeping Guests Warm, Cozy & Happy',
      excerpt: 'Pahadon ki thand mein dadi-nani ke liye cozy intezaam, garam halwa aur satvik menu ki curations, aur thand ke hisab se beautiful decor ideas.',
      content: (
        <div style={{ fontFamily: "'Jost', sans-serif", color: '#4a4a4a', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '25px', fontSize: '17px', fontWeight: '300', color: '#555' }}>
            November aur winter ke mahino mein Uttarakhand ke pahadon ka mausam behad haseen aur crisp ho jata hai. Triyuginarayan Temple ke aaspas ka tapman kafi gir jata hai, jisse thand kaafi badh jaati hai. Aise **High-Altitude Winter Weather** mein ek kamyab destination wedding ka raaz chhupa hai ek solid winter survival aur warm decor planning mein.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />

          {/* Section 1 */}
          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            1. Understanding Triyuginarayan Winter Weather (November to February)
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Triyuginarayan mein thand ka asar dopahar ke baad bohot tezi se badhta hai. Raat ka tapman aksar **single digit** ya usse bhi niche chala jata hai. Isliye aapko functions ka timeline hamesha mausam ke anusar set karna chahiye:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Day-Time Ceremonies:</strong> Haldi, Mehendi aur yahan tak ki phere bhi agar dopahar ke dhoop wale slots mein rakhein, toh guests ko thand ka ehsaas kam hoga aur lighting bhi cinematic milegi.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Indoor Alternative Setup:</strong> Jameeni thand se bachne ke liye reception ya sangeet ke liye waterproof aur heavily insulated tents ka hona bohot zaroori hai.
            </li>
          </ul>

          {/* Section 2 */}
          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            2. Cozy Guest Hospitality: Keeping Dadi, Nani & Little Ones Warm
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Shehron se aaye rishtedar pahadi thand ke liye pehle se poori tarah ready nahi hote. Unke comfort ke liye ye chote arrangements unhe bohot pasand aayenge:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Warm Welcome Kits:</strong> Guests ke rooms mein pehle se hi heavy blankets, electronic bed warmers/heating pads, aur hot water kettles ka intezaam rakhein.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Wedding Favors (Cozy Giveaways):</strong> Pashmina shawls, custom embroidered stoles, ya warm woolen gloves ko aap mehendi ya welcome gift ke roop mein distribute kar sakte hain. Yeh helpful bhi hoga aur unique bhi.
            </li>
          </ul>

          {/* Section 3 */}
          <h3 style={{ fontSize: '24px', color: '#1a1a1a', marginTop: '30px', marginBottom: '15px', fontWeight: '500', letterSpacing: '-0.5px' }}>
            3. Winter Menu Curations & Warm Floral Decor
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Mausam ke hisab se catering aur decoration ka badlav poori wedding vibration ko premium bana deta hai:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Satvik & Piping Hot Winter Menu:</strong> Traditional live counters jahan garam-garam Moong Dal Halwa, Jalebi, Kesar Milk, aur Garhwali Soup serve ho rahe hon. Thand mein khana bohot jaldi thanda hota hai, isliye sophisticated heat-insulating chafing dishes ka hi use karein.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Warm Color Palettes & Decor Resilience:</strong> Winter weddings mein vibrant marigold (gendha phool), deep roses, aur warm fairy lights ka combo sardi ke dry mausam ko ek rich, cozy look deta hai.
            </li>
          </ul>

          {/* Pro-Tip Box */}
          <div style={{ backgroundColor: '#fff7ed', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #d97706', marginTop: '40px', marginBottom: '20px' }}>
            <span style={{ fontWeight: '600', color: '#c2410c', display: 'block', marginBottom: '8px', fontSize: '14px', letterSpacing: '1px' }}>WINTER SHADI INSIGHT ✨</span>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#4a4a4a', fontSize: '15px' }}>
              "Hamari management team outdoor mandap aur sitting lounge areas ke paas sleek vertical space heaters aur fire pits (angethi setup) install karti hai. Isse aapke premium guests bina thand ki chinta kiye, garam chai ki chuskiyon ke sath aapke phero ka aanand le sakte hain."
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentPost = blogs.find(b => b.id === activePostId);

  return (
    <div style={{ padding: '80px 20px', fontFamily: "'Jost', sans-serif", backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <button 
          onClick={activePostId ? () => setActivePostId(null) : onBack}
          style={{
            background: 'none', border: 'none', color: '#b33925', fontSize: '15px', 
            fontWeight: '600', cursor: 'pointer', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '5px'
          }}
        >
          ← {activePostId ? 'Back to All Blogs' : 'Back to Home'}
        </button>

        {activePostId && currentPost ? (
          /* Full Blog Post View */
          <article style={{ backgroundColor: '#fff', padding: '40px 50px', borderRadius: '24px', border: '1px solid #eaeaea', boxShadow: '0 4px 30px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
              <span style={{ backgroundColor: '#fff7ed', color: '#c2410c', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '6px' }}>{currentPost.tag}</span>
              <span style={{ color: '#aaa' }}>•</span>
              <span style={{ color: '#888', fontSize: '13px' }}>{currentPost.date}</span>
            </div>
            <h1 style={{ fontSize: '38px', fontWeight: '500', color: '#1a1a1a', marginBottom: '30px', lineHeight: '1.3', letterSpacing: '-0.5px' }}>
              {currentPost.title}
            </h1>
            {currentPost.content}
          </article>
        ) : (
          /* Blog Directory List View */
          <div>
            <h1 style={{ fontSize: '46px', fontWeight: '500', color: '#1a1a1a', marginBottom: '10px', textAlign: 'center', letterSpacing: '-1px' }}>
              Our Sacred Wedding Journal
            </h1>
            <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '50px', fontWeight: '300' }}>
              Stories, warm tips, and detailed planning guides for your dream mountain destination wedding.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {blogs.map((blog) => (
                <div 
                  key={blog.id}
                  style={{ 
                    backgroundColor: '#fff', padding: '35px', borderRadius: '20px', 
                    border: '1px solid #eaeaea', boxShadow: '0 4px 25px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ backgroundColor: '#fff7ed', color: '#c2410c', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '6px' }}>{blog.tag}</span>
                    <span style={{ color: '#aaa' }}>•</span>
                    <span style={{ color: '#888', fontSize: '13px' }}>{blog.date}</span>
                  </div>

                  <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                    {blog.title}
                  </h2>

                  <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', margin: '0 0 20px 0', fontWeight: '300' }}>
                    {blog.excerpt}
                  </p>

                  <button 
                    onClick={() => {
                      setActivePostId(blog.id);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    style={{ background: 'none', border: 'none', color: '#b33925', textDecoration: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', padding: 0 }}
                  >
                    Read Full Story →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;