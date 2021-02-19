import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent() {
    console.log("auth", this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login com Google</a></li>;
      default:
        return [
          <li key="4" style={{fontSize: '0.5rem', padding: '1rem'}}>{this.props.auth.name}</li>,
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Créditos: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Sair</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Messagefy
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
