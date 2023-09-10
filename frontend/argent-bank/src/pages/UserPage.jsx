import React from "react";
import Layout from "../layout/Layout";
import Account from "../component/Account";
import EditNameForm from "../component/EditNameForm";
import { setEditUserName, userProfile } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../features/users/userSlice";

const UserPage = () => {
  const profile = useSelector(userProfile);
  const editMode = useSelector(setEditUserName);
  const dispatch = useDispatch();

  const toogleEdit = () => {
    dispatch(setEditMode());
  };

  return (
    <Layout className={"main bg-dark"}>
      {editMode ? (
        <EditNameForm />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${profile.firstName} ${profile.userName}`}
          </h1>
          <button className="edit-button" onClick={toogleEdit}>
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      <Account
        accountTitle={"Argent Bank Checking (x8349)"}
        accountAmount={"$2,082.79"}
        accountAmountDescription={"Available Balance"}
      />
      <Account
        accountTitle={"Argent Bank Savings (x6712)"}
        accountAmount={"$10,928.42"}
        accountAmountDescription={"Available Balance"}
      />
      <Account
        accountTitle={"Argent Bank Credit Card (x8349)"}
        accountAmount={"$184.30"}
        accountAmountDescription={"Current Balance"}
      />
    </Layout>
  );
};

export default UserPage;
