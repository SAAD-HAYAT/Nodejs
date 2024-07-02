const reject = require("underscore/cjs/reject.js");

console.log('Before');
// getUser(1)
// .then(user => getRepositories(user.gitHubUsername))
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log('Commits', commits))
// .catch(err => console.log('Error', err.message));

// Async and Await
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log('Commits', commits);
    } catch (err) {
        console.log('Error', err. message);
    }

}

displayCommits();
console.log('After');

// function displayCommits(commits){
//     console.log(commits);
// }

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Repos:', repo);
            resolve(['commit']);
        },2000);
    });
    
}

// function getRepositories(user){
//     console.log('User:', user);
//     getRepositories(user.gitHubUsername, displayRepositories);
// }
function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from the database...');
            resolve({id: id, gitHubUsername: 'saad'});
        },2000);
    });
    
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        // const array = ;
        setTimeout(() => {
            // resolve(['repo1', 'repo2', 'repo3']);
            console.log('github api ...')
            reject('Something went wrong');
        },2000);
    });
    
}