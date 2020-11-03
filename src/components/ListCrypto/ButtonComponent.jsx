import React from "react";
import cryptoStore from "../../stores/crypto-store";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

function ButtonSave({ data }) {
  return (
    <>
      <Checkbox
        animation="pulse"
        color="info-o"
        onClick={() => cryptoStore.saveCrypto(data)}
      ></Checkbox>
    </>
  );
}

export default ButtonSave;
