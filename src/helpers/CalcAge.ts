export function CalcAge(birthDay: Date): number {
  const now = new Date();
  const beforeMonth: boolean = now.getMonth() < birthDay.getMonth();
  const beforeDay: boolean = now.getDay() < birthDay.getDay();

  if (beforeMonth && beforeDay) {
    return now.getFullYear() - birthDay.getFullYear() - 1;
  }

  return now.getFullYear() - birthDay.getFullYear();
}
