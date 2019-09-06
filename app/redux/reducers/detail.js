import * as detailActionTypes from '../constants/detail'

const initialState = {
  loaded: false,
  data: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case detailActionTypes.DETAIL_FETCH:
      return { ...state, loaded: true }
    case detailActionTypes.DETAIL_SUCCESS:
      return { ...state, loaded: false, data: action.result.data }
    case detailActionTypes.DETAIL_FAILURE:
      return { ...state, loaded: false }
    case detailActionTypes.DETAIL_RESET:
      return { ...state, data: null }
    default:
      return state
  }
}
