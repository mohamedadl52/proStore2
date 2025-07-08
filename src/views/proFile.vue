<template>
  <div>
      <h1 class="text-3xl font-bold text-center mb-4">الملف الشخصي</h1>
<div class="py-6 px-4 bg-gray-100 flex justify-center">
<div class="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md sm:p-8">
        <!-- صورة المستخدم -->
       <img
  :src="profileImg"
  alt="User Avatar"
  class="mx-auto rounded-full w-24 h-24 mb-4 border-2 border-gray-300"
/>
        <!-- بيانات المستخدم -->
        <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ user.name }}</h2>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-gray-600 mb-4">{{ user.phone }}</p>

        <!-- زر تعديل -->
        <button
          @click="openModal = true"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          تعديل الملف الشخصي
        </button>
      </div>
    </div>
    <div class="mt-8 bg-white  p-4 rounded shadow">
  <h3 class="text-xl font-semibold mb-4 text-center">الطلبات السابقة</h3>
  <div v-if="orders.length">
    
<table class="w-full text-right px-6 border" dir="rtl">
  <thead class="bg-gray-100">
    <tr>
      <th class="border p-2">#</th>
      <th class="border p-2">نوع الخدمة</th>
      <th class="border p-2">تاريخ الطلب</th>
      <th class="border p-2">تفاصيل</th>
      <th class="border p-2">الحالة</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(order, index) in orders" :key="order._id">
      <td class="border p-2 text-center">{{ index + 1 }}</td>
      <td class="border p-2 text-center">تقديم إلكتروني</td>
      <td class="border p-2 text-center">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
      <td class="border p-2 text-center">
        <button @click="viewOrder(order)" class="text-blue-600 hover:underline">عرض التفاصيل</button>
      </td>
      <td class="border p-2 text-center">{{ order.status || 'جاري التقديم' }}</td>
    </tr>
  </tbody>
</table>

  </div>
  <div v-else class="text-center text-gray-600 mt-4">لا توجد طلبات بعد.</div>
</div>
<!-- نافذة عرض تفاصيل الطلب -->
<div v-if="showOrderModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
    <h3 class="text-xl font-bold mb-4 text-center">تفاصيل الطلب</h3>
    <div class="mb-4 text-right space-y-1">
  <p><strong>الاسم:</strong> {{ selectedOrder.studentName || '—' }}</p>
  <p><strong>رقم الهاتف:</strong> {{ selectedOrder.phone || '—' }}</p>
  <p><strong>رقم الجلوس:</strong> {{ selectedOrder.seatNumber || '—' }}</p>
</div>

<!-- قائمة الرغبات -->
<h4 class="text-lg font-semibold mb-2">الرغبات:</h4>
<ul class="list-disc pl-6 text-right">
  <li v-for="(pref, index) in selectedOrder.preferences" :key="index">
    {{ pref.university }} - {{ pref.faculty }}
  </li>
</ul>    <button
      class="absolute top-2 left-2 text-red-500 hover:text-red-700 text-sm"
      @click="showOrderModal = false"
    >✖️ إغلاق</button>
  </div>
</div>

<!-- starlink -->
<h3 class="text-xl   font-semibold mt-10 mb-4 text-center">طلبات Starlink</h3>
<div v-if="starlinkOrders.length" class="px-8" >
  <table class="w-full   text-right border" dir="rtl">
    <thead class="bg-gray-100">
      <tr>
        <th class="border p-2">#</th>
        <th class="border p-2">نوع المشكلة</th>
        <th class="border p-2">التاريخ</th>
        <th class="border p-2">الحالة</th>
        <th class="border p-2">تفاصيل</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in starlinkOrders" :key="order._id">
        <td class="border p-2 text-center">{{ index + 1 }}</td>
<td class="border p-2 text-center">{{ translateIssueType(order.issueType) }}</td>
        <td class="border p-2 text-center">{{ new Date(order.createdAt).toLocaleDateString() }}</td>
<td class="border p-2 text-center">
  <span
    :class="getStarlinkStatusClass(order.status)"
    class="px-3 py-1 rounded-full text-sm font-medium animate-fade-in"
  >
    {{ translateStatus(order.status) }}
  </span>
