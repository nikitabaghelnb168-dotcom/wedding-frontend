import { useState } from 'react'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedState, setSelectedState] = useState('')

  // Main Categories List
  const categories = [
    'All', 
    'India', 
    'Politics', 
    'Business', 
    'Technology', 
    'Opinion', 
    'Videos', 
    'Photo Gallery', 
    'Newsletter'
  ]

  // Complete List of All 28 States & Key UTs of India
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Delhi NCR',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ]

  // Mock Database with States tagged
  const articlesDatabase = [
    {
      id: 1,
      title: "India's Tech Sector Sees Unprecedented Growth in Q2",
      category: "India",
      state: "Karnataka",
      time: "2 hours ago",
      summary: "Major IT hubs in Bengaluru report sharp increase in global dynamic software demand and local infrastructure investment."
    },
    {
      id: 2,
      title: "New Digital Infrastructure Policy Announced by Cabinet",
      category: "India",
      state: "Delhi NCR",
      time: "3 hours ago",
      summary: "Government rolls out high-speed connectivity framework for rural tech centers across National Capital Region."
    },
    {
      id: 3,
      title: "Mumbai Port Expansion Project Gets Environmental Clearance",
      category: "Business",
      state: "Maharashtra",
      time: "4 hours ago",
      summary: "State government approves major logistics upgrade for international maritime trade."
    },
    {
      id: 4,
      title: "Election Campaigns Heat Up Ahead of Assembly Polls",
      category: "Politics",
      state: "Uttar Pradesh",
      time: "5 hours ago",
      summary: "Key political leaders address massive rallies ahead of the upcoming voting phase."
    },
    {
      id: 5,
      title: "Renewable Solar Energy Grid Inverted in Thar Desert",
      category: "Technology",
      state: "Rajasthan",
      time: "6 hours ago",
      summary: "Mega solar park expansion project goes live, powering over 2 million households."
    },
    {
      id: 6,
      title: "Exclusive Editorial: The Future of High-Speed Rail Networks",
      category: "Opinion",
      state: "Gujarat",
      time: "7 hours ago",
      summary: "Analyzing economic benefits and urban transformation driven by modern transit infrastructure."
    }
  ]

  // Filter Logic: Filters by Category and selected State
  const filteredArticles = articlesDatabase.filter(art => {
    const matchesCategory = selectedCategory === 'All' ? true : art.category === selectedCategory
    const matchesState = selectedState === '' ? true : art.state === selectedState
    return matchesCategory && matchesState
  })

  const mainArticle = filteredArticles[0]
  const sideArticles = filteredArticles.slice(1)

  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#fff', color: '#121212', minHeight: '100vh' }}>
      
      {/* Top Header */}
      <header style={{ borderBottom: '1px solid #e6e6e6', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            <span style={{ fontSize: '20px' }}>☰ 🔍</span>
          </div>

          <div style={{ display: 'flex', gap: '4px' }}>
            <div style={{ background: '#000', color: '#fff', fontWeight: '900', fontSize: '22px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>N</div>
            <div style={{ background: '#000', color: '#fff', fontWeight: '900', fontSize: '22px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>E</div>
            <div style={{ background: '#000', color: '#fff', fontWeight: '900', fontSize: '22px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>W</div>
            <div style={{ background: '#000', color: '#fff', fontWeight: '900', fontSize: '22px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>S</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
              Register
            </button>
            <span style={{ fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>Sign In</span>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav style={{ borderBottom: '1px solid #ccc', padding: '0 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '20px', alignItems: 'center', overflowX: 'auto' }}>
          
          {/* Main Categories */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                if (cat !== 'India') setSelectedState('')
              }}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: selectedCategory === cat ? '4px solid #bb1919' : '4px solid transparent',
                padding: '12px 0',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#121212',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          ))}

          {/* India States Dropdown Menu */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#bb1919', whiteSpace: 'nowrap' }}>📍 State News:</span>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontWeight: 'bold',
                fontSize: '13px',
                cursor: 'pointer',
                backgroundColor: '#f8fafc',
                maxHeight: '200px'
              }}
            >
              <option value="">All States ({indianStates.length})</option>
              {indianStates.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

        </div>
      </nav>

      {/* Main Content Layout */}
      <main style={{ maxWidth: '1280px', margin: '24px auto', padding: '0 24px' }}>
        <div style={{ borderLeft: '4px solid #bb1919', paddingLeft: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>
            {selectedCategory === 'All' ? 'Top Headlines' : `${selectedCategory} News`}
            {selectedState && ` - ${selectedState}`}
          </h2>
          {selectedState && (
            <button 
              onClick={() => setSelectedState('')}
              style={{ padding: '4px 8px', fontSize: '12px', cursor: 'pointer', background: '#e2e8f0', border: 'none', borderRadius: '4px' }}
            >
              Clear State Filter ✖
            </button>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            
            {/* Featured Lead Article */}
            {mainArticle && (
              <article style={{ cursor: 'pointer' }}>
                <div style={{ width: '100%', height: '320px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                  📰
                </div>
                <h1 style={{ fontSize: '28px', color: '#121212', margin: '16px 0 8px 0', lineHeight: '1.2' }}>
                  {mainArticle.title}
                </h1>
                <p style={{ color: '#5a5a5a', fontSize: '16px', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                  {mainArticle.summary}
                </p>
                <div style={{ fontSize: '12px', color: '#bb1919', fontWeight: 'bold', display: 'flex', gap: '12px' }}>
                  <span>{mainArticle.category}</span>
                  {mainArticle.state && <span style={{ color: '#2563eb' }}>• {mainArticle.state}</span>}
                  <span style={{ color: '#666' }}>| {mainArticle.time}</span>
                </div>
              </article>
            )}

            {/* Sidebar Articles Feed */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: '1px solid #eee', paddingLeft: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', borderBottom: '2px solid #000', paddingBottom: '6px' }}>
                Latest Feed
              </h3>
              
              {sideArticles.map((item) => (
                <div key={item.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '16px', cursor: 'pointer' }}>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', lineHeight: '1.3' }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#666' }}>
                    {item.summary}
                  </p>
                  <div style={{ fontSize: '11px', color: '#bb1919', fontWeight: 'bold', display: 'flex', gap: '8px' }}>
                    <span>{item.category}</span>
                    {item.state && <span style={{ color: '#2563eb' }}>• {item.state}</span>}
                    <span style={{ color: '#888' }}>• {item.time}</span>
                  </div>
                </div>
              ))}
            </aside>

          </div>
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
            <h3>Abhi {selectedState} ke liye koi news feed update nahi hai.</h3>
            <p style={{ fontSize: '14px' }}>Dropdown se doosra state select karein ya "Clear State Filter" dabaayein.</p>
          </div>
        )}
      </main>

    </div>
  )
}