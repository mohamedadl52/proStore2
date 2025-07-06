<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4 text-center">📄 استخراج النص من ملف PDF</h2>

    <input type="file" accept="application/pdf" @change="uploadPDF" class="mb-4" />

    <p v-if="status" class="mb-2 text-sm text-blue-700">{{ status }}</p>

   <pre
  v-if="extractedText"
  class="font-arabic bg-gray-100 p-4 mt-4 text-sm overflow-auto max-h-[400px] whitespace-pre-wrap border rounded"
>
  {{ extractedText }}
</pre>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const status = ref('')
const extractedText = ref('')

async function uploadPDF(event) {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('pdf', file)

  status.value = '📤 جاري رفع الملف وتحليله...'
  extractedText.value = ''

  try {
    const res = await fetch('http://localhost:3000/api/pdf-ocr', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    if (res.ok) {
      status.value = '✅ تم استخراج النص بنجاح!'
      extractedText.value = data.text
    } else {
      status.value = '❌ فشل التحليل: ' + (data.msg || 'خطأ غير معروف')
    }
  } catch (err) {
    console.error(err)
    status.value = '❌ فشل الاتصال بالخادم'
  }
}
</script>
