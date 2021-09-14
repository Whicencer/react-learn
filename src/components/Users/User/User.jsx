import PostsContainer from "../../Posts/PostsContainer";
import UserStatus from "./UserStatus";

const User = (props) => {
  if (!props.user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <img
          src={props.user.photos.large ? `${props.user.photos.large}` : `https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg`}
          alt="avatar"
        />
        <h3>{props.user.fullName}</h3>
        <UserStatus setStatus={props.setStatus} status={props.status} />
      </div>
      <PostsContainer />
    </>
  );
};

export default User;
