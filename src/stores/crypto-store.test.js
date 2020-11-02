import cryptoData from "./crypto-store";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

describe("test crypto-store", () => {
  test("testing get crypto list", () => {
    cryptoData.setCryptoList([]);
    expect(cryptoData.getCryptoList()).toEqual([]);
  });
  test("testing get crypto coin", () => {
    cryptoData.setCryptoCoin([]);
    expect(cryptoData.getCryptoCoin()).toEqual([]);
  });
  test("testing get saved crypto", () => {
    cryptoData.setSavedCrypto([]);
    expect(cryptoData.getSavedCrypto()).toEqual([]);
  });
  test("testing get derivatives crypto", () => {
    cryptoData.setCryptoDerivatives([]);
    expect(cryptoData.getCryptoDerivatives()).toEqual([]);
  });
  test("testing saved crypto", () => {
    const response = cryptoData.saveCrypto(cryptoData);
    expect(response).toEqual([]);
  });
  test("testing if saved crypto", () => {
    //arrange
    cryptoData.saveCrypto = [{ id: "bitcoin" }, { id: "ethereum" }];
    //act
    cryptoData.getFavoritesCryptos({ id: "omg" });
    //assert
    expect(cryptoData.getFavoritesCryptos()).toEqual([
      { id: "bitcoin" },
      { id: "ethereum" },
      { id: "omg" },
    ]);
  });
  test("testing get favorites crypto", () => {
    cryptoData.setFavoritesCryptos([]);
    expect(cryptoData.getFavoritesCryptos()).toEqual([]);
  });

  test("load crypto markets list", () => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_CRYPTO_MARKETS_LIST,
      payload: "run test",
    });
    expect(cryptoData.getCryptoList()).toBe("run test");
  });

  test("load crypto coins by id", () => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_CRYPTO_COIN_BY_ID,
      payload: "run test",
    });
    expect(cryptoData.getCryptoCoin()).toBe("run test");
  });

  test("load derivates list", () => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_DERIVATIVES_LIST,
      payload: "run test",
    });
    expect(cryptoData.getCryptoDerivatives()).toBe("run test");
  });

  test("change list", () => {
    dispatcher.dispatch({
      type: actionTypes.CHANGE_LIST,
      payload: "run test",
    });
    expect(cryptoData.getCryptoList()).toBe("run test");
  });

  test("error no saved coin", () => {
    dispatcher.dispatch({
      type: actionTypes.ERROR_NO_SAVEDCURRENCY,
      payload: "run test",
    });
    expect(cryptoData.getCryptoList()).toBe("run test");
  });
});
