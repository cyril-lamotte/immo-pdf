import { useBailContext } from '../contexts/BailContextProvider';

export const usePage = () => {
  const { bail, setBail, save } = useBailContext();
  return { bail, setBail };
}
