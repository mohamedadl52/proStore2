<template>
  <div class="font-cairo bg-gray-50 ">
    <!-- Header -->
    <header class="bg-white  md:static z-10 w-full text-white shadow-md">
    <div class="navbar relative  z-50 w-full">
      <div class="flex  justify-between fixed top-0 md:static items-center p-4   navbar w-full">
        <!-- الشعار -->
        <h1 class="text-sm logode flex items-center gap-2 font-bold uppercase">
          <img class="w-10" src="@/assets/logoo.png" alt="logo" />
          <a href="/" class="hover:underline">pro store</a>
        </h1>

        <!-- الخصائص العلوية -->
        <div class="relative flex  items-center gap-4">
          <!-- 🔍 شريط البحث -->
 

<!-- 🔍 شريط البحث للهواتف -->
<div v-show="showMobileSearch" class="absolute  top-full right-4 mt-2 md:hidden z-50">
  <input
    type="text"
    v-model="searchQuery"
    placeholder="ابحث..."
    class="search-input-mobile"
    ref="mobileSearchInput"
  />
</div>

<!-- 🔍 شريط البحث للديسكتوب -->
<div class="hidden md:block">
  <input
    type="text"
    v-model="searchQuery"
    placeholder="ابحث عن خدمة..."
    class="search-input"
  />
</div>


          <!-- 💬 الرسائل -->
          <button v-if="isLoggedIn"  class="icon-button" title="الرسائل">
            💬
          </button>

          <!-- 🛒 السلة -->
          <button v-if="isLoggedIn" class="icon-button" title="السلة">
            🛒
          </button>

          <!-- ✅ صورة البروفايل أو تسجيل الدخول -->
          <div v-if="isLoggedIn" class="relative flex items-center gap-4">
            <div @click="toggleUserMenu" class="cursor-pointer user-icon">
              <img
                :src="profilePic"
                alt="صورة المستخدم"
                class="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-green-300 transition"
              />
            </div>
  <p>
    
  </p>
            <!-- القائمة المنسدلة -->
            <transition name="fade">
              <div style="direction: rtl;" v-show="isUserMenuOpen" class="user-menu">
                <a href="/profile">👤 الملف الشخصي</a>
                <a href="#">🛠️ الإعدادات</a>
                <a href="#">🌐 تغيير اللغة</a>
                <a v-if="isAdmin" href="/admin">😎 لوحه الادمن </a>
                <a href="#" @click="logout">🔐 تسجيل الخروج</a>
              </div>
            </transition>
          </div>

          <div v-if="!isLoggedIn">
            <a href="/login" class="text-white hover:underline">تسجيل الدخول</a>
          </div>

          <!-- زر القائمة الجانبية للموبايل -->
          <div class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </div>


      </div>

          <!-- 🔍 شريط البحث في الهواتف فقط -->
<div style="direction: rtl;" class="block md:hidden px-2 mt-20 mt  border-t border-gray-200">
  <div class="flex items-center gap-0">
    <input
      id="mobile-sidebar-search"
      type="text"
      v-model="searchQuery"
      placeholder="أدخل كلمة البحث"
      class="flex-1 px-2 py-2 border border-gray-300  text-sm focus:outline-none focus:ring focus:ring-blue-300"
    />
    <button
      class="bg-blue-600 text-white px-4 py-2 rounded-l text-sm hover:bg-blue-600 transition"
      @click="performSearch"
    >
      بحث
    </button>
  </div>
</div>

      <!-- Navigation -->
      <nav class="bg-blue-900 py-2 text-sm">
        <ul class="flex flex-wrap justify-center gap-6 text-white">
          <li><a href="/">🏠 الرئيسية</a></li>
          <li><a href="/subscriptions">📦 الاشتراكات</a></li>
          <li><a href="/subscriptions">📱مشاكل الهواتف</a></li>
          <li><a href="/payments">💳 المدفوعات</a></li>
          <li><a href="/services">💼 الخدمات الرقمية</a></li>
          <li><a href="/offers">🔥 العروض</a></li>
          <li><a href="/blog">📰 المدونة</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main -->

<!-- القائمة الجانبية للجوال (تنزلق من اليمين) -->
<transition name="slide-mobile">
 <aside
  v-if="isMenuOpen && !isDesktop"
  class="fixed right-0 w-64 bg-white shadow-lg p-4 z-50 mt-4 overflow-y-auto"
  style="top: 60px; height: calc(100vh - 60px); direction: rtl;"
>

    <!-- محتوى القائمة كما هو -->
    <div>
      <h3 class="font-bold text-gray-700 mb-2">📦 الاشتراكات</h3>
      <ul class="space-y-1">
        <li>🎨 برامج التصميم</li>
        <li>📁 أدوات الإنتاجية</li>
        <li>🛡️ VPN والحماية</li>
        <li>🎬 الترفيه</li>
        <li>📚 التعليم</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-gray-700 mb-2">💳 المدفوعات</h3>
      <ul class="space-y-1">
        <li>💰 شحن المحافظ</li>
        <li>💳 بطاقات مسبقة</li>
        <li>🎮 شحن الألعاب</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-gray-700 mb-2">💼 الخدمات الرقمية</h3>
      <ul class="space-y-1">
        <li>🖌️ تصميم وجرافيك</li>
        <li>✍️ كتابة</li>
        <li>🌍 ترجمة</li>
        <li>📣 تسويق</li>
        <li>💻 برمجة</li>
        <li>🎓 خدمات أكاديمية</li>
      </ul>
    </div>
  </aside>
