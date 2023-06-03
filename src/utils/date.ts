export const toLocalDate = (date: Date | string) => (date instanceof Date ? date : new Date(date)).toLocaleDateString('de-De', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});