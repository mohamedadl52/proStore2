<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-6">تواصل معنا</h1>

      <p class="text-center text-gray-700 text-lg mb-6 leading-relaxed">
        يسعدنا في <span class="text-blue-700 font-semibold">Pro Store</span> — المتجر السوداني الأول للمنتجات الرقمية — أن نكون دائمًا في خدمتك. إذا كان لديك أي استفسار أو طلب، لا تتردد في التواصل معنا عبر الطرق التالية:
      </p>

      <!-- وسائل التواصل -->
      <div class="mb-8 space-y-3 text-right">
        <p class="text-gray-800">
          📞 <strong>للمكالمات:</strong>
          <a href="tel:0907452551" class="text-blue-600 hover:underline">0907452551</a>
        </p>
        <p class="text-gray-800">
          💬 <strong>واتساب:</strong>
          <a
            href="https://wa.me/249907452551"
            target="_blank"
            class="text-green-600 hover:underline"
          >اضغط هنا للتواصل عبر واتساب</a>
        </p>
        <p class="text-gray-800">
          📬 <strong>تلجرام:</strong>
          <a
            href="https://t.me/MhmdAdl52"
            target="_blank"
            class="text-blue-500 hover:underline"
          >t.me/MhmdAdl52</a>
        </p>
      </div>

      <!-- نموذج التواصل -->
      <form
        action="https://formsubmit.co/mhmdadl5252@gmail.com"
        method="POST"
        class="space-y-6"
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
          <input
            type="text"
            name="name"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="أدخل اسمك الكامل"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            required
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
          <textarea
            name="message"
            required
            rows="5"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="اكتب رسالتك هنا..."
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            إرسال الرسالة
          </button>
        </div>

        <!-- إعدادات formsubmit -->
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value="شكرًا لتواصلك معنا! سنرد عليك قريبًا." />
      </form>
    </div>
  </div>
</template>

<script setup>
// لا حاجة لجافاسكربت هنا
</script>

<style scoped>
/* تنسيقات إضافية إذا رغبت */
</style>
