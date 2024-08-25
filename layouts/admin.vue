<template>
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 class="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li class="mb-2">
              <nuxt-link to="/admin/dashboard" class="text-gray-300 hover:text-white">Dashboard</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/admin/users" class="text-gray-300 hover:text-white">Manage Users</nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/admin/settings" class="text-gray-300 hover:text-white">Settings</nuxt-link>
            </li>
          </ul>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-grow p-6 bg-gray-100">
        <Nuxt />
      </main>
    </div>
  </template>
  
  <script setup>
  // Tidak diperlukan script tambahan saat ini
  </script>
  
  <style scoped>
  aside {
    background-color: #333;
  }
  </style>
  