export default {
  name: "user",
  state: {
    username: "hc"
  },
  mutations: {
    setUsername(state: any, name: string) {
      state.username = name;
    }
  },
  actions: {},
  modules: {},
  getters: {}
};
