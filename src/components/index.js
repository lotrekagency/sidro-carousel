import Vue from 'vue'
import SCarousel from './SidroCarousel'
import SSlide from './SidroSlide'
import { VueHammer } from 'vue2-hammer'


Vue.use(VueHammer)

const Components = {
  SCarousel,
  SSlide
}

Object.keys(Components).forEach(name => {
  Vue.component(name,Components[name])
})

export default Components;