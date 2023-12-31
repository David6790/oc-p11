import React, { useState } from "react";
import { setEditMode, userProfile } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUsernameMutation } from "../API/Authentification/api";
import Cookies from "js-cookie";
import { changeUserName } from "../features/users/userSlice";
import { acceptCookies } from "../features/users/userSlice";

const EditNameForm = () => {
  const [updateUsernameMutation] = useUpdateUsernameMutation();
  const [userName, setUserName] = useState("");
  const profile = useSelector(userProfile);
  const dispatch = useDispatch();
  const allowUseCookies = useSelector(acceptCookies);

  const cancelEdit = (e) => {
    e.preventDefault();
    dispatch(setEditMode());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allowUseCookies) {
      const authToken = `Bearer ${Cookies.get("authToken")}`;
      const response = await updateUsernameMutation({
        token: authToken,
        newUserName: userName,
      });
      dispatch(changeUserName(response));
    } else {
      const authToken = `Bearer ${sessionStorage.getItem("authToken")}`;
      const response = await updateUsernameMutation({
        token: authToken,
        newUserName: userName,
      });
      dispatch(changeUserName(response));
    }

    dispatch(setEditMode());
  };

  return (
    <section className="editSection">
      <h2>Edit user info</h2>
      <form className="editNameForm">
        <div className="formUnit">
          <label>User name :</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="formUnit">
          <label>First Name:</label>
          <input type="text" placeholder={profile.firstName} readOnly />
        </div>
        <div className="formUnit">
          <label>Last name:</label>
          <input type="text" placeholder={profile.lastName} readOnly />
        </div>

        <div className="editFormButtonContainer">
          <button
            type="submit"
            className="editFormButton"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="editFormButton" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditNameForm;
