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
      <img class="w-32 mx-auto" :src="service.img" alt="slider " />
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
  
  // import img3 from '@/assets/img3.jpeg'; // استيراد الصورة هنا
  import img4 from '@/assets/img4.jpg'; // استيراد الصورة هنا
  // import img5 from '@/assets/img5.jpeg'; // استيراد الصورة هنا
  // import tagdem from '@/assets/tagdem.png'; // استيراد الصورة هنا
  
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
    img: 'https://upload.wikimedia.org/wikipedia/ar/1/14/%D8%BA%D9%84%D8%A7%D9%81_%D8%A8%D8%A8%D8%AC%D9%8A_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84.jpg',
    link: '/pubg-uc'
  },
  {
    title: 'اشتراك PlayStation',
    description: 'رصيد PlayStation Store لشراء الألعاب والمحتوى الإضافي',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg',
    link: '/playstation'
  },
  {
    title: 'اشتراك Xbox',
    description: 'رصيد Xbox Live لشراء الألعاب والمحتوى الإضافي',
    img: 'data:image/png;base64,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',
    link: '/xbox'
  },
  {
    title: 'اشتراك Steam',
    description: 'رصيد Steam لشراء الألعاب والمحتوى الإضافي',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
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
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX////rPQD8//////3//v/qKQDpMwDrOgD72M/qMADzjnj1q53sKQD++/jtSRz42ND74tr76ub99PD9+fTua0rsQQvoMQDxeV/8//vnJwDuLwDuRQX0taPuOADtPwDpIgD408XrTyL1pZH98/H5yb7ym4n3sqLugmn3vKr0tKnrUy3ylnrtRRTwakjzinT0p5XqYjz3wrf53s/sXDbznYv0iWnue2Hymn/5yLjrcVruZTv74d7wdFP45Nf2w7r0nY7vWzvwemb2rpj5zr7VPNuZAAALmUlEQVR4nO2ai3baOBCGLcmSEJEB2wGMg2OccAsBAiEltCXbbvP+77QjGYIhtw27e7rtma89iWNsWb80mouM4yAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiC/GMx1GWOOy352R/4zrD7GIvdnd+Q/g1IalkL4+bM78h9AXQoTRzsDpflpv+aARvjPfiNzZSCodpdxRQiRsc7K3QDO/EYCHSccniolJTEK4ZfQpHnl/+xO/QtYzwLm2BkInoA8qxA4l6Az1qPry199ScLyA+u8GIN1bsUVkWmH/up+lQbDCVinMc0XFBJe+lXXIsR017jL6vScG2nnxkBh/SkV783hawqZiZzw48CGqXFYrmejDYMPmQunjJv+qFNmETW3H94F7bH84TZkMxvAn9i7NAJ91L8B37mZO9AndEqWbX+q/sYcwuPNANGDD0FgeyZjeWfU0v4sEeSC0svqhxczM+Pv2Ifs99tGMUpdN3JyL/IaLg3npy0lk3ruPZXSo+nQ+s5r8TcUUr971e/Pb72D0+EXLYTgZTgOFjqR5vCWtyrhRyWG1WG/PzxsHxZVB87Pq551D64XFji89iQ12urnJFFcLHorfztc5bcVGuPz77KYK6U4rw+q1N0keS7M6EwkatZcTGGYZ4rA4fdPdCmI7n9EHaPVJdGmeV2/AHN18/ZhXv1PknM4z8/yQHYv60+o+aFClRtnMrmH4F5IX95RCHndfdyAgAkKhYRJWob0qQfzNGmswIoC5gw1ESu4OqBTLdP5h+z0IRVGH29IyRcBjbbnrxpKxg3NY6FrtsGBSmROIlsvKySyEpkVbVYu+3sK/QyMWyfNu5uLQSUVUpznTzMKP0t1DYsEnItzKuIe9I2yKJgk5cj5ALSWtr7cPJa6F5W4Hs8iJx9BepdKJa/n1U6/mX61z/yckPOzDcm+Qnen8NB831IIbtEnQqrKKu8yra45EaJmnKhxM4nkHce6u/DM+OEjeRjdWndM6SdFtJ1/16XtlOjBZkEHoekWXUhee6WNIxUyN1okdTXwYGocG3Nov0WSLAQ3Dh+Gyj7R3HEpZOu1h78Hu4yo9aUQDUaJ+GxWAQytlI1eft78aec1k/y1zPJYhfSCSzU13tr8xYzEtq7H1/ZDx4PprdkYSQPx+sPfwwTryIwgrOhvSmZ5i0uVTMBW8u5EebfqshX8uwqdS1j8C2c/k1sLmfo2SHlKqq/miLJQEe6DqZlYT53I27ZCnf1Iug15NHp5Y2HOZWZiH/U52MeBv/ISqQ6Tjn+q8ALssEr3FfqKxPcgIghh4lQpDIBL30ynOQS/E4SXG+MykeaP/s3J3He2vsd77N/0O5eO+/LGwoon3+1o3CmxPvR68DzivJI3H6vwTCansOqLrTIIeAlY0lDV6wl5ClBwOK7XyRdKO7x+FuWt0OEi1iaQqomNUI7Xq0Ng5VqWwxeqUTjxTYmB9Tqw5P7ITXSXyPhKVl6rDI5U+JBKPjzoCXXmKklrzlVLwZ0yEUoY4BB+NkaOU9VS5leGEzhsGIG5D6S1ipYCIp+QccU/TAGNP4kyKG/MqvBTKQO6selttnbLzZIxkl+49ziFQ+jQof9gjq+JXtHH02YTQi/8NKzhcA2/P1GjkNgrLzNwsNlNt/rYq6RGoQ8Bm5e71e6gJUUWuYdLkTpLxdcmwDorLRfgSGvtu4thbZuuljhYbgSJ/rME+WiFva1nKzbFvIpUN46xJVh8mwEIIVUL8gHIFUKl/QVSuj61Fzptc90iEZUH63c6kDxeFPJs81DPH2a6NYlM/UDvRLJ0/IXWqqH1YhNpuxy6qGJZGXSfbYEeo5CZLElOniWqlI2kKJu01BXG39nPAyX1RqxVyKDU0AkfFkUMuZQPNpxHTpvLsbfLfIaVUVZROln0zXjAuh8o1XsQqsEbYOhCt62DGXLI7SFhI4JnncOBP2YOqdNMnjs0SNZmUkxNcei9odCNxlJ8ojuPyaKFjC/s1fChR2w6tKWdCgG+KmsHm9FYJ41vi1bWr9YeB4pIbWfxRmSLxSJLYB3LtP3PFYLHb0qxfl4TOjMzh2CGbyh0aEcT5Rd2YmlNSx7QTSEITaubnV8c1rPsjGul02Zg6+GJIPXWNL+21AA/be04v9grDWBi087eNu9Rc+jCwpeTwwgLyhZS9SDbeHMOnW8xOL4CtM2TWeRtgMfG5cKHRnRQLYNFkpoRPgNTXG8/veJEd/c6sVKSjPbq4SM9TTmW2bOwxcKxVGAj0dsKl0Ld790HpXY9q2ypE7XcRe+IReBeKK0tEughOLeJJGqb0lCnYoymoCaiP8AgqsWuHanwBNx78Kxg9BsJrCH3zTl0YLGqk737wG1JU2XmgJ9tFqK32dox3hGCeuuHLcZMtNh0noJPn+11wmWCxD/2Nz2OUljShK8OzJTReUOqSxOH35zD71LtVfp0IGR2WmBy/VKKWVby1KwPkay3U8ycvrGlfU6lutvTfGRt0UjU+lk/1kKdOu8qnEiIePsPUoODsXpB4VzLc/h1J3Ze3MQZcqhwIFSvmKMeWwFPoSJ9KNYWZssuliaQv63Q7jis98LyjZLfqeMWvOsLOSb9g1uFkBkudvVIm+95Lcja6Z9K9Og/V+jUuIkXtLApQWGJJMI08qZC12krIsKooGelSfzuSwPIE+TItJcS6W8fS6fCBOCdGqjH64T39/t6lMIIZoLogrFBznvBSaNvdzHeUkgZFFnqpBCyWECSxg/nnbcGdELy+noCad12yyuCkF+MFswUMFCt0ee+FNLjDyl0aVBJ6vye2TdvZmMx6kHTp9btvWOlUKSbTpgCHnrkeK6p2se2xLAFUfCU0vtmZ9OUzswkZrJl85d5yyQMxsO6UFJJEm521e2uEA0zmeznk7lC8Nat7x9T6NSg9Xj0mKci3moBtpflmck70YL5giRklWfewScoEGqQflVu85IoWsnH7VNKehjmjj/qw6gs810piIzjr3aLYAge/QokeFk3d070dhTX9S2NDtehjNWy9MyBvbebWJONROrxn/d3181xS0q9CHIH8o4vdemqJYk+/dHtDAcy9SHn6kPRxz/3HzvD8kinTwqrKSeDq+7jqleBpboITYtQOJnwOV11+hMQuIS5pCzlo/Kw2/3xmSckbdO91yiMnrTSRT98Xle9rdCUcMEytbEa/smkoe7Yxs1HjEJ43iQelzuFJS4TeA5Y10rCsDY4VPUifTCj9SMVxFTAUDSr+GlrrpSa5nlLx4lIm1Fe1DOnlCgpIFcVSTq1mr3U1NMNuJuoxty8Air0lTkny5rN/p693HhnDk3HbstjbXbdNR9d7Pa63CgkY7npZ3A2lrlC2pHjM9sIdYLrMXRRaTWb572uNeMWlPyaZ3e7VxtR9zTRHE5z2XzcPZ8GAzgHN395tCUXc3qVlm1OZ72AHuzz0CjslMv9rh9+1ErtRFLvodvuDx/9qOAKYaxCz2Nbiw3DjXOPQi80J42boF5p3ob7mF1b5g3Y5eOwPexuTmx7RwO4rD8sBebl3NNj4XS33e5CgcI2T41qq2G7vfoamZd6L+zV1XoSLHldPunWNjNhWiu/+3Yt93L5ocP2VnfxmuIf+aAXjSh//1c8sSvTWOHOwhWF6dye2X302nu20lSlYGyt1vlsejOv+hAG3lf4C+GabwjN1w1u3t6IGDJ8shgsyG+kcGNhDycjpfJ3pSD06YW+rBOZln7172IYTLS+vbabHXvfVgCHfTbw3Q+9GPtfAlmr8WlstdQq2aqTisdr8+Wv32EKd1y2ZxxESliPi17nw6/e//+Y71fU7it6vLzyTfj6vabPYL6SQqlX82wpGrG3yxoEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZB/n78AfQLReeWlankAAAAASUVORK5CYII=',
    link: '/microsoft-office-365'
  },
  {
    title: 'اشتراك Roblox',
    description: 'رصيد Roblox لشراء العناصر داخل اللعبة',
    img: 'https://cdn.iconscout.com/icon/free/png-256/roblox-3629283-3030246.png',
    link: '/roblox'
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
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
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
    img: 'data:image/jpeg;base64,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',
    link: '/microsoft-teams'
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
  {
    title: 'اشتراك VyprVPN',
    description: 'اشتراك VyprVPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/vyprvpn-3628692-3030170.png',
    link: '/vyprvpn'
  },
  {
    title: 'اشتراك ZenMate VPN',
    description: 'اشتراك ZenMate VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/zenmate-3628885-3030365.png',
    link: '/zenmate-vpn'
  },
  {
    title: 'اشتراك HideMyAss! VPN',
    description: 'اشتراك HideMyAss! VPN للوصول إلى الإنترنت بشكل آمن ومجهول الهوية',
    img: 'https://cdn.iconscout.com/icon/free/png-256/hidemyass-3628954-3030434.png',
    link: '/hidemyass-vpn'  }  
];
const images = services.map(service => service.img);
      

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