const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const paymentHtml = `
    <!-- Payment Methods -->
    <div class="max-w-7xl mx-auto px-8 pb-16">
        <div class="flex flex-col items-center gap-8 pt-12 border-t border-gray-200 dark:border-gray-800">
            <span class="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500">Métodos de Pago</span>
            <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 transition-all duration-500">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style="height: 28px; width: auto; filter: brightness(0.9);" class="hover:scale-110 transition-transform cursor-default"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style="height: 42px; width: auto;" class="hover:scale-110 transition-transform cursor-default"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style="height: 32px; width: auto;" class="hover:scale-110 transition-transform cursor-default"/>
                <div class="flex items-center gap-3 group hover:scale-105 transition-transform">
                    <span class="material-symbols-outlined text-[32px] text-gray-600 dark:text-gray-400">account_balance</span>
                    <span class="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-tighter">Transferencia</span>
                </div>
                <div class="flex items-center gap-3 group hover:scale-105 transition-transform">
                    <span class="material-symbols-outlined text-[32px] text-gray-600 dark:text-gray-400">payments</span>
                    <span class="text-[12px] font-black text-gray-600 dark:text-gray-400 uppercase tracking-tighter">Efectivo</span>
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
        console.log(`HUGE fix for ${f}`);
    }
});
