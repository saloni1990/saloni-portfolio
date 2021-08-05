<template>

  <div class="container">
    <Header />
        <div class="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 pb-8" v-for="post in posts" :key="post.slug">
            <a class="" :href="'/blog/' + post.slug">
             <h1> {{ post.title }}</h1> 
            </a>
        </div>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'


export default {
  components: {
    Header
  },  
   async asyncData({ $content }) {
    const posts = await $content("post").fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
