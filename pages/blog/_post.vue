<template>
  <div>
    <div :key="post.slug" v-bind="post in post" class="content">
      <h1>{{ post.title }}</h1>

      


      <div v-html="parseMarkdown(post.body)"></div>




    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  components: {

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
