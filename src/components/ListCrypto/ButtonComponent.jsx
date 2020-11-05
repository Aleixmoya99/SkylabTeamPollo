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
        class="checkBoxFav"
        id={data.id}
        checked={data.mostrar}
        onClick={() => {
          if (!document.getElementById(data.id).checked) {
            cryptoStore.deleteSaveData(data);
            data.mostrar = !data.mostrar;
            console.log("cosan't");
          }
          if (document.getElementById(data.id).checked) {
            cryptoStore.saveCrypto(data);
            data.mostrar = !data.mostrar;
            console.log("cosa");
          }
          cryptoStore.getSavedCrypto();
          cryptoStore.getCryptoList();
        }}
      />
    </>
  );
}

export default ButtonSave;
