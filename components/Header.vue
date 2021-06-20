<template>
    <div class="max-w-full  bg-gray-200">
        <nav class="max-w-6xl mx-auto sm:py-4">
            <div class="mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative w-full flex items-center justify-between py-8 sm:py-0">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                    <!-- Icon when menu is closed. -->
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg v-on:click="toggleMenu" v-bind:class="{block: isOpen, hidden: !isOpen}" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!-- Icon when menu is open. -->
                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg v-on:click="toggleMenu" v-bind:class="{block: !isOpen, hidden: isOpen}"  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <header class="hidden sm:block text-gray-600 body-font">
                <div class=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pr-8 ">
                    <span class="ml-3 text-xl">Sal Learns to Code</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" class="mr-5 hover:text-gray-900">Home</a>
                    <a href="/about" class="mr-5 hover:text-gray-900">About</a>
                    </nav>
                </div>
                </header>
                </div>
            </div>

            <!--
                Mobile menu, toggle classes based on menu state.

                Menu open: "block", Menu closed: "hidden"
            -->
            <div v-on:click="toggleMenu" v-bind:class="{block: !isOpen, hidden: isOpen}"  class=" sm:hidden">
                <div class="px-2 pt-2 pb-3">
                <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out">Home</a>
                <a href="/about" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-white focus:bg-gray-600 transition duration-150 ease-in-out">About</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: true
        }
    },
    methods: {
        toggleMenu: function toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    } 
}
</script>
