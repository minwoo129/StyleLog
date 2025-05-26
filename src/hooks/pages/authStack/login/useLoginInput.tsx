import {useState} from 'react';

type UseLoginInputReturnType = [string, (value: string) => void];

const useLoginInput = (): UseLoginInputReturnType => {
  const [value, setValue] = useState('');

  const onChangeValue = (value: string) => {
    setValue(value);
  };

  return [value, onChangeValue];
};

export default useLoginInput;
