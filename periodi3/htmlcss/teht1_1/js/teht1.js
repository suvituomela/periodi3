const puna = document.querySelector('#pun');
const kelta = document.querySelector('#kelt');
const vihre = document.querySelector('#vihr');

puna.addEventListener('click', (evt) => {
  const teksti = document.querySelector('#vari');
  vari.innerHTML = 'punaista valoa';
  clickCounter['up'] += 1;
  const maara = document.querySelector('#maara');
  maara.innerHTML = 'Punainen: ' + clickCounter.up + '<br>Keltainen: ' + clickCounter.middle + '<br>Vihreä: ' + clickCounter.low;
  console.log(window.getComputedStyle(puna, null).getPropertyValue('background-color'));
});

kelta.addEventListener('click', (evt) => {
  const teksti = document.querySelector('#vari');
  vari.innerHTML = 'keltaista valoa';
  clickCounter['middle'] += 1;
  const maara = document.querySelector('#maara');
  maara.innerHTML = 'Punainen: ' + clickCounter.up + '<br>Keltainen: ' + clickCounter.middle + '<br>Vihreä: ' + clickCounter.low;
  console.log(window.getComputedStyle(puna, null).getPropertyValue('background-color'));
});

vihre.addEventListener('click', (evt) => {
  const teksti = document.querySelector('#vari');
  vari.innerHTML = 'vihreää valoa';
  clickCounter['low'] += 1;
  const maara = document.querySelector('#maara');
  maara.innerHTML = 'Punainen: ' + clickCounter.up + '<br>Keltainen: ' + clickCounter.middle + '<br>Vihreä: ' + clickCounter.low;
  console.log(window.getComputedStyle(puna, null).getPropertyValue('background-color'));
});

const clickCounter =
    {
      up: 0,
      middle: 0,
      low: 0,
    };