import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "./connector";

const ConnectBtn = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (err) {
      console.log(err);
    }
  };

  console.log({ active, account, library, connector, activate, deactivate });

  return (
    <>
      {active ? (
        <div className="btn-container">
          <button onClick={disconnect}>Disconnect</button>
          {JSON.stringify(account, null, 2)}
        </div>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </>
  );
};

export default ConnectBtn;
