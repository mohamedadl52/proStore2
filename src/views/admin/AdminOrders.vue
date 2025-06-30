<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">إدارة الطلبات</h1>

    <div v-if="loading" class="text-center text-gray-500">جاري التحميل...</div>

    <table v-else class="w-full text-right table-auto border">
      <thead class="bg-gray-100">
        <tr>
        <th class="border p-2">#</th>
      <th class="border p-2">اسم المستخدم</th>
      <th class="border p-2">نوع الخدمة</th>
      <th class="border p-2">الحالة</th>
      <th class="border p-2">التاريخ</th>
      <th class="border p-2">تفاصيل</th>
          <th class="border p-2">تغيير الحالة</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="order._id">
      <td class="border p-2 text-center">{{ index + 1 }}</td>
      <td class="border p-2 text-center">{{ order.userId?.name || 'غير معروف' }}</td>
      <td class="border p-2 text-center">تقديم إلكتروني</td>
      <td class="border p-2 text-center">{{ order.status }}</td>
      <td class="border p-2 text-center">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
      <td class="border p-2 text-center">
        <button @click="viewDetails(order)" class="text-blue-600 hover:underline">عرض التفاصيل</button>
      </td>
          <td class="border p-2 text-center">
            <select v-model="order.status" @change="updateStatus(order)" class="border p-1 rounded">
              <option>جاري الفحص</option>
              <option>جاري الطلب</option>
              <option>تم الطلب</option>
              <option>مرفوض</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- نافذة التفاصيل -->
    <!-- Modal التفاصيل -->
<div v-if="showOrderModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
    <h3 class="text-xl font-bold mb-4 text-center">تفاصيل الطلب</h3>

    <div class="text-right space-y-2">
      <p><strong>اسم الطالب:</strong> {{ selectedOrder.studentName }}</p>
      <p><strong>رقم الجلوس:</strong> {{ selectedOrder.seatNumber }}</p>
      <p><strong>رقم الهاتف:</strong> {{ selectedOrder.phone }}</p>
    </div>

    <div class="mt-4">
      <h4 class="font-semibold mb-2">الرغبات المختارة:</h4>
      <ul class="list-disc pl-6 text-right">
        <li v-for="(pref, index) in selectedOrder.preferences" :key="index">
          {{ pref.university }} - {{ pref.faculty }}
        </li>
      </ul>
    </div>

    <button
      class="absolute top-2 left-2 text-red-500 hover:text-red-700 text-sm"
      @click="showOrderModal = false"
    >✖️ إغلاق</button>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const orders = ref([])
const loading = ref(true)
const showOrderModal = ref(false)
const selectedOrder = ref(null)

onMounted(fetchOrders)

async function fetchOrders() {
  loading.value = true
  try {
    const stored = JSON.parse(localStorage.getItem('user'))
    const token = stored?.token

    const res = await axios.get('http://localhost:8081/api/admin/orders', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    orders.value = res.data
  } catch (err) {
    alert('فشل في تحميل الطلبات')
  }
  loading.value = false
}

async function updateStatus(order) {
  try {
    const stored = JSON.parse(localStorage.getItem('user'))
    const token = stored?.token

    await axios.put(`http://localhost:8081/api/admin/orders/${order._id}`, {
      status: order.status
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    alert('تم تحديث حالة الطلب ✅')
  } catch (err) {
    alert('فشل في تحديث الحالة ❌')
  }
}


function viewDetails(order) {
  selectedOrder.value = order
  showOrderModal.value = true
}

</script>
