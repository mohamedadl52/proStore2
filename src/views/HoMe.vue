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
      <img :src="service.img" alt="slider image" />
      <p class="service-description">{{ service.description }}</p>
  <a :href="service.link" class="order-button">
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
  { title: 'التقديم الالكتروني', description: 'التقديم للجامعات السودانية بكل سهولة وموثوقية', img: img2, link: '/tagdem' },
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
  }
  .service-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
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
  margin-top: 10px ;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;

    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
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