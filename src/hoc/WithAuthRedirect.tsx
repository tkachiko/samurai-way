import {Redirect} from 'react-router-dom';
import React from 'react';
import {RootStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsForRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsForRedirectType => ({
  isAuth: state.auth.isAuth
});

export const WithAuthRedirect = (Component: any) => {

  class RedirectComponent extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>;
      return <Component {...this.props}/>;
    }
  }

  let ConnectedAuthRedirectComponent: any = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};