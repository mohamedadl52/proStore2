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
  import catogres from './cato.json'; // استيراد ملف JSON الذي يحتوي على الخدمات
  // import img3 from '@/assets/img3.jpeg'; // استيراد الصورة هنا
  import img4 from '@/assets/img4.jpg'; // استيراد الصورة هنا
  // import img5 from '@/assets/img5.jpeg'; // استيراد الصورة هنا
  // import tagdem from '@/assets/tagdem.png'; // استيراد الصورة هنا
  
  // المصفوفة تحتوي الآن على المسارات التي تم استيرادها
const services = catogres.map(service => ({
  ...service,
  img: service.img || img4
}));

// استخراج الصور
const images = services.map(service => service.img);
      

  </script>
  <style scoped>
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  margin-top: 20px;
  padding: 0 10px;
}

  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* توزيع العناصر داخل البطاقة */
    flex: 1 1 300px; /* يسمح للبطاقات بالتمدد والامتلاء */
    max-width: 300px;
  }.service-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  direction: rtl;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%; /* اجعلها تمتد داخل العمود */
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