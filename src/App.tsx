import { useState, useEffect } from 'react';
import { Sun, Moon, Wind, Menu, X, Book, Heart, Coffee, ExternalLink, Plus, Palette, LucideIcon } from 'lucide-react';
import { ShlokaData, RecentSite, QuickLinkProps, SidebarLinkProps } from './types';

function App() {
  const [time, setTime] = useState<Date>(new Date());
  const [greeting, setGreeting] = useState<string>('');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<string>('#DFFF00'); // Default to chartreuse yellow
  const [recentSites, setRecentSites] = useState<RecentSite[]>([
    { title: 'Gmail', url: 'https://gmail.com', favicon: '📧' },
    { title: 'Calendar', url: 'https://calendar.google.com', favicon: '📅' },
    { title: 'Drive', url: 'https://drive.google.com', favicon: '📁' },
    { title: 'YouTube', url: 'https://youtube.com', favicon: '▶️' }
  ]);
  const [bookmarks, setBookmarks] = useState<
    { title: string; url: string; icon: string }[]
  >([
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

  const addBookmark = (index: number) => {
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

  const shlokas: ShlokaData[] = [
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
    },
    {
      sanskrit: "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
      transliteration: "Uddhared Atmanatmanam Natmanam Avasadayet\nAtmaiva Hyatmano Bandhuratmaiva Ripuratmanah",
      meaning: "One must elevate, not degrade, oneself by one's own mind.\nThe mind is a friend to the self, and it can also be its enemy.",
      source: "Bhagavad Gita 6.5"
    },
    {
      sanskrit: "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति।\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः॥",
      transliteration: "Yo Na Hrishyati Na Dveshti Na Shochati Na Kankshati\nShubhashubha Parityagi Bhaktimanyah Sa Me Priyah",
      meaning: "One who neither rejoices nor hates, neither grieves nor desires,\nand who has renounced both good and evil actions, such a devotee is dear to Me.",
      source: "Bhagavad Gita 12.17"
    },
    {
      sanskrit: "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही॥",
      transliteration: "Vasamsi Jirnani Yatha Vihaya\nNavani Grhnati Naro ’parani\nTatha Sarirani Vihaya Jirnany\nAnyani Samyati Navani Dehi",
      meaning: "Just as a person discards worn-out clothes and wears new ones,\nso also the embodied soul casts off worn-out bodies and enters new ones.",
      source: "Bhagavad Gita 2.22"
    },
    {
      sanskrit: "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥",
      transliteration: "Ashochyan Anvashochas Tvam Prajnavadamscha Bhashase\nGatasun Agatasumshcha Nanushochanti Panditah",
      meaning: "You grieve for those who should not be grieved for, yet you speak words of wisdom.\nThe wise grieve neither for the living nor for the dead.",
      source: "Bhagavad Gita 2.11"
    },
    {
      sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
      transliteration: "Sukha Dukhe Same Krutva Labhalabhau Jayajayau\nTato Yuddhaya Yujyasva Naivam Papam Avapsyasi",
      meaning: "Considering happiness and distress, gain and loss, victory and defeat as the same,\nengage in your duty and you shall not incur sin.",
      source: "Bhagavad Gita 2.38"
    },
    {
      sanskrit: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः।\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते॥",
      transliteration: "Yadrichchha-labha-santushto Dvandvatito Vimatsarah\nSamah Siddhav Asiddhau Cha Krutvapi Na Nibadhyate",
      meaning: "He who is satisfied with whatever comes by chance, free from dualities and envy,\nand steady in both success and failure, is not bound by his actions.",
      source: "Bhagavad Gita 4.22"
    },
    {
      sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
      transliteration: "Na Hi Kashchit Kshanam Api Jatu Tishthatyakarma-krit\nKaryate Hyavashah Karma Sarvah Prakriti Jair Gunaih",
      meaning: "No one can remain inactive even for a moment.\nEveryone is forced to act under the influence of nature’s qualities.",
      source: "Bhagavad Gita 3.5"
    },
    {
      sanskrit: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत।\nअव्यक्तनिधनान्येव तत्र का परिदेवना॥",
      transliteration: "Avyaktadini Bhutani Vyaktamadhyani Bharata\nAvyakta-nidhananyeva Tatra Ka Paridevana",
      meaning: "All beings are unmanifest before birth, manifest in life,\nand unmanifest again at death. So why lament?",
      source: "Bhagavad Gita 2.28"
    },
    {
      sanskrit: "समः शत्रौ च मित्रे च तथा मानापमानयोः।\nशीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः॥",
      transliteration: "Samah Shatrau Cha Mitre Cha Tatha Mana-apamanayoh\nShitoshna-sukha-duhkheshu Samah Sangavivarjitah",
      meaning: "One who remains balanced in enemies and friends, in honor and dishonor,\nand remains unaffected by heat, cold, happiness, and distress, is truly wise.",
      source: "Bhagavad Gita 12.18"
    }
  ];

const addRecentSite = (site: RecentSite) => {
  setRecentSites(prevSites => {
    // Prevent duplicates and limit to 5 recent sites
    const updatedSites = prevSites.filter(s => s.url !== site.url);
    return [site, ...updatedSites].slice(0, 5);
  });
};
// You could call this when a user visits a site
useEffect(() => {
  // Example: track current tab or site visit
  const currentSite: RecentSite = {
    title: 'Example Site',
    url: 'https://example.com',
    favicon: '🌐'
  };
  addRecentSite(currentSite);
}, []); // Add appropriate dependencies

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
    </div>
  );
}

function QuickLink({ icon: Icon, title, description, color }: QuickLinkProps) {
  return (
    <a href="#" className="flex flex-col items-center bg-white/5 backdrop-blur-lg p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
      <span className="mb-2" style={{ color }}>
        <Icon />
      </span>
      <span className="text-sm font-medium text-white/80">{title}</span>
      <span className="text-xs text-white/60">{description}</span>
    </a>
  );
}

function SidebarLink({ icon: Icon, title, color }: SidebarLinkProps) {
  return (
    <a href="#" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group">
      <span style={{ color }}>
        <Icon />
      </span>
      <span>{title}</span>
    </a>
  );
}

export default App;