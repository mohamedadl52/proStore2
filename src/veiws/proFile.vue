<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-4">الملف الشخصي</h1>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <!-- صورة المستخدم -->
        <img
          src="https://via.placeholder.com/100"
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
import { ref, onMounted } from 'vue';
import AuthService from '../../services/auth.service';

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
