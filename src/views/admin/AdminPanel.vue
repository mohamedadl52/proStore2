<template>
  <div style="direction: rtl;" class="flex flex-col lg:flex-row min-h-screen relative overflow-x-hidden">

    <!-- الشريط العلوي للهواتف -->
    <header class="bg-white shadow p-4 flex justify-between items-center lg:hidden">
      <button @click="logout" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">خروج</button>
      <h1 class="text-xl font-semibold">لوحة التحكم - 
  {{
    view === 'users' ? 'المستخدمين' :
    view === 'orders' ? 'الطلبات' :
    view === 'price' ? 'السعر' : ''
  }}
</h1>

      <button @click="toggleSidebar" class="text-gray-700 text-2xl">☰</button>
    </header>

    <!-- الشريط الجانبي (مع انزلاق) -->
    <transition name="slide">
      <aside
        v-if="showSidebar"
        class="fixed inset-y-0 right-0 z-40 w-64 bg-gray-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0"
      >
        <div class="p-4 text-xl font-bold border-b border-gray-700 text-right">لوحة التحكم</div>
        <nav class="px-4 py-6 space-y-2 text-right">
          <button class="w-full hover:bg-gray-700 p-2 rounded" @click="setView('price')">السعر</button>
          <button class="w-full hover:bg-gray-700 p-2 rounded" @click="setView('users')">المستخدمين</button>
          <button class="w-full hover:bg-gray-700 p-2 rounded" @click="setView('orders')">الطلبات</button>
          <button class="w-full hover:bg-gray-700 p-2 rounded" @click="setView('categories')">الأقسام</button>
          <button class="w-full mt-4 lg:hidden bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" @click="logout">
            تسجيل الخروج
          </button>
        </nav>
      </aside>
    </transition>

    <!-- تغطية خلفية عند فتح الشريط الجانبي في الهاتف -->
    <div
      v-if="showSidebar"
      class="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
      @click="showSidebar = false"
    ></div>

    <!-- المحتوى الرئيسي -->
    <div class="flex-1 bg-gray-100 min-h-screen">
      <!-- الشريط العلوي لأجهزة سطح المكتب -->
      <header class="bg-white shadow p-4 hidden lg:flex justify-between items-center">
        <h1 class="text-xl font-semibold">لوحة التحكم - {{ view === 'users' ? 'المستخدمين' : 'الطلبات' }}</h1>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">تسجيل الخروج</button>
      </header>

      <!-- المحتوى الديناميكي -->
      <main class="p-4">
        <AdminUsers v-if="view === 'users'" />
        <AdminOrders v-if="view === 'orders'" />
        <AdminPrice v-if="view === 'price'" />
        <AdminCategories v-if="view === 'categories'" />

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminUsers from './AdminUsers.vue'
import AdminOrders from './AdminOrders.vue'
import AdminPrice from './AdminPrice.vue'
import AdminCategories from './AdminCategories.vue'

const view = ref('users')
const showSidebar = ref(false)

function setView(val) {
  view.value = val
  showSidebar.value = false // إغلاق القائمة بعد التحديد على الهاتف
}

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function logout() {
  localStorage.removeItem('user')
  window.location.href = '/'
}
</script>

<style>
/* تعريف الانيميشن باستخدام transition-group */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
