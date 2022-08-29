

function generateRandomInsult () {
    let randomBodyParts = ['Face', 'Nose', 'Eyes', 
    'Tongue', 'Leg', 'Hair', 'Finger', 'Shoulder'];
    let randomAdjectives = ['Smelly', 'Boring', 'Stupid', 
    'Dirt', 'Spoilt', 'Lose', 'Bitter', 'Decay'];
    let randomWords = ["Fly", "Marmot", "Stick", 
    "Monkey", "Rat", 'Book', 'Bucket', 'House'];

    // joining all the random strings into a sentence:
    let randomString = 'your ' + 
    pickRandomWord(randomBodyParts) + ' is like a ' 
    + pickRandomWord(randomAdjectives) + ' ' 
    + pickRandomWord(randomWords) + '!';

    return randomString;
};
alert(generateRandomInsult());

function pickRandomWord (words) {
    return words[Math.floor(Math.random() * words.length)]
};