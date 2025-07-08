<template>
  <div class="bg-white p-6 rounded shadow-md max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">تحديث السعر</h2>

    <div v-if="message" class="mb-4 text-green-600">{{ message }}</div>
    <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>

    <form @submit.prevent="updatePrice">
      <label class="block mb-2 font-semibold">السعر الحالي:</label>
      <input type="number" v-model="price" class="w-full border p-2 mb-4 rounded" />

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        حفظ
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const price = ref('')
const message = ref('')
const error = ref('')

onMounted(fetchPrice)

async function fetchPrice() {
  try {
    const res = await axios.get('https://prostoreserver.onrender.com/api/admin/price')
    price.value = res.data.price
  } catch (err) {
    error.value = 'فشل في جلب السعر'
  }
}

async function updatePrice() {
  try {
    const res = await axios.put('https://prostoreserver.onrender.com/api/admin/price', { price: price.value })
message.value = res.data.msg || 'تم التحديث بنجاح'
    error.value = ''
  } catch (err) {
    error.value = '❌ فشل في تحديث السعر'
    message.value = ''
  }
}
</script>
