import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
type UseToggleReturnType = [boolean, () => void, string, (newType?: string) => void];

const useToggle = (initialValue = false, initialType = 'default'): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);
  const [type, setType] = useState<string>(initialType);

  const toggle = (): void => {
    setValue((prevValue: boolean) => !prevValue);
  };

  return [value, toggle, type, (newType) => setType(newType ?? initialType)];
};

export default useToggle;
