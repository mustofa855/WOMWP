<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar dan konten utama -->
    <nav>
      <div class="container mx-auto flex justify-between items-center border-b-2">
        <div class="text-white text-lg font-bold pl-7">
          <img src="../static/MWP.png" alt="MWP Logo" class="h-16 w-auto">
        </div>
        <div class="navbar-links">
          <nuxt-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">
            Home
          </nuxt-link>
          <nuxt-link to="/vendor" class="nav-link" :class="{ 'active': $route.path === '/vendor' }">
            Vendors
          </nuxt-link>
          <nuxt-link to="/about" class="nav-link" :class="{ 'active': $route.path === '/about' }">
            About
          </nuxt-link>
          <nuxt-link to="/contact" class="nav-link" :class="{ 'active': $route.path === '/contact' }">
            Contact
          </nuxt-link>
        </div>
        <div>
          <!-- Tombol Login -->
          <nuxt-link to="/login"
            class="login-button bg-gray-800 hover:bg-gray-500 text-white hover:text-gray-800 font-bold py-2 px-4 transition duration-200 ease-out rounded mr-7 flex items-center group">
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
              class="ml-2 transition-colors duration-200 ease-out group-hover:fill-gray-800">
              <path fill="white"
                d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </nav>

    <!-- Ini akan menampilkan konten dari halaman yang berbeda -->
    <main class="flex-grow">
      <Nuxt />
    </main>

    <!-- Footer di bagian bawah -->
    <footer class="text-center p-4 bg-gray-800 text-white">
      <div class="flex justify-between items-center mb-4">
        <!-- Ikon Sosial Media di sebelah kiri -->
        <div class="social-media flex space-x-4">
          <a href="https://www.instagram.com/mwp.stage/" target="_blank" class="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="white"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
          </a>
          <a href="https://wa.me/+6282118434774" target="_blank" class="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="white"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" class="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="white"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" class="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="white"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z" />
            </svg>
          </a>
        </div>

        <!-- Alamat di sebelah kanan -->
        <div class="address text-sm text-right">
          <p>Komplek, Jl. Kota Mas Raya No.77, Cipageran</p>
          <p>Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40552</p>
          <p>Email: mwp.stage@gmail.com</p>
          <p>Phone: +62 858 4739 5980</p>
        </div>
      </div>


      <!-- Copyright -->
      <p>&copy; 2024 MWP Stage. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
nav {
    background-color: #f3f3f3;
    position: -webkit-sticky; /* Untuk dukungan browser lama */
    position: sticky;
    top: 0; /* Menempel di bagian atas */
    z-index: 1000; /* Menempatkan navbar di atas konten lainnya */
    width: 100%; /* Memastikan navbar memenuhi lebar layar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Opsional: memberikan efek bayangan */
}

.navbar-links {
    display: flex;
    gap: 1rem; /* Jarak antar link */
}

.nav-link {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-link:hover {
    color: gray;
}

.nav-link.active {
    border-bottom: 3px solid black; /* Garis bawah untuk link aktif */
}

.login-button {
    display: flex;
    align-items: center;
}

.login-button svg {
    margin-left: 0.5rem; /* Jarak antara teks dan ikon */
}
</style>