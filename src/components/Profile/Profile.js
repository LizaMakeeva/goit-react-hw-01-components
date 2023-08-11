import {
  Wrapper,
  Text,
  TopicName,
  ListStats,
  ListLi,
  ImgAvatar,
  Description,
  TextLabel,
  TextQuantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />
        <TopicName>{username}</TopicName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <ListStats>
        <ListLi>
          <TextLabel>Followers</TextLabel>
          <TextQuantity>{stats.followers}</TextQuantity>
        </ListLi>
        <ListLi>
          <TextLabel>Views</TextLabel>
          <TextQuantity>{stats.views}</TextQuantity>
        </ListLi>
        <ListLi>
          <TextLabel>Likes</TextLabel>
          <TextQuantity>{stats.likes}</TextQuantity>
        </ListLi>
      </ListStats>
    </Wrapper>
  );
};
