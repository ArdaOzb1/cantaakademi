import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ChevronDown,
  X,
  Layers,
  Scissors,
  ShieldCheck,
  Clock,
  Heart,
  Recycle,
  Leaf,
  Menu,
  Sparkle,
  Copy,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function NeedleThreadIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 2.2.7 4.2 2 5.8L3 21l3.2-1c1.6 1.3 3.6 2 5.8 2 5.5 0 10-4.5 10-10S17.5 2 12 2z" strokeOpacity="0.2"/>
      <path d="m15.5 8.5-7 7"/>
      <circle cx="16.5" cy="7.5" r="1.5"/>
      <path d="M7 17a3 3 0 0 1 4-4"/>
    </svg>
  );
}

const PRODUCTS = [
  {
    id: 'kahve-omuz',
    category: 'Kahve Paketleri',
    title: 'Upcycled Coffee Shoulder Bag',
    subTitle: 'Kahve Paketi İmza Serisi',
    img: '/IMG_5787.JPG',
    fallbackImg: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    tag: 'İmza Parça',
    tagVariant: 'amber',
    priceEstimate: 'Özel Seri / Butik Sipariş',
    desc: 'Atık kahve ambalajlarının mikronluk şeritler halinde katlanıp kilitlenmesiyle örülen; antika pirinç zincir askılı ve çevirmeli metal kilitli zamansız omuz çantası.',
    stats: { ambalaj: '48 Adet Paket', emek: '18 Saat El İşi', suDayanik: 'Kompozit Bariyer' },
    features: ['Sıfır kimyasal yapıştırıcı', 'Körüksüz origami kilit mekaniği', 'İç astar ve pirinç donanım', 'Hafif ve ultra dirençli']
  },
  {
    id: 'laptop-folio',
    category: 'Kuşe Dergi',
    title: 'Eco-Design Laptop Folio',
    subTitle: 'Kuşe Dergi Dokuması',
    img: '/IMG_5789.JPG',
    fallbackImg: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    tag: 'Tasarım Ödüllü',
    tagVariant: 'emerald',
    priceEstimate: '13-14 inç Uyumlu',
    desc: 'Renkli kuşe dergi sayfalarından örülen, neme ve darbeye karşı organik polimer korumalı, fermuarlı premium laptop & evrak kılıfı.',
    stats: { ambalaj: '65 Dergi Sayfası', emek: '14 Saat El İşi', suDayanik: 'Çift Katmanlı Koruma' },
    features: ['13-14 inç cihazlara tam uyum', 'Darbe emici iç kadife astar', 'Özel renk geçişleri', 'Güçlendirilmiş kenar dikişleri']
  },
  {
    id: 'vintage-rose',
    category: 'Özel Seri & El Nakışı',
    title: 'Vintage Rose Gece Portföyü',
    subTitle: 'Özel El Nakışı & Dokuma',
    img: '/IMG_4444.PNG',
    fallbackImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    tag: 'Tekil Üretim',
    tagVariant: 'rose',
    priceEstimate: 'Koleksiyonluk Parça',
    desc: 'Antik bronz oymalı kilit çerçeveli, elde işlenmiş nostaljik gül motifli kuşe dokuma ve kadife harmanı lüks gece el çantası.',
    stats: { ambalaj: 'Tekil Üretim', emek: '24 Saat Zanaat', suDayanik: 'Kuru & Hassas' },
    features: ['Geleneksel gül goncası nakışı', 'Antik bronz oymalı kilit mekanizması', 'Zincirle omuzda veya elde kullanım', 'İpek dokuma saten iç cep']
  },
  {
    id: 'akademi-box',
    category: 'Kuşe Dergi',
    title: 'Akademi Kutu & Cüzdan Seti',
    subTitle: 'Edebi Kitap & Dergi Sayfaları',
    img: '/IMG_5052.JPG',
    fallbackImg: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
    tag: 'Atölye Favorisi',
    tagVariant: 'stone',
    priceEstimate: 'Modüler Set',
    desc: 'Kitap ve kuşe sayfaların geometrik şerit örgüsüyle dönüştüğü çok amaçlı masaüstü düzenleyici kutu ve mini kartlık seti.',
    stats: { ambalaj: '30+ Kitap Yaprağı', emek: '10 Saat El İşi', suDayanik: 'Koruyucu Cila' },
    features: ['Masaüstü ve çanta içi düzenleyici', 'Kart ve bozuk para uyumlu mini cüzdan', 'Sürdürülebilir hediye konsepti', 'Leke tutmaz koruma']
  }
];

