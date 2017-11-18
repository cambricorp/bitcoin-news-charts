import Vue from 'vue'
import Router from 'vue-router'
import CoinNews from '@/components/CoinNews'
import GoogleTrendAndPriceChart from '@/components/googleTrendClose'
import Ohlc from '@/components/Ohlc'
import BitcoinTimeLine from '@/components/BitcoinTimeLine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Ohlc
    },
    {
      path: '/trend/:coin',
      name: 'Trend',
      component: GoogleTrendAndPriceChart,
      props: true
    },
    {
      path: '/news/:src',
      name: 'News',
      component: CoinNews,
      props: true
    },
    {
      path: '/chart/:coin',
      name: 'OhlcChart',
      component: Ohlc,
      props: true
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: BitcoinTimeLine
    }
  ]
})
