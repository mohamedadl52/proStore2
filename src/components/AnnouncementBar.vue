<template>
  <div class="relative hidden  w-full z-20 bg-yellow-200 text-center py-2 shadow-md overflow-hidden rounded-md mb-4">
    <div class="marquee-text">
      🚧 الموقع تحت الإنشاء – الخدمة الوحيدة المتاحة حاليًا هي ⭐
      <span class="text-blue-700 font-bold">ستارلينك</span> – شكرًا لصبركم ❤️
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fef3c7; /* أصفر فاتح */
  text-align: center;
  padding: 0.5rem 0;
  z-index: 9999;
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
  z-index: 9999999;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
