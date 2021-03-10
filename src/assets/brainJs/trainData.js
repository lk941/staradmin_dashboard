const bullyingData = [];

const dataP = [
    "hit",
    "beat",
    "punch",
    "throw a punch",
    "push",
    "trip my leg",
    "make me fall",
    "slap my face",
    "spit on me",
    "steal my lunch money",
    "throw my things",
    "kick",
    "pull my hair.",
    "step my shoes",
    "sit on my bag",
    "throw my things",
    "eat my sweets"
];

const dataS = [
    "spread rumours",
    "gossip things",
    "talk behind my back.",
    "tell things that are not true",
    "unfriend",
    "expose my secrets to others",
    "spread rumours about me",
    "share my secrets",
];

const dataC = [
    "Online",
    "text messages",
    "post picture",
    "send text",
    "post a mean comment",
];

const dataV = [
    "names",
    "say I am lame",
    "loser",
    "ugly",
    "fat",
    "stupid.",
    "dumb.",
    "insult",
    "useless",
    "say I am dumb"
];

for (let i in dataP) {
    const text = dataP[i];
    bullyingData.push({ input: text, output: "Physical Bullying"});
}

for (let i in dataS) {
    const text = dataS[i];
    bullyingData.push({ input: text, output: "Social Bullying"});
}

for (let i in dataC) {
    const text = dataC[i];
    bullyingData.push({ input: text, output: "Cyberbullying"});
}

for (let i in dataV) {
    const text = dataV[i];
    bullyingData.push({ input: text, output: "Verbal Bullying"});
}

for (let i in dataFamily) {
    const text = dataFamily[i];
    moodData.push({ input: text, output: "Family"});
}

for (let i in dataFriends) {
    const text = dataS[i];
    moodData.push({ input: text, output: "Friends"});
}

for (let i in dataSchool) {
    const text = dataC[i];
    moodData.push({ input: text, output: "School"});
}

for (let i in dataOthers) {
    const text = dataOthers[i];
    moodData.push({ input: text, output: "Others"});
}

console.log(JSON.stringify(bullyingData));
console.log(JSON.stringify(moodData));

const configBully = {
    //errorThresh: 0.5,  // error threshold to reach
    iterations: 20,   // maximum training iterations
    log: true,           // console.log() progress periodically
    logPeriod: 10,       // number of iterations between logging
    learningRate: 0.5    // learning rate
};

const configMood = {
    //errorThresh: 0.5,  // error threshold to reach
    iterations: 20,   // maximum training iterations
    log: true,           // console.log() progress periodically
    logPeriod: 10,       // number of iterations between logging
    learningRate: 0.5    // learning rate
};

var bullyNet = new brain.recurrent.LSTM();
var moodNet = new brain.recurrent.LSTM();

bullyNet.train(bullyingData, configBully);
moodNet.train(moodData, configMood);

