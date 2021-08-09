export const state = () => ({
  post: []
})

export const mutations = {
  setPost(state, list) {
    state.post = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/post/',
      false,
      /\.json$/
    )
    const post = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setPost', post)
  }
}
