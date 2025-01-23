import { fetchQuote, resetControls } from "./generate-quote.js";

const getElement = document.querySelector('.js-get-btn');
const toolsContainer = document.querySelector('.tools-container');

getElement.addEventListener('click', () => {
    toolsContainer.innerHTML = `
         <div class="tools">
                <div title="Tweet">
                    <svg class="icon x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </div>
                
                <div title="react">
                    <svg class="icon heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                </div>
            </div>
    `;

    resetControls();
    fetchQuote();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchQuote();
    }
});


