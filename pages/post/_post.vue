<template>
  <div>
    <Header />
    <div :key="post.slug" v-bind="post in posts" class="content">
      <h1>{{ post.title }}</h1>



      <div v-html="parseMarkdown(post.body)"></div>




    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  async asyncData({ $content, params, error }) {
    let posts;
    try {
      posts = await $content("post", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      posts,
    };
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
