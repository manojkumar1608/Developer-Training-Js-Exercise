function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
function findmax() {
    let number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "";
        document.getElementById('error').innerText = "Please enter valid numbers!";
        return;
    }
    const maxValue = max(number1, number2);
    document.getElementById('error').innerText = "";
    document.getElementById('result').innerText = `Max: ${maxValue}`;

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

function reverseString() {
    var inputString = document.getElementById('stringInput').value;
    var reversedString = inputString.split('').reverse().join('');
    document.getElementById('reverseString_result').innerText = reversedString;
    document.getElementById('stringInput').value = '';
}

function FindLongestWord() {
    var inputString = document.getElementById('wordInput').value;
    var wordsArray = inputString.split(',').map(word => word.trim());
    var longestWord = wordsArray.reduce((a, b) => a.length > b.length ? a : b, '');
    document.getElementById('longestSrting_result').innerText = longestWord;
    document.getElementById('wordInput').value = '';
}

// Function to load details from cookies
function loadDetails() {
    const cookies = document.cookie.split(';');
    console.log(cookies)
    if(cookies.length > 1) {
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'name') {
            document.querySelector('.header-name').innerText = decodeURIComponent(value);
        } else if (name === 'phone') {
            document.querySelector('.phone').innerHTML = `<span>Phone:</span> ${decodeURIComponent(value)}`;
        }
    });
}else{
    document.querySelector('.header-name').innerText = "Manoj Kumar";
    document.querySelector('.phone').innerHTML = `<span>Phone:</span>9908993803`;
}
}

// Function to save details in cookies
function saveDetails() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    //  cookies with an expiry date of 7 days
    document.cookie = `name=${encodeURIComponent(name)}; max-age=${7*24*60*60}`;
    document.cookie = `phone=${encodeURIComponent(phone)}; max-age=${7*24*60*60}`;
    alert('Details saved!');
    loadDetails(); 
}
document.getElementById('saveBtn').addEventListener('click', saveDetails);

loadDetails();
