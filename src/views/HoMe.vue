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
      <swiper-slide class="px-4" v-for="(img, index) in images" :key="index">
        <img  class="w-32 " :src="img" alt="slider image" />
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
    title: 'بطاقة Redot Pay',
    description: 'بطاقة دفع إلكترونية Redot Pay للشراء عبر الإنترنت بسهولة وأمان.',
    img: 'https://cryptonoshi.com/wp-content/uploads/RedotPayCard-1-540x341.png',
    link: '/redot-pay'
  },
  {
    title: 'بطاقة Kast',
    description: 'بطاقة Kast للدفع الإلكتروني وإدارة المدفوعات الرقمية.',
    img: 'https://play-lh.googleusercontent.com/mkT3TZ74jEY4MwDcCpVxmc_46ssGbEhqr4l_YoAlkWntp7ZsaZf9wkv58NvmHzs5JMU=w240-h480-rw',
    link: '/kast'
  },
  {
    title: 'بطاقة PokePay',
    description: 'بطاقة PockyPay للدفع الإلكتروني للشراء من المتاجر العالمية.',
    img: 'data:image/png;base64,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',
    link: '/pockypay'
  },
  {
    title: 'بطاقة Paysera',
    description: 'بطاقة Paysera للدفع الإلكتروني والتحويلات المالية الدولية.',
    img: 'data:image/jpeg;base64,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',
    link: '/paysera'
  },
  {
    title: 'بطاقة Wise',
    description: 'بطاقة Wise (TransferWise سابقاً) للدفع الإلكتروني والسحب من الصرافات.',
    img: 'data:image/jpeg;base64,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',
    link: '/wise'
  },
  {
    title: 'بطاقة Payoneer',
    description: 'بطاقة Payoneer للدفع الإلكتروني واستلام الأرباح من الشركات العالمية.',
    img: 'https://www.payoneer.com/wp-content/uploads/11522-postblog_image_1200x630-2.jpg.webp',
    link: '/payoneer'
  },
  {
    title: 'بطاقة Neteller',
    description: 'بطاقة Neteller للدفع الإلكتروني والتسوق عبر الإنترنت.',
    img: 'https://b3377579.smushcdn.com/3377579/wp-content/uploads/2021/09/neteller-mastercard-fees-virtual-deposit-card-an-2.png?lossy=2&strip=1&webp=1',
    link: '/neteller'
  },
  {
    title: 'بطاقة Skrill',
    description: 'بطاقة Skrill للدفع الإلكتروني وإرسال الأموال بسهولة.',
    img: 'https://scontent.fpzu3-2.fna.fbcdn.net/v/t1.6435-9/196619340_4812358685457221_7994214226611236949_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OoqC0DAnm7kQ7kNvwFO4o4n&_nc_oc=Adl-ApVyEt7ZmcSnnqFRG8kXH4aMjL_lQg12apjW8HheKigjAWWKSXCHvYn34u2-DZ8&_nc_zt=23&_nc_ht=scontent.fpzu3-2.fna&_nc_gid=GtzL2A9UoC0Xa_7lDirqJg&oh=00_AfRXb3CwHuFgfPiYsEQX09Fw-O2zM8a26zCUQM3AgCjDKg&oe=6894C425',
    link: '/skrill'
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
    img: 'https://megaupp.com/wp-content/uploads/2018/11/pubg-shot-bramjstore.jpg',
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
    img: 'data:image/png;base64,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',
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
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQEA4VEBUSERASGBEVEBAXEg8QFRIWFhYSFRUYHSggGB8lIBUWIT0hJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy4lHyAwLS0tLS0rMC0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABAEAACAgECBAEIBggEBwAAAAAAAQIDEQQSBRMhMQYUIjJBUWFxkQdSc4Gx0Rc0NVRyssHCIzNCoRaSk7PS4fD/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAICAAQDBwQCAwAAAAAAAAECAxEEEiExE0FRBRUyM2FxgSJSodGxwSNCYv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGnxHiNenjutnj2L/VJ+xI1xYb5Z1SETMQgV42pzjlTx7crPyO2PZmTXeFPEhO8N4lXqI7qp7sd12lH4o4cuG+KdWheJiezdM0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGBy7xJrpXamxt9IycIr2Ri//n959HwuKMeKI9esue07lF5N1Up4b1sqdTW0+kpKEl6nGTx/7+4w4rFGTFMflak6l0niGthRVO2yW2MFlv8AovefPY6Te0Vr3lvM6jbnGt+kq1zfJohGHq35cmvfjoezX2XSI/VM7ZTlnyWrwl4shrswceXbFZcc5jKP1ov+hwcXwc4OsTuJXpfmWVHGuyAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKz4l8ZU6GyNUq52TcdzUduIxfbLb9Z18Pwl81eaJ1ClrxCH/ShR+62/Ov8zo92X/dCPEg/ShR+62/Ov8AMe7L/ug8SGP0o0futv8AzV/mR7sv+6DxIUriHHIztsnCElGU5SSbjlJvOHg9WlbVrETPZlM7Z0Wu5j6dMPDXQVvudGlj8McPlfqK8LzYSU5P1JJ5x9/Yy4vLGPHO+89ITWNysf0m1yloJbe0ba5S/g6r8XE8z2bMRn6+ktMnwuQnvsFm+juuT19Tj6lNy/hx6zj4+YjBO18fd2RHzroZAAAAAAAAAAAAAAAAAAAAAAAAAAAAA439KP7Ql9jV/ce77P8Ak/mWGTu1PB3hpcQndF3OrlRg8qClu3OSx3WOxpxXE+BETre0VrzLR+ixfvr/AOjH/wAjj95/+f5X8L6vF30YKMZS8sb2xb/yl1wu3pEx7T3OuX+Tw/q5yeqyXjwtw7hjrhZZqpq2SXMq3R2xll9PQyvmeZfJxEZbRjq01XXVedFxfQ0x2VWxivg+vvbxlnHk4fick7tG14tWHvVeIdE4SVl0XFpppp4cX3T6FY4TPE7ipz1UPWcF4XKblVxLlxb9Bx3Y9yfTp8cnqUz8VEfqx7/hny19Vl8L6nhmk/w6NTGU7Gk7JPzpv1LOEkvccXE14rL1vXpHlC9eWOy5I85oZAZAZAZAJgZAAAAAABjIDIDIDIDIGQAAAAAAAAADjf0o/tCX2NX9x7vs/wCT+ZYZPiVejUzhlwsnDOM7ZyjlLsng7ZrFu8KumfRLqJ2Q1fMsnPFlWN05Sx5j7ZfQ8j2lWImuo9WuNz/iPEbubcvKLccyxY5tmMbn0xk9OmOnLHSO0eTOZnaONVW9wP05/GJhT5lkz2Tpuh5s7P4MCuF0BMdx+gOFPNFLfXNVf8qPk8vxz95dUdnx8Q3yr0uosrltlGqclLp5rS79ScNYtkiJJ7I3wZxay+lxvebq9rk8JOcJxUoTwsLs/V7DTiccVtuvaUVlnxpxazT0RhQ8XXS2wwk3FLzpyw/cv9xw2KL23btBadGmud2g0s7dW6JT5MnanGLslnOz2dRMcuW0RXfc8k1q9ZXTHfbZGuPbMpJdfd7TGtbWnVY2tL4U8a0863bHUVyhFpOaksRb7J+wtOK8TyzHVG30q4jVKyVUbYynBZlFSWYr3kTjtEb10k204eJtG58tauvdnGN3r+PYv4GXW+WUc0NriPFadMlK+2NSfbc+/wAEUpjtf4Y2mZ0+um1tdlathZGUGm96fm4Xd5K2ras8sx1S0afEujnPlx1VblnGN3d+59jScGSI3NZRzQhvF2vhO/TaR6lVwlOfO22KMlGMU4xk/Unlm/D0mK2vrc+SLT5PrXx/T6a7T6Su6DqVdjlZK3c4NPpHPvy/kVnDe9ZvMdfTRuI6LKpKcMwn0lHMZrDWGukl7fac3aeqyo8R02tpu0tS4pY+fOcG+Rp/N2wcs+j17HXS2O1bTyR0+sqdfVPaXOkrk9XreZmXSyxVVqKx6K24TOe3/JP6K6+y3Zv6fVQsjvrnGcfrRkmvmikxMTqUtSHHdM7OUtTW5t4271lv2IvOHJEb1KNw279VCDipzUXJtLLS3NLLS+5MpFZntCWvpuMae1Tdeorkq87mprEEvW/d7y1sV6947o29aDilN+eTdCzHfbJPAvjvT4o0RMS+Gs8QaWmxVW6mEJv/AEuXX78dvvJrhyWjcQbhJJ56ozSyAA439KP7Ql9jV/ce77P+T+ZYZPiVI7lHTfoe/wAvWfaVfyM8j2n3r+WuNzriP+dd9rZ/Oz1cfwx9mc92uWQ3uB+nP4owp8yyZ7QnjZDzZ2fwZIrZdATHcfoDhH6vR9lX/Kj5TL8c/eXVHZq+Kv1LVfY2fgTg+bX7k9kBF+TR4brV6EqKNPd7NkorZN/wv8X7To+Pnx/WZhXtqXuEfKtRrNW+sNPVbp6vY5bXzJr8PmR8ulaec9Z/0d520tU88J4d9tpfxkXj59/tJ/1hKaSqOo4pquclPyeulVQksqKmm5TSfr6Lr7/gZWmaYK8vnvae8vXjuiMdDe4RjBydeWopNtSWG8dxwszOWNot2anibQV6fR1Qqgocyyiqy1Jb5Vzkt7lPu8+tstgvNskzPXW5JjUJvi3CNO9JbU6YRhGqeMRS2NReJJ+pr2mGPLfxItvqtMRpXOGaa916LXqpanbpnVKqTW9R3dJ156ZwkdWS1Oa2OZ117/2rHlL6cc4lVqNNpY0+ZVdrIU2wxtcekpSrkvVlr78FcWO1L25u8RuP7JnomvEfCqHo7ouqEVCuTi1FLltLKcWu3Yxw5LeJE7TMRpX5UQunwaVtUJO2ubs3Qi+Y1XDG7K6/edEWmsZIie39o9G9xDh9K4no4KitRdF+Y8uG14cUsrHqM6XtOG0784NdVthBJJJJJLCSXRJepI5F0B4h/W+Gfb2/9mR0Yfl3+0f5VnvCL1V1s+J3bNNHUciqtQjOxRVe/O6aT7t4xn3e81rFYwxudbn0R122OGwt01us1N+njp6JVKcoRnGS5kO8kl2ym/kit5reK0rO52R07ovj87ZaCc46CnTVJRnFymubF5TjKMYr0u3rNcUV8WI5pmf4RPbsl/E1MbZ8LjNblLULKfaX+DJ9fauhhhmYi8x6f7Wt5HG+HVPX6HzEt3NUklhWRjHdFSS9JJ9cMnFe3hX6+hMRt61OnjDi2mlCKg56a/dhJb1FxxnHfuImZwWifKYPOGupPQO1ajTK2iy6c/KIxUnDmTzi2L64WcZLa8aI5Z1MeX9I7LdW00nHthYx2x6sHGu9AAON/Sj+0JfY1f3Hu+z/AJP5lhk7qkdyiz+DvFi4fG6PJ5vNlCXpKONqax295x8VwvjTE71pettK5qbd85zxjdKUsezLbx/uddY1EQo+ZI3uB+nP4owp8yyZ7QnjZDzZ2fwZIrZdASP0FwyDjRTFrDVdaa9jUUfJ5J3eZ+rqjsxxPRq+m2ly2qyEoZXdZXciluS0W9CWvPhMJaTySTco8lVZ6Z6RSUvj0TLRlmL88d9mummdBwqFOmWmg8RUHHd0y211k/f1Fsk2vzya6aac/DkXpdPpebLFEq5KeFmWzPRr7y/jzzzfXdGumnvi/AVdbG+q6WnuitvMhh74/VnF9GiMebljlmNwmYfHVeH526e2m3Vzsdjg97jFKCi84jFE1zRW8WrXsjXRKcQ4fC+qVNq3RlHD9vua95lS81tzQtroioeHrXDk2a6yyns4OMFOcPqSn3x6vabePXfNFY2rpsa3hd2Y+TaryeMYKHL5alDC7NL1MrTJXX667Tr0fHT+F6lpp6ablZzJuyVj6Tdred6x2ZM8Rbn548v8I5fJiPALJRVV2tnbV2cNsIuyP1ZyXVoePWJ3WupOWW7q+ERsu01qk4+T79sEliSkkse7GClcsxW1fVOny4zwbn2U3V3Om2ncozSUk4y7xkn8C2PLyxNZjcSTG0rRFqMVKW5pJOWMbnjq8eoxnulqa7h0bbdPa5NOicppLGJOUHHD+ZeuSa1mPVGmnxXgfNtjqKrpae5R2b4pNTh9WUX3L0zcteW0bgmHvTcHfLthqNRPU86O2W7aoxjh9IxXRd/9kRbLG4msa0aaOr8K86rkXau2daWIxxBbcdnJpec17y9eI5bc1axtHKlNXwuNstNJya8nnvjjHnPY49fmZVyTETHqnT3quHRsupucmnTvwljEtyw8it5is19TXmxdw2MtRXqXJ7q651qPTa1Nptv5CMkxWa+prrtoX8Assi6rNbZOqT6wca8yjnOxzxnBeM0RO4rG0aTlcFFJJYSSSXsSMZnaz0AArPiTwbTrrFbOc65qKi3Hb50V2ymjr4fjL4a8sRuFLUiUR+i+j95t+Vf5G/vO/wC2EeGfov0/7zb8q/yHvO/7YPC+rmXGNDbp9RdTsT5c5RTb6uKfR/I7KcTe1YmIhSaw02rfqL5l/GyeiNQleBVSTbl3bTZOHe5mSU4dCpy5SzGEXKTTxFLLbx6kJmIjcpV6WlsT2uuee2Njzn4F4tExvaNLh4M8G22WQv1EHXXBqSjJeda12WPUveefxnG1pWaUnc/4XpTc7l1VHhN2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDApXjnw0rZeVQi28JTS7tLtL+n3I9Lgc1fl3/DO9fOFH8ih7H8z1uSGW31pqUV5qLRWI7IeyRdvBfBHF+U2LDxiEX7+8/l0+9nkcfxMTHh1/P9NaV81t5aznas+3CyeXuWr0BkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNAQPE/CdFzco5qk+7j6LftcfywduHjsmONT1j6qTSJRX/Arz+sdP4Ov4nT7zjXw/yr4aV4Z4UopalLNsl23Y2r3qP5nNl4/JeNR0j6f2tFIhPJHEuyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=',
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