import {addPost, ProfilePageType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';

type MapStateToPropsType = {
  profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  };
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;