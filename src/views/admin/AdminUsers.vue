<template>
  <div class="p-6 overflow-x-auto">
    <h1 class="text-2xl font-bold mb-6 text-center">إدارة المستخدمين</h1>

    <div v-if="loading" class="text-center text-gray-500">جاري التحميل...</div>

    <table  v-else class="w-full min-w-[600px] table-auto border">
      <thead class="bg-gray-100">
        <tr>
          <th class="border p-2">#</th>
          <th class="border p-2">الاسم</th>
          <th class="border p-2">البريد</th>
          <th class="border p-2">الهاتف</th>
          <th class="border p-2">إجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user._id">
          <td class="border p-2 text-center">{{ index + 1 }}</td>
          <td class="border p-2">{{ user.name }}</td>
          <td class="border p-2">{{ user.email }}</td>
          <td class="border p-2">{{ user.phone }}</td>
            <td class="border p-2">{{ user.role }}</td>
        <td class="border p-2 text-center">
  <button @click="editUser(user)" class="text-blue-600 hover:underline mx-2">✏️</button>
  <button @click="deleteUser(user._id)" class="text-red-600 hover:underline">🗑️</button>
</td>

        </tr>
      </tbody>
    </table>

    <!-- مودال التعديل -->
    <div v-if="editModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h3 class="text-xl font-bold mb-4">تعديل المستخدم</h3>
        <input v-model="editData.name" placeholder="الاسم" class="border p-2 w-full mb-3" />
        <input v-model="editData.email" placeholder="البريد" class="border p-2 w-full mb-3" />
        <input v-model="editData.phone" placeholder="الهاتف" class="border p-2 w-full mb-3" />
        <div class="border p-2 text-center">
        <select v-model="editData.role" class="border p-2 w-full mb-3">
  <option value="user">مستخدم</option>
  <option value="assistant">مساعد أدمن</option>
  <option value="admin">أدمن</option>
</select>

      </div>
        <div class="flex justify-between mt-4">
          <button @click="updateUser" class="bg-green-600 text-white px-4 py-2 rounded">حفظ</button>
          <button @click="editModal = false" class="bg-gray-400 text-white px-4 py-2 rounded">إلغاء</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const users = ref([])
const loading = ref(true)

const editModal = ref(false)
onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('user'))

  // تأكد من وجود مستخدم وأنه أدمن
  if (!stored?.user || stored.user.role !== 'admin') {
    router.push('/profile')
    console.log(stored.user.role)
  }
})
const editData = ref({
  _id: '',
  name: '',
  email: '',
  phone: '',
  role: ''
})

onMounted(async () => {
  await fetchUsers()
})

async function fetchUsers() {
  loading.value = true
  try {
        const stored = JSON.parse(localStorage.getItem('user'))
    const token = stored?.token

    const res = await axios.get('https://prostoreserver.onrender.com/api/admin/users' ,  {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    users.value = res.data
  } catch (error) {
  console.log(error)
    alert('خطأ في تحميل المستخدمين')
  }
  loading.value = false
}

function editUser(user) {
  editData.value = { ...user }
  editModal.value = true
}

async function updateUser() {
  try {
    // تحديث المعلومات الأساسية
    await axios.put(`https://prostoreserver.onrender.com/api/admin/users/${editData.value._id}`, {
      name: editData.value.name,
      email: editData.value.email,
      phone: editData.value.phone
    })

    // تحديث الدور
    await axios.put(`https://prostoreserver.onrender.com/api/admin/users/${editData.value._id}/role`, {
      role: editData.value.role
    })

    await fetchUsers()
    editModal.value = false
  } catch (error) {
    alert('فشل في تعديل المستخدم')
  }
}

// async function updateRole(user) {
//   try {
//     await axios.put(`https://prostoreserver.onrender.com/api/admin/users/${user._id}/role`, {
//       role: user.role
//     });
//     alert('تم تحديث دور المستخدم');
//   } catch (err) {
//     alert('فشل تحديث الدور');
//   }
// }
async function deleteUser(id) {
  if (confirm('هل أنت متأكد من حذف المستخدم؟')) {
    try {
      await axios.delete(`https://prostoreserver.onrender.com/api/admin/users/${id}`)
      await fetchUsers()
    } catch (error) {
      alert('فشل في الحذف')
    }
  }
}
</script>
<style scoped>
/* اجعل الجدول قابل للتمرير الأفقي */
.overflow-x-auto {
  overflow-x: auto;
  width: 100%;
}

</style>