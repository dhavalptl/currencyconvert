import React, { FormEvent } from 'react';
import styles from './AmountInput.module.css';
import { useRecoilState } from 'recoil';
import { amountState } from '../atoms';
const AmountInput = () => {
  const [amount, setAmount] = useRecoilState(amountState);
  const setInputValue = (event: FormEvent<HTMLInputElement>) => {
    setAmount(() => {
        return event.currentTarget.value;
    });
  }
  return (
    <input type='text' placeholder='Enter Amount' onChange={setInputValue} className={styles.input} value={amount}/>
  );
}

export default AmountInput;