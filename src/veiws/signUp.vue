<template>
  <div>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-center text-3xl font-extrabold text-gray-800 mb-6 text-right">إنشاء حساب جديد</h1>
        <form @submit.prevent="signUp" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 text-right">الاسم</label>
            <input type="text" v-model="name" id="name" required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 text-right rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              dir="rtl">
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 text-right">رقم الهاتف</label>
            <input type="tel" v-model="phone" id="phone" required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 text-right">البريد الإلكتروني</label>
            <input type="email" v-model="email" id="email" required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 text-right">كلمة المرور</label>
            <input type="password" v-model="password" id="password" required
              class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>

          <button type="submit"
            class="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            إنشاء حساب
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600 text-right">
          لديك حساب بالفعل؟ <a href="/login" class="text-blue-600 hover:underline">تسجيل الدخول</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signUp() {
      try {
        if (!this.name || !this.phone || !this.email || !this.password) {
          alert('يرجى تعبئة جميع الحقول');
          return;
        }

        await this.$store.dispatch('auth/register', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password
        });

        this.name = '';
        this.phone = '';
        this.email = '';
        this.password = '';

        alert('تم إنشاء الحساب بنجاح!');
        this.$router.push('/dashboard');

      } catch (error) {
        console.error('فشل التسجيل:', error);
        alert(error.msg);
      }
    }
  }
};
</script>
