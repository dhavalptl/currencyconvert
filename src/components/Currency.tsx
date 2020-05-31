import React, { FormEvent } from 'react';
import styles from './Currency.module.css';

interface Props {
    currencies: Array<string>;
    onChange: (event: FormEvent<HTMLSelectElement>) => void;
    value: string
}

const Currency: React.FC<Props> = ({ currencies, onChange, value }) => {
    const currencyOptions = currencies.map((currency: string) => (<option key={currency} value={currency}>{currency}</option>));
    return (
        <select value={value} onChange={onChange} className={styles.select}>
            {currencyOptions}
        </select>
    );
}

export default Currency;