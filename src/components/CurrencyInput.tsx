import React, { FormEvent } from 'react';
import Currency from './Currency';
import { useRecoilState } from 'recoil';
import { fromCurrencyState, toCurrencyState } from '../atoms';
const currencies = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];

const CurrencyInput: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useRecoilState(fromCurrencyState);
    const [toCurrency, setToCurrency] = useRecoilState(toCurrencyState);
    
    const onFromCurrencyChange = (event: FormEvent<HTMLSelectElement>) => {
        setFromCurrency(() => {
            return event.currentTarget.value;
        });
    }
    const onToCurrencyChange = (event: FormEvent<HTMLSelectElement>) => {
        setToCurrency(() => {
            return event.currentTarget.value;
        });
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Currency currencies={currencies} onChange={onFromCurrencyChange} value={fromCurrency}/>
            <div style={{paddingTop: '10px'}}>&lt;&gt;</div>
            <Currency currencies={currencies} onChange={onToCurrencyChange} value={toCurrency}/>
        </div>
    );
}

export default CurrencyInput;