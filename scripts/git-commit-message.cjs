#!/usr/bin/env node
const { execSync } = require('child_process');
const readline = require('readline');

// Получаем закоммиченные изменения
const changes = execSync('git diff --name-only --cached').toString();

let defaultMessage = 'chore: Committing changes';
if (/^lib\//m.test(changes)) {
    defaultMessage = 'feat: New functions or changes in the source files';
} else if (/^test\//m.test(changes)) {
    defaultMessage = 'test: Changes in tests';
} else if (/fix/m.test(changes)) {
    defaultMessage = 'fix: Corrections of bugs';
}

console.log(`\nThe proposed comment: "${defaultMessage}"`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a comment (or Enter to use the proposed): ', (input) => {
    const message = input.trim() || defaultMessage;

    try {
        execSync(`git add .`);
        execSync(`git commit -m "${message}"`);
        console.log(`✅ Commit was made: ${message}`);
    } catch (error) {
        console.error('❌ Error at the commander:', error.message);
    }

    rl.close();
});
