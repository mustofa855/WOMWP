<template>
    <div class="vendor-list-container flex flex-wrap justify-center">
      <div v-for="vendor in vendors" :key="vendor.id" class="vendor-card border rounded-lg p-4 m-4 w-64">
        <!-- Gambar dengan ukuran yang sama menggunakan Tailwind CSS -->
        <img :src="vendor.image" :alt="vendor.name" class="w-64 h-28 object-cover rounded mb-4">
        <h3 class="text-lg font-semibold">{{ vendor.name }}</h3>
        <p class="text-sm text-gray-700">{{ vendor.description }}</p>
        <button @click="viewVendorDetails" class="mt-4 bg-gray-800 hover:bg-gray-500 text-white hover:text-black px-4 py-2 rounded duration-200">Lihat Detail</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vendors: [
          { 
            id: 1, 
            name: 'MUA', 
            description: 'Make Up Artist terbaik untuk hari spesial Anda.', 
            image: require('../assets/images/wedding1.jpg') 
          },
          { 
            id: 2, 
            name: 'Musik', 
            description: 'Berbagai pilihan musik untuk memeriahkan acara.', 
            image: require('../assets/images/wedding2.jpg') 
          },
          { 
            id: 3, 
            name: 'Catering', 
            description: 'Hidangan lezat untuk tamu undangan Anda.', 
            image: require('../assets/images/wedding3.jpg') 
          },
          { 
            id: 4, 
            name: 'Fotografer', 
            description: 'Dokumentasi pernikahan Anda dalam foto berkualitas.', 
            image: require('../assets/images/wedding4.jpg') 
          }
        ]
      }
    },
    methods: {
      viewVendorDetails(id) {
        this.$router.push(`/pelanggan/vendor`)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tidak ada gaya kustom yang diperlukan di sini karena kita menggunakan Tailwind CSS */
  </style>
  