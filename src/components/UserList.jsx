import UserCard from "./UserCard";

export default function UserList({ users }) {
  return (
    <section className="grid">
      {users.map((user) => (
        <UserCard user={user.name} key={user.id} />
      ))}
    </section>
  );
}

console.log(UserList);
