import React from "react";
import Button from "./Button";

const Account = ({ accountTitle, accountAmount, accountAmountDescription }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{accountAmountDescription}</p>
      </div>
      <Button
        className={"transaction-button"}
        buttonText={"View transactions"}
      />
    </section>
  );
};

export default Account;
