<template>
    <div class="relative  w-full z-20 bg-yellow-200 text-center py-2 shadow-md overflow-hidden rounded-md mb-4">
    <div class="marquee-text">
      🚧 الموقع تحت الإنشاء – الخدمة الوحيدة المتاحة حاليًا هي ⭐
      <span class="text-blue-700 font-bold">ستارلينك</span> – شكرًا لصبركم ❤️
    </div>
  </div>
  <!-- عنوان القسم -->
  <h1 style="font-family: 'Arial', sans-serif; font-size: 1.8rem; color: #fff; text-shadow: 0 0 2px #0000ff, 0 0 10px #0000ff, 0 0 20px #0000ff, 0 0 30px #0000ff; text-align: center;" class="mb-4">
    متجرك الالكتروني الأول بين يديك
  </h1>

  <!-- السلايدر -->
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
      <img class="w-32" :src="img" alt="slider image" />
    </swiper-slide>
  </swiper>

  <!-- المحتوى الرئيسي: الشريط الجانبي + الخدمات -->
  <div class="flex flex-col md:flex-row gap-6 mt-8 px-4">
    <!-- الشريط الجانبي -->
   <aside class="hidden md:block mt-20 md:w-1/4 w-full bg-white rounded-lg shadow-md p-4 space-y-6 text-right">
  <h4 class="text-lg font-semibold mt-4">تفاصيل الأقسام:</h4>
  
  <div
    v-for="(faculty, index) in faculties"
    :key="index"
    class="mb-6 border-b border-gray-200 pb-4"
  >
    <h5 class="text-base font-bold text-blue-800 mb-2">{{ faculty.name }}</h5>
    
    <div class="flex flex-wrap gap-2 justify-start rtl">
      <span
        v-for="(branch, i) in faculty.children"
        :key="i"
        class="inline-block bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100 transition-all duration-200"
      >
        {{ branch.name }}
      </span>
    </div>
  </div>
</aside>


    

    <!-- قسم الخدمات -->
    <div class="md:w-3/4 w-full">
      <h1 style="font-family: 'Arial', sans-serif; font-size: 2rem; color: #000; text-align: right; margin-bottom: 20px; border-bottom: 3px solid #000; padding-bottom: 10px; text-shadow: 0 0 5px #000, 0 0 10px #000;" class="pr-4">
        الخدمات
      </h1>

      <div class="services-container">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <h2 class="service-title">{{ service.title }}</h2>
          <img class="w-32 mx-auto" :src="service.img" alt="service image" />
          <p class="service-description mb-10">{{ service.description }}</p>
          <a :href="`${service.link}`" class="order-button">
            اطلب الآن
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ref , onMounted } from 'vue';
import axios from 'axios';
import catogres from './cato.json';
import img4 from '@/assets/img4.jpg';
const faculties = ref([]);

async function fetchFaculties() {
  try {
    const res = await axios.get(`https://prostoreserver.onrender.com/api/categories`);
    faculties.value = res.data;
  } catch (err) {
    console.error("خطأ في تحميل الأقسام:", err);
  }
}

onMounted(() => {
  fetchFaculties();
});

const services = catogres.map(service => ({
  ...service,
  img: service.img || img4
}));

const images = services.map(service => service.img);
</script>

<style scoped>
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.service-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  justify-content: space-between;
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
  width: 150px;
  height: 150px;
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
  width: 200px;
  height: 200px;
  padding: 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: space-between;
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


.marquee-container {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fef3c7; /* أصفر فاتح */
  text-align: center;
  padding: 0.5rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-left 15s linear infinite;
  font-weight: bold;
  color: #78350f;
  font-size: 1rem;
  padding-left: 100%;

}

@keyframes scroll-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
aside h5 {
  font-family: "Cairo", sans-serif;
}

aside span {
  cursor: pointer;
  font-family: "Cairo", sans-serif;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

aside span:hover {
  transform: scale(1.05);
  background-color: #dbeafe;
}

</style>
