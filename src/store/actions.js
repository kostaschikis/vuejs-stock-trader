import axios from 'axios'

export const loadData = ({ commit }) => {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
  axios.get('data.json')
    .then(res => {
      const data = res.data
      if (data) {
        const stocks = data.stocks
        const funds = data.funds
        const stockPortfolio = data.stockPortfolio
        const portfolio = {
          stockPortfolio,
          funds
        }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
