<template>
  <div class="starlink-page">
    <h1 class="logo cairo-text uppercase">Starlink</h1>

    <!-- الأزرار -->
    <div class="flex justify-center mb-10 gap-x-4 items-center" style="padding: 20px; border-radius: 10px;">    
      <ActionButton
        class="cairo-test"
        :background-color="'#FF4500'"
        :label="'حل مشاكل استارلنك'"
        @click="showContent('solveProblems')"
      />

      <ActionButton
        class="cairo-test"
        :background-color="'#1E90FF'"
        :label="'تنشيط استارلنك (جديد - دفع فواتير)'"
        @click="showContent('activateStarlink')"
      />

    </div>

    <!-- المحتوى الديناميكي -->
    <div class="content-section">
      <!-- قسم حل المشاكل -->
       <div v-if="currentContent === 'solveProblems'">
        <p>مرحبًا بك في حل مشاكل استارلنك. يمكنك الآن حل جميع المشاكل المتعلقة بالخدمة بسهولة.</p>

        <div class="bg-white mt-6 p-6 rounded-xl shadow-md border max-w-xl mx-auto text-right" style="direction: rtl;">
          <h3 class="text-lg font-bold mb-4 text-green-700">اختر نوع المشكلة:</h3>

          <select v-model="selectedIssue" class="styled-select mb-4">
            <option disabled value="">-- اختر المشكلة --</option>
            <option value="lostEmail">مشكلة فقد الإيميل</option>
            <option value="disabledAccount">User Disabled / الحساب معطل</option>
            <option value="unauthorizedSource">تم الشراء من مصدر غير مصرح به</option>
            <option value="stoppedWithID">الحساب متوقف بسبب الهوية (مع وجود الهوية)</option>
            <option value="noID">الحساب متوقف بسبب الهوية (لا توجد هوية)</option>
            <option value="fine"> مشكله الغرامة </option>
    
            <option value="other">مشكلة أخرى</option>
    
          </select>

          <div v-if="selectedIssue">
            <div v-if="selectedIssue === 'noID' || selectedIssue === 'stoppedWithID' || selectedIssue === 'fine'">
              <label class="block mb-2 font-medium">البريد الإلكتروني:</label>
              <input type="email" v-model="issueForm.email" class="w-full p-2 border rounded mb-4" placeholder="example@email.com" />

              <label class="block mb-2 font-medium">كلمة المرور:</label>
              <input type="password" v-model="issueForm.password" class="w-full p-2 border rounded mb-4" placeholder="••••••••" />
            </div>
            
            <div v-else>
              <label class="block mb-2 font-medium">الاسم الكامل:</label>
              <input type="text" v-model="issueForm.fullName" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">البريد الإلكتروني:</label>
              <input type="email" v-model="issueForm.email" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">العنوان:</label>
              <input type="text" v-model="issueForm.address" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">رقم الهاتف:</label>
              <input type="text" v-model="issueForm.phone" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">رقم الحساب (ACC):</label>
              <input type="text" v-model="issueForm.accountNumber" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">رقم الطبق:</label>
              <input type="text" v-model="issueForm.dishNumber" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">Kit Number:</label>
              <input type="text" v-model="issueForm.kitNumber" class="w-full p-2 border rounded mb-4" />

              <label class="block mb-2 font-medium">Starlink ID:</label>
              <input type="text" v-model="issueForm.starlinkID" class="w-full p-2 border rounded mb-4" />
            </div>

            <label class="block mb-2 font-medium">شرح المشكلة بالتفصيل:</label>
            <textarea v-model="issueForm.details" rows="4" class="w-full p-3 border rounded mb-4" placeholder="اكتب تفاصيل المشكلة هنا..."></textarea>
<!-- صورة الهوية -->
<div>
  <label>📄 صورة الهوية:</label>
  <input type="file" @change="e => handleImageUpload(e, 'identity')" />
  <img v-if="identityImageUrl" :src="identityImageUrl" alt="هوية" style="max-width: 100px; margin-top: 5px;" />
</div>

<!-- صورة الفاتورة -->
<div>
  <label>📄 صورة الفاتورة:</label>
  <input type="file" @change="e => handleImageUpload(e, 'invoice')" />
  <img v-if="invoiceImageUrl" :src="invoiceImageUrl" alt="فاتورة" style="max-width: 100px; margin-top: 5px;" />
