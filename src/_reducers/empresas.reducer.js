import { empresaConstants } from '../_constants';

export function empresas(state = {}, action) {
  switch (action.type) {
    case empresaConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case empresaConstants.GETALL_SUCCESS:
      return {
        items: action.empresas
      };
    case empresaConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}