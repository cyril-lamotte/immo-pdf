/**
 * Get the increase of the rent.
 * @returns The increase of the rent.
 */
export const getInscrease = (irl_new?: number, irl_previous?: number): number => {
  if (!irl_new || !irl_previous) {
    return 0;
  }

  const ceil = 3.50;
  const real_increase = (irl_new - irl_previous) / irl_previous * 100;
  return Math.round(Math.min(real_increase, ceil) * 100) / 100;
}

/**
 * Get the next year.
 * @returns The next year.
 */
export const getNextYear = (irl_previous_year?: number): number => {
  if (!irl_previous_year) {
    return new Date().getFullYear();
  }
  return irl_previous_year + 1;
}

/**
 * Get the new income.
 * @returns The new income.
 */
export const getNewIncome = (previous_income?: number, irl_new?: number, irl_previous?: number, charges?: number): number => {
  if (!previous_income || !irl_new || !irl_previous || !charges) {
    return 0;
  }
  const income = (previous_income * irl_new) / irl_previous + charges;
  return parseFloat(income.toFixed(2));
}

/**
 * Get the month name.
 * @returns The month name.
 */
export const getMonthName = (month?: number): string => {
  if (!month) {
    return '';
  }
  return new Date(2010, month, 1).toLocaleString('fr-FR', { month: 'long' });
}