</td>        <td class="border p-2 text-center">
          <button @click="viewStarlinkOrder(order)" class="text-blue-600 hover:underline">عرض</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div v-else class="text-center text-gray-600 mt-4">لا توجد طلبات Starlink بعد.</div>


<div style="direction: rtl;" v-if="showStarlinkModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
    <h3 class="text-xl font-bold mb-4 text-center">تفاصيل طلب Starlink</h3>

    <div class="text-right space-y-2">
<p><strong>نوع المشكلة:</strong> {{ translateIssueType(selectedStarlink.issueType) }}</p>
      <p><strong>الاسم:</strong> {{ selectedStarlink.fullName }}</p>
      <p><strong>البريد الإلكتروني:</strong> {{ selectedStarlink.email }}</p>
      <p><strong>رقم الهاتف:</strong> {{ selectedStarlink.phone }}</p>
      <p><strong>الحالة:</strong> {{ selectedStarlink.status }}</p>
     <p><strong>تفاصيل:</strong> {{ selectedStarlink.details }}</p>
    </div>
    <div>
      <div class="mt-4 space-y-4 text-right">
  <div v-if="selectedStarlink.identityImageUrl">
    <p class="font-semibold mb-1">صورة الهوية:</p>
    <img
      :src="selectedStarlink.identityImageUrl"
      alt="صورة الهوية"
      class="w-24 h-24 rounded shadow-md cursor-pointer object-cover"
      @click="openImageModal(selectedStarlink.identityImageUrl)"
    />
  </div>

  <div v-if="selectedStarlink.invoiceImageUrl">
    <p class="font-semibold mb-1">صورة الفاتورة:</p>
    <img
      :src="selectedStarlink.invoiceImageUrl"
      alt="صورة الفاتورة"
      class="w-24 h-24 rounded shadow-md cursor-pointer object-cover"
      @click="openImageModal(selectedStarlink.invoiceImageUrl)"
    />
  </div>

  <div v-if="selectedStarlink.dishImageUrl">
    <p class="font-semibold mb-1">صورة الطبق:</p>
    <img
      :src="selectedStarlink.dishImageUrl"
      alt="صورة الطبق"
      class="w-24 h-24 rounded shadow-md cursor-pointer object-cover"
      @click="openImageModal(selectedStarlink.dishImageUrl)"
    />
  </div>

  <div v-if="selectedStarlink.visaImageUrl">
    <p class="font-semibold mb-1">صورة الفيزا:</p>
    <img
      :src="selectedStarlink.visaImageUrl"
      alt="صورة الفيزا"
      class="w-24 h-24 rounded shadow-md cursor-pointer object-cover"
      @click="openImageModal(selectedStarlink.visaImageUrl)"
    />
  </div>
</div>

    </div>

    <button
      class="absolute top-2 left-2 text-red-500 hover:text-red-700 text-sm"
      @click="showStarlinkModal = false"
    >✖️ إغلاق</button>
  </div>
</div>

<div v-if="imageModalUrl" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
  <div class="relative">
    <img :src="imageModalUrl" alt="صورة مكبرة" class="max-w-full max-h-screen rounded shadow-lg" />
    <button
      @click="imageModalUrl = ''"
      class="absolute top-2 left-2 text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
    >✖️ إغلاق</button>
  </div>
</div>


<!-- end starlink -->

    <!-- Modal -->
    <div
      v-if="openModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <h3 class="text-xl font-bold mb-4 text-center">تعديل البيانات</h3>

        <div class="space-y-4">
          <input
            v-model="editUser.name"
            type="text"
            placeholder="الاسم"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          />
          <input
            v-model="editUser.email"
            type="email"
            placeholder="البريد الإلكتروني"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          />
          <input
            v-model="editUser.phone"
            type="text"
            placeholder="رقم الهاتف"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          />
        </div>

        <div class="mt-6 flex justify-between">
        
          <button
            @click="saveToServer"
            class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        
            >
             حفظ
          </button>
          <button
            @click="openModal = false"
            class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profileImg from '@/assets/profile.png';
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import axios from 'axios';
import AuthService from '../../services/auth.service';
const orders = ref([]); // الطلبات
const selectedOrder = ref(null); // الطلب المعروض في المودال
const showOrderModal = ref(false);
const starlinkOrders = ref([]);

const showStarlinkModal = ref(false);
const selectedStarlink = ref(null);

