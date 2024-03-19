/**
 *
 * @param date
 * @returns string
 */
export const formatDate = (date?: string): string => {
  if (!date) {
    return '';
  }

  return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Count the number of days between two dates
 *
 * @param date
 * @param date2
 *
 * @returns int
 */
export const countDays = (date: string, date2: string): number => {
  const d1 = new Date(date);
  const d2 = new Date(date2);
  const timeDiff = d2.getTime() - d1.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}
