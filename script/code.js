function convertTemperature() {
    const inputValue = document.querySelector('.inputValue').value;
    const inputUnit = document.querySelector('.inputUnit').value;
    let result;

    if (isNaN(inputValue) || inputValue === '') {
        result = 'Please enter a valid number';
    } else {
        const value = parseFloat(inputValue);

        if (inputUnit === 'Celsius') {
            result = `${value} °C is ${(value * 9/5 + 32).toFixed(2)} °F`;
        } else if (inputUnit === 'Fahrenheit') {
            result = `${value} °F is ${((value - 32) * 5/9).toFixed(2)} °C`;
        }
    }
    
    document.querySelector('.result').innerText = result;
}