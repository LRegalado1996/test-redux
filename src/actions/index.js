import { FECHING_DATA, FECHING_DATA_SUCCESS, FECHING_DATA_FAILURE} from '../constant';
import getDataApi from '../api/api';

export const selected_tab = (tabId) => {
  return {
    type : 'selected_tab',
    payload : tabId
  } //end return
} // end selected_tab

export const getData = () => {
  return {
    type: 'FECHING_DATA'
  }
}

export const getDataSuccess = (data) => {
  return {
    type: 'FECHING_DATA_SUCCESS',
    data
  }
}

export const getDataFailure = () => {
  return {
    type: 'FECHING_DATA_SUCCESS'
  }
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData());
    getDataApi()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json))
      })
      .catch((err) => console.log(err))
  }
}