</div>

<!-- صورة الطبق -->
<div>
  <label>📡 صورة الطبق:</label>
  <input type="file" @change="e => handleImageUpload(e, 'dish')" />
  <img v-if="dishImageUrl" :src="dishImageUrl" alt="طبق" style="max-width: 100px; margin-top: 5px;" />
</div>

<!-- صورة الفيزا -->
<div>
  <label>💳 صورة الفيزا:</label>
  <input type="file" @change="e => handleImageUpload(e, 'visa')" />
  <img v-if="visaImageUrl" :src="visaImageUrl" alt="فيزا" style="max-width: 100px; margin-top: 5px;" />
</div>

<button @click="submitIssue"
  :disabled="submitting"
  class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded shadow-md transition flex items-center justify-center gap-2">
  <span v-if="!submitting">إرسال المشكلة</span>
  <span v-else class="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
</button>
          </div>
        </div>
      </div>



      <!-- قسم تنشيط Starlink -->
      <div v-if="currentContent === 'activateStarlink'">
        <p class="text-gray-500 font-mono mx-4">سعر التنشيط الجديد نفس سعر دفع الفاتورة + 15 ألف جنيه رسوم خدمة</p>

        <!-- تحميل -->
        <div v-if="loading" class="text-center my-4 text-green-600 font-bold">جاري تحميل أسعار الصرف...</div>

        <div class="country-selector mx-2" style="margin-top: 20px; text-align: right; direction: rtl;">
          <label for="country" class="selector-label" style="font-size: 1.2rem; font-weight: bold; color: #4CAF50;">
            اختر الدولة
          </label>
          <select id="country" class="styled-select" @change="handleCountryChange">
            <option disabled selected>-- اختر --</option>
            <option value="european">أوروبي</option>
            <option value="malawi">ملاوي</option>
            <option value="nigeria">نيجيري</option>
            <option value="zambia">زامبي</option>
            <option value="rwanda">رواندي</option>
            <option value="japan">ياباني</option>
          </select>
        </div>

        <div class="mx-8 mb-32" v-if="selectedCountryData">
          <h3 style="color: #4CAF50; margin-top: 20px;">بيانات الدولة المختارة</h3>
          <ul style="text-align: right; direction: rtl;">
            <li><strong>اسم الدولة:</strong> {{ selectedCountryData.name }}</li>
            <li><strong>العملة:</strong> {{ selectedCountryData.currency }}</li>
            <li><strong>السعر مقابل 1 دولار:</strong> {{ selectedCountryData.price }}</li>

            <div>
              <p>اختر أو أدخل قيمة العملة:</p>
              <select v-model="valueInputMode" @change="handleValueModeChange" class="styled-select" style="margin-bottom: 10px;">
                <option :value="selectedCountryData.defaultValue">{{ selectedCountryData.defaultValue }}</option>
                <option value="manual">إدخال يدوي</option>
              </select>

              <input
                type="number"
                v-model="userCurrencyValue"
                :readonly="valueInputMode !== 'manual'"
                placeholder="مثال: 1000"
                style="width: 100%; padding: 10px; font-size: 1rem; border: 1px solid #4CAF50; border-radius: 5px; margin-top: 10px;"
              />

              <p style="color: #FF4500; margin-top: 10px;">* الأسعار تتغير حسب سعر الصرف الحالي.</p>
            </div>

            <li><strong>السعر بالدولار:</strong> {{ priceInUSD.toFixed(2) }}</li>
            <li><strong>السعر بالدولار (شامل رسوم الفيزا):</strong> {{ priceWithVisaFee }}</li>
            <li><strong>سعر الصرف اليوم:</strong> {{ priceNow }} جنيه</li>
            <li><strong>السعر بالجنيه:</strong> {{ totalPriceInSDG }} جنيه</li>
          </ul>

          <div class="final-price">
            <p>السعر النهائي شامل ربح %7:</p>
            <h2 class="final-price-text">{{ finalPriceWithProfit }} جنيه</h2>
          </div>

          <!-- زر الموافقة -->
          <div class="mt-6 text-center">
            <button @click="showForm = true"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-md transition">
              أوافق على التسديد
            </button>
          </div>

          <!-- فورم البيانات -->
          <div v-if="showForm" class="bg-white mt-6 p-6 rounded-xl shadow-md border max-w-xl mx-auto text-right" style="direction: rtl;">
            <h3 class="text-lg font-bold mb-4 text-green-600">بيانات الجهاز المطلوبة للتنشيط</h3>

            <div class="mb-4">
              <label class="block mb-1 font-medium">البريد الإلكتروني المستخدم في Starlink:</label>
              <input type="email" v-model="deviceData.email"
                     class="w-full p-2 border rounded" placeholder="example@email.com" />
            </div>

            <div class="mb-4">
              <label class="block mb-1 font-medium">كلمة المرور:</label>
              <input type="password" v-model="deviceData.password"
                     class="w-full p-2 border rounded" placeholder="••••••••" />
            </div>

            <button @click="submitDeviceData"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition">
              إرسال الطلب
            </button>

            <p class="mt-4 text-red-600 font-semibold">
              ⚠️ يجب البقاء في هذه الصفحة لحين إرسال كود OTP إلى بريدك الإلكتروني، ثم إرسال الكود للإدارة لإكمال التنشيط.
            </p>
          </div>
        </div>

        <div v-else-if="!loading">
          <p style="color: #FF4500; margin-top: 20px; font-weight: bold;">
            الرجاء اختيار الدولة لعرض الأسعار والتفاصيل.
          </p>
        </div>
      </div>
    </div>
