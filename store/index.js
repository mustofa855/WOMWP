// store/index.js
export const state = () => ({
    orders: [] // Pastikan ada state untuk orders
  })
  
  export const mutations = {
    SET_ORDERS(state, orders) {
      state.orders = orders
    }
  }
  
  export const actions = {
    async fetchOrders({ commit }) {
      // Fetch orders from an API or service
      const orders = [] // Replace with actual data fetching
      commit('SET_ORDERS', orders)
    }
  }
  