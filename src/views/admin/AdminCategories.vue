<template>
  <div>
    <h2 class="text-xl font-bold mb-4">إدارة الأقسام</h2>

    <!-- إضافة قسم رئيسي -->
    <div class="flex gap-2 mb-4">
      <input v-model="newCategory" placeholder="اسم القسم الرئيسي" class="p-2 border rounded w-full" />
      <button @click="addCategory" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">إضافة</button>
    </div>

    <!-- قائمة الأقسام -->
    <ul class="space-y-4">
      <li v-for="category in categories" :key="category._id" class="bg-white p-4 rounded shadow">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-lg">{{ category.name }}</h3>
          <button @click="deleteCategory(category._id)" class="text-red-600 hover:text-red-800">🗑️</button>
        </div>

        <!-- الأقسام الفرعية -->
        <ul class="mt-2 pl-4 space-y-2">
          <li v-for="child in category.children" :key="child._id" class="flex justify-between items-center">
            <span>↳ {{ child.name }}</span>
            <button @click="deleteSubCategory(category._id, child._id)" class="text-red-600 hover:text-red-800">🗑️</button>
          </li>
        </ul>

        <!-- إضافة قسم فرعي -->
        <div class="flex gap-2 mt-2">
          <input v-model="newSubCategory[category._id]" placeholder="اسم القسم الفرعي" class="p-1 border rounded w-full" />
          <button @click="addSubCategory(category._id)" class="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">+</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([])
const newCategory = ref('')
const newSubCategory = ref({})

const API_BASE = 'https://prostoreserver.onrender.com/api/categories' // تأكد من أن هذا الرابط صحيح

async function fetchCategories() {
  const res = await axios.get(API_BASE)
  categories.value = res.data
}

async function addCategory() {
  if (!newCategory.value.trim()) return
  await axios.post(API_BASE, { name: newCategory.value })
  newCategory.value = ''
  fetchCategories()
}

async function deleteCategory(id) {
  await axios.delete(`${API_BASE}/${id}`)
  fetchCategories()
}

async function addSubCategory(id) {
  const name = newSubCategory.value[id]
  if (!name?.trim()) return
  await axios.post(`${API_BASE}/${id}/sub`, { name })
  newSubCategory.value[id] = ''
  fetchCategories()
}

async function deleteSubCategory(catId, subId) {
  await axios.delete(`${API_BASE}/${catId}/sub/${subId}`)
  fetchCategories()
}

onMounted(fetchCategories)
</script>
