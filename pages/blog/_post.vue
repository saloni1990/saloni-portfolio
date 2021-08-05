<template>
  <div>
    <Header />

      <div class="container">
          
            
             <h1>{{ post.title }}</h1>

             <div v-html="parseMarkdown(post.body)"></div>



      </div>
  </div>
</template>

<script>
import marked from 'marked'
import Header from '../../components/Header.vue'

export default {
    data() {
    return {
      index: 0
    }
  },
  components: {
    Header

  },
  async asyncData({ params, payload }) {
    if (payload) return { post: payload }
    else
      return {
        post: await require(`~/content/post/${params.post}.json`)
      }
  },
  methods: {
    parseMarkdown(content) {
      if (content) {
        return marked(content)
      }
    }
  }
}
</script>
