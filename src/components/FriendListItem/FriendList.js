import { FriendListItem } from './FriendListItem.js';
import { ListFriend } from './FriendList.styled.js';
export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ListFriend>
  );
};
