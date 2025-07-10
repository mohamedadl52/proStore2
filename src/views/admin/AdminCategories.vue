<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold mb-4">إدارة الأقسام</h2>

    <!-- إضافة قسم جديد -->
    <div class="flex items-center space-x-2 mb-4">
      <input v-model="newMainCategory" type="text" placeholder="اسم القسم الرئيسي" class="p-2 border rounded w-full" />
      <button @click="addMainCategory" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">إضافة</button>
    </div>

    <!-- الأقسام -->
    <div v-for="main in categories" :key="main.id" class="border p-4 rounded bg-white">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold">{{ main.name }}</h3>
        <button @click="deleteMainCategory(main.id)" class="text-red-500 hover:underline text-sm">حذف</button>
      </div>

      <!-- إضافة قسم فرعي -->
      <div class="flex items-center space-x-2 my-2">
        <input v-model="main.newSub" type="text" placeholder="اسم قسم فرعي" class="p-1 border rounded w-full" />
        <button @click="addSubCategory(main)" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">+</button>
      </div>

      <ul class="list-disc pl-6">
        <li v-for="sub in main.children" :key="sub.id" class="flex justify-between items-center">
          {{ sub.name }}
          <button @click="deleteSubCategory(main.id, sub.id)" class="text-red-400 hover:underline text-sm">حذف</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const newMainCategory = ref('')
const categories = reactive([
  {
    id: 1,
    name: 'الاشتراكات',
    newSub: '',
    children: [
      { id: 11, name: 'برامج' },
      { id: 12, name: 'VPN' }
    ]
  },
  {
    id: 2,
    name: 'التقنية',
    newSub: '',
    children: [
      { id: 21, name: 'تفعيل' }
    ]
  }
])

function addMainCategory() {
  if (newMainCategory.value.trim() === '') return
  categories.push({
    id: Date.now(),
    name: newMainCategory.value,
    newSub: '',
    children: []
  })
  newMainCategory.value = ''
}

function deleteMainCategory(id) {
  const index = categories.findIndex(c => c.id === id)
  if (index !== -1) categories.splice(index, 1)
}

function addSubCategory(main) {
  if (!main.newSub || main.newSub.trim() === '') return
  main.children.push({ id: Date.now(), name: main.newSub })
  main.newSub = ''
}

function deleteSubCategory(mainId, subId) {
  const main = categories.find(c => c.id === mainId)
  if (main) {
    const index = main.children.findIndex(s => s.id === subId)
    if (index !== -1) main.children.splice(index, 1)
  }
}
</script>
