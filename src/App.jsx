import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Recycle, 
  X,
  Eye,
  Sliders,
  Copy,
  Check,
  Send,
  Scissors,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Logodaki Çanta ve İğne-İplik İkonu (SVG Vektör)
function CantaAkademiEmblem({ className = "w-8 h-8 text-[#556B4E]" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Çanta Sapı */}
      <path d="M36 34C36 24 42 16 50 16C58 16 64 24 64 34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      {/* Çanta Gövdesi */}
      <path d="M24 38H76L82 72C82 75 79 78 75 78H25C21 78 18 75 18 72L24 38Z" fill="currentColor" />
      {/* Dikiş İzi (Beyaz Kesikli Çizgi) */}
      <path d="M22 62C30 63 36 67 44 71" stroke="#FAF7F2" strokeWidth="3.5" strokeDasharray="5 4" strokeLinecap="round" />
      <path d="M52 73C58 74 65 72 72 65" stroke="#FAF7F2" strokeWidth="3.5" strokeDasharray="5 4" strokeLinecap="round" />
      {/* İğne (Beyaz Hat) */}
      <path d="M72 44L44 72" stroke="#FAF7F2" strokeWidth="4" strokeLinecap="round" />
      {/* İğne Deliği / İplik */}
      <path d="M68 40C72 36 78 40 74 46C70 52 64 62 72 66" stroke="#FAF7F2" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 1. DİL SÖZLÜĞÜ (TR / EN)
const TRANSLATIONS = {
  tr: {
    tickerWorkshop: "İSTANBUL ATÖLYESİ • CANLI ZANAAT",
    tickerRecovered: "Geri Kazanılan Paket",
    navTransform: "Dönüşümün Gücü",
    navCreations: "Eserler",
    navLab: "Malzeme Laboratuvarı",
    navCraft: "Zanaat Sırrı",
    orderAskBtn: "Sipariş & Fiyat Sor",
    heroManifest: "Sıfır Çöp Manifestosu • 2026 İstanbul",
    heroTitle1: "Çöp değil,",
    heroTitle2: "heykelsi moda.",
    heroDesc: "İstanbul Atölyemizde tüketilmiş kahve paketleri ve kuşe dergiler milimetrik origami şeritleriyle katlanıyor, hiçbir kimyasal yapıştırıcı olmadan ömürlük birer lüks ikona dönüşüyor.",
    heroBtnWatch: "Dönüşümü Canlı İzle",
    heroBtnExplore: "Koleksiyonu Gör",
    statStrips: "Şerit / Çanta Başına",
    statGlue: "Tutkal & Toksik Madde",
    statHours: "Saat Zanaatkar Emek",
    badgeMasterpiece: "EDITION 01 • BAŞYAPIT",
    heroCardTitle: "Kahve Paketi Omuz Çantası",
    heroCardSub: "45 Steril Paket • Pirinç Zincir",
    transBadge: "CANLI ZANAAT KARŞILAŞTIRMASI",
    transTitle: "Dönüşümün Gücü",
    transDesc: "Tek kullanımlık ambalaj şeritleri ile tamamlanmış lüks tasarım arasındaki sihirli farkı görmek için sürgüyü iki yana kaydırın.",
    transAfter: "SONUÇ: İLERİ DÖNÜŞÜM ÇANTA ✨",
    transBefore: "BAŞLANGIÇ: STERİLİZE AMBALAJ & DERGİ",
    transCard1Title: "01 / ÇÖPTEN KURTARMA",
    transCard1Desc: "Her çanta ile doğaya karışması 100 yıl sürecek alüminyum paketler kurtarılır.",
    transCard2Title: "02 / MİMETRİK ŞERİT",
    transCard2Desc: "Tek tek milimetrik origami kilitlerle katlanır, su sızdırmaz zırha döner.",
    transCard3Title: "03 / ÖMÜRLÜK KULLANIM",
    transCard3Desc: "Geri dönüştürülmüş metal kilit aksamları monte edilerek lüks bir parça olur.",
    labBadge: "Malzeme Anatomisi",
    labTitle: "Ham Maddelerimizin Sırrı",
    labDesc: "Hangi malzemenin nasıl işlendiğini görmek için kartlara tıklayın. Her malzemenin atölyemizdeki hazırlık serüveni farklıdır.",
    labSelectedBadge: "Seçili Malzeme İncelemesi",
    labSource: "Kaynak",
    lookbookBadge: "2026 Atelier Collection",
    lookbookTitle: "Eserler & Lookbook",
    lookbookDesc: "Her biri tek nüsha veya kişiye özel limitli seridir. Beğendiğiniz parçanın fiyatını ve teslimatını saniyeler içinde Instagram DM'den öğrenebilirsiniz.",
    viewDetail: "Büyük Görsel & Detay",
    askPrice: "Fiyat & Sipariş Sor",
    specPackaging: "Ambalaj",
    specCraft: "El Emeği",
    specHardware: "Aksam",
    methodBadge: "Geleneksel Origami Zanaatı",
    methodTitle: "4 Adımda Sanata Dönüşüm",
    methodDesc: "Tutkal kullanılmaz. Her bir parça, kumaş gibi dokunan kilitli origami katlamalarıyla taş gibi mukavemet kazanır.",
    step1Title: "1. Toplama & Arındırma",
    step1Desc: "Ambalajlar toplanıp gıda atıklarından arındırılır, hijyen banyolarından sonra milimetrik şeritlere dilimlenir.",
    step2Title: "2. Origami Katlama",
    step2Desc: "Her şerit 4 katmanlı dayanıklılık elde edecek şekilde katlanır. Uç kısımlarına birbirini tutan yuvalar açılır.",
    step3Title: "3. Kilitli Şerit Örgüsü",
    step3Desc: "Yüzlerce şerit el ile birbirine kilitlenir; su sızdırmaz, esnek ve sağlam bir zırh gövde ortaya çıkar.",
    step4Title: "4. Metal Kilit & Montaj",
    step4Desc: "Pirinç zincirler, İtalyan kilit aksamları ve saten astarlar elde dikilerek imza çanta hazır hale gelir.",
    ctaCommunity: "@cantaakademii Topluluğu",
    ctaTitle: "Kendi Anılarınızı Bir Çantaya Dönüştürelim.",
    ctaDesc: "Sakladığınız kahve paketleri, eski dergiler veya özel kumaş parçalarınız varsa bize gönderin; sizin için tekil bir başyapıt dokuyalım.",
    ctaBtn: "Instagram Profiline Git",
    footerCopyright: "Sıfır Atık, Kusursuz Zanaat.",
    popupTitle: "Mesajınız Panoya Kopyalandı! ✨",
    popupSub: "Instagram DM Hazır",
    popupInstText: "Aşağıdaki butona bastığınızda doğrudan @cantaakademii Instagram sohbet kutusu açılacaktır:",
    popupStep1: "Açılan DM kutusuna parmağınızı basılı tutup 'Yapıştır' deyin.",
    popupStep2: "Gönder tuşuna basın, anında fiyat ve sipariş detaylarını paylaşalım!",
    popupTemplateLabel: "Kopyalanan Şablon Metin:",
    popupCopyAgain: "Tekrar Kopyala",
    popupOpenBtn: "Instagram'ı Aç ve Mesajı Yapıştır",
    inquiryCustom: "Özel Koleksiyon Talebi"
  },
  en: {
    tickerWorkshop: "ISTANBUL ATELIER • LIVE CRAFTSMANSHIP",
    tickerRecovered: "Upcycled Packages",
    navTransform: "Power of Transformation",
    navCreations: "Creations",
    navLab: "Material Studio",
    navCraft: "Craftsmanship",
    orderAskBtn: "Inquire & Order",
    heroManifest: "Zero Waste Manifesto • 2026 Istanbul",
    heroTitle1: "Not trash,",
    heroTitle2: "sculptural fashion.",
    heroDesc: "At our Istanbul Atelier, post-consumer coffee packs and glossy magazines are precision-folded into origami ribbons, morphing into zero-adhesive, everlasting luxury icons.",
    heroBtnWatch: "Watch Transformation",
    heroBtnExplore: "Explore Creations",
    statStrips: "Strips / Per Bag",
    statGlue: "Glue & Toxic Chemicals",
    statHours: "Hours Artisanal Labor",
    badgeMasterpiece: "EDITION 01 • MASTERPIECE",
    heroCardTitle: "Upcycled Coffee Shoulder Bag",
    heroCardSub: "45 Sterilized Bags • Brass Chain",
    transBadge: "LIVE CRAFT COMPARISON",
    transTitle: "The Power of Transformation",
    transDesc: "Slide horizontally to discover the boundary between discarded food packaging and bespoke luxury fashion.",
    transAfter: "RESULT: UPCYCLED COUTURE BAG ✨",
    transBefore: "ORIGIN: STERILIZED PACKAGING & PAPERS",
    transCard1Title: "01 / LANDFILL RESCUE",
    transCard1Desc: "Rescues multi-layer aluminum packs that would otherwise persist in landfills for 100+ years.",
    transCard2Title: "02 / ORIGAMI WEAVING",
    transCard2Desc: "Folded into self-interlocking units to build an impermeable, structural armor.",
    transCard3Title: "03 / LIFELONG DURABILITY",
    transCard3Desc: "Finished with upcycled brass hardware and satin lining for heirloom longevity.",
    labBadge: "Material Anatomy",
    labTitle: "The Secret of Our Raw Elements",
    labDesc: "Select a material card to inspect its tactile origin and engineering process in our atelier.",
    labSelectedBadge: "Selected Material Inspection",
    labSource: "Sourced from",
    lookbookBadge: "2026 Atelier Collection",
    lookbookTitle: "Creations & Lookbook",
    lookbookDesc: "Each piece is one-of-a-kind or produced in hyper-limited series. Inquire about pricing and bespoke options via Instagram DM.",
    viewDetail: "Inspect & Enlarge",
    askPrice: "Inquire via Instagram",
    specPackaging: "Material",
    specCraft: "Craftwork",
    specHardware: "Hardware",
    methodBadge: "Artisanal Origami Craft",
    methodTitle: "4 Steps to Sculptural Fashion",
    methodDesc: "100% glue-free. Every single module locks into place via origami tension, forming a waterproof and featherlight armor.",
    step1Title: "1. Collection & Sanitization",
    step1Desc: "Food-grade multi-layer foil bags are cleansed in sanitizing baths and machine-slit into precise strips.",
    step2Title: "2. Origami Modular Folding",
    step2Desc: "Each strip is quadrupled for high tensile strength, creating dual interlocking clasp pockets.",
    step3Title: "3. Interlocking Ribbon Weave",
    step3Desc: "Hundreds of links interweave by hand into an unbreakable, waterproof matrix without adhesive.",
    step4Title: "4. Hardware & Final Assembly",
    step4Desc: "Solid brass chains, turnlocks, and hand-stitched inner linings complete the bespoke bag.",
    ctaCommunity: "@cantaakademii Collective",
    ctaTitle: "Let's Weave Your Memories Into Art.",
    ctaDesc: "Have cherished coffee bags, rare magazines, or vintage fabric? Send them to our atelier for a bespoke creation tailored to your story.",
    ctaBtn: "Visit Instagram Atelier",
    footerCopyright: "Zero Waste, Uncompromising Luxury.",
    popupTitle: "Message Copied to Clipboard! ✨",
    popupSub: "Instagram DM Ready",
    popupInstText: "Clicking below opens the official @cantaakademii Instagram direct chat:",
    popupStep1: "Simply tap and hold in the message bar to 'Paste'.",
    popupStep2: "Hit send and our artisans will reply with pricing and delivery timelines.",
    popupTemplateLabel: "Copied Message Template:",
    popupCopyAgain: "Copy Again",
    popupOpenBtn: "Open Instagram & Paste Message",
    inquiryCustom: "Bespoke Collection Inquiry"
  }
};

// 2. KOLEKSİYON VERİLERİ (TR / EN)
const PRODUCTS_DATA = {
  tr: [
    {
      id: 'kahve-omuz',
      num: 'N° 01',
      title: 'Upcycled Coffee Couture',
      sub: 'Kahve Paketi Şerit Dokuması',
      img: '/IMG_5787.JPG',
      tag: 'Başyapıt / Signature',
      tagTone: 'bg-amber-600 text-white',
      desc: 'Tüketilmiş espresso paketlerinin metalik ve parlak şeritleri, milimetrik origami kilitleriyle bir araya gelerek su geçirmez, ışıltılı ve mimari bir gece/gündüz çantasına dönüşüyor.',
      stats: { ambalaj: '45 Paket', emek: '18 Saat', donanim: 'Pirinç Zincir & Kilit' },
      details: ['Sıfır Kimyasal Yapıştırıcı', 'Paslanmaz Çevirmeli Kilit', 'Özel İç Astar']
    },
    {
      id: 'laptop-folio',
      num: 'N° 02',
      title: 'Glossy Editorial Folio',
      sub: 'Kuşe Sanat Dergisi Yaprakları',
      img: '/IMG_5789.JPG',
      tag: 'Tekil Doku',
      tagTone: 'bg-[#556B4E] text-white',
      desc: 'Moda ve sanat dergilerinin canlı renkli sayfaları, şeritler halinde katlanıp nano su itici katmanla mühürleniyor. Her bir modelin renk kompozisyonu dünyada yalnızca tek bir kişiye ait.',
      stats: { ambalaj: '60 Dergi Sayfası', emek: '14 Saat', donanim: 'Su İtici Fermuar' },
      details: ['13-14 inç Laptop Uyumlu', 'Darbe Emici Zırh Dokuma', 'Her Biri Tekil Desen']
    },
    {
      id: 'vintage-rose',
      num: 'N° 03',
      title: 'Vintage Rose Bronz Minaudière',
      sub: 'Antik Bronz & Kadife El Nakışı',
      img: '/IMG_4444.PNG',
      tag: 'Nadir Seri',
      tagTone: 'bg-rose-700 text-white',
      desc: 'Atölyemizin zanaatkar ellerinde nakşedilen nostaljik gül motifleri, antik bronz kilitli heykelsi çerçeveyle buluşuyor. Özel gecelerin ve koleksiyonerlerin imza parçası.',
      stats: { ambalaj: 'Geri Kazanılmış Kadife', emek: '22 Saat', donanim: 'Antik Bronz Kilit' },
      details: ['Geleneksel El Nakışı', 'Kişiye Özel Renk Seçeneği', 'Sınırlı Üretim']
    },
    {
      id: 'akademi-box',
      num: 'N° 04',
      title: 'Origami Book Sculpt Box',
      sub: 'Eski Kitap Sayfası Strüktürü',
      img: '/IMG_5052.JPG',
      tag: 'Heykelsi Nesne',
      tagTone: 'bg-stone-900 text-white',
      desc: 'Sarı sayfalı eski kitap yapraklarının modüler bir kutu formuna evrilmesi. İster masaüstünde sanatsal bir obje, ister elde taşınan geometrik bir portföy.',
      stats: { ambalaj: 'Eski Kitap Yaprakları', emek: '12 Saat', donanim: 'Sert Mukavim Gövde' },
      details: ['Kendi Geometrisini Korur', 'Modüler İç Bölme', 'Atölye Tasarımı']
    }
  ],
  en: [
    {
      id: 'kahve-omuz',
      num: 'N° 01',
      title: 'Upcycled Coffee Couture',
      sub: 'Coffee Foil Modular Weave',
      img: '/IMG_5787.JPG',
      tag: 'Masterpiece / Signature',
      tagTone: 'bg-amber-600 text-white',
      desc: 'Sterilized espresso foil packaging interwoven with high-tensile origami joints. Featherweight, impervious to rain, and radiantly architectural.',
      stats: { ambalaj: '45 Coffee Bags', emek: '18 Hours', donanim: 'Solid Brass Chain & Clasp' },
      details: ['100% Glue-Free', 'Rotary Turnlock Clasp', 'Tailored Inner Lining']
    },
    {
      id: 'laptop-folio',
      num: 'N° 02',
      title: 'Glossy Editorial Folio',
      sub: 'High-Gloss Magazine Leaves',
      img: '/IMG_5789.JPG',
      tag: 'Unique Texture',
      tagTone: 'bg-[#556B4E] text-white',
      desc: 'Art editorial pages folded and bonded with a hydrophobic nano-coating. Every color arrangement is an unrepeatable visual painting.',
      stats: { ambalaj: '60 Editorial Pages', emek: '14 Hours', donanim: 'Weatherproof Zipper' },
      details: ['Fits 13-14" Laptops', 'Impact-Absorbing Shell', 'One-of-a-Kind Pattern']
    },
    {
      id: 'vintage-rose',
      num: 'N° 03',
      title: 'Vintage Rose Bronze Minaudière',
      sub: 'Antique Bronze & Silk Embroidery',
      img: '/IMG_4444.PNG',
      tag: 'Rare Archive',
      tagTone: 'bg-rose-700 text-white',
      desc: 'Upcycled heritage velvet intricately embroidered with heirloom roses, set inside a heavy antique bronze kiss-lock brass frame.',
      stats: { ambalaj: 'Salvaged Velvet', emek: '22 Hours', donanim: 'Antique Kiss-Lock' },
      details: ['Hand Needlepoint Craft', 'Bespoke Colorways', 'Ultra-Limited Edition']
    },
    {
      id: 'akademi-box',
      num: 'N° 04',
      title: 'Origami Book Sculpt Box',
      sub: 'Antique Patina Book Pages',
      img: '/IMG_5052.JPG',
      tag: 'Sculptural Object',
      tagTone: 'bg-stone-900 text-white',
      desc: 'Aged paper foliage folded into an autonomous structural box. Serves equally as desk sculpture or an architectural evening clutch.',
      stats: { ambalaj: 'Archival Book Paper', emek: '12 Hours', donanim: 'Self-Supported Shell' },
      details: ['Shape-Retaining Tension', 'Modular Compartment', 'Atelier Original']
    }
  ]
};

// 3. MALZEME LABORATUVARI (TR / EN)
const MATERIALS_DATA = {
  tr: [
    {
      id: 'coffee',
      name: 'Kahve Paketleri',
      origin: 'İstanbul Kahvecileri & Evsel Tüketim',
      property: 'Su geçirmez alüminyum bariyer, metalik parlaklık, yırtılmaz dayanıklılık.',
      preview: '/IMG_5787.JPG',
      badge: 'Alüminyum & Polimer'
    },
    {
      id: 'magazine',
      name: 'Kuşe Sanat Dergileri',
      origin: 'Okunmuş Dergiler & Mimari Kataloglar',
      property: 'Canlı renk geçişleri, nano koruyucu yüzey, hafif ve esnek şerit formu.',
      preview: '/IMG_5789.JPG',
      badge: 'Lamine Kağıt Lifleri'
    },
    {
      id: 'velvet',
      name: 'Kadife & El Nakış İplikleri',
      origin: 'Geri Kazanılmış Vintage Kumaşlar',
      property: 'Tarihi dokular, ipek ve pamuk karışımı nakışlar, yumuşak dokunsal his.',
      preview: '/IMG_4444.PNG',
      badge: 'Tekstil & Bronz Aksam'
    }
  ],
  en: [
    {
      id: 'coffee',
      name: 'Coffee Packaging Bags',
      origin: 'Istanbul Artisan Roasteries & Households',
      property: 'Waterproof aluminum barrier, metallic luster, tensile durability.',
      preview: '/IMG_5787.JPG',
      badge: 'Aluminum & Barrier Foil'
    },
    {
      id: 'magazine',
      name: 'Glossy Editorial Magazines',
      origin: 'Reclaimed Architectural Catalogs & Periodicals',
      property: 'Vibrant chromatic spectrum, nano-sealed surface, light modular fold.',
      preview: '/IMG_5789.JPG',
      badge: 'Laminated Fiber Matrix'
    },
    {
      id: 'velvet',
      name: 'Heritage Velvet & Floss',
      origin: 'Archival Upholstery & Silk Threads',
      property: 'Heirloom botanical embroidery, tactile depth, patinaed bronze mounts.',
      preview: '/IMG_4444.PNG',
      badge: 'Textiles & Patina Bronze'
    }
  ]
};

export default function App() {
  const [lang, setLang] = useState('tr');
  const t = TRANSLATIONS[lang];
  const products = PRODUCTS_DATA[lang];
  const materials = MATERIALS_DATA[lang];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [activeMaterialId, setActiveMaterialId] = useState('coffee');
  const [livePackages, setLivePackages] = useState(14820);

  const activeMaterial = materials.find(m => m.id === activeMaterialId) || materials[0];

  // Instagram Hop-Up Alert State
  const [inquiryModal, setInquiryModal] = useState({
    isOpen: false,
    productName: '',
    copiedText: '',
    isCopied: false
  });

  useEffect(() => {
    const timer = setInterval(() => setLivePackages(v => v + 1), 3200);
    return () => clearInterval(timer);
  }, []);

  const handleOpenInquiry = (productName) => {
    const textToCopy = lang === 'tr' 
      ? `Merhaba @cantaakademii! Sitede gördüğüm "${productName}" hakkında bilgi, güncel fiyat ve özel sipariş detaylarını öğrenebilir miyim?`
      : `Hello @cantaakademii! I would like to inquire about pricing, details, and bespoke availability for "${productName}".`;
    
    navigator.clipboard.writeText(textToCopy).catch(() => {});

    setInquiryModal({
      isOpen: true,
      productName: productName,
      copiedText: textToCopy,
      isCopied: true
    });
  };

  const handleCopyAgain = () => {
    navigator.clipboard.writeText(inquiryModal.copiedText);
    setInquiryModal(prev => ({ ...prev, isCopied: true }));
  };

  const handleGoToInstagram = () => {
    window.open('https://ig.me/m/cantaakademii', '_blank');
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1E1C1A] min-h-screen selection:bg-[#556B4E] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. ÜST BİLGİ & CANLI SAYAÇ (Sultangazi silindi, İstanbul Atölyesi eklendi) */}
      <div className="bg-[#1C1A18] text-[#E8DFC8] px-4 sm:px-8 lg:px-12 py-2 text-xs flex items-center justify-between font-mono tracking-tight">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#7D9D74] animate-ping" />
          <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-300">
            {t.tickerWorkshop}
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
          <span className="hidden sm:inline">
            {t.tickerRecovered}: <strong className="text-amber-400 font-bold">{livePackages.toLocaleString('tr-TR')}</strong>
          </span>
          <span className="text-stone-700 hidden sm:inline">/</span>
          <a 
            href="https://www.instagram.com/cantaakademii" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white hover:text-[#7D9D74] flex items-center gap-1.5 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#7D9D74]" />
            <span>@cantaakademii</span>
          </a>
        </div>
      </div>

      {/* 2. LOGOLU VE GENİŞLETİLMİŞ NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#E3DAC8] px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-6">
        
        {/* LOGO & MARKA KİMLİĞİ */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 group">
          {/* Çanta Akademi Özel Logosu */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#556B4E] shadow-sm bg-[#FAF7F2] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
            <img 
              src="/canta-akademi-logo.png" 
              alt="Çanta Akademi Logo" 
              onError={(e) => {
                // Eğer görsel dosya henüz kopyalanmadıysa hazır vektörel amblem devrede
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
              className="w-full h-full object-contain"
            />
            <div className="hidden w-full h-full items-center justify-center">
              <CantaAkademiEmblem className="w-8 h-8 text-[#556B4E]" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#556B4E] rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">✓</span>
          </div>

          <div>
            <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#1E1C1A] block leading-none">
              ÇANTA AKADEMİ
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#556B4E] font-bold block mt-1">
              Maison D’Artisanat
            </span>
          </div>
        </a>

        {/* ORTA MENÜ LİNKLERİ (Ferah, Sıkışmayan Yapı) */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
          <a href="#donusum" className="hover:text-[#556B4E] transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#556B4E] font-mono">01.</span> {t.navTransform}
          </a>
          <a href="#koleksiyon" className="hover:text-[#556B4E] transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#556B4E] font-mono">02.</span> {t.navCreations}
          </a>
          <a href="#laboratuvar" className="hover:text-[#556B4E] transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#556B4E] font-mono">03.</span> {t.navLab}
          </a>
          <a href="#metodoloji" className="hover:text-[#556B4E] transition-colors flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[#556B4E] font-mono">04.</span> {t.navCraft}
          </a>
        </nav>

        {/* SAĞ TARAF: TR/EN DİL SEÇİCİ & DM BUTONU */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* TR / EN DİL BUTONU */}
          <div className="flex items-center bg-[#ECE4D4] border border-[#D5C9B4] rounded-full p-1 text-xs font-mono font-bold shadow-xs">
            <button
              onClick={() => setLang('tr')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'tr' 
                  ? 'bg-[#1C1A18] text-white shadow-xs' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'en' 
                  ? 'bg-[#1C1A18] text-white shadow-xs' 
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* DM BUTONU */}
          <button 
            onClick={() => handleOpenInquiry(t.inquiryCustom)}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1C1A18] hover:bg-[#556B4E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">{t.orderAskBtn}</span>
            <span className="sm:hidden">DM</span>
          </button>
        </div>

      </header>

      {/* 3. HERO: EDİTORYAL POSTER MİZANPAJ */}
      <section className="relative px-6 lg:px-12 pt-8 pb-20 max-w-7xl mx-auto overflow-hidden">
        
        {/* Arkada silüet arka plan tipografisi */}
        <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none select-none opacity-5">
          <span className="font-serif text-[18vw] font-black leading-none text-black tracking-tighter">RE-CRAFT</span>
        </div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-4 sm:pt-8">
          
          {/* Sol Kolon */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFE8DC] border border-[#DDD3C2] text-xs font-bold text-stone-800">
              <span className="w-2 h-2 rounded-full bg-[#556B4E]" />
              <span className="uppercase tracking-widest font-mono text-[11px]">{t.heroManifest}</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-stone-900 leading-[0.98] tracking-tight">
              {t.heroTitle1} <br />
              <span className="italic font-serif font-light text-[#556B4E]">{t.heroTitle2}</span>
            </h1>

            <p className="text-stone-700 text-base sm:text-xl font-normal leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#donusum"
                className="px-8 py-4 rounded-full bg-[#556B4E] hover:bg-[#43563D] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2.5"
              >
                <span>{t.heroBtnWatch}</span>
                <Sliders className="w-4 h-4" />
              </a>

              <a 
                href="#koleksiyon"
                className="px-8 py-4 rounded-full bg-white hover:bg-stone-100 text-stone-900 border-2 border-[#1C1A18] text-xs uppercase tracking-widest font-bold transition-all shadow-sm flex items-center gap-2"
              >
                <span>{t.heroBtnExplore}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Sayaçlar */}
            <div className="pt-8 border-t-2 border-[#E3DAC8] grid grid-cols-3 gap-6">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-black text-stone-900 block leading-tight">450+</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mt-1 block">{t.statStrips}</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-black text-[#556B4E] block leading-tight">%0</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mt-1 block">{t.statGlue}</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-black text-emerald-800 block leading-tight">18+</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mt-1 block">{t.statHours}</span>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Sanat Kolajı */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-stone-200 group">
                <img 
                  src="/IMG_5787.JPG" 
                  alt="Upcycled Bag" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#556B4E] px-3 py-1 rounded-full w-max mb-2">
                    {t.badgeMasterpiece}
                  </span>
                  <h3 className="font-serif text-2xl font-bold">{t.heroCardTitle}</h3>
                  <p className="text-xs text-stone-300 mt-1 font-mono">{t.heroCardSub}</p>
                </div>
              </div>

              {/* Yüzen Polaroid Kartı 1 */}
              <div className="absolute -top-6 -right-6 w-36 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white rotate-6 hidden sm:block">
                <img src="/IMG_5789.JPG" alt="Texture 02" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-2 text-[9px] font-mono font-bold text-stone-700 bg-white/90 px-1 rounded">DOKU #02</span>
              </div>

              {/* Yüzen Polaroid Kartı 2 */}
              <div className="absolute -bottom-6 -left-6 w-40 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white -rotate-6 hidden sm:block">
                <img src="/IMG_4444.PNG" alt="Embroidery 03" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 left-2 text-[9px] font-mono font-bold text-stone-700 bg-white/90 px-1 rounded">NAKIŞ #03</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. DÖNÜŞÜMÜN GÜCÜ (BEFORE / AFTER KARŞILAŞTIRMASI)
      ========================================================================= */}
      <section id="donusum" className="py-24 px-6 lg:px-12 bg-[#EFE8DC] border-y-2 border-[#E0D5C3] relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D4C7B2] pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD3C2] text-xs font-mono font-bold text-[#556B4E]">
                <Sliders className="w-3.5 h-3.5" />
                <span>{t.transBadge}</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-black text-stone-900 tracking-tight">
                {t.transTitle}
              </h2>
            </div>
            <p className="text-stone-700 text-sm sm:text-base max-w-md leading-relaxed">
              {t.transDesc}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-8 border-white shadow-2xl select-none bg-stone-300">
              
              {/* After: Bitmiş Çanta */}
              <img 
                src="/IMG_5787.JPG" 
                alt="Bitmiş Çanta" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-5 right-5 bg-[#1C1A18]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono font-bold text-amber-300 border border-amber-500/30 shadow-lg">
                {t.transAfter}
              </div>

              {/* Before: Katlanmış Ambalaj Şeritleri */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src="/IMG_5789.JPG" 
                  alt="Ham Ambalaj" 
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-5 left-5 bg-[#556B4E]/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono font-bold text-white shadow-lg">
                  {t.transBefore}
                </div>
              </div>

              {/* Sürgü Çizgisi & Kolu */}
              <div 
                className="absolute inset-y-0 w-1.5 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#1C1A18] text-white flex items-center justify-center shadow-2xl border-4 border-white font-black text-sm tracking-tighter">
                  ‹ ›
                </div>
              </div>

              {/* Sürgü Inputu */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos} 
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />
            </div>

            {/* Slider Açıklama Rozetleri */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-white border border-[#DDD3C2] shadow-xs text-xs">
                <span className="font-mono font-bold text-[#556B4E] block mb-1">{t.transCard1Title}</span>
                <p className="text-stone-600">{t.transCard1Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#DDD3C2] shadow-xs text-xs">
                <span className="font-mono font-bold text-stone-900 block mb-1">{t.transCard2Title}</span>
                <p className="text-stone-600">{t.transCard2Desc}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#DDD3C2] shadow-xs text-xs">
                <span className="font-mono font-bold text-emerald-800 block mb-1">{t.transCard3Title}</span>
                <p className="text-stone-600">{t.transCard3Desc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MALZEME LABORATUVARI (MATERIAL STUDIO)
      ========================================================================= */}
      <section id="laboratuvar" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556B4E]">{t.labBadge}</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-stone-900 leading-tight">
              {t.labTitle}
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              {t.labDesc}
            </p>

            {/* Malzeme Seçim Sekmeleri */}
            <div className="space-y-3 pt-2">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterialId(mat.id)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                    activeMaterial.id === mat.id 
                      ? 'bg-white border-[#1C1A18] shadow-md' 
                      : 'bg-[#EFE8DC] border-transparent hover:border-[#DDD3C2]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 block">{mat.badge}</span>
                    <h4 className="font-serif text-lg font-bold text-stone-900">{mat.name}</h4>
                  </div>
                  <span className={`w-3 h-3 rounded-full ${activeMaterial.id === mat.id ? 'bg-[#556B4E]' : 'bg-stone-300'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Sağ: Canlı Kart */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-4 border-[#1C1A18] shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <span className="font-mono text-xs font-bold uppercase text-[#556B4E]">{t.labSelectedBadge}</span>
                <span className="text-xs font-mono text-stone-500 font-semibold">{activeMaterial.badge}</span>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-300 shadow-inner">
                <img 
                  src={activeMaterial.preview} 
                  alt={activeMaterial.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-black text-stone-900">{activeMaterial.name}</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {activeMaterial.property}
                </p>
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-xs font-mono text-stone-700">
                  <strong>{t.labSource}:</strong> {activeMaterial.origin}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. ESERLER & LOOKBOOK
      ========================================================================= */}
      <section id="koleksiyon" className="py-24 px-6 lg:px-12 bg-white border-y-2 border-[#E0D5C3]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-stone-200 pb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556B4E]">{t.lookbookBadge}</span>
              <h2 className="font-serif text-4xl sm:text-6xl font-black text-stone-900 mt-1">{t.lookbookTitle}</h2>
            </div>
            <p className="text-stone-600 text-sm max-w-md">
              {t.lookbookDesc}
            </p>
          </div>

          {/* Kartlar */}
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((p) => (
              <div 
                key={p.id}
                className="group flex flex-col justify-between rounded-3xl bg-[#FAF7F2] border-2 border-[#E0D5C3] hover:border-[#1C1A18] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-[#556B4E] tracking-widest">{p.num} // {p.sub}</span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-xs ${p.tagTone}`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Fotoğraf Sahnesi */}
                  <div 
                    onClick={() => setSelectedProduct(p)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 cursor-pointer shadow-inner border border-stone-300"
                  >
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1C1A18]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-5 py-2.5 rounded-full bg-white text-stone-900 font-bold text-xs flex items-center gap-2 shadow-xl">
                        <Eye className="w-4 h-4 text-[#556B4E]" /> {t.viewDetail}
                      </span>
                    </div>
                  </div>

                  {/* Metinler */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl font-black text-stone-900 group-hover:text-[#556B4E] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Metrikler */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#D4C7B2] text-center font-mono text-[11px]">
                      <div>
                        <span className="text-stone-500 block">{t.specPackaging}</span>
                        <strong className="text-stone-900">{p.stats.ambalaj}</strong>
                      </div>
                      <div>
                        <span className="text-stone-500 block">{t.specCraft}</span>
                        <strong className="text-stone-900">{p.stats.emek}</strong>
                      </div>
                      <div>
                        <span className="text-stone-500 block">{t.specHardware}</span>
                        <strong className="text-stone-900">{p.stats.donanim}</strong>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.details.map((d, i) => (
                        <span key={i} className="text-[11px] font-semibold text-stone-700 bg-white px-3 py-1 rounded-lg border border-[#D4C7B2]">
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Aksiyon */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[#E0D5C3] flex items-center gap-3">
                  <button 
                    onClick={() => handleOpenInquiry(p.title)}
                    className="flex-1 py-4 px-6 rounded-full bg-[#1C1A18] hover:bg-[#556B4E] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-98"
                  >
                    <InstagramIcon className="w-4 h-4 text-amber-300" />
                    <span>{t.askPrice}</span>
                  </button>

                  <button 
                    onClick={() => setSelectedProduct(p)}
                    className="p-4 rounded-full bg-white hover:bg-stone-100 border-2 border-stone-300 text-stone-800 transition-colors shadow-xs"
                    title={t.viewDetail}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. ZANAAT METODOLOJİSİ (4 ADIMDA SANAT)
      ========================================================================= */}
      <section id="metodoloji" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#556B4E]">{t.methodBadge}</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-stone-900">{t.methodTitle}</h2>
          <p className="text-stone-700 text-sm">
            {t.methodDesc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E0D5C3] space-y-4 shadow-sm hover:border-[#1C1A18] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Recycle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">{t.step1Title}</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">{t.step1Desc}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-[#E0D5C3] space-y-4 shadow-sm hover:border-[#1C1A18] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE8DC] text-[#556B4E] flex items-center justify-center font-bold">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">{t.step2Title}</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">{t.step2Desc}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-[#E0D5C3] space-y-4 shadow-sm hover:border-[#1C1A18] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">{t.step3Title}</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">{t.step3Desc}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-[#E0D5C3] space-y-4 shadow-sm hover:border-[#1C1A18] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-stone-200 text-stone-900 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">{t.step4Title}</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">{t.step4Desc}</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. INSTAGRAM ÇAĞRISI
      ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#EFE8DC] border-t-2 border-[#E0D5C3]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-white border-4 border-[#1C1A18] shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#DDD3C2] text-xs font-bold text-[#556B4E]">
            <InstagramIcon className="w-4 h-4 text-[#556B4E]" />
            <span>{t.ctaCommunity}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-black">
            {t.ctaTitle}
          </h2>

          <p className="text-stone-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {t.ctaDesc}
          </p>

          <div className="pt-2 flex justify-center">
            <a 
              href="https://www.instagram.com/cantaakademii" 
              target="_blank" 
              rel="noreferrer"
              className="px-9 py-4 rounded-full bg-[#1C1A18] hover:bg-[#556B4E] text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:opacity-95 flex items-center gap-2.5 active:scale-95"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>{t.ctaBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-[#E0D5C3] bg-white py-10 px-6 lg:px-12 text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 font-semibold text-stone-800">
          <span className="font-serif text-base font-bold">Çanta Akademi</span>
          <span>• © 2026 İstanbul Atölyesi</span>
        </div>
        <p className="font-mono text-stone-600 font-medium">{t.footerCopyright}</p>
      </footer>

      {/* =========================================================================
          HOP-UP ALERT MODAL (INSTAGRAM DM BİLDİRİMİ)
      ========================================================================= */}
      <AnimatePresence>
        {inquiryModal.isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setInquiryModal(prev => ({ ...prev, isOpen: false }))}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-4 border-[#1C1A18] shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setInquiryModal(prev => ({ ...prev, isOpen: false }))}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#EFE8DC] text-[#556B4E] flex items-center justify-center border-2 border-[#556B4E]">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 font-black">{t.popupTitle}</h3>
                  <span className="text-xs text-stone-500 font-mono font-semibold">{t.popupSub}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C2] space-y-3 mb-6">
                <p className="text-xs text-stone-800 leading-relaxed font-semibold">
                  {t.popupInstText}
                </p>
                <ol className="text-xs text-stone-700 space-y-1.5 list-decimal list-inside font-medium">
                  <li>{t.popupStep1}</li>
                  <li>{t.popupStep2}</li>
                </ol>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-1.5">
                  <span>{t.popupTemplateLabel}</span>
                  <button 
                    onClick={handleCopyAgain}
                    className="text-[#556B4E] hover:underline font-bold flex items-center gap-1"
                  >
                    <Copy className="w-3.5 h-3.5" /> {t.popupCopyAgain}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 leading-relaxed select-all font-mono">
                  "{inquiryModal.copiedText}"
                </div>
              </div>

              <button 
                onClick={handleGoToInstagram}
                className="w-full py-4 rounded-2xl bg-[#1C1A18] hover:bg-[#556B4E] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-xl transition-transform active:scale-[0.98]"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>{t.popupOpenBtn}</span>
                <Send className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          BÜYÜK GÖRSEL & DETAY MODAL
      ========================================================================= */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border-4 border-[#1C1A18] shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-300">
                  <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full ${selectedProduct.tagTone}`}>
                    {selectedProduct.num} • {selectedProduct.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-stone-900 font-black">{selectedProduct.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{selectedProduct.desc}</p>
                  
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C2] text-xs text-stone-800 space-y-1 font-mono">
                    <p>• <strong>{t.specPackaging}:</strong> {selectedProduct.stats.ambalaj}</p>
                    <p>• <strong>{t.specCraft}:</strong> {selectedProduct.stats.emek}</p>
                    <p>• <strong>{t.specHardware}:</strong> {selectedProduct.stats.donanim}</p>
                  </div>

                  <button 
                    onClick={() => {
                      const name = selectedProduct.title;
                      setSelectedProduct(null);
                      handleOpenInquiry(name);
                    }}
                    className="w-full py-3.5 rounded-full bg-[#556B4E] hover:bg-[#43563D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <InstagramIcon className="w-4 h-4 text-white" />
                    <span>{t.askPrice}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}