import { atom } from "recoil";

export const fromCurrencyState = atom({
    key: 'fromCurrency',
    default: 'USD'
});

export const toCurrencyState = atom({
    key: 'toCurrency',
    default: 'USD'
});

export const amountState = atom({
    key: 'amount',
    default: ''
});