import React from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import DefaultLayout from '../DefaultLayout';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { EmpresaPage } from '../pages/Empresa/EmpresaPage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="">
                <div className="">
                    <div className="">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
<Switch>
                                <Route path="/login" component={LoginPage} />
                                <DefaultLayout>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute exact path="/empresas" component={EmpresaPage} />
                                </DefaultLayout>
                              

</Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 