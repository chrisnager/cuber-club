import GiiKER from 'giiker';

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

button.addEventListener('click', async () => {
  button.disabled = true;
  const giiker = await GiiKER.connect();
  button.textContent = 'Connected!';
  giiker.on('move', move => {
    textarea.value += ` ${move.notation}`;
  });
});
