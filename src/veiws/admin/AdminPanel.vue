<template>
  <div class="flex min-h-screen">
    <!-- الشريط الجانبي -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-gray-700">لوحة التحكم</div>
      <nav class="flex-1 px-4 py-6 space-y-2">
        <button class="w-full text-right hover:bg-gray-700 p-2 rounded" @click="view = 'users'">المستخدمين</button>
        <button class="w-full text-right hover:bg-gray-700 p-2 rounded" @click="view = 'orders'">الطلبات</button>
      </nav>
    </aside>

    <!-- المحتوى الرئيسي -->
    <div class="flex-1 bg-gray-100">
      <!-- الشريط العلوي -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">لوحة التحكم - {{ view === 'users' ? 'المستخدمين' : 'الطلبات' }}</h1>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">تسجيل الخروج</button>
      </header>

      <!-- المحتوى الديناميكي -->
      <main class="p-6">
        <AdminUsers v-if="view === 'users'" />
        <AdminOrders v-if="view === 'orders'" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminUsers from './AdminUsers.vue'
import AdminOrders from './AdminOrders.vue'

const view = ref('users')

function logout() {
  localStorage.removeItem('user')
  window.location.href = '/'
}
</script>
