#!/usr/bin/env node
const { execSync } = require('child_process');
const readline = require('readline');

// Получаем закоммиченные изменения
const changes = execSync('git diff --name-only --cached').toString();

let defaultMessage = 'chore: коммит изменений';
if (/^lib\//m.test(changes)) {
    defaultMessage = 'feat: новые функции или изменения в исходных файлах';
} else if (/^test\//m.test(changes)) {
    defaultMessage = 'test: изменения в тестах';
} else if (/fix/m.test(changes)) {
    defaultMessage = 'fix: исправления багов';
}

console.log(`\nПредложенный комментарий: "${defaultMessage}"`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите комментарий (или Enter для использования предложенного): ', (input) => {
    const message = input.trim() || defaultMessage;

    try {
        execSync(`git add .`);
        execSync(`git commit -m "${message}"`);
        console.log(`✅ Коммит выполнен: ${message}`);
    } catch (error) {
        console.error('❌ Ошибка при коммите:', error.message);
    }

    rl.close();
});
