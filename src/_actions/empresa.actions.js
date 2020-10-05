import { empresaConstants } from '../_constants';
import { empresaService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const empresaActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        empresaService.getAll()
            .then(
                empresas => dispatch(success(empresas)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: empresaConstants.GETALL_REQUEST } }
    function success(empresas) { return { type: empresaConstants.GETALL_SUCCESS, empresas } }
    function failure(error) { return { type: empresaConstants.GETALL_FAILURE, error } }
}