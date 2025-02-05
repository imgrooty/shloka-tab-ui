import React, { useState, useEffect } from 'react';
import { Sun, Moon, Wind, Menu, X, Book, Heart, Coffee, ExternalLink, Plus, Palette } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('#DFFF00'); // Default to chartreuse yellow
  const [recentSites, setRecentSites] = useState([
    { title: 'Gmail', url: 'https://gmail.com', icon: '📧' },
    { title: 'Calendar', url: 'https://calendar.google.com', icon: '📅' },
    { title: 'Drive', url: 'https://drive.google.com', icon: '📁' },
    { title: 'YouTube', url: 'https://youtube.com', icon: '▶️' }
  ]);
  const [bookmarks, setBookmarks] = useState([
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' }
  ]);

  const themeColors = [
    '#DFFF00', // Chartreuse yellow
    '#FFBF00', // Amber
    '#FF7F50', // Coral
    '#DE3163', // Cerise
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    if (hour < 12) setGreeting('शुभ प्रभात');
    else if (hour < 17) setGreeting('शुभ दोपहर');
    else if (hour < 20) setGreeting('शुभ संध्या');
    else setGreeting('शुभ रात्रि');
  }, [time]);

  const addBookmark = (index) => {
    const url = prompt('Enter website URL:');
    if (url) {
      const title = prompt('Enter bookmark title:');
      if (title) {
        const newBookmarks = [...bookmarks];
        newBookmarks[index] = { title, url, icon: '🔖' };
        setBookmarks(newBookmarks);
      }
    }
  };

  const shlokas = [
    {
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      transliteration: "Karmanye vadhikaraste Ma Phaleshu Kadachana\nMa Karmaphalaheturbhurma Te Sangostvakarmani",
      meaning: "You have the right to work only but never to its fruits.\nLet not the fruits of action be your motive, nor let your attachment be to inaction.",
      source: "Bhagavad Gita 2.47"
    },
    {
      sanskrit: "विद्या विनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
      transliteration: "Vidya Vinaya Sampanne Brahmane Gavi Hastini\nShuni Chaiva Shvapake Cha Panditah Samadarshinah",
      meaning: "The humble sage, by virtue of true knowledge, sees with equal vision a learned and gentle Brahmin, a cow, an elephant, a dog and an outcaste.",
      source: "Bhagavad Gita 5.18"
    }
  ];

  const randomShloka = shlokas[Math.floor(Math.random() * shlokas.length)];

  return (
    <div 
      className="min-h-screen bg-slate-900 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Theme Picker - Updated styles */}
      <div className="fixed top-6 right-6 z-20">
        <button
          onClick={() => setThemePickerOpen(!isThemePickerOpen)}
          className="bg-white/5 backdrop-blur-lg p-3 rounded-full hover:bg-white/10 transition-all border border-white/10"
          style={{ color: themeColor }}
        >
          <Palette className="w-5 h-5" />
        </button>
        {isThemePickerOpen && (
          <div className="absolute right-0 mt-2 p-3 bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {themeColors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setThemeColor(color);
                    setThemePickerOpen(false);
                  }}
                  className="w-8 h-8 rounded-full ring-2 ring-white/10 hover:ring-white/30 transition-all"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bookmarks - Updated styles */}
      <div className="fixed right-6 top-24 space-y-3 z-10">
        {bookmarks.map((bookmark, index) => (
          bookmark.url ? (
            <a
              key={index}
              href={bookmark.url}
              className="flex items-center bg-white/5 backdrop-blur-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-all group border border-white/10"
              style={{ color: themeColor }}
            >
              <span className="text-lg mr-3">{bookmark.icon}</span>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{bookmark.title}</span>
            </a>
          ) : (
            <button
              key={index}
              onClick={() => addBookmark(index)}
              className="w-full bg-white/5 backdrop-blur-lg p-3 rounded-xl hover:bg-white/10 transition-all border border-white/10"
              style={{ color: themeColor }}
            >
              <Plus className="w-5 h-5 mx-auto" />
            </button>
          )
        ))}
      </div>

      {/* Sidebar - Updated styles */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-72 bg-slate-900/90 backdrop-blur-xl transition-transform duration-300 ease-in-out border-r border-white/10 z-20`}>
        <div className="p-8">
          <button 
            onClick={() => setSidebarOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: themeColor }}>Quick Links</h3>
              <div className="space-y-3">
                <SidebarLink icon={<Book className="w-5 h-5" />} title="Sacred Texts" color={themeColor} />
                <SidebarLink icon={<Heart className="w-5 h-5" />} title="Daily Practice" color={themeColor} />
                <SidebarLink icon={<Coffee className="w-5 h-5" />} title="Mindfulness" color={themeColor} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: themeColor }}>Recent Visits</h3>
              <div className="space-y-3">
                {recentSites.slice(0, 3).map((site, index) => (
                  <a 
                    key={index}
                    href={site.url}
                    className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors"
                  >
                    <span>{site.icon}</span>
                    <span className="text-sm">{site.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="fixed top-6 left-6 z-10 bg-white/5 backdrop-blur-lg p-3 rounded-full hover:bg-white/10 transition-all border border-white/10"
          style={{ color: themeColor }}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="max-w-4xl mx-auto pt-20">
          <div className="space-y-12">
            {/* Time and Greeting */}
            <div className="text-center space-y-4">
              <h1 className="text-7xl font-light tracking-tight" style={{ color: themeColor }}>
                {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </h1>
              <div>
                <h2 className="text-4xl font-medium mb-2" style={{ color: themeColor }}>
                  {greeting}
                </h2>
                <p className="text-white/60">
                  {time.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

            {/* Shloka - Updated styles */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-white/10">
              <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: themeColor }}>
                Today's Shloka
              </h3>
              <div className="space-y-4">
                <p className="text-xl leading-relaxed font-sanskrit">
                  {randomShloka.sanskrit}
                </p>
                <p className="text-white/60 italic text-sm">
                  {randomShloka.transliteration}
                </p>
                <p className="text-lg text-white/80">
                  {randomShloka.meaning}
                </p>
                <p className="text-sm text-white/60 font-medium">
                  - {randomShloka.source}
                </p>
              </div>
            </div>

            {/* Quick Links - Updated styles */}
            <div className="grid grid-cols-3 gap-4">
              <QuickLink 
                icon={<Sun className="w-6 h-6" />}
                title="Morning Prayer"
                description="Start your day with devotion"
                color={themeColor}
              />
              <QuickLink 
                icon={<Moon className="w-6 h-6" />}
                title="Evening Reflection"
                description="End your day in peace"
                color={themeColor}
              />
              <QuickLink 
                icon={<Wind className="w-6 h-6" />}
                title="Meditation"
                description="Find your inner peace"
                color={themeColor}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Updated styles */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-4xl mx-auto p-4">
          <h3 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: themeColor }}>Recently Visited</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {recentSites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-all group border border-white/10"
              >
                <span>{site.icon}</span>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">{site.title}</span>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, title, description, color }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer group border border-white/10">
      <div className="mb-4" style={{ color }}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors" style={{ color }}>
        {title}
      </h3>
      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
        {description}
      </p>
    </div>
  );
}

function SidebarLink({ icon, title, color }) {
  return (
    <a href="#" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group">
      <span style={{ color }}>{icon}</span>
      <span className="text-sm">{title}</span>
    </a>
  );
}

export default App;