import { Wrapper, Text, PointSpan, ImgAvatar } from './FriendList.styled.js';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Wrapper>
      <PointSpan
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></PointSpan>
      <ImgAvatar src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </Wrapper>
  );
};
