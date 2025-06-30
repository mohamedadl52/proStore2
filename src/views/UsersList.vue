<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-center">قائمة المستخدمين</h2>

    <table class="min-w-full bg-white rounded shadow border">
      <thead class="bg-gray-100">
        <tr class="text-right">
          <th class="p-3 border">#</th>
          <th class="p-3 border">الاسم</th>
          <th class="p-3 border">البريد الإلكتروني</th>
          <th class="p-3 border">رقم الهاتف</th>
          <th class="p-3 border">رقم الجلوس</th>
          <th class="p-3 border">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user._id">
          <td class="p-2 border text-center">{{ index + 1 }}</td>
          <td class="p-2 border">{{ user.name }}</td>
          <td class="p-2 border">{{ user.email }}</td>
          <td class="p-2 border">{{ user.phone || 'غير متوفر' }}</td>
          <td class="p-2 border">{{ user.seatNumber || 'غير مسجل' }}</td>
          <td class="p-2 border text-center">
            <button class="bg-yellow-400 px-3 py-1 text-white rounded hover:bg-yellow-500" @click="editUser(user)">تعديل</button>
            <button class="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600 ml-2" @click="deleteUser(user._id)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- نافذة التعديل -->
    <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded w-full max-w-md shadow">
        <h3 class="text-xl font-bold mb-4 text-center">تعديل بيانات المستخدم</h3>
        <div class="space-y-3">
          <input v-model="editData.name" type="text" placeholder="الاسم" class="w-full p-2 border rounded" />
          <input v-model="editData.email" type="email" placeholder="البريد الإلكتروني" class="w-full p-2 border rounded" />
          <input v-model="editData.phone" type="text" placeholder="رقم الهاتف" class="w-full p-2 border rounded" />
          <input v-model="editData.seatNumber" type="text" placeholder="رقم الجلوس" class="w-full p-2 border rounded" />
        </div>
        <div class="mt-4 flex justify-between">
          <button class="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600" @click="updateUser">حفظ</button>
          <button class="bg-gray-400 px-4 py-2 text-white rounded hover:bg-gray-500" @click="showEditModal = false">إلغاء</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const showEditModal = ref(false)
const editData = ref({})
let currentUserId = ''

// جلب المستخدمين عند التحميل
onMounted(async () => {
  const res = await axios.get('http://localhost:8081/api/users')
  users.value = res.data
})

function editUser(user) {
  currentUserId = user._id
  editData.value = { ...user }
  showEditModal.value = true
}

async function updateUser() {
  try {
    await axios.put(`http://localhost:8081/api/users/${currentUserId}`, editData.value)
    const index = users.value.findIndex(u => u._id === currentUserId)
    users.value[index] = { ...editData.value, _id: currentUserId }
    showEditModal.value = false
  } catch (error) {
    alert('حدث خطأ أثناء تحديث المستخدم')
  }
}

async function deleteUser(id) {
  if (confirm('هل أنت متأكد أنك تريد حذف هذا المستخدم؟')) {
    await axios.delete(`http://localhost:8081/api/users/${id}`)
    users.value = users.value.filter(u => u._id !== id)
  }
}
</script>
