import { useState } from "react";
import { TodosList } from "../cmps/userscmps/TodosList";
import { UsersList } from "../cmps/userscmps/UsersList";
import { UserModal } from "../cmps/userscmps/UserModal";

export function UserPage() {
  const [readMoreState, setReadMoreState] = useState({});

  const getGreetingTitle = () => {
    let time = new Date();
    time = time.getHours();
    if (5 <= time && time < 12) {
      return "Good Morning";
    } else if (12 <= time && time < 20) {
      return "Good Afternoon";
    } else if (20 <= time && time < 24) {
      return "Good Evening";
    } else if (0 <= time && time < 5) return "Good Night";
  };

  const onReadMore = (user, ev) => {
    ev.stopPropagation();
    setReadMoreState(user);
  };

  return (
    <section className="homepage-container">
      <div className="homepage-greet">
        <div className="homepage-greet-settings">
          <h2>{getGreetingTitle()}</h2>
        </div>
      </div>

      <div className="users-container">
        <UsersList onReadMore={onReadMore} />
      </div>
      <TodosList />
      {!!Object.keys(readMoreState).length && (
        <UserModal user={readMoreState} onReadMore={onReadMore} />
      )}
    </section>
  );
}
