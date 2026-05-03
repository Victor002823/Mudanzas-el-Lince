const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// Embedded SVG for Visa to avoid link issues
const visaSvg = `<svg style="height: 20px; width: auto;" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8122 32H13.6811L10.4746 16H15.6057L18.8122 32Z" fill="#1A1F71"/><path d="M30.4633 16.5413C28.4616 16.1558 25.8647 16.0354 23.4611 16.0354C19.2633 16.0354 16.2917 18.061 16.2711 20.9169C16.2411 23.0567 18.3544 24.2505 19.9575 24.9625C21.6014 25.698 22.155 26.1585 22.1461 26.8091C22.1331 27.8049 20.8407 28.2505 19.6469 28.2505C18.1066 28.2505 16.7905 27.9171 15.6317 27.4262L15.0117 31.061C16.0969 31.5215 18.1722 31.907 20.315 31.907C24.7772 31.907 27.6894 29.9044 27.7275 26.8393C27.7556 24.3167 25.9922 23.0567 23.6331 22.0313C21.8211 21.2599 21.1578 20.8039 21.1667 20.1533C21.1667 19.4187 22.115 18.625 23.8994 18.625C25.4056 18.625 26.7905 18.8856 27.8686 19.324L28.3753 16.0354C29.2319 16.2558 30.015 16.4213 30.4633 16.5413Z" fill="#1A1F71"/><path d="M37.7525 16H33.8441C32.635 16 31.705 16.321 31.1739 17.478L25.3217 32H30.7011L31.7764 29.351H38.3522L38.9722 32H44L39.6389 16H37.7525ZM33.3283 25.5413L35.8317 19.324L37.2764 25.5413H33.3283Z" fill="#F7B600"/><path d="M12.1931 16L7.135 26.9141L6.5986 24.3167C5.6694 21.4613 3.0131 18.4357 0 17.1513L0.0811 17.478C2.5539 18.4116 4.8872 20.3391 5.9258 22.9141L9.1228 32H14.5367L22.25 16H12.1931Z" fill="#1A1F71"/></svg>`;

const paymentHtml = `
    <!-- Payment Methods -->
    <div class="max-w-7xl mx-auto px-8 pb-16">
        <div class="flex flex-col items-center gap-8 pt-12 border-t border-gray-200 dark:border-gray-800">
            <span class="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">Métodos de Pago</span>
            <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 transition-all duration-500">
                <div class="flex items-center hover:scale-110 transition-transform cursor-default">
                    ${visaSvg}
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style="height: 42px; width: auto;" class="hover:scale-110 transition-transform cursor-default"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style="height: 32px; width: auto;" class="hover:scale-110 transition-transform cursor-default"/>
                <div class="flex items-center gap-3 group hover:scale-110 transition-transform cursor-default">
                    <span class="material-symbols-outlined text-[32px] text-gray-600 dark:text-gray-400">account_balance</span>
                    <span class="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-tight">Transferencia</span>
                </div>
                <div class="flex items-center gap-3 group hover:scale-110 transition-transform cursor-default">
                    <span class="material-symbols-outlined text-[32px] text-gray-600 dark:text-gray-400">payments</span>
                    <span class="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-tight">Efectivo</span>
                </div>
            </div>
        </div>
    </div>
`;

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    
    if (c.includes('<!-- Payment Methods -->')) {
        const oldRegex = /<!-- Payment Methods -->[\s\S]*?<\/div>\s*<\/div>\s*(?=<\/footer>)/;
        c = c.replace(oldRegex, paymentHtml);
        fs.writeFileSync(f, c, 'utf8');
        console.log(`Final refinement for ${f}`);
    }
});
