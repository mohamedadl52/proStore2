<template>
  <div>
    <div class="navbar relative">
      <div class="flex justify-between items-center p-4 relative">
        <h1 class="text-sm logode flex items-center gap-2 font-bold uppercase">
          <img class="w-10" src="@/assets/logoo.png" alt="logo" />
          <a href="/" class="hover:underline">pro store</a>
        </h1>

        <!-- قائمة المستخدم -->
        <div class="relative flex items-center gap-4">
          <!-- ✅ صورة البروفايل -->
          <!-- ✅ فقط تظهر إذا سجل المستخدم الدخول -->
<div v-if="isLoggedIn" class="relative flex items-center gap-4">
  <div @click="toggleUserMenu" class="cursor-pointer user-icon">
    <img
      :src="profilePic"
      alt="صورة المستخدم"
      class="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-green-300 transition"
    />
  </div>

  <!-- القائمة المنسدلة -->
  <transition name="fade">
    <div style="direction: rtl;" v-show="isUserMenuOpen" class="user-menu">
      <a href="/profile">👤 الملف الشخصي</a>
      <a href="#">🛠️ الإعدادات</a>
      <a href="#">🌐 تغيير اللغة</a>
      <a v-if="isAdmin" href="/admin" >😎 لوحه الادمن </a>
      <a href="#" @click="logout">🔐 تسجيل الخروج</a>
    </div>
  </transition>
</div>

<!-- ✅ إذا لم يسجل الدخول -->
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

      <!-- القائمة الرئيسية -->
      <transition name="slide">
        <div v-show="isMenuOpen || isDesktop" class="menu cairo-test" :class="{ open: isMenuOpen }">
          <a href="/" class="hover:underline">الرئيسية</a>
          <a href="/">الخدمات</a>
            <a href="/whous">من نحن</a>
  <a href="/contact">تواصل معنا</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import profilePic from '@/assets/profile.png'

export default {
  data() {
    return {
      isMenuOpen: false,
      isUserMenuOpen: false,
      isAdmin: false, // ✅ جديد
      isDesktop: false,
      profilePic, // ✅ أضفنا الصورة هنا
       isLoggedIn: false, // ✅ جديد

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
    },
    checkScreen() {
      this.isDesktop = window.innerWidth >= 769;
      if (this.isDesktop) this.isMenuOpen = false;
    },
      logout() {
    localStorage.removeItem("user");
    this.isLoggedIn = false;
    window.location.href = "/login";
  }
  },
  mounted() {
     this.checkScreen();
  window.addEventListener("resize", this.checkScreen);
  document.addEventListener("click", this.closeUserMenuOutside);

  const stored = JSON.parse(localStorage.getItem("user"));
  if (stored?.user) {
    this.isLoggedIn = true;
  }
  if (stored?.user.role === "admin") {
   this.isAdmin = true;
  }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
    document.removeEventListener("click", this.closeUserMenuOutside);
  },
};
</script>
  
  <style scoped>
  /* باقي التنسيقات نفسها */
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  
  .logode {
    font-family: "Pacifico", cursive;
  }
  
  .cairo-test {
    font-family: "Cairo", sans-serif;
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
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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
  .bar1 { top: 0; }
  .bar2 { top: 9px; }
  .bar3 { bottom: 0; }
  
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
  
  /* أنميشن */
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter-from, .slide-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
  .slide-enter-to, .slide-leave-from {
    max-height: 300px;
    opacity: 1;
    transform: translateY(0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave-from {
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
  </style>
  