import { useContext } from 'react';
import { Bail } from '../types/Bail';
import { BailContext } from '../contexts/BailContextProvider';

export const usePage = () => {
  const { bail, setBail, save } = useContext<Bail>(BailContext);

  return { bail, setBail };
}
