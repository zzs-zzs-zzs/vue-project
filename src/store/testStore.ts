import { createStore, type Commit, Store  } from "vuex"

interface IState {
  name: string
}

interface IGetters {
  getName(state: IState): string
}

interface IMutations {
  changeName(state: IState, data: string): void
}

interface IActions {
  changeNameAction({ commit }: { commit: Commit }, name: string): void
}

type TestStore = {
  getters: IGetters
  mutations: IMutations
  actions: IActions
}

const testStore  = createStore<IState>({
  state() {
    return {
      name: "哈哈哈哈",
    }
  },
  getters: {
    getName(state: IState) {
      return state.name
    }
  },
  mutations: {
    changeName(state: IState, data: string) {
      console.log("%c [  ]-20", "font-size:13px background:pink color:#bf2c9f", )
      state.name = data
    }
  },
  actions: {
    async changeNameAction({ commit }: { commit: Commit }, name: string) {
      console.log("%c [  ]-25", "font-size:13px background:pink color:#bf2c9f", )
      await new Promise((resolve) => setTimeout(resolve, 2 * 1000))
      commit("changeName", name)
    }
  }
})

export default testStore