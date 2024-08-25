<template>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar dan konten utama -->
      <Navbar />
      
      <!-- Ini akan menampilkan konten dari halaman yang berbeda -->
      <main class="flex-grow">
        <Nuxt /> <!-- Ganti NuxtLayout dengan Nuxt untuk menampilkan konten halaman -->
      </main>
  
      <!-- Footer di bagian bawah -->
      <footer class="text-center p-4 bg-gray-800 text-white">
        © 2024 MWP. All rights reserved.
      </footer>
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  </script>
  
  <style scoped>
  footer {
    background-color: #333;
  }
  </style>
  