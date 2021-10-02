export function getSammyAge(): number {
  const today = new Date();
  let age = today.getFullYear() - 2000;
  const m = today.getMonth() - 2;
  if (m < 0 || (m === 0 && today.getDate() < 1)) {
    age--;
  }
  return age;
}
