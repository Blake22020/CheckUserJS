const readline = require('readline');  
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
});  

let userName = 'gh';

async function getGithubUser() {
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();

    return data;
}

rl.question(`What's your user name?  `, name => {  
    userName = name;
    let user = getGithubUser();
    user.then((data) => {
        if (data.message) {
            console.log(data.message);
        } else {
            console.log(`User: ${data.name}`);
            console.log(`Bio: ${data.bio}`);
            console.log(`Followers: ${data.followers}`);
            console.log(`Following: ${data.following}`);
            console.log(`Public Repos: ${data.public_repos}`);
            console.log(`Location: ${data.location}`);
            if (data.company) {
                console.log(`Company: ${data.company}`);
            }
            if (data.blog) {
                console.log(`Website: ${data.blog}`);
            } else {
                console.log(`Website: N/A`);
            }
            
        }
    })
    rl.close();  
});
