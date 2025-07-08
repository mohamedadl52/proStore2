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
  <style scoped>.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 20px;
  padding: 0 12px;
}

.service-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  direction: rtl;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-title {
  font-size: 1.2rem;
  font-family: "Cairo", sans-serif;
  font-weight: 800;
  margin-bottom: 10px;
  color: #222;
}

.service-description {
  font-size: 0.95rem;
  color: #555;
  font-family: "Cairo", sans-serif;
  font-weight: 500;
  margin-bottom: 16px;
}

.service-card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto 12px;
}

.order-button {
  background-color: #511fdd;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.order-button:hover {
  background-color: #3f19b5;
}

/* السلايدر */
.mySwiper {
  width: 100%;
  margin-bottom: 20px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.swiper-slide:hover img {
  transform: scale(1.08);
}

@media (min-width: 768px) {
  .service-card {
    padding: 20px;
  }
  .service-title {
    font-size: 1.4rem;
  }
  .service-description {
    font-size: 1rem;
  }
  .service-card img {
    width: 120px;
    height: 120px;
  }
  .swiper-slide img {
    width: 150px;
    height: 150px;
  }
}

  </style>