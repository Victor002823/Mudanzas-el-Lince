const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const visaSvg = `<svg style="height: 14px; width: auto;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8122 32H13.6811L10.4746 16H15.6057L18.8122 32Z" fill="#1A1F71"/><path d="M30.4633 16.5413C28.4616 16.1558 25.8647 16.0354 23.4611 16.0354C19.2633 16.0354 16.2917 18.061 16.2711 20.9169C16.2411 23.0567 18.3544 24.2505 19.9575 24.9625C21.6014 25.698 22.155 26.1585 22.1461 26.8091C22.1331 27.8049 20.8407 28.2505 19.6469 28.2505C18.1066 28.2505 16.7905 27.9171 15.6317 27.4262L15.0117 31.061C16.0969 31.5215 18.1722 31.907 20.315 31.907C24.7772 31.907 27.6894 29.9044 27.7275 26.8393C27.7556 24.3167 25.9922 23.0567 23.6331 22.0313C21.8211 21.2599 21.1578 20.8039 21.1667 20.1533C21.1667 19.4187 22.115 18.625 23.8994 18.625C25.4056 18.625 26.7905 18.8856 27.8686 19.324L28.3753 16.0354C29.2319 16.2558 30.015 16.4213 30.4633 16.5413Z" fill="#1A1F71"/><path d="M37.7525 16H33.8441C32.635 16 31.705 16.321 31.1739 17.478L25.3217 32H30.7011L31.7764 29.351H38.3522L38.9722 32H44L39.6389 16H37.7525ZM33.3283 25.5413L35.8317 19.324L37.2764 25.5413H33.3283Z" fill="#F7B600"/><path d="M12.1931 16L7.135 26.9141L6.5986 24.3167C5.6694 21.4613 3.0131 18.4357 0 17.1513L0.0811 17.478C2.5539 18.4116 4.8872 20.3391 5.9258 22.9141L9.1228 32H14.5367L22.25 16H12.1931Z" fill="#1A1F71"/></svg>`;
const mastercardSvg = `<svg style="height: 20px; width: auto;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="24" r="12" fill="#EB001B"/><circle cx="32" cy="24" r="12" fill="#F79E1B"/><path d="M24 14.6182C26.0456 16.9455 27.2727 19.9818 27.2727 23.3091C27.2727 26.6364 26.0456 29.6727 24 32C21.9544 29.6727 20.7273 26.6364 20.7273 23.3091C20.7273 19.9818 21.9544 16.9455 24 14.6182Z" fill="#FF5F00"/></svg>`;
const paypalSvg = `<svg style="height: 18px; width: auto;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.4722 14.1667C37.4722 17.5 35.8056 20.8333 32.4722 23.3333C29.1389 25.8333 24.9722 26.6667 20.8056 26.6667H15.8056L14.1389 33.3333C14.0556 33.6667 13.8056 33.9167 13.4722 34H9.30556C8.88889 34 8.55556 33.6667 8.63889 33.25L13.1389 15.25C13.2222 14.9167 13.4722 14.6667 13.8056 14.5833C15.3889 14.25 18.0556 14.1667 20.8056 14.1667C24.9722 14.1667 29.1389 15 32.4722 17.5C35.8056 20 37.4722 22.5 37.4722 25.8333V25L37.4722 14.1667Z" fill="#253B80"/><path d="M37.4722 25.8333C37.4722 29.1667 35.8056 32.5 32.4722 35C29.1389 37.5 24.9722 38.3333 20.8056 38.3333H15.8056L14.1389 45C14.0556 45.3333 13.8056 45.5833 13.4722 45.6667H9.30556C8.88889 45.6667 8.55556 45.3333 8.63889 44.9167L13.1389 26.9167C13.2222 26.5833 13.4722 26.3333 13.8056 26.25C15.3889 25.9167 18.0556 25.8333 20.8056 25.8333C24.9722 25.8333 29.1389 26.6667 32.4722 29.1667C35.8056 31.6667 37.4722 34.1667 37.4722 37.5V36.6667L37.4722 25.8333Z" fill="#179BD7"/><path d="M23.1389 26.6667C27.3056 26.6667 31.4722 25.8333 34.8056 23.3333C38.1389 20.8333 39.8056 17.5 39.8056 14.1667C39.8056 10.8333 38.1389 7.5 34.8056 5C31.4722 2.5 27.3056 1.66667 23.1389 1.66667H11.4722C11.0556 1.66667 10.7222 2 10.8056 2.41667L13.8889 14.75C13.9722 15.0833 14.2222 15.3333 14.5556 15.4167L16.2222 26.25C16.3056 26.5833 16.5556 26.8333 16.8889 26.9167H23.1389V26.6667Z" fill="#179BD7"/></svg>`;

const paymentHtml = `
    <!-- Payment Methods -->
    <div class="max-w-7xl mx-auto px-8 pb-12">
        <div class="flex flex-col items-center gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
            <span class="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Métodos de Pago</span>
            <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                ${visaSvg}
                ${mastercardSvg}
                ${paypalSvg}
                <div class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px]">account_balance</span>
                    <span class="text-[9px] font-bold text-gray-500 uppercase tracking-tight">Transferencia</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px]">payments</span>
                    <span class="text-[9px] font-bold text-gray-500 uppercase tracking-tight">Efectivo</span>
                </div>
            </div>
        </div>
    </div>
`;

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    // Replace the old one with the new one using SVGs and inline styles for absolute certainty
    if (c.includes('<!-- Payment Methods -->')) {
        const oldRegex = /<!-- Payment Methods -->[\s\S]*?<\/div>\s*<\/div>\s*(?=<\/footer>)/;
        c = c.replace(oldRegex, paymentHtml);
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Final SVG fix for ${f}`);
    }
});
