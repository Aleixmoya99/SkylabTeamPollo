import {
  loadCoinsAll,
  loadCoinsList,
  loadCoinsMarkets,
  loadCoinByID,
  loadDerivativesList,
  changeList,
  errorNoSavedCurrency,
  updateCoinById,
} from "./action-creators";
import dispatcher from "../dispatcher/dispatcher";
import CoinGecko from "coingecko-api";

describe("actions creator", () => {
  let coinGeckoClient = null;
  beforeEach(() => {
    coinGeckoClient = new CoinGecko();
  });

  test("load coins market", async () => {
    dispatcher.dispatch = jest.fn();

    await loadCoinsMarkets();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });

  test("load coins id", async () => {
    dispatcher.dispatch = jest.fn();

    await loadCoinByID();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });

  test("load derivatives coins", async () => {
    dispatcher.dispatch = jest.fn();

    await loadDerivativesList();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });

  test("change coins list", async () => {
    dispatcher.dispatch = jest.fn();

    await changeList();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });

  test("error no saved currency", async () => {
    dispatcher.dispatch = jest.fn();

    await errorNoSavedCurrency();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });
  test("load coins list", async () => {
    dispatcher.dispatch = jest.fn();

    await loadCoinsList();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });
  test("load update coins by id", async () => {
    dispatcher.dispatch = jest.fn();

    await updateCoinById();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });

  test("load all coins", async () => {
    dispatcher.dispatch = jest.fn();

    await loadCoinsAll();

    const calls = dispatcher.dispatch.mock.calls[0].length;
    expect(calls).toBe(1);
  });
});
