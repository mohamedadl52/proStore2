<template>
    <div class="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 class="text-3xl font-bold mb-6 text-center">اختيار الرغبات الجامعية</h1>
    <!-- 🔔 تنبيهات وتعليمات -->
<div class="bg-red-100 border border-red-400 text-red-800 p-4 rounded mb-6 text-sm leading-relaxed">
  <ul class="list-disc pr-4 text-right space-y-2">
    <li>⚠️ <strong>في حال تم استخراج رقم الاستمارة:</strong> الرجاء عدم تقديم طلب جديد، وتواصل معنا بدلاً من ذلك.</li>
    <li>📞 <strong>اكتب رقم هاتف صحيح:</strong> يفضل أن يكون مفعّل به واتساب إذا لم يكن يعمل للمكالمات.</li>
    <li>🚫 <strong>الاستمارة المقدمة لا يمكن تعديلها أو التراجع عنها:</strong> إذا كان هناك خطأ، تواصل معنا قبل اكمال عمليه التقديم ".</li>
    <li>💵 <strong>الدفع ورفع شعار بنكك:</strong> يتم بالتزامن مع التقديم وبعد التأكيد نبدأ العمل مباشرة.</li>
    <li>📌 <strong>مراحل الطلب:</strong> 
      <ul class="list-disc pr-4 mt-1 text-gray-700 text-sm">
        <li><strong>جاري الفحص:</strong> الطلب تحت المراجعة الأولية.</li>
        <li><strong>جاري الطلب:</strong> الطلب قيد التنفيذ والتقديم.</li>
        <li><strong>تم الطلب:</strong> تم إكمال التقديم بنجاح.</li>
        <li><strong>مرفوض:</strong> لم يتم قبول الطلب (راجع السبب مع المسؤول).</li>
      </ul>
    </li>
  </ul>
</div>
<!-- 📞 طرق التواصل -->
<div class="bg-green-50 border border-green-400 text-green-800 p-4 rounded mb-6 text-sm leading-relaxed">
  <p class="mb-2 font-semibold">للاستفسارات أو وجود أي مشكلة يمكنك التواصل معنا عبر:</p>
  <div class="flex flex-col md:flex-row gap-4 rtl:space-x-reverse">
    <!-- زر واتساب -->
    <a
      href="https://wa.me/249907452551"
      target="_blank"
      class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center w-full md:w-auto"
    >
      💬 واتساب: 0907452551
    </a>

    <!-- زر تيليجرام -->
    <a
      href="https://t.me/MhmdAdl52"
      target="_blank"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center w-full md:w-auto"
    >
      📬 تيليجرام: @MhmdAdl52
    </a>

    <!-- زر مكالمة -->
    <a
      href="tel:+249907452551"
      class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 text-center w-full md:w-auto"
    >
      📞 اتصال مباشر: 0907452551
    </a>
  </div>
</div>


      <div class="mb-4">
  <label class="block mb-2 font-medium">اسم الطالب:</label>
  <input v-model="studentName" type="text" class="p-2 border rounded w-full" placeholder="أدخل اسمك" />
</div>

<!-- رقم الهاتف -->
<div class="mb-4">
  <label class="block mb-2 font-medium">رقم الهاتف:</label>
  <input v-model="studentPhone" type="text" class="p-2 border rounded w-full" placeholder="أدخل رقم الهاتف" />
</div>

<!-- رقم الجلوس -->
<div class="mb-4">
  <label class="block mb-2 font-medium">رقم الجلوس:</label>
  <input v-model="studentSeatNumber" type="text" class="p-2 border rounded w-full" placeholder="أدخل رقم الجلوس" />
</div> 
      <!-- اختيار الجامعة -->
      <div class="mb-4">
        <label class="block mb-2 font-medium">اختر الجامعة:</label>
        <select v-model="selectedUniversity" @change="fetchFaculties" class="p-2 border rounded w-full">
          <option disabled value="">-- اختر جامعة --</option>
          <option v-for="university in universities" :key="university.name" :value="university.name">
            {{ university.name }}
          </option>
        </select>
      </div>
  
      <!-- اختيار الكلية -->
      <div v-if="faculties.length" class="mb-4">
        <label class="block mb-2 font-medium">اختر الكلية:</label>
        <select v-model="selectedFaculty" class="p-2 border rounded w-full">
          <option disabled value="">-- اختر كلية --</option>
          <option v-for="faculty in faculties" :key="faculty" :value="faculty">
            {{ faculty }}
          </option>
        </select>
        <button
          @click="addPreference"
          class="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded"
          :disabled="!selectedFaculty || preferences.length >= 45"
        >
          إضافة
        </button>
        <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
      </div>
  
      <!-- جدول الرغبات -->
      <div v-if="preferences.length" class="mb-6">
        <h2 class="text-xl font-semibold mb-2">الرغبات المختارة:</h2>
        <table class="w-full table-auto border border-gray-300">
  <thead>
    <tr class="bg-gray-100">
      <th class="border p-2">#</th>
      <th class="border p-2">الجامعة</th>
      <th class="border p-2">الكلية</th>
      <th class="border p-2">تحريك</th>
      <th class="border p-2">حذف</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pref, index) in preferences" :key="index">
      <td class="border p-2 text-center">{{ index + 1 }}</td>
      <td class="border p-2">{{ pref.university }}</td>
      <td class="border p-2">{{ pref.faculty }}</td>

      <!-- أزرار التحريك -->
      <td class="border p-2 text-center space-x-1 rtl:space-x-reverse">
        <button
          @click="moveUp(index)"
          :disabled="index === 0"
          class="text-blue-600 disabled:opacity-30"
        >⬆️</button>
        <button
          @click="moveDown(index)"
          :disabled="index === preferences.length - 1"
          class="text-blue-600 disabled:opacity-30"
        >⬇️</button>
      </td>

      <!-- زر الحذف -->
      <td class="border p-2 text-center">
        <button @click="removePreference(index)" class="text-red-500">🗑️</button>
      </td>
    </tr>
  </tbody>
