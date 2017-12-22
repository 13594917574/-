import {RECEIVE_SELECT, RECEIVE_MENUS,} from './types'


export default {
  // [RECEIVE_SELECT] (state, {select}) {
  //   state.select = select
  // },
  [RECEIVE_SELECT] (state, {select}) {
    state.classifyName = select
  },
  [RECEIVE_MENUS] (state, {menus}) {
    state.menus = menus
  }
}
