import React from 'react';
import { connect } from 'react-redux';

class NavMenu extends React.Component {

   componentDidMount() {
    }

changeTitle = () => {
        switch(window.location.pathname){
               default:
            return "Grupo Datamace"
        }
        }

  handleClick = () => {
    console.log('this is:', this);
    window.history.back();
  }
 render() {
    const TITLE = this.changeTitle();

	return (
 <header className="page-topbar" id="header">
                <div className="navbar navbar-fixed">
                    <nav className="navbar-main navbar-light nav-collapsible sideNav-lock" style={{ borderBottom: '1px solid', backgroundColor: 'white' }}>
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li>{window.location.pathname !== "/"  &&
                                    <a className="btn-flat mb-1 waves-effect" onClick={this.handleClick}  style={{zIndex: 99, top: '0%', left: '-20px', bottom: 0, position: 'absolute', height: '110%', maxWidth: '100%'}}>
                                            <i className="material-icons" style={{color: '#0072CE', paddingTop: '50%',fontSize: '2em'}}>
                                            chevron_left
                                            </i>
                                        </a>}
                                    <a className="mb-1 waves-effect" href="/" id="tit-banner">{TITLE}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
);
}
}


export default NavMenu; 