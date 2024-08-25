<template>
    <div class="order-card">
      <h2>Pesanan #{{ order.id }}</h2>
      <p><strong>Nama Pengantin:</strong> {{ order.brideName }} & {{ order.groomName }}</p>
      <p><strong>Tanggal Pernikahan:</strong> {{ order.weddingDate }}</p>
      <p><strong>Vendor yang Dipilih:</strong> {{ order.vendors.join(', ') }}</p>
      <p><strong>Status Pembayaran:</strong> {{ order.paymentStatus }}</p>
      <p><strong>Status Jadwal:</strong> {{ order.scheduleStatus }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object
    }
  }
  </script>
  
  <style scoped>
  .order-card {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  </style>
  