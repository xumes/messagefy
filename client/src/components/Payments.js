import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Messagefy"
        description="R$ 5,00 para 5 campanhas"
        amount={500}
        currency="BRL"
        panelLabel="Adicionar crédito"
        locale="br"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          + Créditos
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
