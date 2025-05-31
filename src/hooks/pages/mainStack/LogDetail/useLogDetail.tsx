import {useAppNavigation} from '@hooks/common/navigation';
import {useCallback, useState} from 'react';

const useLogDetail = () => {
  const mainStackNavigation = useAppNavigation('MainStack');
  const [selectedIdx, setSelectedIdx] = useState(0);

  const onChangeIndex = (idx: number) => {
    setSelectedIdx(idx);
  };

  const onPressBack = useCallback(() => {
    mainStackNavigation.goBack();
  }, []);

  return {
    selectedIdx,
    onChangeIndex,
    onPressBack,
  };
};

export default useLogDetail;
