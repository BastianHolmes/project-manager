export function formatDate(dateString: string): string {
  if (dateString === "") {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${day < 10 ? "0" + day : day}.${
      month < 10 ? "0" + month : month
    }.${year}`;

    return formattedDate;
  }

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day < 10 ? "0" + day : day}.${
    month < 10 ? "0" + month : month
  }.${year}`;

  return formattedDate;
}
