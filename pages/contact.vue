<template>
  <div class="contact-page">
    <h1 class="text-3xl font-semibold mb-6 text-center">Hubungi Kami</h1>
    <p class="text-lg text-center mb-8">Jika Anda memiliki pertanyaan atau ingin menyampaikan sesuatu, silakan isi form
      di bawah ini:</p>

    <form @submit.prevent="sendToWhatsApp" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
        <input v-model="name" type="text" id="name"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="email" type="email" id="email"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
      </div>

      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Pesan / Pertanyaan</label>
        <textarea v-model="message" id="message" rows="4"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required></textarea>
      </div>

      <div class="text-center">
        <button type="submit" class="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-500">Kirim
          Pesan</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'umum',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendToWhatsApp() {
      const url = `https://api.whatsapp.com/send?phone=6285847395980&text=Nama: ${encodeURIComponent(this.name)}%0AEmail: ${encodeURIComponent(this.email)}%0APesan: ${encodeURIComponent(this.message)}`;
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  background-color: #f8f9fa;
}

form {
  background-color: white;
}

button {
  transition: background-color 0.3s ease;
}
</style>
