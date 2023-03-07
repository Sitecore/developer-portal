export function generateItemId(length: number) {
  let result = 'SEBW-TEST-chlog-';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function generateRandomDate() {
  const year = Math.floor(Math.random() * (2023 - 2022 + 1) + 2022);
  const month = Math.floor(Math.random() * (9 - 3 + 1) + 3);
  const day = Math.floor(Math.random() * (30 - 10 + 1) + 10);

  console.log('Date: ' + year + '-' + month + '-' + day);

  const dateString = year + '-0' + month + '-' + day + 'T10:20:30Z';

  console.log(dateString);

  return new Date(dateString);
}
