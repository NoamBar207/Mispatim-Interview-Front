import { useEffect } from "react";
import { userService } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser } from "../../store/actions/user.action";
import { UserCard } from "./UserCard";

export function UsersList({ onReadMore }) {
  const dispatch = useDispatch();
  const { users, currUser } = useSelector((state) => state.userModule);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    dispatch(getUsers());
  };

  const onCard = async (user) => {
    await dispatch(setUser(user));
    if (!Object.keys(user).length) onReadMore({});
  };

  return (
    <section className="users-list-container">
      <h1>Users:</h1>
      <div className="list-container">
        {users.map((user) => {
          return (
            <UserCard user={user} onCard={onCard} onReadMore={onReadMore} />
          );
        })}
      </div>
    </section>
  );
}
