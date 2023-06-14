import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUser } from "../../store/actions/user.action";
import { UserCard } from "./UserCard";
import { SectionTitle } from "../utilcmps/SectionTitle";

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
      <SectionTitle title="Users:" />
      <div className="list-container">
        {users.map((user) => {
          return (
            <UserCard user={user} onCard={onCard} onReadMore={onReadMore} />
          );
        })}
        {!!Object.keys(currUser).length && (
          <div className="user-card-container" onClick={() => onCard({})}>
            Show All
          </div>
        )}
      </div>
    </section>
  );
}
