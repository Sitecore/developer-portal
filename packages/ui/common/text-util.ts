export function truncateString(str: string, maxLength: number, appendMoreIndiation?: boolean): string {
  if (str.length <= maxLength) {
    return str;
  }

  const lastSpaceIndex = str.lastIndexOf(' ', maxLength);
  let returnValue: string;
  if (lastSpaceIndex === -1) {
    // If there is no space before the maxLength, just return the substring up to maxLength.
    returnValue = str.substring(0, maxLength);
  } else {
    // Return the substring up to the last space before maxLength.
    returnValue = str.substring(0, lastSpaceIndex);
  }

  if (appendMoreIndiation) return returnValue + ' [..]';

  return returnValue;
}
