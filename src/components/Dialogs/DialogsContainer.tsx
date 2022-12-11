import {DialogsPageType, sendMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {ComponentType} from 'react';

type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, {sendMessage}),
  WithAuthRedirect
)(Dialogs);