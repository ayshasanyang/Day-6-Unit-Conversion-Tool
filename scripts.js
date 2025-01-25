const conversionType = document.getElementById('conversion-type');
const inputValue = document.getElementById('input-value');
const result = document.getElementById('result');

inputValue.addEventListener('input', updateConversion);
conversionType.addEventListener('change', updateConversion);

function updateConversion() {
  const type = conversionType.value;
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    result.textContent = 'Result: --';
    return;
  }

  let convertedValue;

  switch (type) {
    case 'temperature':
      convertedValue = (value * 9/5) + 32;
      result.textContent = `Result: ${convertedValue.toFixed(2)} °F`;
      break;
    case 'length':
      convertedValue = value * 3.28084;
      result.textContent = `Result: ${convertedValue.toFixed(2)} Feet`;
      break;
    case 'weight':
      convertedValue = value * 2.20462;
      result.textContent = `Result: ${convertedValue.toFixed(2)} Pounds`;
      break;
    default:
      result.textContent = 'Result: --';
  }
}