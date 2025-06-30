<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-8">لوحة التحكم</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      <div class="bg-white p-4 rounded shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2">عدد المستخدمين</h2>
        <p class="text-2xl font-bold text-blue-600">{{ stats.users }}</p>
      </div>

      <div class="bg-white p-4 rounded shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2">عدد الطلبات</h2>
        <p class="text-2xl font-bold text-green-600">{{ stats.orders }}</p>
      </div>

      <div class="bg-white p-4 rounded shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2">طلبات قيد التنفيذ</h2>
        <p class="text-2xl font-bold text-yellow-500">{{ stats.pending }}</p>
      </div>

      <div class="bg-white p-4 rounded shadow border border-gray-200">
        <h2 class="text-lg font-semibold mb-2">طلبات مكتملة</h2>
        <p class="text-2xl font-bold text-green-700">{{ stats.completed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const stats = ref({
  users: 0,
  orders: 0,
  pending: 0,
  completed: 0
})

onMounted(async () => {
  try {
    const res = await axios.get('https://prostoreserver.onrender.com/api/admin/stats')
    stats.value = res.data
  } catch (error) {
    console.error('فشل في تحميل الإحصائيات', error)
  }
})
</script>
