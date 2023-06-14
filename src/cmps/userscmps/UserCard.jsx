export function UserCard({ user, onCard, onReadMore }) {
  return (
    <section className="user-card-container" onClick={() => onCard(user)}>
      <div className="card-info">
        <h1>{user.name}</h1>
      </div>

      <div className="card-action">
        <button className="util-btn" onClick={(ev) => onReadMore(user, ev)}>
          Read More
        </button>
      </div>
    </section>
  );
}
