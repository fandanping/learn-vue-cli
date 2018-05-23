import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/action'

export default()=>{
  return new Vuex.Store({
    strict:true,
    state:defaultState,
    mutations:mutations,
    getters,
    actions
  })
}


