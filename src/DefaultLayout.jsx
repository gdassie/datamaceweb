import React from 'react';
import NavMenu from './NavMenu';
import { connect } from 'react-redux';


export default function DefaultLayout({ children }) {


	return (
    <div className="container-scroller">
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center" >
            <a className="navbar-brand brand-logo" href="/">
              <div className="logo-page" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <div style={{verticalAlign: 'baseline'}} />
            </a>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
          <div style={{boxShadow: '0 4px 7px 0 rgba(0,0,0,.2)', zIndex: 999, paddingTop: '6%'}}>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav" style={{position: 'fixed', width: '300px', marginTop: '2em'}}>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/empresas'>
                    <i className="menu-icon mdi mdi-office-building" />
                    <span className="menu-title">
                      Empresas
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/noticias'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Notícias
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/produtos'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Produtos
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/treinamentos'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Treinamentos
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/historicodetreinandos'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Histórico de treinandos
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/aviseme'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Avise-me
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/email'>
                    <i className="menu-icon typcn typcn-mail" />
                    <span className="menu-title">
                     E-mail
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/relatoriodeenvio'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                     Relatório de envio
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/usuariosadministradores'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                     Usuários administradores
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/calendariodeobrigacoes '>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                      Calendário de obrigações 
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/lembretes'>
                    <i className="menu-icon typcn typcn-th-list" />
                    <span className="menu-title">
                        Lembretes
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-expanded="false" aria-controls="ui-basic" href='/login'>
                    <i className="menu-icon mdi mdi-logout-variant" />
                    <span className="menu-title">
                      Sair
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-panel">
            <div className="content-wrapper">
              <main role="main" className="pb-3">
              	{children}
              </main>
            </div>
          </div>
        </div>
      </div>
      
);

}



