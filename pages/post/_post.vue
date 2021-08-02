<template>
  <div>
    <Header />
    <div :key="post.slug" v-bind="post in post" class="content">
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
    let post;
    try {
      post = await $content("post", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
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
