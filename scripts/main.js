// POINTERS TO HTML
const loadingContainer = document.getElementById('loadingContainer');
const loadingBar = document.getElementById('loadingBar');
const loadingText = document.getElementById('loadingText');
const buttonContainer = document.getElementById('buttonContainer');

function loadingStart() {
    loadingContainer.classList.remove('hidden');
    buttonContainer.classList.add('hidden');
    loading();
}

function loading() {
    let startCounter = 0;
    const intervalId = setInterval(function () {
    startCounter = startCounter + 10;
    loadingIncrease(startCounter)
    if (startCounter == 100) {
        clearInterval(intervalId);
        loadingEnd();
    }
    }, 1000); 
}

function loadingIncrease(percentage) {
    loadingText.innerHTML = `${percentage}%`;
    loadingBar.style.width = `${percentage}%`;    
}

function loadingEnd() {
    buttonContainer.classList.remove('hidden');
    loadingContainer.classList.add('hidden');
}

buttonContainer.addEventListener('click', loadingStart);