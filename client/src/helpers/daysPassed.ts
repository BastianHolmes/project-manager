export function daysPassed(dateString: string): number {
  const currentDate: Date = new Date();
  const dateParts: string[] = dateString.split(".");
  const date: Date = new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
  const timeDiff: number = currentDate.getTime() - date.getTime();
  const days: number = Math.floor(timeDiff / (1000 * 3600 * 24));
  return days;
}
