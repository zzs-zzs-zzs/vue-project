import { createStore, type Commit } from "vuex"

interface IState {
  userName: string
}

const commonStore = createStore({
  state(): IState {
    return {
      userName: "哈哈哈哈",
    }
  },
  getters: {
    getUserName(state: IState) {
      return state.userName
    }
  },
  mutations: {
    changeUserName(state: IState, data: string) {
      console.log("%c [  ]-20", "font-size:13px; background:pink; color:#bf2c9f;", )
      state.userName = data
    }
  },
  actions: {
    async changeUserNameAction({ commit }: { commit: Commit }, name: string) {
      console.log("%c [  ]-25", "font-size:13px; background:pink; color:#bf2c9f;", )
      await new Promise((resolve) => setTimeout(resolve, 2 * 1000))
      commit("changeUserName", name)
    }
  }
})

export default commonStore