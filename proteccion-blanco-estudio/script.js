const marketButtons = document.querySelectorAll('[data-market]');
const competitorCards = document.querySelectorAll('[data-country]');

marketButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const market = button.dataset.market;
    marketButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    competitorCards.forEach((card) => {
      card.classList.toggle('is-hidden', market !== 'all' && card.dataset.country !== market);
    });
  });
});

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copiado ✓';
    } catch {
      button.textContent = 'Selecciona y copia';
    }
    window.setTimeout(() => { button.textContent = original; }, 1800);
  });
});
