<template>
    <nav>
        <div class="container mx-auto flex justify-between items-center border-b-2">
            <div class="text-white text-lg font-bold pl-7">
                <img src="../static/MWP.png" alt="MWP Logo" class="h-16 w-auto">
            </div>
            <div class="navbar-links">
                <nuxt-link to="/"
                    class="nav-link"
                    :class="{ 'active': $route.path === '/' }">
                    Home
                </nuxt-link>
                <nuxt-link to="/pelanggan/vendor"
                    class="nav-link"
                    :class="{ 'active': $route.path === '/pelanggan/vendor' }">
                    Vendors
                </nuxt-link>
                <nuxt-link to="/pelanggan/about"
                    class="nav-link"
                    :class="{ 'active': $route.path === '/pelanggan/about' }">
                    About
                </nuxt-link>
                <nuxt-link to="/pelanggan/contact"
                    class="nav-link"
                    :class="{ 'active': $route.path === '/pelanggan/contact' }">
                    Contact
                </nuxt-link>
            </div>
            <div>
                <!-- Tombol Login -->
                <nuxt-link to="/login"
                    class="bg-gray-800 hover:bg-gray-500 text-white hover:text-gray-800 font-bold py-2 px-4 transition duration-200 ease-out rounded mr-7">
                    Login
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
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
</style>
