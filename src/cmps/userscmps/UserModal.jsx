import { useState } from "react";
import JsonEditor from "react-json-editor-ui";
import { useDispatch } from "react-redux";
import { onUpdateUser, setUser } from "../../store/actions/user.action";
import { isEditable } from "@testing-library/user-event/dist/utils";

export function UserModal({ user, onReadMore }) {
  const [userState, setUserState] = useState(JSON.parse(JSON.stringify(user)));
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const onDone = (ev) => {
    dispatch(onUpdateUser(userState));
    onReadMore({}, ev);
  };

  const handleChange = (ev) => {
    console.log(ev.target.textContent);
    let field = ev.target.id;
    let val = ev.target.textContent;
    if (
      field === "suite" ||
      field === "street" ||
      field === "city" ||
      field === "zipcode"
    )
      setUserState({ ...user, address: { ...user.address, [field]: val } });
    else if (
      field === "bs" ||
      field === "company name" ||
      field === "catchPhrase"
    ) {
      field = field === "company name" ? "name" : field;
      setUserState({ ...user, company: { ...user.company, [field]: val } });
    } else if (field === "lat" || field === "lng")
      setUserState({
        ...user,
        address: {
          ...user.address,
          geo: { ...user.address.geo, [field]: val },
        },
      });
    else setUserState({ ...user, [field]: val });
  };

  return (
    <div className="read-more-container">
      <button
        className="util-btn close-btn"
        onClick={(ev) => onReadMore({}, ev)}
        style={{ padding: "4px 6px" }}
      >
        X
      </button>
      <div className="editor-container">
        <h1 id="name" contentEditable={isEdit} onInput={handleChange}>
          {user.name}
        </h1>
        <h1 id="username" contentEditable={isEdit} onInput={handleChange}>
          {user.username}
        </h1>
        <h1 id="email" contentEditable={isEdit} onInput={handleChange}>
          {user.email}
        </h1>
        <h1 id="street" contentEditable={isEdit} onInput={handleChange}>
          {user.address.street}
        </h1>
        <h1 id="suite" contentEditable={isEdit} onInput={handleChange}>
          {user.address.suite}
        </h1>
        <h1 id="city" contentEditable={isEdit} onInput={handleChange}>
          {user.address.city}
        </h1>
        <h1 id="zipcode" contentEditable={isEdit} onInput={handleChange}>
          {user.address.zipcode}
        </h1>
        <h1 id="lat" contentEditable={isEdit} onInput={handleChange}>
          {user.address.geo.lat}
        </h1>
        <h1 id="lng" contentEditable={isEdit} onInput={handleChange}>
          {user.address.geo.lng}
        </h1>
        <h1 id="phone" contentEditable={isEdit} onInput={handleChange}>
          {user.phone}
        </h1>
        <h1 id="website" contentEditable={isEdit} onInput={handleChange}>
          {user.website}
        </h1>
        <h1 id="company name" contentEditable={isEdit} onInput={handleChange}>
          {user.company.name}
        </h1>
        <h1 id="name" contentEditable={isEdit} onInput={handleChange}>
          {user.company.name}
        </h1>
        <h1 id="bs" contentEditable={isEdit} onInput={handleChange}>
          {user.company.bs}
        </h1>
      </div>
      <div className="modal-actions">
        <button className="util-btn" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Double Click To Edit" : "Edit"}
        </button>
        <button
          className="util-btn"
          disabled={isEdit ? false : true}
          onClick={(ev) => onDone(ev)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
