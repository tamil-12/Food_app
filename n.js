const crypto = require('crypto');

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
  const password = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password.push(characters.charAt(randomIndex));
  }

  return password.join('');
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log('Generated Password:', randomPassword);

