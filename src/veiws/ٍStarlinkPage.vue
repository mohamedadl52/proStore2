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
      <div v-if="currentContent === 'solveProblems'">
        <p>مرحبًا بك في حل مشاكل استارلنك. يمكنك الآن حل جميع المشاكل المتعلقة بالخدمة بسهولة.</p>
        <ul>
          <li>حل مشكلة الاتصال بالإنترنت</li>
          <li>إعادة ضبط الجهاز</li>
          <li>تحديث البرنامج الثابت</li>
          <li>المساعدة في إعدادات الشبكة</li>
        </ul>
      </div>

      <div v-if="currentContent === 'activateStarlink'">
        <p class="text-gray-500 font-mono mx-4">سعر التنشيط الجديد نفس سعر دفع الفاتورة + 15 ألف جنيه رسوم خدمة</p>

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
        </div>

        <div v-else>
          <p style="color: #FF4500; margin-top: 20px;">يرجى اختيار دولة لعرض البيانات.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "StarlinkPage",
  components: { ActionButton },
  data() {
    return {
      currentContent: null,
      selectedCountryData: null,
      exchangeRates: null,
      userCurrencyValue: 0,
      valueInputMode: "", // "manual" أو القيمة الافتراضية
      priceNow: 2730,
    };
  },
  computed: {
    priceInUSD() {
      if (!this.selectedCountryData || !this.userCurrencyValue) return 0;
      return parseFloat(this.userCurrencyValue) / this.selectedCountryData.primaryprice;
    },
    priceWithVisaFee() {
      const usd = this.priceInUSD;
      const fee = usd * 0.012;
      const feevisa = (usd + fee) * 0.012;
      return (usd + fee + feevisa).toFixed(2);
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
    showContent(contentType) {
      this.currentContent = contentType;
    },
    async fetchExchangeRates() {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/b2226415c4d0021ac319a464/latest/USD');
        const data = await response.json();
        this.exchangeRates = data.conversion_rates;
      } catch (error) {
        console.error("فشل في جلب بيانات العملات:", error);
        alert("تعذر تحميل أسعار الصرف. حاول لاحقًا.");
      }
    },
    handleCountryChange(event) {
      const value = event.target.value;

      const countryMap = {
        european: { name: "أوروبي", currency: "EUR", defaultValue: 72 },
        malawi: { name: "ملاوي", currency: "MWK", defaultValue: 170000 },
        nigeria: { name: "نيجيري", currency: "NGN", defaultValue: 49000 },
        zambia: { name: "زامبي", currency: "ZMW", defaultValue: 0 },
        rwanda: { name: "رواندي", currency: "RWF", defaultValue: 128000 },
        japan: { name: "ياباني", currency: "JPY", defaultValue: 14400 },
      };

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
    }
  },
  mounted() {
    this.fetchExchangeRates();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap');

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
