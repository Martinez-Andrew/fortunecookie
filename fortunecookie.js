let who = ['Your dog', 'Your grandma', 'Your turtle', 'Your bird', 'You', 'Your mother', 'Your father', 'Your cat', 'Your fish'];
let fortune = ['be a millionaire', 'find true love', 'go to Japan', 'have a boy', 'have a girl', 'have a great day', 'travel the world', 'get their dream job', 'eat an ice cream', 'read a fantastic book'];
let when = ['today', 'tomorrow', 'next week', 'next month', 'next year', 'in 10 years'];

//Returns random position within array
function getRandomPosition(who) {
    if (!Array.isArray(who) || who.length === 0) {
        console.log("Invalid array: must be a non-empty array.");
    }
    return Math.floor(Math.random() * who.length);
}

const randomIndex = getRandomPosition(who);
console.log(`${who[randomIndex]} will ${fortune[getRandomPosition(fortune)]} ${when[getRandomPosition(when)]}.`);
