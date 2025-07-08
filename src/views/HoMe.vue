<template>
    <h1 style="font-family: 'Arial', sans-serif; font-size: 1.8rem; color: #fff; text-shadow: 0 0 5px #0000ff, 0 0 10px #0000ff, 0 0 20px #0000ff, 0 0 30px #0000ff; text-align: center;" class="mb-4" >
      متجرك الالكتروني الأول بين يديك
    </h1>
    <swiper
      :modules="[Autoplay]"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img" alt="slider image" />
    </swiper-slide>
</swiper>

<div>
    <h1 style="font-family: 'Arial', sans-serif; font-size: 2rem; color: #000; text-align: right; margin: 20px 0; border-bottom: 3px solid #000; padding-bottom: 10px; text-shadow: 0 0 5px #000, 0 0 10px #000;" class="pr-4">
        الخدمات
    </h1>
    </div>
    <div>

    </div>
<div class="services-container">
    <div v-for="(service, index) in services" :key="index" class="service-card">
      <h2 class="service-title">{{ service.title }}</h2>
      <img class="w-64 mx-auto" :src="service.img" alt="slider " />
      <p class="service-description mb-10">{{ service.description }}</p>
  <a :href="service.link" class="order-button ">
  اطلب الآن
</a>
    </div>
    </div>

  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
  import 'swiper/css';
  
  import img3 from '@/assets/img3.jpeg'; // استيراد الصورة هنا
  import img4 from '@/assets/img4.jpg'; // استيراد الصورة هنا
  import img5 from '@/assets/img5.jpeg'; // استيراد الصورة هنا
  import tagdem from '@/assets/tagdem.png'; // استيراد الصورة هنا
  
  // المصفوفة تحتوي الآن على المسارات التي تم استيرادها
