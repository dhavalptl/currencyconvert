import { selector } from "recoil";
import { fromCurrencyState, toCurrencyState, amountState } from "./atoms";

export const resultState = selector({
    key: 'result',
    get: async ({get}) => {
        try {
            const fromCurr = get(fromCurrencyState);
            const toCurr = get(toCurrencyState);
            const amount = get(amountState);
            if (fromCurr !== toCurr && amount) {
                const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurr}`);
                const data = await response.json();
                return (data.rates[toCurr] * parseFloat(amount)).toFixed(2);
            }
            return '--';
        } catch (error) {
            return '';
        }
    }
});