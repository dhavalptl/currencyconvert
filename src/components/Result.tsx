import React from 'react';
import { useRecoilValue } from 'recoil';
import { resultState } from '../selectors';

const Result: React.FC = () => {
  const result = useRecoilValue(resultState);
  return (
        <header className='title'>{result}</header>
  );
}

export default Result;