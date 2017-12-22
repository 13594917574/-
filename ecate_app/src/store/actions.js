import {RECEIVE_SELECT, RECEIVE_MENUS,} from './types'
import {getSelect, getMenus} from '../api'


const RESULT_ON = 0
export default {

  reqSelect ({commit}) {
    getSelect().then(reponse => {
      const result = reponse.data
      if(result.code===RESULT_ON){
        const select = result.data
        commit(RECEIVE_SELECT,{select})
        console.log(select);
      }
    })
  },
  reqMenus({commit}) {
    getMenus().then(reponse => {
      const result = reponse.data
      if(result.code===RESULT_ON){
        const menus = result.data
        commit(RECEIVE_MENUS,{menus})
        console.log(menus)
      }
    })
  }


}


