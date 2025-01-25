    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
      });
    });

    // Temperature Conversion
    const tempInput = document.getElementById('temp-input');
    const tempResult = document.getElementById('temp-result');

    tempInput.addEventListener('input', () => {
      const celsius = parseFloat(tempInput.value);
      if (isNaN(celsius)) {
        tempResult.textContent = 'Result: --';
        return;
      }
      const fahrenheit = (celsius * 9 / 5) + 32;
      tempResult.textContent = `Result: ${fahrenheit.toFixed(2)} °F`;
    });

    // Length Conversion
    const lengthInput = document.getElementById('length-input');
    const lengthResult = document.getElementById('length-result');

    lengthInput.addEventListener('input', () => {
      const meters = parseFloat(lengthInput.value);
      if (isNaN(meters)) {
        lengthResult.textContent = 'Result: --';
        return;
      }
      const feet = meters * 3.28084;
      lengthResult.textContent = `Result: ${feet.toFixed(2)} Feet`;
    });

    // Weight Conversion
    const weightInput = document.getElementById('weight-input');
    const weightResult = document.getElementById('weight-result');

    weightInput.addEventListener('input', () => {
      const kilograms = parseFloat(weightInput.value);
      if (isNaN(kilograms)) {
        weightResult.textContent = 'Result: --';
        return;
      }
      const pounds = kilograms * 2.20462;
      weightResult.textContent = `Result: ${pounds.toFixed(2)} Pounds`;
    });