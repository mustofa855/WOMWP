<template>
    <form @submit.prevent="submitOrder">
      <div>
        <label>Nama Pengantin Pria:</label>
        <input v-model="order.brideName" type="text" required />
      </div>
      <div>
        <label>Nama Pengantin Wanita:</label>
        <input v-model="order.groomName" type="text" required />
      </div>
      <div>
        <label>Tanggal Pernikahan:</label>
        <input v-model="order.weddingDate" type="date" required />
      </div>
      <div>
        <label>Vendor yang Dipilih:</label>
        <select v-model="order.vendors" multiple required>
          <option v-for="vendor in vendorOptions" :key="vendor" :value="vendor">
            {{ vendor }}
          </option>
        </select>
      </div>
      <div>
        <label>Jumlah Tamu:</label>
        <input v-model="order.guestCount" type="number" required />
      </div>
      <div>
        <label>Lokasi Pernikahan:</label>
        <input v-model="order.location" type="text" required />
      </div>
      <div>
        <label>Catatan Khusus:</label>
        <textarea v-model="order.specialNotes"></textarea>
      </div>
      <button type="submit">Kirim Pesanan</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        order: {
          brideName: '',
          groomName: '',
          weddingDate: '',
          vendors: [],
          guestCount: '',
          location: '',
          specialNotes: ''
        },
        vendorOptions: ['MUA', 'Musik', 'Catering', 'Fotografer'] // Example vendor options
      }
    },
    methods: {
      submitOrder() {
        this.$emit('submit-order', this.order)
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  div {
    margin-bottom: 1rem;
  }
  </style>
  