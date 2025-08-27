let onDelete;

function UserCard({ user }) {
  // Vis brugerens data her
  return (
    <div>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.mail}</p>
      <p>{user.title}</p>
      <button onClick={() => onDelete(user.id)}>Slet</button>
    </div>
  );
}
export default UserCard;

console.log(UserCard);
