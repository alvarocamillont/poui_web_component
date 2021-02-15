document
  .querySelector('button')
  .addEventListener('click', () => toggleStyles());

function toggleStyles() {
  const styles = getComputedStyle(document.documentElement);
  const colorValue = styles.getPropertyValue('--primary-color');

  if (colorValue === 'green') {
    document.documentElement.style.setProperty('--primary-color', 'blue');
  } else {
    document.documentElement.style.setProperty('--primary-color', 'green');
  }
}
