<template>
  <div class="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow">
    <div v-if="loading" class="text-center text-gray-500">جارٍ تحميل المنتج...</div>

    <div v-else-if="product">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img :src="product.img" alt="Product Image" class="w-64 h-64 object-contain rounded border" />

        <div class="text-right w-full">
          <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ product.title }}</h1>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <p class="text-lg font-semibold text-green-600 mb-6">السعر: {{ product.price }} جنيه</p>

          <a :href="product.link" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            اطلب الآن
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-red-600">لم يتم العثور على المنتج.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import catogres from './cato.json' // ← أو من API لاحقًا

const route = useRoute()
const product = ref(null)
const loading = ref(true)

onMounted(() => {
  const productId = route.params.id
  const found = catogres.find(item => item.id == productId) // تأكد أن لديك مفتاح id
  product.value = found || null
  loading.value = false
})
</script>
