import {useState} from 'react';

const useLogDetail = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const onChangeIndex = (idx: number) => {
    setSelectedIdx(idx);
  };

  return {
    selectedIdx,
    onChangeIndex,
  };
};

export default useLogDetail;