<!-- Modal النجاح -->
<div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
    <h2 class="text-lg font-bold mb-2 text-green-600">تم رفع الطلب بنجاح ✅</h2>
    <p class="mb-4">اذهب للصفحة الشخصية لرؤية الطلبات.</p>
    <button @click="goToProfile" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
      الذهاب للصفحة الشخصية
    </button>

  </div>
</div>

  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import axios from 'axios';


export default {
  name: "StarlinkPage",
  components: { ActionButton },
  data() {
    return {
      identityImage: null,
invoiceImage: null,
dishPhoto: null,
visaPhoto: null,
 submitting: false, // ← جديد
showSuccessModal: false,

identityImageUrl: '',    
invoiceImageUrl: '',
dishImageUrl: '',
visaImageUrl: '',
      selectedImage: null,
      currentContent: null,
      selectedCountryData: null,
      exchangeRates: null,
      userCurrencyValue: 0,
      valueInputMode: "",
      priceNow: 2730,
      userId: 'test', // لتخزين معرف المستخدم الحالي

      issueForm: {
        fullName: '',
        email: '',
        address: '',
        phone: '',
        accountNumber: '',
        dishNumber: '',
        kitNumber: '',
        starlinkID: '',
        password: '',
          userId: ''  ,
        details: ''
      },
      loading: false,
      showForm: false,
      deviceData: {
        email: '',
        password: '',
      },
      // بيانات قسم حل المشاكل

      selectedIssue: '',
      issueDetails: '',
    
    };
  },
  computed: {
    priceInUSD() {
      if (!this.selectedCountryData || !this.userCurrencyValue || this.selectedCountryData.primaryprice === 0)
        return 0;
      return parseFloat(this.userCurrencyValue) / this.selectedCountryData.primaryprice;
    },
    priceWithVisaFee() {
      const usd = this.priceInUSD;
      const totalWithFee = usd * 1.024;
      return totalWithFee.toFixed(2);
    },
    totalPriceInSDG() {
      return (this.priceNow * this.priceInUSD + 1).toFixed(0);
    },
   
    finalPriceWithProfit() {

      const base = parseFloat(this.totalPriceInSDG);
      const profit = base * 0.07;
      return Math.round(base + profit);
   
    }
  },
  methods: {
      goToProfile() {
    this.showSuccessModal = false;
    // غيّر الرابط حسب صفحتك
    window.location.href = '/profile';
  },

  // دالة إغلاق المودال فقط
  closeModal() {
    this.showSuccessModal = false;
  },
  handleImageUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "prostore");

axios.post("https://api.cloudinary.com/v1_1/dekh1kgki/image/upload", formData)
    .then(response => {
      const url = response.data.secure_url;

      switch (type) {
        case 'identity':
          this.identityImage = file;
          this.identityImageUrl = url;
          break;
        case 'invoice':
          this.invoiceImage = file;
          this.invoiceImageUrl = url;
          break;
        case 'dish':
          this.dishPhoto = file;
          this.dishImageUrl = url;
          break;
        case 'visa':
          this.visaPhoto = file;
          this.visaImageUrl = url;
          break;
      }
    })
    .catch(error => {
      alert("❌ فشل رفع الصورة: " + error.message);
    });
}

 ,
      showContent(contentType) {
      this.currentContent = contentType;
    },
    submitIssuepro() {
      alert("✅ تم إرسال بيانات المشكلة بنجاح.");
      // إعادة تعيين الحقول بعد الإرسال
      this.selectedIssue = '';
      this.issueForm = {
        fullName: '',
        email: '',
        address: '',
        phone: '',
        accountNumber: '',
        dishNumber: '',
        kitNumber: '',
        starlinkID: '',
        password: '',
        details: '' , 
        userId: ''
      };
    },
 
    async fetchExchangeRates() {
      this.loading = true;
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/b2226415c4d0021ac319a464/latest/USD');
        const data = await response.json();
        this.exchangeRates = data.conversion_rates;
      } catch (error) {
        console.error("فشل في جلب بيانات العملات:", error);
        alert("تعذر تحميل أسعار الصرف. حاول لاحقًا.");
      } finally {
        this.loading = false;
      }
    },
    handleCountryChange(event) {
      const value = event.target.value;
      const countryMap = {
        european: { name: "أوروبي", currency: "EUR", defaultValue: 72 },
        malawi: { name: "ملاوي", currency: "MWK", defaultValue: 170000 },
        nigeria: { name: "نيجيري", currency: "NGN", defaultValue: 49000 },
        zambia: { name: "زامبي", currency: "ZMW", defaultValue: 2500 },
        rwanda: { name: "رواندي", currency: "RWF", defaultValue: 128000 },
        japan: { name: "ياباني", currency: "JPY", defaultValue: 14400 },
      }
      const countryData = countryMap[value];
      if (countryData && this.exchangeRates) {
        const rate = this.exchangeRates[countryData.currency] || 1;
        const localPrice = (1 * rate).toFixed(2);
        this.selectedCountryData = {
          name: countryData.name,
          currency: countryData.currency,
          primaryprice: rate,
          price: `${localPrice} ${countryData.currency}`,
          defaultValue: countryData.defaultValue,
        };
        this.valueInputMode = countryData.defaultValue;
        this.userCurrencyValue = countryData.defaultValue;
      }
    },
    
    handleValueModeChange() {
      if (this.valueInputMode === "manual") return;
      const parsedValue = parseFloat(this.valueInputMode);
      if (!isNaN(parsedValue)) {
        this.userCurrencyValue = parsedValue;
      }
    },
