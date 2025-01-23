const boxElement = document.querySelector('.box');
const spinnerElement = document.querySelector('.spinner');

const filePath = ['./scripts/selfDevelopment.json', './scripts/focus.json', './scripts/love.json'];


export function fetchQuote() {
    const filePicker = Math.floor(Math.random() * filePath.length);

    fetch(filePath[filePicker]).then((response) => {
        return response.json();
    }).then((data) => {
        const quote = data[Math.floor(Math.random() * 9)];

        boxElement.style.opacity = '1';
        spinnerElement.style.animation = 'spinner 2s ease-in-out infinite';
        updateData(quote);
    });
}

const quoteInfo = document.querySelector('.quote-info');
const authorContainer = document.querySelector('.auto-info');

let timeoutId;
let timeoutId2;

function updateData(param) {

    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);
    
    timeoutId = setTimeout(() => {
        quoteInfo.innerText = param.quote;
        authorContainer.innerHTML = `
            <span></span>
            <div class="author">${param.author}</div>
        `;

        boxElement.style.opacity = '';
    }, 1200);

    timeoutId2 = setTimeout(() => {
        spinnerElement.style.animation = '';
    }, 1600);
}

export function resetControls() {

const xElement = document.querySelector('.x-icon');
const authorInfo = document.querySelector('.author');


xElement.addEventListener('click', () => {
    window.open("https://twitter.com/intent/tweet?text=" + quoteInfo.textContent + '----by ' + authorInfo.textContent, "tweet window", "width=600", "height=300");
});

window.addEventListener('load', () => {
    fetchQuote();
});


const heartElement = document.querySelector('.heart-icon');
const noticeContainer = document.querySelector('.notice-bar');
let timeId;

heartElement.addEventListener('click', () => {
    clearTimeout(timeId);

    if (!heartElement.classList.contains('loved')) {
        heartElement.classList.add('loved');
        noticeContainer.style.setProperty('right', '10px');

        timeId = setTimeout(() => {
            noticeContainer.style.setProperty('right', '');
        }, 1200);

    } else {
        heartElement.classList.remove('loved');
    }
});

}

resetControls();