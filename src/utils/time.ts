export function convertTimestampToDateTime(
  unixTimeStamp: string | number,
): string {
  const date = new Date(unixTimeStamp);
  return `${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth() + 1}`.slice(
    -2,
  )}/${date.getFullYear()} - ${`0${date.getHours()}`.slice(
    -2,
  )}:${`0${date.getMinutes()}`.slice(-2)}`;
}