const services  = [
  { title: 'STARLINK', description: 'دفع فواتير استارلنك بافضل الاسعار وحل جميع المشاكل بكل امان', img: img4, link: '/starlink' },
  {
    title: 'Netflix اشتراك',
    description: 'اشتراك رقمي شهري لمحتوى Netflix',
    img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png',
    link: '/netflix'
  },
  {
    title: 'اشتراك Google Play',
    description: 'رصيد Google Play لاستخدامه داخل التطبيقات والألعاب',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
    link: '/google-play'
  },
  {
    title: 'PUBG UC',
    description: 'شحن UC داخل لعبة PUBG Mobile',
    img: 'https://seeklogo.com/images/P/pubg-mobile-logo-6F2C7B6E7B-seeklogo.com.png',
    link: '/pubg-uc'
  },
  {
    title: 'اشتراك PlayStation',
    description: 'رصيد PlayStation Store لشراء الألعاب والمحتوى الإضافي',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Playstation_logo_transparent.png',
    link: '/playstation'
  },
  {
    title: 'اشتراك Xbox',
    description: 'رصيد Xbox Live لشراء الألعاب والمحتوى الإضافي',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_one_logo.svg',
    link: '/xbox'
  },
  {
    title: 'اشتراك Steam',
    description: 'رصيد Steam لشراء الألعاب والمحتوى الإضافي',
    img: 'https://cdn.iconscout.com/icon/free/png-256/steam-11-569373.png',
    link: '/steam'
  },
  {
    title: 'اشتراك Amazon',
    description: 'رصيد Amazon لشراء المنتجات والخدمات',
    img: 'https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png',
    link: '/amazon'
  },
  {
    title: 'اشتراك iTunes',
    description: 'رصيد iTunes لشراء الموسيقى والأفلام والتطبيقات',
    img: 'https://cdn-icons-png.flaticon.com/512/732/732229.png',
    link: '/itunes'
  },
  {
    title: 'اشتراك Spotify',
    description: 'اشتراك Spotify Premium للاستماع للموسيقى بدون إعلانات',
    img: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
    link: '/spotify'
  },
  {
    title: 'اشتراك Discord Nitro',
    description: 'اشتراك Discord Nitro للاستفادة من ميزات إضافية في Discord',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
    link: '/discord-nitro'
  },
  {
    title: 'اشتراك Adobe Creative Cloud',
    description: 'اشتراك Adobe Creative Cloud للوصول إلى تطبيقات التصميم والتحرير',
    img: 'https://cdn.iconscout.com/icon/free/png-256/adobe-creative-cloud-3521467-2944987.png',
    link: '/adobe-creative-cloud'
  },
  {
    title: 'اشتراك Microsoft Office 365',
    description: 'اشتراك Microsoft Office 365 للوصول إلى تطبيقات Office عبر الإنترنت',
    img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-office-1868966-1583089.png',
    link: '/microsoft-office-365'
  },
  {
    title: 'اشتراك Roblox',
    description: 'رصيد Roblox لشراء العناصر داخل اللعبة',
    img: 'https://cdn.iconscout.com/icon/free/png-256/roblox-3629283-3030246.png',
    link: '/roblox'
  },
  {
    title: 'اشتراك Fortnite V-Bucks',
    description: 'شحن V-Bucks داخل لعبة Fortnite',
    img: 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/7/7c/VBucks.png',
    link: '/fortnite-vbucks'
  },
  {
    title: 'اشتراك Apple App Store',
    description: 'رصيد Apple App Store لشراء التطبيقات والألعاب',
    img: 'https://cdn-icons-png.flaticon.com/512/831/831276.png',
    link: '/apple-app-store'
  },
  {
    title: 'اشتراك Google Play Music',
    description: 'رصيد Google Play Music للاستماع للموسيقى',
    img: 'https://cdn-icons-png.flaticon.com/512/732/732208.png',
    link: '/google-play-music'
  },
  {
    title: 'اشتراك Hulu',
    description: 'اشتراك Hulu لمشاهدة الأفلام والمسلسلات',
    img: 'https://cdn.iconscout.com/icon/free/png-256/hulu-282296.png',
    link: '/hulu'
  },
  {
    title: 'اشتراك Disney+',
    description: 'اشتراك Disney+ لمشاهدة محتوى Disney وMarvel وStar Wars',
    img: 'https://cdn.iconscout.com/icon/free/png-256/disney-plus-4627140-3846085.png',
    link: '/disney-plus'
  },
  {
    title: 'اشتراك YouTube Premium',
    description: 'اشتراك YouTube Premium للاستمتاع بمحتوى YouTube بدون إعلانات',
    img: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    link: '/youtube-premium'
  },
  {
    title: 'اشتراك TikTok Coins',
    description: 'شراء عملات TikTok لدعم المبدعين داخل التطبيق',
    img: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
    link: '/tiktok-coins'
  },
  {
    title: 'اشتراك Pinterest',
    description: 'رصيد Pinterest لشراء العناصر والإعلانات',
    img: 'https://cdn-icons-png.flaticon.com/512/145/145808.png',
    link: '/pinterest'
  },
  {
    title: 'اشتراك LinkedIn Premium',
    description: 'اشتراك LinkedIn Premium للوصول إلى ميزات إضافية في LinkedIn',
    img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    link: '/linkedin-premium'
  },
  {
    title: 'اشتراك Coursera',
    description: 'رصيد Coursera للوصول إلى الدورات التعليمية عبر الإنترنت',
    img: 'https://cdn.iconscout.com/icon/free/png-256/coursera-3628697-3030175.png',
    link: '/coursera'
  },
  {
    title: 'اشتراك Udemy',
    description: 'رصيد Udemy للوصول إلى الدورات التعليمية عبر الإنترنت',
    img: 'https://cdn.iconscout.com/icon/free/png-256/udemy-3628950-3030430.png',
    link: '/udemy'
  },
  {
    title: 'اشتراك Skillshare',
    description: 'رصيد Skillshare للوصول إلى الدورات التعليمية عبر الإنترنت',
    img: 'https://cdn.iconscout.com/icon/free/png-256/skillshare-3629022-3030502.png',
    link: '/skillshare'
  },
  {
    title: 'اشتراك Khan Academy',
    description: 'رصيد Khan Academy للوصول إلى الدورات التعليمية المجانية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/khan-academy-3628887-3030367.png',
    link: '/khan-academy'
  },
  {
    title: 'اشتراك Duolingo Plus',
    description: 'اشتراك Duolingo Plus لتعلم اللغات بدون إعلانات',
    img: 'https://cdn.iconscout.com/icon/free/png-256/duolingo-3628699-3030177.png',
    link: '/duolingo-plus'
  },
  {
    title: 'اشتراك Audible',
    description: 'اشتراك Audible للاستماع للكتب الصوتية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/audible-3628637-3030115.png',
    link: '/audible'
  },
  {
    title: 'اشتراك Canva Pro',
    description: 'اشتراك Canva Pro للوصول إلى ميزات التصميم المتقدمة',
    img: 'https://cdn.iconscout.com/icon/free/png-256/canva-1869031-1583155.png',
    link: '/canva-pro'
  },
  {
    title: 'اشتراك Grammarly Premium',
    description: 'اشتراك Grammarly Premium لتحسين الكتابة والتدقيق اللغوي',
    img: 'https://cdn.iconscout.com/icon/free/png-256/grammarly-3628881-3030361.png',
    link: '/grammarly-premium'
  },
  {
    title: 'اشتراك Zoom Pro',
    description: 'اشتراك Zoom Pro للاجتماعات عبر الإنترنت بجودة عالية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/zoom-1869032-1583156.png',
    link: '/zoom-pro'
  },
  {
    title: 'اشتراك Microsoft Teams',
    description: 'اشتراك Microsoft Teams للتعاون والاجتماعات عبر الإنترنت',
    img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-teams-1868967-1583090.png',
    link: '/microsoft-teams'
  },
  {
    title: 'اشتراك Slack',
    description: 'اشتراك Slack للتواصل والتعاون في الفرق',
    img: 'https://cdn.iconscout.com/icon/free/png-256/slack-1869045-1583169.png',
    link: '/slack'
  },
  {
    title: 'اشتراك Trello Gold',
    description: 'اشتراك Trello Gold للوصول إلى ميزات إضافية في Trello',
    img: 'https://cdn.iconscout.com/icon/free/png-256/trello-1869047-1583171.png',
    link: '/trello-gold'
  },
  {
    title: 'اشتراك Asana Premium',
    description: 'اشتراك Asana Premium لإدارة المشاريع والمهام',
    img: 'https://cdn.iconscout.com/icon/free/png-256/asana-3628636-3030114.png',
    link: '/asana-premium'
  },
  {
    title: 'اشتراك Notion Pro',
    description: 'اشتراك Notion Pro للوصول إلى ميزات إضافية في Notion',
    img: 'https://cdn.iconscout.com/icon/free/png-256/notion-3628889-3030369.png',
    link: '/notion-pro'
  },
  {
    title: 'اشتراك Evernote Premium',
    description: 'اشتراك Evernote Premium لتدوين الملاحظات وتنظيم الأفكار',
    img: 'https://cdn.iconscout.com/icon/free/png-256/evernote-3628698-3030176.png',
    link: '/evernote-premium'
  },
  {
    title: 'اشتراك Todoist Premium',
    description: 'اشتراك Todoist Premium لإدارة المهام والقوائم',
    img: 'https://cdn.iconscout.com/icon/free/png-256/todoist-3629021-3030501.png',
    link: '/todoist-premium'
  },
  {
    title: 'اشتراك Pocket Premium',
    description: 'اشتراك Pocket Premium لحفظ المقالات والمحتوى لقراءته لاحقًا',
    img: 'https://cdn.iconscout.com/icon/free/png-256/pocket-3628951-3030431.png',
    link: '/pocket-premium'
  },
  {
    title: 'اشتراك Feedly Pro',
    description: 'اشتراك Feedly Pro لإدارة الأخبار والمقالات المفضلة',
    img: 'https://cdn.iconscout.com/icon/free/png-256/feedly-3628695-3030173.png',
    link: '/feedly-pro'
  },
  {
    title: 'اشتراك LastPass Premium',
    description: 'اشتراك LastPass Premium لإدارة كلمات المرور بأمان',
    img: 'https://cdn.iconscout.com/icon/free/png-256/lastpass-3628888-3030368.png',
    link: '/lastpass-premium'
  },
  {
    title: 'اشتراك Dashlane Premium',
    description: 'اشتراك Dashlane Premium لإدارة كلمات المرور بأمان',
    img: 'https://cdn.iconscout.com/icon/free/png-256/dashlane-3628694-3030172.png',
    link: '/dashlane-premium'
  },
  {
    title: 'اشتراك 1Password',
    description: 'اشتراك 1Password لإدارة كلمات المرور بأمان',
    img: 'https://cdn.iconscout.com/icon/free/png-256/1password-3628635-3030113.png',
    link: '/1password'
  },
  {
    title: 'اشتراك ProtonVPN',
    description: 'اشتراك ProtonVPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/protonvpn-3628952-3030432.png',
    link: '/protonvpn'
  },
  {
    title: 'اشتراك NordVPN',
    description: 'اشتراك NordVPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/nordvpn-3628886-3030366.png',
    link: '/nordvpn'
  },
  {
    title: 'اشتراك ExpressVPN',
    description: 'اشتراك ExpressVPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/expressvpn-3628696-3030174.png',
    link: '/expressvpn'
  },
  {
    title: 'اشتراك Surfshark VPN',
    description: 'اشتراك Surfshark VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/surfshark-3629020-3030500.png',
    link: '/surfshark-vpn'
  },
  {
    title: 'اشتراك CyberGhost VPN',
    description: 'اشتراك CyberGhost VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/cyberghost-3628693-3030171.png',
    link: '/cyberghost-vpn'
  },
  {
    title: 'اشتراك IPVanish VPN',
    description: 'اشتراك IPVanish VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/ipvanish-3628882-3030362.png',
    link: '/ipvanish-vpn'
  },
  {
    title: 'اشتراك Private Internet Access (PIA) VPN',
    description: 'اشتراك PIA VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/private-internet-access-3628953-3030433.png',
    link: '/pia-vpn'
  },
  {
    title: 'اشتراك Windscribe VPN',
    description: 'اشتراك Windscribe VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/windscribe-3629023-3030503.png',
    link: '/windscribe-vpn'
  },
  {
    title: 'اشتراك Hotspot Shield VPN',
    description: 'اشتراك Hotspot Shield VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/hotspot-shield-3628883-3030363.png',
    link: '/hotspot-shield-vpn'
  },
  {
    title: 'اشتراك TunnelBear VPN',
    description: 'اشتراك TunnelBear VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/tunnelbear-3629024-3030504.png',
    link: '/tunnelbear-vpn'
  },
];
const images = [ img3, tagdem ,  img4, img5 ];
  </script>
  <style scoped>
  .services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    align-items: stretch; /* تجعل جميع البطاقات بنفس الارتفاع */
  }

  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* توزيع العناصر داخل البطاقة */
    flex: 1 1 300px; /* يسمح للبطاقات بالتمدد والامتلاء */
    max-width: 300px;
  }
  .service-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    direction: rtl;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  .service-title {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace , sans-serif;
    color: #333;
    margin-bottom: 10px;
  }
  .service-description {

  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  margin: 10px ;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;

    font-size: 1rem;
    color: #666;
    margin-bottom: 25px;
  }
  .mySwiper {
    width: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  .order-button {
    background-color: #511fdd;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  /* عند المرور فوق الصورة (hover) */
  .swiper-slide:hover img {
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    /* تأكد من أن الصور تظهر بتنسيق مناسب للشاشات الكبيرة */
    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* ضبط الصور لتغطية المساحة بالكامل */
    }
  }
  </style>