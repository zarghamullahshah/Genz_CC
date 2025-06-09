const cardDisplay = document.getElementById('cardDisplay');
const singleBtn = document.getElementById('singleBtn');
const multiBtn = document.getElementById('multiBtn');

const cardTypes = ['Visa', 'MasterCard', 'Amex', 'Discover'];
const banks = ['GenZ Bank', 'Future Bank', 'NeoBank', 'Digital Trust'];
const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(length) {
  let num = '';
  for (let i = 0; i < length; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}

function generateCardNumber() {
  // Simplified random card number starting with common prefixes
  const prefix = getRandomItem(['4', '5', '3', '6']); // Visa, MasterCard, Amex, Discover prefixes
  let number = prefix + getRandomNumber(15);
  return number.slice(0, 16);
}

function generateExpiry() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5) + 1).slice(2);
  return `${month}/${year}`;
}

function generateCVV(cardType) {
  return cardType === 'Amex' ? getRandomNumber(4) : getRandomNumber(3);
}

function createCard() {
  const cardType = getRandomItem(cardTypes);
  const bank = getRandomItem(banks);
  const currency = getRandomItem(currencies);
  const cardNumber = generateCardNumber();
  const expiry = generateExpiry();
  const cvv = generateCVV(cardType);

  return `
    <div class="card">
      <h3>${bank}</h3>
      <p><strong>Card Type:</strong> ${cardType}</p>
      <p><strong>Card Number:</strong> ${cardNumber.match(/.{1,4}/g).join(' ')}</p>
      <p><strong>Expiry:</strong> ${expiry}</p>
      <p><strong>CVV:</strong> ${cvv}</p>
      <p><strong>Currency:</strong> ${currency}</p>
    </div>
  `;
}

function renderCards(count) {
  cardDisplay.innerHTML = '';
  for (let i = 0; i < count; i++) {
    cardDisplay.innerHTML += createCard();
  }
}

singleBtn.addEventListener('click', () => renderCards(1));
multiBtn.addEventListener('click', () => renderCards(3));
