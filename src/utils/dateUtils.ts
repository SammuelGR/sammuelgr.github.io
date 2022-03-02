export function getSammyAge(): number {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // 1 ~ 12
  const currentYear = today.getFullYear();

  let age = currentYear - 2000;

  if (currentMonth === 1) age--;

  return age;
}
