<template>
  <div class="h-screen flex items-start mt-32 lg:mt-0 lg:items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-center text-3xl font-extrabold text-gray-800 mb-6">تسجيل الدخول</h1>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" dir="rtl" class="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
          <input type="email" v-model="email" id="email" required
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <div>
          <label for="password" dir="rtl" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
          <input type="password" v-model="password" id="password" required
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
        <button type="submit"
          class="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          تسجيل الدخول
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        ليس لديك حساب؟ <a href="/signup" class="text-blue-600 hover:underline">إنشاء حساب جديد</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        if (!this.email || !this.password) {
          alert('يرجى إدخال البريد وكلمة المرور');
          return;
        }

        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        });

        alert('تم تسجيل الدخول بنجاح!');
        this.$router.push('/profile'); // غيّرها لمسار الصفحة الرئيسية أو لوحة التحكم

      } catch (error) {
        console.error('فشل تسجيل الدخول:', error);
        alert('فشل تسجيل الدخول. تأكد من صحة البيانات.');
      }
    }
  }
};
</script>