</table>

      </div>
  
      <!-- زر التقديم -->
      <!-- زر التقديم -->
      
<div v-if="preferences.length >= 2" class="text-center mt-4">
  <button
    @click="submitPreferences"
    class="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
  >
    تقديم
  </button>
</div>

    </div>
  </template>
  
  <script>
  import PreferenceService from '../../services/preference.service';

  import { jsPDF } from "jspdf";
  import { amiriBase64 } from "@/fonts/amiri"; // استدعاء الخط من ملف خارجي
  export default {
    mounted() {

},
watch: {
  preferences: {
    handler() {
      localStorage.setItem('studentPrefs', JSON.stringify({
        studentName: this.studentName,
        preferences: this.preferences
      }));
    },
    deep: true
  }
} ,
    data() {
      return {
            studentName: "",
    studentPhone: "",
    studentSeatNumber: "",
        universities: [
          {
            name: "جامعة الخرطوم",
            faculties: ["الطب", "الهندسة", "القانون", "الآداب"]
          },
          {
            name: "جامعة السودان",
            faculties: ["الحاسوب", "الإعلام", "العلوم", "الاقتصاد"]
          },
          {
            name: "جامعة الجزيرة",
            faculties: ["الزراعة", "الطب", "البيطرة", "الصيدلة"]
          }
        ],
        selectedUniversity: "",
        selectedFaculty: "",
        faculties: [],
        preferences: [],
        errorMessage: ""
      };
    },
    methods: {
      fetchFaculties() {
        const uni = this.universities.find(u => u.name === this.selectedUniversity);
        this.faculties = uni ? uni.faculties : [];
        this.selectedFaculty = "";
        this.errorMessage = "";
      },

   async   submitPreferences() {
  if (this.preferences.length < 1) {
    alert("يجب اختيار 10 رغبات على الأقل");
    return;
  }
  if (!this.studentName.trim()) {
    alert("الرجاء إدخال اسم الطالب.");
    return;
  }
  const stored = JSON.parse(localStorage.getItem('user'));
  const userId = stored?.user?.id;

  if (!userId) {
    alert("المستخدم غير مسجل الدخول.");
    return;
  }

  try {
    await PreferenceService.submit({
      studentName: this.studentName,
      phone: this.studentPhone,
      seatNumber: this.studentSeatNumber,
      preferences: this.preferences
    });

    alert("✅ تم إرسال الرغبات بنجاح إلى السيرفر!");
    this.preferences = [];
  } catch (error) {
    console.error("فشل الإرسال:", error);
    alert("حدث خطأ أثناء الإرسال. تأكد من الاتصال بالسيرفر.");
  }
  const doc = new jsPDF();

  // انسخ base64 للخط هنا
  

  // أضف الخط إلى jsPDF
  doc.addFileToVFS("Amiri-Regular.ttf", amiriBase64);
  doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  doc.setFont("Amiri");
  doc.setFontSize(14);

  // ✅ العنوان واسم الطالب
  doc.text("قائمة الرغبات الجامعية", 105, 20, { align: "center" , underline: true });
  const dateStr = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  doc.text(`التاريخ: ${dateStr}`, 10, 30, { align: "left" });
  doc.text(`اسم الطالب: ${this.studentName}`, 190, 30, { align: "right" });
  
  // ✅ الرغبات مع ترتيب صحيح
  let y = 50;
  this.preferences.forEach((pref, index) => {
      const num = `/${index + 1}`;
      const text = `${pref.university} - ${pref.faculty}`;
      

      doc.text(num, 180, y, { align: "right" });    // الرقم
      doc.text(text, 170, y, { align: "right" });   // النص
      y += 10;
      if (y > 280) {
          doc.addPage();
          y = 20;
        }
    });
    doc.setFontSize(12);
  doc.text("جاري التقديم راجع ملفك للحصول على الصورة النهائية.", 105, y + 10, { align: "center" });

  doc.save(`${this.studentName}.pdf`);
}

 ,
      addPreference() {
        this.errorMessage = "";
  
        const exists = this.preferences.some(
          pref => pref.university === this.selectedUniversity && pref.faculty === this.selectedFaculty
        );
  
        if (exists) {
          this.errorMessage = "تم اختيار هذه الكلية من قبل.";
          return;
        }
  
        if (this.preferences.length < 45) {
          this.preferences.push({
            university: this.selectedUniversity,
            faculty: this.selectedFaculty
          });
          this.selectedFaculty = "";
        }
      },
      removePreference(index) {
        this.preferences.splice(index, 1);
      },
      moveUp(index) {
        if (index > 0) {
          const temp = this.preferences[index];
          this.preferences.splice(index, 1);
          this.preferences.splice(index - 1, 0, temp);
        }
      },
      moveDown(index) {
        if (index < this.preferences.length - 1) {
          const temp = this.preferences[index];
          this.preferences.splice(index, 1);
          this.preferences.splice(index + 1, 0, temp);
        }
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: 'Cairo', sans-serif;
  }
  </style>
  