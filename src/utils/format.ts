import { format } from 'date-fns';

export const formatDate = (v: string) => {
  const splitInput = v.split('-');
  const [year, month] = splitInput;

  const date = new Date(parseInt(year), parseInt(month) - 1);
  return format(date, 'MMMM yyyy');
};
