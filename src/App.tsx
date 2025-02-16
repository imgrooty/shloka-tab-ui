import { useState, useEffect } from 'react';
import { Sun, Moon, Wind, Menu, X, Book, Heart, Coffee, Plus, Palette, Image } from 'lucide-react';
import { ShlokaData, ThemeColor, BackgroundImage, QuickLinkProps, SidebarLinkProps } from './types';

function App() {
  const predefinedThemes: ThemeColor[] = [
    {
      name: 'Spiritual Saffron',
      primary: '#D35400',     // Deep Saffron
      secondary: '#F39C12',   // Bright Saffron
      background: '#2C3E50',  // Dark Blue-Gray for contrast
      accent: '#FFFFFF'       // White for text
    },
    {
      name: 'Divine Indigo',
      primary: '#2980B9',     // Strong Blue
      secondary: '#3498DB',   // Bright Blue
      background: '#2C3E50',  // Dark Blue-Gray
      accent: '#ECF0F1'       // Light Gray-White
    },
    {
      name: 'Emerald Wisdom',
      primary: '#27AE60',     // Emerald Green
      secondary: '#2ECC71',   // Bright Green
      background: '#34495E',  // Dark Grayish Blue
      accent: '#F1F8FF'       // Pale Blue-White
    },
    {
      name: 'Royal Amethyst',
      primary: '#8E44AD',     // Deep Purple
      secondary: '#9B59B6',   // Bright Purple
      background: '#2C3E50',  // Dark Blue-Gray
      accent: '#ECE8F4'       // Soft Lavender-White
    },
    {
      name: 'Cosmic Crimson',
      primary: '#C0392B',     // Deep Red
      secondary: '#E74C3C',   // Bright Red
      background: '#2C3E50',  // Dark Blue-Gray
      accent: '#F4F6F7'       // Almost White
    },
    {
      name: 'Serene Ocean',
      primary: '#16A085',     // Teal Green
      secondary: '#1ABC9C',   // Bright Teal
      background: '#34495E',  // Dark Grayish Blue
      accent: '#E8F6F3'       // Pale Mint-White
    }
  ];

  const backgroundImages: BackgroundImage[] = [
    {
      id: 'mahabharata-1',
      title: 'Krishna and Arjuna in Battlefield',
      url: 'https://www.pinterest.com/pin/19914423346723834/',
      source: 'Mahabharata',
      photographer: 'Spiritual Art Gallery'
    },
    {
      id: 'ramayana-1',
      title: 'Rama Defeating Ravana',
      url: 'https://www.pinterest.com/pin/415175659420380619/',
      source: 'Ramayana',
      photographer: 'Mythological Captures'
    },
    {
      id: 'vedic-1',
      title: 'Spiritual Meditation Scene',
      url: 'https://images.unsplash.com/photo-1601933240957-d6abe5a7f0f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      source: 'Vedic Scriptures',
      photographer: 'Spiritual Moments'
    }
  ];

  const [time, setTime] = useState<Date>(new Date());
  const [greeting, setGreeting] = useState<string>('');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState<boolean>(false);
  const [isBackgroundPickerOpen, setBackgroundPickerOpen] = useState<boolean>(false);
  
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(predefinedThemes[0]);
  const [currentBackground, setCurrentBackground] = useState<BackgroundImage>(backgroundImages[0]);
  
  const [bookmarks, setBookmarks] = useState<
    { title: string; url: string; icon: string }[]
  >([
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' },
    { title: 'Add Bookmark', url: '', icon: '➕' }
  ]);

  
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

  useEffect(() => {
    // Automatically rotate background images every 5 minutes
    const backgroundRotationInterval = setInterval(() => {
      const currentIndex = backgroundImages.findIndex(bg => bg.id === currentBackground.id);
      const nextIndex = (currentIndex + 1) % backgroundImages.length;
      setCurrentBackground(backgroundImages[nextIndex]);
    }, 5 * 60 * 1000); // 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(backgroundRotationInterval);
  }, [currentBackground]);

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

  const randomShloka = shlokas[Math.floor(Math.random() * shlokas.length)];
  return (
    <div 
      className="min-h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentBackground.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: currentTheme.background
      }}
    >
      {/* Theme and Background Pickers */}
      <div className="fixed top-6 right-6 z-20 flex space-x-2">
        <button
          onClick={() => setThemePickerOpen(!isThemePickerOpen)}
          className="bg-white/5 backdrop-blur-lg p-3 rounded-full hover:bg-white/10 transition-all border border-white/10"
          style={{ color: currentTheme.primary }}
        >
          <Palette className="w-5 h-5" />
        </button>
        <button
          onClick={() => setBackgroundPickerOpen(!isBackgroundPickerOpen)}
          className="bg-white/5 backdrop-blur-lg p-3 rounded-full hover:bg-white/10 transition-all border border-white/10"
          style={{ color: currentTheme.primary }}
        >
          <Image className="w-5 h-5" />
        </button>

        {isThemePickerOpen && (
          <div className="absolute right-0 mt-14 p-3 bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {predefinedThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    setCurrentTheme(theme);
                    setThemePickerOpen(false);
                  }}
                  className="w-10 h-10 rounded-full ring-2 ring-white/10 hover:ring-white/30 transition-all"
                  style={{ 
                    backgroundColor: theme.primary,
                    boxShadow: `0 0 10px ${theme.secondary}`
                  }}
                  title={theme.name}
                />
              ))}
            </div>
          </div>
        )}

        {isBackgroundPickerOpen && (
          <div className="absolute right-0 mt-14 p-3 bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 w-64">
            <div className="grid grid-cols-2 gap-2">
              {backgroundImages.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    setCurrentBackground(bg);
                    setBackgroundPickerOpen(false);
                  }}
                  className="rounded-lg overflow-hidden ring-2 ring-white/10 hover:ring-white/30 transition-all"
                >
                  <img 
                    src={bg.url} 
                    alt={bg.title} 
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bookmarks Section */}
      <div className="fixed right-6 top-24 w-36 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-3 z-10">
        <div className="flex items-center justify-between mb-3">
          <span 
            className="text-xs font-medium uppercase tracking-wider text-white/60"
            style={{ color: currentTheme.primary }}
          >
            Bookmarks
          </span>
          <button 
            onClick={() => addBookmark(bookmarks.findIndex(b => !b.url))} 
            className="text-white/50 hover:text-white/80 transition-colors"
            title="Add Bookmark"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {bookmarks.map((bookmark, index) => (
            bookmark.url ? (
              <a
                key={index}
                href={bookmark.url}
                className="block transform transition-all duration-200 ease-in-out hover:scale-110"
                title={bookmark.title}
              >
                <div 
                  className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 hover:border-white/40 group transition-all duration-300"
                  style={{ color: currentTheme.primary }}
                >
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=${new URL(bookmark.url).hostname}&sz=32`} 
                    alt={`${bookmark.title} favicon`}
                    className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.src = bookmark.icon;
                      e.currentTarget.classList.add('text-xl');
                    }}
                  />
                </div>
              </a>
            ) : (
              <div key={index} className="w-10 h-10" />
            )
          ))}
        </div>
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
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: currentTheme.primary }}>Quick Links</h3>
              <div className="space-y-3">
                <SidebarLink icon={<Book className="w-5 h-5" />} title="Sacred Texts" color={currentTheme.primary} />
                <SidebarLink icon={<Heart className="w-5 h-5" />} title="Daily Practice" color={currentTheme.primary} />
                <SidebarLink icon={<Coffee className="w-5 h-5" />} title="Mindfulness" color={currentTheme.primary} />
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
          style={{ color: currentTheme.primary }}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="max-w-4xl mx-auto pt-20">
          <div className="space-y-12">
            {/* Time and Greeting */}
            <div className="text-center space-y-4">
              <h1 className="text-7xl font-light tracking-tight" style={{ color: currentTheme.primary }}>
                {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </h1>
              <div>
                <h2 className="text-4xl font-medium mb-2" style={{ color: currentTheme.primary }}>
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
              <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: currentTheme.primary }}>
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
                color={currentTheme.primary}
              />
              <QuickLink 
                icon={<Moon className="w-6 h-6" />} 
                title="Evening Reflection"
                description="End your day in peace"
                color={currentTheme.primary}
              />
              <QuickLink 
                icon={<Wind className="w-6 h-6" />} 
                title="Meditation"
                description="Find your inner peace"
                color={currentTheme.primary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, title, description, color = '#FFFFFF' }: QuickLinkProps) {
  return (
    <div className="flex flex-col items-center bg-white/5 backdrop-blur-lg p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
      <span className="mb-2" style={{ color }}>
        {icon}
      </span>
      {title && <span className="text-sm font-medium text-white/80">{title}</span>}
      {description && <span className="text-xs text-white/60">{description}</span>}
    </div>
  );
}

function SidebarLink({ icon, title, color = '#FFFFFF' }: SidebarLinkProps) {
  return (
    <a href="#" className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group">
      {icon && (
        <span style={{ color }}>
          {icon}
        </span>
      )}
      {title && <span>{title}</span>}
    </a>
  );
}

export default App;