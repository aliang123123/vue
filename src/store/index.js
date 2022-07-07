import { createStore } from 'vuex'

//创建vuex仓库并导出
//2.0  new Vuex.Store({})
//3.0  create Store({})
export default createStore({
  //存状态   数据
  state: {
    username:'zs'
  },
  //vuex计算属性
  getters: {
    newName (state){
      return state.username+'...'
    }
  },
  //改数据函数
  mutations: {
    updateName(state){
      state.username = 'ls'
    }
  },
  //请求数据函数
  actions: {
    updateName(ctx){
      //发请求，异步操作
      setTimeout(()=>{
        ctx.commit('updateName')
      },1000)
    }
  },
  //分模块
  modules: {
  }
})
