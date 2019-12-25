const exec = require('child_process').exec;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the git url of the new node? ', (url) => {
    console.log('Initializing the template update repo');
    exec('git remote add template-repo git@github.com:Towbe/serverless-apollo-template.git');
    console.log('Initializing origin');
    exec('git remote rm origin');
    exec('git remote add origin ' + url);
    exec('git branch --set-upstream-to origin/master');
    console.log('Pushing the first version');
    exec('git push');
    console.log('First version pushed');
});
