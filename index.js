const toggleEl = document.getElementById('darkmode-toggle');
const generatePassBtn = document.getElementById('generate-pass-btn');
const passContOne = document.getElementById('generated-pass-container-one');
const passContTwo = document.getElementById('generated-pass-container-two');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const isDarkModeNow = body.classList.contains('dark-mode');

    if (isDarkModeNow) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

toggleEl.addEventListener('click', toggleDarkMode);

function generateRandPass() {
    let password = "";
    for (let i = 0; i < 8; i++) {
        let randomInt = Math.floor(Math.random() * characters.length);
        password += characters[randomInt];
    }
    return password;
}

generatePassBtn.addEventListener('click', () => {
    passContOne.textContent = generateRandPass();
    passContTwo.textContent = generateRandPass();
});
