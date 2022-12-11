import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {RootStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
});

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

  function RedirectComponent(props: MapStatePropsType) {
    const {isAuth, ...restProps} = props;

    if (!isAuth) {
      return <Redirect to={'/login'}/>;
    }
    return <Component {...restProps as T}/>;
  }

  let ConnectedAuthRedirectComponent: ComponentType<T> = connect(mapStateToProps)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}