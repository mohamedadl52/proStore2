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
<h2 class="text-xl font-bold mt-10 mb-4 text-center">طلبات Starlink</h2>
<table class="w-full text-right table-auto border">
  <thead class="bg-gray-100">
    <tr>
      <th class="border p-2">#</th>
      <th class="border p-2">نوع المشكلة</th>
      <th class="border p-2">البريد الإلكتروني</th>
      <th class="border p-2">التاريخ</th>
      <th class="border p-2">تفاصيل</th>
      <th class="border p-2">الحالة</th>
     <th class="border p-2">تغيير الحالة</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(order, index) in starlinkOrders" :key="order._id">
      <td class="border p-2 text-center">{{ index + 1 }}</td>
      <td class="border p-2 text-center">{{ order.issueType }}</td>
      <td class="border p-2 text-center">{{ order.email }}</td>
      <td class="border p-2 text-center">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
      <td class="border p-2 text-center">
        <button @click="viewStarlink(order)" class="text-blue-600 hover:underline">عرض</button>
      </td>
      <td class="border p-2 text-center">{{ order.status }}</td>
<td class="border p-2 text-center">
  <select v-model="order.status" @change="updateStarlinkStatus(order)" class="border p-1 rounded">
    <option>جاري المراجعة</option>
    <option>قيد التنفيذ</option>
    <option>تم الحل</option>
    <option>مرفوض</option>
  </select>
</td>

    </tr>
  </tbody>
</table>
<!-- Modal Starlink -->
<div v-if="showStarlinkModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
    <h3 class="text-xl font-bold mb-4 text-center">تفاصيل طلب Starlink</h3>

    <div style="direction: rtl;" class="text-right space-y-2">
      <p><strong>نوع المشكلة:</strong> {{ selectedStarlink.issueType }}</p>
      <p><strong>الاسم:</strong> {{ selectedStarlink.fullName }}</p>
      <p><strong>الإيميل:</strong> {{ selectedStarlink.email }}</p>
      <p><strong>الباسورد:</strong> {{ selectedStarlink.password }}</p>
      <p><strong>العنوان:</strong> {{ selectedStarlink.address }}</p>
      <p><strong>رقم الهاتف:</strong> {{ selectedStarlink.phone }}</p>
      <p><strong>رقم الطبق:</strong> {{ selectedStarlink.dishNumber }}</p>
      <p><strong>رقم الكت:</strong> {{ selectedStarlink.kitNumber }}</p>
      <p><strong>رقم الحساب:</strong> {{ selectedStarlink.accountNumber }}</p>
      <p><strong>تفاصيل:</strong> {{ selectedStarlink.details }}</p>
    </div>

    <!-- عرض الصور المصغرة -->
    <div class="mt-4 grid grid-cols-2 gap-4">
      <div v-if="selectedStarlink.identityImageUrl">
        <p class="text-sm mb-1 font-semibold">صورة الهوية:</p>
        <img
          :src="selectedStarlink.identityImageUrl"
          alt="صورة الهوية"
          class="w-24 h-24 rounded cursor-pointer object-cover border"
          @click="openImageModal(selectedStarlink.identityImageUrl)"
        />
      </div>

      <div v-if="selectedStarlink.invoiceImageUrl">
        <p class="text-sm mb-1 font-semibold">صورة الفاتورة:</p>
        <img
          :src="selectedStarlink.invoiceImageUrl"
          alt="صورة الفاتورة"
          class="w-24 h-24 rounded cursor-pointer object-cover border"
          @click="openImageModal(selectedStarlink.invoiceImageUrl)"
        />
      </div>

      <div v-if="selectedStarlink.dishImageUrl">
        <p class="text-sm mb-1 font-semibold">صورة الطبق:</p>
        <img
          :src="selectedStarlink.dishImageUrl"
          alt="صورة الطبق"
          class="w-24 h-24 rounded cursor-pointer object-cover border"
          @click="openImageModal(selectedStarlink.dishImageUrl)"
        />
      </div>

      <div v-if="selectedStarlink.visaImageUrl">
        <p class="text-sm mb-1 font-semibold">صورة الفيزا:</p>
        <img
          :src="selectedStarlink.visaImageUrl"
          alt="صورة الفيزا"
          class="w-24 h-24 rounded cursor-pointer object-cover border"
          @click="openImageModal(selectedStarlink.visaImageUrl)"
        />
      </div>
    </div>

    <button
      class="absolute top-2 left-2 text-red-500 hover:text-red-700 text-sm"
      @click="showStarlinkModal = false"
    >✖️ إغلاق</button>
  </div>
</div>


<!-- مودال عرض الصورة -->
<div v-if="imageModalUrl" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
  <div class="relative">
    <img :src="imageModalUrl" alt="صورة مكبرة" class="max-w-[90vw] max-h-[90vh] rounded shadow-lg" />
    <button
      @click="imageModalUrl = ''"
      class="absolute top-2 left-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
    >✖️ إغلاق</button>
  </div>
</div>


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
const starlinkOrders = ref([])
const showStarlinkModal = ref(false)
const selectedStarlink = ref(null)
onMounted(() => {
  fetchOrders()
  fetchStarlinkOrders()
})
const imageModalUrl = ref('')

function openImageModal(url) {
  imageModalUrl.value = url
}

async function updateStarlinkStatus(order) {
  try {
    const stored = JSON.parse(localStorage.getItem('user'));
    const token = stored?.token;

    await axios.put(`https://prostoreserver.onrender.com/api/starlink/orders/${order._id}`, {
      status: order.status
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    
    });
    alert('✅ تم تحديث حالة الطلب');
  } catch (err) {
    console.log(err)
    alert('❌ فشل في تحديث الحالة');
  }
}

function viewStarlink(order) {
  selectedStarlink.value = order
  showStarlinkModal.value = true
}

async function fetchStarlinkOrders() {
 
  try {
 
    console.log("Start fetching Starlink orders")
 
    const stored = JSON.parse(localStorage.getItem('user'))
 
    const token = stored?.token

    const res = await axios.get('https://prostoreserver.onrender.com/api/starlink/orders', {
 
      headers: {
 
        Authorization: `Bearer ${token}`
 
      }
 
    })
    
    starlinkOrders.value = res.data
 
  } catch (err) {
    alert('فشل في تحميل طلبات Starlink')
  }
}

async function fetchOrders() {
  loading.value = true
  try {
    const stored = JSON.parse(localStorage.getItem('user'))
    const token = stored?.token

    const res = await axios.get('https://prostoreserver.onrender.com/api/admin/orders', {
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

    await axios.put(`https://prostoreserver.onrender.com/api/admin/orders/${order._id}`, {
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
