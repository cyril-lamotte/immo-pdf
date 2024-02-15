import { useContext } from 'react';
import { Bail } from '../types/Bail';
import { BailContext } from '../contexts/BailContext';

export const usePage = () => {
  const { bail, setBail } = useContext<Bail>(BailContext);

  return { bail, setBail };
}
