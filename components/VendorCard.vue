<template>
    <div  @click="selectVendor" class="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img :src="vendor.image" :alt="vendor.name" class="w-full h-48 object-cover rounded-md mb-4" />
      <h3 class="text-lg font-semibold mb-2">{{ vendor.name }}</h3>
      <p class="text-gray-600 mb-4">{{ vendor.description }}</p>
      <button @click="selectVendor" class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
        Lihat Detail
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      vendor: {
        type: Object,
        required: true
      }
    },
    methods: {
      selectVendor() {
        this.$router.push(`/vendor-details/${this.vendor.id}`)
      }
    }
  }
  </script>
  