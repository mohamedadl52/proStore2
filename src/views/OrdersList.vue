<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-center">قائمة الطلبات</h2>

    <table class="min-w-full bg-white rounded shadow border">
      <thead class="bg-gray-100">
        <tr class="text-right">
          <th class="p-3 border">#</th>
          <th class="p-3 border">المستخدم</th>
          <th class="p-3 border">نوع الخدمة</th>
          <th class="p-3 border">حالة الطلب</th>
          <th class="p-3 border">تاريخ الطلب</th>
          <th class="p-3 border">إجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="order._id">
          <td class="p-2 border text-center">{{ index + 1 }}</td>
          <td class="p-2 border">{{ order.userName || 'غير معروف' }}</td>
          <td class="p-2 border">{{ order.serviceType }}</td>
          <td class="p-2 border text-center">
            <select v-model="order.status" @change="updateStatus(order)">
              <option value="جاري التقديم">جاري التقديم</option>
              <option value="مكتمل">مكتمل</option>
              <option value="مرفوض">مرفوض</option>
            </select>
          </td>
          <td class="p-2 border text-center">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
          <td class="p-2 border text-center">
            <button class="text-blue-600 hover:underline" @click="viewDetails(order)">عرض التفاصيل</button>
            <button class="text-red-600 hover:underline ml-2" @click="deleteOrder(order._id)">حذف</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- مودال تفاصيل الطلب -->
    <div v-if="showDetailsModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded w-full max-w-lg shadow-lg relative">
        <h3 class="text-xl font-bold mb-4 text-center">تفاصيل الطلب</h3>
        <ul class="list-disc pl-6 text-right max-h-60 overflow-auto">
          <li v-for="(pref, idx) in selectedOrder.preferences" :key="idx">
            {{ pref.university }} - {{ pref.faculty }}
          </li>
        </ul>
        <button
          class="absolute top-2 left-2 text-red-500 hover:text-red-700 text-sm"
          @click="showDetailsModal = false"
        >✖️ إغلاق</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const orders = ref([]);
const showDetailsModal = ref(false);
const selectedOrder = ref({});

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8081/api/orders');
    orders.value = res.data;
  } catch (error) {
    alert('فشل تحميل الطلبات');
  }
});

function viewDetails(order) {
  selectedOrder.value = order;
  showDetailsModal.value = true;
}

async function updateStatus(order) {
  try {
    await axios.put(`http://localhost:8081/api/orders/${order._id}`, { status: order.status });
    alert('تم تحديث حالة الطلب');
  } catch (error) {
    alert('فشل تحديث حالة الطلب');
  }
}

async function deleteOrder(id) {
  if (confirm('هل تريد حذف هذا الطلب؟')) {
    try {
      await axios.delete(`http://localhost:8081/api/orders/${id}`);
      orders.value = orders.value.filter(o => o._id !== id);
    } catch (error) {
      alert('فشل حذف الطلب');
    }
  }
}
</script>