const CRAFT_STEPS = [
  {
    number: '01',
    title: 'Ambalaj Toplama & Hazırlık',
    subtitle: 'Atıktan Değerli Hammaddeye',
    icon: Recycle,
    description: 'Bölgedeki kahve kavurucuları ve kafelerden toplanan alüminyum/polimer bariyerli kahve paketleri ile kuşe dergiler dezenfekte edilir, kurutulur ve renk tonlarına göre sınıflandırılır.'
  },
  {
    number: '02',
    title: 'Milimetrik Kesim & Katlama',
    subtitle: 'Hassas Geometrik Şeritler',
    icon: Scissors,
    description: 'Her ambalaj 0.5 mm toleransla şeritlere dilimlenir. Geleneksel origami kilit prensibiyle 4 katmanlı şerit bloklara dönüştürülerek dokumaya hazır hale getirilir.'
  },
  {
    number: '03',
    title: 'Yapıştırıcısız Kilit Dokuma',
    subtitle: 'Mukavemet & Esneklik',
    icon: Layers,
    description: 'Hiçbir kimyasal yapıştırıcı veya zararlı tutkal kullanılmaz. Şeritler birbirlerinin içinden geçirilerek birbirini kilitleyen zırh dokusunu oluşturur.'
  },
  {
    number: '04',
    title: 'Astar, Donanım & Pirinç Montaj',
    subtitle: 'Lüks Moda Zanaatı',
    icon: ShieldCheck,
    description: 'Dokunan gövde; yüksek kaliteli iç astar, antika pirinç zincir askılar ve dayanıklı metal kilitlerle tamamlanır; her çanta atölye mührüyle teslim edilir.'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Bu çantalar yağmurda veya ıslanınca bozulur mu?',
    a: 'Kesinlikle bozulmaz. Kahve ambalajları kahvenin tazeliğini korumak için tasarlanmış çok katmanlı alüminyum/polimer koruma bariyerine sahiptir. Kuşe dergi tasarımlarımız ise özel organik koruyucu katmanla kaplanarak suya ve neme karşı dayanıklı hale getirilir.'
  },
  {
    q: 'Kendi kahve paketlerimi veya dergilerimi göndersem bana özel çanta yapılır mı?',
    a: 'Evet! Çanta Akademi olarak kişisel hatıraları dönüştürmeyi çok seviyoruz. Biriktirdiğiniz kahve ambalajlarını veya özel dergi sayfalarını atölyemize ulaştırarak tekil bir model ürettirebilirsiniz.'
  },
  {
    q: 'Sipariş süreci nasıl işliyor ve teslimat ne kadar sürüyor?',
    a: 'Koleksiyonumuzdaki her bir çanta elde tek tek örüldüğü için sipariş onayından sonra ortalama 4-7 iş günü içinde özenle hazırlanır. Instagram doğrudan mesaj (@cantaakademii) üzerinden kolayca iletişime geçebilirsiniz.'
  },
  {
    q: 'Çantaların taşıma kapasitesi ve sağlamlığı nasıldır?',
    a: 'Origami kilit örgüsü mekanik bir kilitlenme sağlar. Dikişsiz olmasına rağmen gerilim birbirini kilitleyen şeritlere eşit dağılır ve günlük eşyaları, telefon, cüzdan veya bilgisayarı güvenle taşır.'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [livePackages, setLivePackages] = useState(14838);

  // Hop-up modal state for Instagram message clipboard
  const [inquiryModal, setInquiryModal] = useState({
    isOpen: false,
    productName: '',
    messageText: '',
    copied: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePackages(prev => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleInstagramDirect = (productName = '') => {
    const text = productName 
      ? `Merhaba @cantaakademii! Web sitenizde yer alan "${productName}" tasarımı hakkında detaylı bilgi, fiyat ve sipariş oluşturmak istiyorum.`
      : `Merhaba @cantaakademii! İleri dönüşüm koleksiyonunuz ve özel sipariş süreci hakkında bilgi alabilir miyim?`;

    // Attempt to copy to clipboard immediately upon click
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }

    // Open high-visibility Hop-Up Modal with instructions
    setInquiryModal({
      isOpen: true,
      productName: productName || 'Özel Sipariş & Danışma',
      messageText: text,
      copied: true
    });
  };

  const handleCopyAgain = () => {
    if (navigator.clipboard && inquiryModal.messageText) {
      navigator.clipboard.writeText(inquiryModal.messageText);
      setInquiryModal(prev => ({ ...prev, copied: true }));
      setTimeout(() => {
        setInquiryModal(prev => ({ ...prev, copied: false }));
      }, 2000);
    }
  };

  const handleGoToInstagram = () => {
    window.open('https://ig.me/m/cantaakademii', '_blank');
    setInquiryModal(prev => ({ ...prev, isOpen: false }));
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Tümü') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E1B18] font-sans selection:bg-[#2C241E] selection:text-[#FDFBF7] overflow-x-hidden">
      
      {}
      <div className="bg-[#1C1814] text-[#E6E0D8] text-[11px] font-medium tracking-wider uppercase py-2.5 px-4 sm:px-8 border-b border-[#2C2520]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-stone-300 tracking-wide text-xs">
              İstanbul Sultangazi Atölyesi • Sıfır Atık Lüks El Sanatı
            </span>
          </div>

          <div className="flex items-center justify-center gap-5 text-xs">
            <div className="flex items-center gap-1.5 text-stone-300">
              <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Kurtarılan Ambalaj: <strong className="text-white font-semibold ml-1">{livePackages.toLocaleString('tr-TR')}</strong></span>
            </div>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <a 
              href="https://www.instagram.com/cantaakademii" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#D3BA9E] hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@cantaakademii</span>
            </a>
          </div>
        </div>
      </div>

      {}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-stone-300 shadow-xs ring-1 ring-stone-900/5 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/490773670_651760034331471_9009453672114429763_n.jpg"
                alt="Çanta Akademi"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=150&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E1B18] leading-tight">
                  Çanta Akademi
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-stone-200/80 text-stone-700">
                  Atölye
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-semibold mt-0.5">
                İleri Dönüşüm Zanaat Evi
              </span>
            </div>
          </a>

          {/* Desktop Nav (cleaned of bag builder and workshop links) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-stone-600">
            <a href="#koleksiyon" className="hover:text-stone-950 transition-colors py-1">Koleksiyon</a>
            <a href="#atolye" className="hover:text-stone-950 transition-colors py-1">Zanaat Döngüsü</a>
            <a href="#etki" className="hover:text-stone-950 transition-colors py-1">Ekolojik Etki</a>
            <a href="#sss" className="hover:text-stone-950 transition-colors py-1">S.S.S.</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleInstagramDirect()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1B17] hover:bg-[#342D26] text-[#F9F7F4] text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>Instagram'dan Ulaş</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-stone-200 bg-[#FAF7F2] px-6 py-6 overflow-hidden shadow-inner"
            >
              <div className="flex flex-col gap-4 text-sm font-medium text-stone-800">
                <a 
                  href="#koleksiyon" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-stone-200/80 flex items-center justify-between"
                >
                  <span>Koleksiyon Vitrini</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
                <a 
                  href="#atolye" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-stone-200/80 flex items-center justify-between"
                >
                  <span>Zanaat Süreci & Döngü</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
                <a 
                  href="#etki" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-stone-200/80 flex items-center justify-between"
                >
                  <span>Canlı Ekolojik Etki</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
                <a 
                  href="#sss" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-stone-200/80 flex items-center justify-between"
                >
                  <span>Sıkça Sorulan Sorular</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleInstagramDirect();
                    }}
                    className="w-full py-3.5 rounded-full bg-stone-900 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <InstagramIcon className="w-4 h-4 text-amber-300" />
                    <span>Instagram (@cantaakademii) Aç</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] text-[#3D3126] text-xs font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Atık Ambalajlardan Lüks Moda</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1E1B18] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
                Kahve paketinden, <br className="hidden sm:inline" />
                dergilerden doğan <br />
                <span className="italic font-serif font-semibold text-[#8B5E3C]">zamansız zarafet.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl">
                İstanbul Sultangazi'deki butik atölyemizde çöpe gitmeye mahkûm kahve ambalajları ve kuşe dergi yaprakları; sıfır kimyasal yapıştırıcı, milimetrik origami katlama ve kadın emeğiyle lüks çantalara dönüşüyor.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#koleksiyon"
                  className="px-7 py-3.5 rounded-full bg-[#1C1814] hover:bg-[#342D26] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg"
                >
                  <span>Koleksiyonu Keşfet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleInstagramDirect()}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-700" />
                  <span>Özel Sipariş Sor</span>
                </button>
              </div>

              {/* Micro atelier metrics */}
              <div className="pt-8 border-t border-stone-200/90 grid grid-cols-3 gap-6 max-w-lg">
                <div className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    450+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                    Şerit / Çanta
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    %100
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                    Origami Kilit
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800 leading-tight">
                    0 gr
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold leading-normal">
                    Kimyasal Tutkal
                  </div>
                </div>
              </div>

            </div>

            {/* Right Editorial Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#E0D5C1] via-[#F4EFE6] to-[#C9B18D] rounded-3xl -rotate-1 opacity-70 blur-xs" />
                
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-300/80 shadow-2xl group">
                  <div className="aspect-[4/5] overflow-hidden bg-stone-800">
                    <img
                      src="/IMG_5787.JPG"
                      alt="Çanta Akademi Upcycled Coffee Bag"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80';
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                  </div>

                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-amber-200 border border-amber-300/20">
                      <Sparkle className="w-3 h-3 text-amber-400" />
                      İmza Zanaat Parçası
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-stone-900">
                      48 Kahve Paketi • 18 Saat
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 bg-gradient-to-t from-black/95 via-black/60 to-transparent text-white space-y-3">
                    <p className="text-[11px] uppercase tracking-widest text-[#E3C8A4] font-semibold">
                      Kahve Dünyası & Filtre Paketleri
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                      Upcycled Coffee Shoulder Bag
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-light line-clamp-2">
                      Her katlaması sabırla işlenen, antika pirinç çevirmeli kilitli ve zincir askılı zamansız el işi çanta.
                    </p>

                    <div className="pt-3 border-t border-white/20 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-stone-300">
                        Atölye Kodu: #CK-2026
                      </span>
                      <button
                        onClick={() => handleInstagramDirect('Upcycled Coffee Bag')}
                        className="px-4 py-1.5 rounded-full bg-white text-stone-950 text-xs font-bold hover:bg-stone-100 transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-stone-900" />
                        <span>Sipariş Bilgisi</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="koleksiyon" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-stone-200 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
              <NeedleThreadIcon className="w-4 h-4 text-[#8B5E3C]" />
              <span>Atölye Vitrini</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-950 leading-tight">
              Geri Kazanılmış Zarafet
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed max-w-xl">
              Her biri tekil olarak numaralandırılmış, atık ambalajların yeniden doğuşunu simgeleyen el yapımı koleksiyon parçalarımız.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Tümü', 'Kahve Paketleri', 'Kuşe Dergi', 'Özel Seri & El Nakışı'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1C1814] text-[#F9F7F4] shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div
                  className="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = product.fallbackImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${
                    product.tagVariant === 'amber' ? 'bg-amber-100 text-amber-900 border border-amber-300/40' :
                    product.tagVariant === 'emerald' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300/40' :
                    product.tagVariant === 'rose' ? 'bg-rose-100 text-rose-900 border border-rose-300/40' :
                    'bg-stone-100 text-stone-800 border border-stone-300'
                  }`}>
                    {product.tag}
                  </span>

                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      İncele & Hikayesi
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    <span>{product.subTitle}</span>
                    <span className="text-amber-800 font-bold">{product.priceEstimate}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="font-serif text-lg sm:text-xl font-bold text-stone-900 cursor-pointer hover:text-[#8B5E3C] transition-colors leading-snug"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Recycle className="w-3.5 h-3.5 text-stone-400" />
                      {product.stats.ambalaj}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {product.stats.emek}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => handleInstagramDirect(product.title)}
                  className="w-full py-2.5 rounded-xl bg-[#1C1814] hover:bg-[#382E25] text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-300" />
                  <span>Sipariş & Fiyat Sor</span>
                </button>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-1 text-[11px] font-semibold text-stone-500 hover:text-stone-900 text-center transition-colors"
                >
                  Detayları Görüntüle
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {}
      <section id="atolye" className="py-20 sm:py-28 bg-[#181411] text-[#F3EFEA] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Geri Dönüşüm Değil, İleri Dönüşüm
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Bir Çantanın 4 Aşamalı Doğuşu
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              Atık ambalajların lüks bir aksesuara evrilme yolculuğu. Sıfır kimyasal tutkal, binlerce hassas katlama ve saf kadın zanaatı.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {CRAFT_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-[#29221C] border-amber-500/60 shadow-lg text-white'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-amber-400 text-stone-950' : 'bg-white/10 text-stone-400'
                    }`}>
                      {step.number}
                    </span>
                    <IconComp className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold leading-snug">
                    {step.title}
                  </h4>
                  <span className="text-[11px] block mt-1.5 opacity-75">
                    {step.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#231C17] border border-white/10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                Aşama {CRAFT_STEPS[activeStep].number} Detayı
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                {CRAFT_STEPS[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                {CRAFT_STEPS[activeStep].description}
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-amber-300 font-bold block uppercase tracking-wider">Metodoloji</span>
                  <span className="text-xs text-stone-300 block">Tescilli kilit geçme tekniği</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs text-amber-300 font-bold block uppercase tracking-wider">Dayanıklılık</span>
                  <span className="text-xs text-stone-300 block">Çift yönlü yırtılmaz gerilim</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mb-2">
                {React.createElement(CRAFT_STEPS[activeStep].icon, { className: "w-8 h-8" })}
              </div>
              <h4 className="font-serif text-xl font-bold text-white">
                Atölye Standartları
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed max-w-xs font-light">
                Her bir çanta, atölyemizdeki usta kadın zanaatkarların ellerinde ortalama 16-24 saatlik el emeğiyle tamamlanır.
              </p>
              <button
                onClick={() => handleInstagramDirect('Atölye Zanaat Süreci Hakkında')}
                className="mt-4 px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold transition-colors shadow-sm"
              >
                Atölye Sürecini Sor
              </button>
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="etki" className="py-20 sm:py-28 bg-[#15120F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Canlı Sürdürülebilirlik Göstergeleri
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              Atık Değil, Geleceğin Lüks Mirası.
            </h2>
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-light">
              Çanta Akademi'de üretilen her bir tasarım, doğada yüzlerce yıl parçalanmayan çok katmanlı ambalajların çöpe değil, şık ve ömürlük bir aksesuara evrilmesidir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
              <div>
                <Recycle className="w-6 h-6 text-emerald-400 mb-4" />
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {livePackages.toLocaleString('tr-TR')}
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-300 mt-2">
                  Kurtarılan Ambalaj
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-white/10 leading-relaxed">
                Kahve kavurucularından ve dergilerden dönüştürülen ambalaj adedi.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-colors flex flex-col justify-between">
              <div>
                <Leaf className="w-6 h-6 text-amber-400 mb-4" />
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  680+ kg
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-300 mt-2">
                  Önlenen Katı Atık
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-white/10 leading-relaxed">
                Doğada yüzyıllar boyu yok olmayan kompozit alüminyum/plastik kütlesi.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/40 transition-colors flex flex-col justify-between">
              <div>
                <Clock className="w-6 h-6 text-sky-400 mb-4" />
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  3.600+
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-300 mt-2">
                  El Zanaatı Saati
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-white/10 leading-relaxed">
                Kadın ustaların sabırlı şerit katlama ve yapıştırıcısız dokuma emeği.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/40 transition-colors flex flex-col justify-between">
              <div>
                <Heart className="w-6 h-6 text-rose-400 mb-4" />
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  140+
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-300 mt-2">
                  Zanaatkar Kadın
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-white/10 leading-relaxed">
                Atölye üretim sürecimize dahil olan kadın zanaatkar topluluğumuz.
              </p>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="sss" className="py-20 sm:py-28 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
            Merak Edilenler
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 leading-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            İleri dönüşüm çantalarımızın dayanıklılığı, siparişi ve bakımına dair tüm ayrıntılar.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-stone-900 hover:text-[#8B5E3C] transition-colors leading-snug"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-stone-900' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal border-t border-stone-100 pt-4"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-8 bg-[#F4EFE6]">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 bg-[#1E1B18] text-white border border-stone-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-amber-300 border border-white/15">
              <InstagramIcon className="w-3.5 h-3.5" /> @cantaakademii Topluluğu
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#F7F4EF]">
              Atölyemizin Günlük Hikâyesine Katılın
            </h2>

            <p className="text-xs sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed font-light">
              Katlama anları, yeni biten sınırlı üretim çantalar ve kamera arkası anlık olarak Instagram hikayelerimizde paylaşılıyor.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/cantaakademii"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-[#E5B887] hover:bg-[#d8a873] text-stone-950 text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <InstagramIcon className="w-4 h-4 text-stone-950" />
                <span>Instagram'da Takip Et</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleInstagramDirect()}
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-semibold transition-all border border-white/20"
              >
                Doğrudan Mesaj Gönder
              </button>
            </div>
          </div>

        </div>
      </section>

      {}
      <footer className="border-t border-stone-200 bg-[#FDFBF7] py-12 px-4 sm:px-8 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          <div className="space-y-2">
            <span className="font-serif font-bold text-xl text-stone-900 block">Çanta Akademi</span>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              Sıfır atık, geleneksel origami kilit dokuması ve sürdürülebilir lüks moda atölyesi. İstanbul Sultangazi.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">Koleksiyonlar</h5>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#koleksiyon" className="hover:text-stone-900 transition-colors">Kahve Paketi Omuz Çantaları</a></li>
              <li><a href="#koleksiyon" className="hover:text-stone-900 transition-colors">Kuşe Dergi Laptop Kılıfları</a></li>
              <li><a href="#koleksiyon" className="hover:text-stone-900 transition-colors">Vintage Nakışlı Gece Portföyleri</a></li>
              <li><a href="#koleksiyon" className="hover:text-stone-900 transition-colors">Masaüstü & Cüzdan Setleri</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">Atölye</h5>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#atolye" className="hover:text-stone-900 transition-colors">Nasıl Dokuyoruz?</a></li>
              <li><a href="#etki" className="hover:text-stone-900 transition-colors">Ekolojik Etki Raporu</a></li>
              <li><a href="#sss" className="hover:text-stone-900 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-3">İletişim & Sipariş</h5>
            <p className="text-[11px] text-stone-500 leading-relaxed mb-3">
              Tüm sipariş ve özel üretim talepleri için Instagram doğrudan mesaj kanalımız aktiftir.
            </p>
            <a
              href="https://www.instagram.com/cantaakademii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-stone-900 hover:text-amber-800 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@cantaakademii</span>
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>© {new Date().getFullYear()} Çanta Akademi. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-4">
            <span>Atıktan lüks zanaate, elle dokunarak.</span>
            <span>•</span>
            <a href="https://www.instagram.com/cantaakademii" target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Ürün Detay Modalı */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full border border-stone-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = selectedProduct.fallbackImg;
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/75 text-white">
                    {selectedProduct.priceEstimate}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8B5E3C] font-bold">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 leading-snug">
                      {selectedProduct.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {selectedProduct.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-700">
                    {selectedProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 grid grid-cols-2 gap-2 text-[11px] text-stone-700">
                    <div>
                      <span className="text-stone-400 block">Ambalaj Sayısı</span>
                      <strong className="text-stone-900">{selectedProduct.stats.ambalaj}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Emek Süresi</span>
                      <strong className="text-stone-900">{selectedProduct.stats.emek}</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const name = selectedProduct.title;
                        setSelectedProduct(null);
                        handleInstagramDirect(name);
                      }}
                      className="w-full py-3.5 rounded-full bg-[#1C1814] hover:bg-[#382E25] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors shadow-md active:scale-98"
                    >
                      <InstagramIcon className="w-4 h-4 text-amber-300" />
                      <span>Instagram'dan Sipariş & Bilgi Al</span>
                    </button>
                    <p className="text-center text-[10px] text-stone-400 mt-2">
                      Mesajınız otomatik kopyalanıp doğrudan Instagram DM açılır.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BELİRGİN HOP-UP INSTAGRAM DM & KOPYALANDI BİLGİLENDİRME MODALI */}
      <AnimatePresence>
        {inquiryModal.isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setInquiryModal(prev => ({ ...prev, isOpen: false }))}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 overflow-hidden"
            >
              {/* Üst Kapatma Butonu */}
              <button
                onClick={() => setInquiryModal(prev => ({ ...prev, isOpen: false }))}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Hop-up Başlık & Başarı İkonu */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Mesaj Panoya Kopyalandı ✨
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Sipariş Notunuz Hazır!
                  </h3>
                </div>
              </div>

              {/* Kullanıcı Rehberi (Adım Adım Basit Açıklama) */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs mb-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    Aşağıdaki <strong className="text-stone-950">"Instagram'a Git & Mesajı Yapıştır"</strong> butonuna dokunun.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    Açılan <strong className="text-stone-950">@cantaakademii</strong> sohbet kutusuna basılı tutup <span className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px] font-semibold border border-stone-200">Yapıştır</span> (veya <span className="bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded font-mono text-[11px] font-semibold border border-stone-200">Ctrl + V</span>) deyin ve gönderin!
                  </p>
                </div>
              </div>

              {/* Kopyalanan Mesaj Önizleme Kutusu */}
              <div className="relative bg-stone-100/90 rounded-2xl p-3.5 sm:p-4 border border-stone-300/80 mb-5 group">
                <div className="flex items-center justify-between text-[11px] text-stone-500 font-semibold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-stone-600" />
                    Kopyalanan Metin:
                  </span>
                  <button
                    onClick={handleCopyAgain}
                    className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 font-medium transition-colors text-[11px] bg-white px-2 py-0.5 rounded-md border border-stone-200 shadow-2xs"
                  >
                    {inquiryModal.copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Tekrar Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs font-mono text-stone-800 leading-relaxed bg-white/70 p-2.5 rounded-xl border border-stone-200/60 select-all">
                  "{inquiryModal.messageText}"
                </p>
              </div>

              {/* Aksiyon Butonları */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleGoToInstagram}
                  className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Instagram'a Git & Yapıştır</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-90" />
                </button>

                <button
                  onClick={() => setInquiryModal(prev => ({ ...prev, isOpen: false }))}
                  className="py-3 sm:py-3.5 px-4 rounded-2xl bg-stone-200/80 hover:bg-stone-300 text-stone-800 font-semibold text-xs transition-colors text-center"
                >
                  Kapat
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}