</transition>

  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap");

.font-cairo {
  font-family: "Cairo", sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.logode {
  font-family: 'Pacifico', cursive;
}
.cairo-test {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
}

.navbar {
  background: linear-gradient(90deg, #4b6cb7, #182848);
  color: white;
}

/* القائمة المنسدلة للمستخدم */
.user-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  width: 180px;
  z-index: 1000;
}
.user-menu a {
  display: block;
  padding: 10px 15px;
  font-size: 0.95rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
}
.user-menu a:hover {
  background-color: #f2f2f2;
}

/* 🔍 شريط البحث */
.search-input {
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  width: 220px;
  outline: none;
}

/* أيقونات الرسائل والسلة */
.icon-button {
  background: transparent;
  border: none;
  font-size: 1.3rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;
}
.icon-button:hover {
  transform: scale(1.1);
}

/* الهامبورغر */
.hamburger {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 22px;
  position: relative;
}
.hamburger div {
  background-color: white;
  height: 3px;
  width: 100%;
  position: absolute;
  left: 0;
  transition: 0.3s ease;
  border-radius: 2px;
}
.bar1 {
  top: 0;
}
.bar2 {
  top: 9px;
}
.bar3 {
  bottom: 0;
}
.hamburger.open .bar1 {
  transform: rotate(45deg);
  top: 9px;
}
.hamburger.open .bar2 {
  opacity: 0;
}
.hamburger.open .bar3 {
  transform: rotate(-45deg);
  bottom: 9px;
}

/* القائمة */
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.menu a {
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
}
.menu a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* الأنيميشن */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* موبايل */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .menu {
    flex-direction: column;
  }
  .search-input {
    width: 120px;
    font-size: 0.8rem;
  }
}

/* ديسكتوب */
@media (min-width: 769px) {
  .menu {
    flex-direction: row;
    justify-content: center;
  }
  .menu a {
    padding: 10px 15px;
  }
}
/* شريط البحث في الموبايل */
.search-input-mobile {
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  font-family: 'Cairo', sans-serif;
  font-size: 0.85rem;
  width: 250px;
  outline: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.search-input-mobile::placeholder{
  color: #999;
  font-size: 0.85rem;
  direction: rtl;
  text-align: right;
  font-family: 'Cairo', sans-serif;}
  /* انزلاق القائمة الجانبية من اليمين (موبايل فقط) */
.slide-mobile-enter-active,
.slide-mobile-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-mobile-enter-from,
.slide-mobile-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-mobile-enter-to,
.slide-mobile-leave-from {
  transform: translateX(0);
  opacity: 1;
}
/* اجعل القائمة الجانبية للجوال ثابتة لا تتحرك عند التمرير */
@media (max-width: 768px) {
  aside.fixed {
    position: fixed !important;
    top: 60px; /* تحت الهيدر مباشرة */
    bottom: 0;
    overflow-y: auto;
  }
}


</style>

<script>
import profilePic from '@/assets/profile.png';

export default {
  data() {
    return {
      isMenuOpen: false,
      isUserMenuOpen: false,
      isAdmin: false,
      isLoggedIn: false,
      isDesktop: false,
      profilePic,
      searchQuery: '', // ✅ متغير البحث
      showMobileSearch: false, // ✅ جديد

    };
  },
  methods: {

    
    
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    


    
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },
    closeUserMenuOutside(event) {
    const menu = document.querySelector(".user-menu");
    const icon = document.querySelector(".user-icon");
    if (menu && !menu.contains(event.target) && !icon.contains(event.target)) {
      this.isUserMenuOpen = false;
    } 
    
    // إغلاق القائمة الجانبية إذا ضغط المستخدم خارجها
   // إغلاق القائمة الجانبية إذا ضغط المستخدم خارجها
const aside = document.querySelector("aside");
if (aside && !aside.contains(event.target) && !event.target.closest(".hamburger")) {
  this.isMenuOpen = false;
}
    // ✅ إغلاق شريط البحث في الهواتف عند الضغط خارجًا
    if (
      this.$refs.mobileSearchInput &&
      !this.$refs.mobileSearchInput.contains(event.target) &&
      !event.target.closest(".icon-button")
    ) {
      this.showMobileSearch = false;
    }
  },
    checkScreen() {
      this.isDesktop = window.innerWidth >= 769;
      if (this.isDesktop) this.isMenuOpen = false;
    },
    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      window.location.href = '/login';
    },
  },
  mounted() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
    document.addEventListener('click', this.closeUserMenuOutside);

    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored?.user) {
      this.isLoggedIn = true;
    }
    if (stored?.user.role === 'admin') {
      this.isAdmin = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen);
    document.removeEventListener('click', this.closeUserMenuOutside);
  },
};
</script>