submitDeviceData() {
      if (!this.deviceData.email || !this.deviceData.password) {
        alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
        return;
      }
      console.log("📤 إرسال بيانات التنشيط:", this.deviceData);
      alert("✅ تم إرسال بيانات الجهاز بنجاح. يرجى انتظار كود OTP على بريدك.");
      this.showForm = false;
    },
    async uploadImageToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "starlink_user");

  try {
    const response = await axios.post("https://api.cloudinary.com/v1_1/dzlvam6es/image/upload", formData);
    return response.data.secure_url;
  } catch (error) {
    console.error("❌ خطأ في رفع الصورة:", error);
    throw new Error("فشل رفع الصورة");
  }
} ,
async submitIssue() {
  if (!this.selectedIssue) {
    alert("يرجى اختيار نوع المشكلة.");
    return;
  }
  this.submitting = true; // ← ابدأ التحميل

  const issueType = this.selectedIssue;
  this.issueForm.userId = this.userId;  // ✅ ضعه هنا

  const form = this.issueForm;

  let requiredFields = ['details'];
  if (issueType === 'noID' || issueType === 'stoppedWithID' || issueType === 'fine') {
    requiredFields.push('email', 'password', 'userId');
  } else {
    requiredFields.push(
      'fullName', 'email', 'address', 'phone',
      'accountNumber', 'dishNumber', 'kitNumber', 'starlinkID', 'userId'
    );
  }
console.log("Loaded userId:", this.userId);

const isValid = requiredFields.every(field => form[field]);
console.log("🛠️ القيم الناقصة:", requiredFields.filter(field => !form[field]));

  if (!isValid) {
    alert("يرجى تعبئة جميع الحقول المطلوبة.");
    return;
  }

  if (this.identityImage && !this.identityImageUrl) {
  this.identityImageUrl = await this.uploadImageToCloudinary(this.identityImage);
}
if (this.invoiceImage && !this.invoiceImageUrl) {
  this.invoiceImageUrl = await this.uploadImageToCloudinary(this.invoiceImage);
}
if (this.dishPhoto && !this.dishImageUrl) {
  this.dishImageUrl = await this.uploadImageToCloudinary(this.dishPhoto);
}
if (this.visaPhoto && !this.visaImageUrl) {
  this.visaImageUrl = await this.uploadImageToCloudinary(this.visaPhoto);
}



  const payload = {
    issueType,
    ...form ,
      identityImageUrl: this.identityImageUrl,
      invoiceImageUrl: this.invoiceImageUrl,
      dishImageUrl: this.dishImageUrl,
      visaImageUrl: this.visaImageUrl
  };
console.log("📤 إرسال بيانات المشكلة:", payload);
  axios.post("https://prostoreserver.onrender.com/api/starlink/submit-issue", payload)
    .then(() => {
        this.submitting = false; // ← أنهي التحميل في كل الأحوال
      this.showSuccessModal = true;

      // this.$router.push('/profile'); // إعادة التوجيه إلى الصفحة الرئيسية
     
    
    })
    .catch(error => {
      alert("❌ حدث خطأ أثناء إرسال البيانات." , error.message);
      this.submitting = false; // ← أنهي التحميل عند الخطأ أيضًا
    });

    const storedUser = JSON.parse(localStorage.getItem('user'));

const userName = storedUser?.user?.name || 'العميل';
const userPhone = storedUser?.user?.phone || 'رقم غير متوفر';
const number = '24990752552';  // رقم الهاتف بصيغة دولية
 const message = `
  طلب جديد من ${userName} (رقم الهاتف: ${userPhone}):
    نوع المشكلة: ${this.selectedIssue}
    الاسم الكامل: ${this.issueForm.fullName}
    البريد الإلكتروني: ${this.issueForm.email}
    كلمه السر : ${this.issueForm.password}
    الهاتف: ${this.issueForm.phone}
    العنوان: ${this.issueForm.address}
    رقم الحساب: ${this.issueForm.accountNumber}
    رقم الطبق: ${this.issueForm.dishNumber}
    Kit Number: ${this.issueForm.kitNumber}
    Starlink ID: ${this.issueForm.starlinkID}
    التفاصيل: ${this.issueForm.details}
  `;
const mediaUrl = 'https://i.pravatar.cc/300';
const filename = 'avatar.jpg';
const instanceId = '686A14D507595';
const accessToken = '657747e37e629';

const url = `https://waclient.com/api/send?number=${number}&type=media&message=${encodeURIComponent(message)}&media_url=${encodeURIComponent(mediaUrl)}&filename=${filename}&instance_id=${instanceId}&access_token=${accessToken}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('تم الإرسال:', data);
  })
  .catch(error => {
    console.error('خطأ في الإرسال:', error);
  });

}


  },  
  mounted() {
    this.fetchExchangeRates();
    const stored = localStorage.getItem('user');
    if (stored) {
      // console.log("🛠️ LocalStorage user:", stored);
      const user = JSON.parse(stored);
      console.log("🛠️ Loaded userId:", user);
  if (user && user.user && user.user.id) {
    this.userId = user.user.id;
  }
} else {

  this.$router.push('/login')

} 

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap");
.starlink-page {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

}
.logo {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}
.cairo-test {
  font-family: "Cairo", sans-serif;
  font-weight: 800;
}
.content-section {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}
.styled-select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  background-color: #f0f9f0;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.final-price {
  text-align: center;
  margin-top: 30px;
}
.final-price-text {
  font-size: 2rem;
  color: #27ae60;
  font-weight: bold;
  background-color: #e8f5e9;
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
}
</style>
