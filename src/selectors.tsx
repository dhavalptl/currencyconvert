import { selector } from "recoil";
import { fromCurrencyState, toCurrencyState, amountState } from "./atoms";

export const resultState = selector({
    key: 'result',
    get: async ({get}) => {
        const fromCurr = get(fromCurrencyState);
        const toCurr = get(toCurrencyState);
        const amount = get(amountState);
        try {
            if (fromCurr !== toCurr && amount) {
                const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurr}`);
                const data = await response.json();
                return (data.rates[toCurr] * parseFloat(amount)).toFixed(2);
            }
            return '--';
        } catch (error) {
            console.error("Error while fetching currency data", error);
            return '--';
        }
    }
});