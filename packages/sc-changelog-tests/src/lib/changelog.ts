export function getRandomProduct() {
  let productId = '';

  const randomnumber = Math.floor(Math.random() * (11 - 1 + 1) + 1); //TODO:

  console.log('random product: ' + randomnumber);

  switch (randomnumber) {
    case 1:
      productId = 'KBtlU-ZzYkeYcafWoxyuNQ'; //Sitecore Connect
      break;
    case 2:
      productId = 'uAwJlln4BUqyOtpExq1O5g'; //Sitecore Personalize
      break;
    case 3:
      productId = 'S3Nt7UJGiUcKRji3ERDpNEA'; //Sitecore CDP
      break;
    case 4:
      productId = 'i_EBHSPyF0WvLmpKn99Byw'; //Sitecore Send
      break;
    case 5:
      productId = 'u-geEE0EVkiusuAZ1D0EeQ'; //Sitecore Commerce Order Cloud
      break;
    case 6:
      productId = 'L24AbSEPSUKkDQTpPT7uoA'; //Sitecore Discover
      break;
    case 7:
      productId = '4U7YVAy4V0mH0fA7foawJw'; //Sitecore Search
      break;
    case 8:
      productId = 'ZagATPres0mB9V0eVoqk2A'; //Content Hub Operations
      break;
    case 9:
      productId = 'K1VyMQaExUGe-OD6eoSvdA'; //Content Hub DAM
      break;
    case 10:
      productId = 'n47NXxNFxUqPttUxoFaRyA'; //Content Hub ONE
      break;
    case 11:
      productId = 'av_GqshF5U2kL8XMGjf-Xw'; //XM Cloud
      break;
  }

  const product = [
    {
      id: productId,
      relatedType: 'Content',
    },
  ];

  return product;
}

export function getRandomChangeType() {
  let changeTypeId = '';
  const randomnumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomnumber) {
    case 1:
      changeTypeId = 'jNZQWrssyEaU7gwlIYpJnQ'; //Bugfix
      break;
    case 2:
      changeTypeId = 'bPCLEiNA4kmJspgn4lmizA'; //New Feature
      break;
    case 3:
      changeTypeId = 'UKvjuaa7QEC3ipciF1O_ag'; //Improvement
      break;
  }
  const changeType = [
    {
      id: changeTypeId,
      relatedType: 'Content',
    },
  ];

  return changeType;
}
