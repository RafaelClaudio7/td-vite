export function validatePassword(password: string): boolean {
  const regex = /^(?=.*[A-Z])(?=.*[@])[a-zA-Z0-9@]{7,}$/;
  return regex.test(password);
}
