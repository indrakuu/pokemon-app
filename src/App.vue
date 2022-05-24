<template>
 <header>
  <nav class="navbar navbar-expand-md shadow-lg py-3 bg-white flex items-center w-full fixed top-0 right-0 left-0" style="z-index: 1;">
   <div class="px-6 mx-auto container flex flex-wrap justify-between">
  <a href="/" class="flex items-center">
      <img v-bind:src="require('./assets/duniapoke.png')" class="mr-3 h-12 sm:h-15" alt="DuniaPoke" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DuniaPoke</span>
  </a>
      <button
        class="navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentL" aria-controls="navbarSupportedContentL" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
      <div class="navbar-collapse collapse" id="navbarSupportedContentL">
        <ul class="navbar-nav mr-auto flex flex-col md:flex-row justify-end">
          <li class="nav-item">
            <a class="nav-link block p-2 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link block p-2 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="/about" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  <router-view/>
</template>

<style>
</style>
<script>
import logo from "./assets/duniapoke.png"

export default ({
  data() {
    return{
      logo:logo
    }  
  },
})
</script>