const imageModalUrl = ref('');
function openImageModal(url) {
  imageModalUrl.value = url;
}
onMounted(() => {
  fetchStarlinkOrders();
});
function getStarlinkStatusClass(status) {
  switch (status) {
    case 'قيد المعالجة':
      return 'bg-yellow-100 text-yellow-800';
    case 'تم الحل':
      return 'bg-green-100 text-green-800';
    case 'مرفوض':
      return 'bg-red-100 text-red-800';
    case 'مغلق':
      return 'bg-gray-200 text-gray-800';
    default:
      return 'bg-blue-100 text-blue-800'; // حالات أخرى
  }
}
function translateStatus(status) {
  const map = {
    'pending': 'قيد المعالجة',
    'resolved': 'تم الحل',
    'rejected': 'مرفوض',
    'closed': 'مغلق'
  };
  return map[status] || status;
}

function viewStarlinkOrder(order) {
  selectedStarlink.value = order;
  showStarlinkModal.value = true;
}

function translateIssueType(type) {
  const map = {
    lostEmail: 'فقد الإيميل',
    disabledAccount: 'الحساب معطل',
    unauthorizedSource: 'الشراء من مصدر غير مصرح',
    stoppedWithID: 'موقوف - مع وجود هوية',
    noID: 'موقوف - بدون هوية',
    fine: 'مشكلة غرامة',
    other: 'مشكلة أخرى'
  };
  return map[type] || 'غير معروف';
}
async function fetchStarlinkOrders() {
  try {
    const stored = JSON.parse(localStorage.getItem('user'));
    const token = stored?.token;
     console.log("🚀 Fetching Starlink orders with token:", token);
    //  console.log("🛠️ Fetching Starlink orders with token:", stored);
    
    const res = await axios.get(`https://prostoreserver.onrender.com/api/starlink/user-orders/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    
    });
    const data =  res.data;
    starlinkOrders.value = data;
  } catch (err) {
    console.error("خطأ في تحميل طلبات Starlink:", err);
  }
}

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('user'));
  if (!stored?.user) {
    router.push('/login'); // التوجيه لصفحة تسجيل الدخول إذا لم يوجد مستخدم
    return;
  }

  user.value = { ...stored.user };
  editUser.value = { ...stored.user };
});
onMounted(async () => {
  const stored = JSON.parse(localStorage.getItem('user'));
  if (stored?.user) {
    user.value = { ...stored.user };
    editUser.value = { ...stored.user };

    // نحاول هنا جلب الطلبات - افترض وجود خدمة طلبات
    try {
      const res = await fetch(`https://prostoreserver.onrender.com/api/preferences/user/${stored.user.id}`);
      const data = await res.json();
      orders.value = data;
    } catch (err) {
      console.error("خطأ في تحميل الطلبات:", err);
    }
  }
});
function viewOrder(order) {
  selectedOrder.value = order;
  showOrderModal.value = true;
}

const openModal = ref(false);
const user = ref({
  name: '',
  email: '',
  phone: ''
});

const editUser = ref({
  name: '',
  email: '',
  phone: ''
});

onMounted(() => {
    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored?.user) {
    user.value = { ...stored.user };
    editUser.value = { ...stored.user };
  }
});


async function saveToServer() {
  try {
    console.log('Saving user data to server...');
    const response = await AuthService.updateProfile(editUser.value, token);
    let token = ''
    // حفظ البيانات الجديدة في localStorage
    const stored = JSON.parse(localStorage.getItem('user'));
    stored.user = response.data.user;
    localStorage.setItem('user', JSON.stringify(stored));

    user.value = { ...response.data.user };
    editUser.value = { ...response.data.user };
    openModal.value = false;
  } catch (error) {
    alert(error.response?.data?.msg || 'حدث خطأ أثناء التحديث');
  }
}


// function saveToLocalStorage() {
//   const stored = JSON.parse(localStorage.getItem('user'));
//   if (stored?.user) {
//     stored.user = { ...editUser.value };
//     localStorage.setItem('user', JSON.stringify(stored));
//     user.value = { ...editUser.value };
//     openModal.value = false;
//   } else {
//     alert('لا يمكن تحديث البيانات - لم يتم العثور على المستخدم.');
//   }
// }
</script>


<style>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.1); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fadeIn 2s ease-out;
}
</style>
