const exec = require('child_process').exec;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

exec('git remote add template-repo git@github.com:Towbe/serverless-apollo-template.git');

readline.question('What is the git url of the new node', (url) => {
    exec('git remote add origin ' + url);
    exec('git push');
});
