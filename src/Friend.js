import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance > 0 ? (
        <p className="red">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p className="green">
          You owe {friend.name} {-friend.balance}$
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {selectedFriend === friend ? "Close" : "Select"}
      </Button>
    </li>
  );
}
