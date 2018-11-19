import { FECHING_DATA, FECHING_DATA_SUCCESS, FECHING_DATA_FAILURE} from '../constant';

const initialState = {
  data: [],
  isFetching: false,
  error: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FECHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      }
    case FECHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default dataReducer;
