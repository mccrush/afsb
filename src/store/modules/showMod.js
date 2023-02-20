export default {
  state: {
    showMod: localStorage.getItem('sb-showMod') || 'list'
  },
  mutations: {
    setShowMod(state, { newMod }) {
      state.showMod = newMod
      localStorage.setItem('sb-showMod', newMod)
    }
  },
  getters: {
    showMod: state => state.showMod
  }
}