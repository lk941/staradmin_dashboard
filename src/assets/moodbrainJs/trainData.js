const moodData = [];

const dataFamily = [
    "mummy give me too much extra homework to do",
    "mummy and daddy fight",
    "mummy keep shouting",
    "mummy never cook dinner",
    "brother hit me",
    "daddy beat me because I never get first in class"
];

const dataFriends = [
    "friend don't want to talk to me",
    "friends never wait to go recess with me",
    "friends laugh at me when I fell",
    "Aaron said I was not funny enough",
    "my friends lied to me",
    "friends always ask me help to carry their things",
    "friends call me dumb",
];

const dataSchool = [
    "cannot do my homework",
    "long day at school",
    "tuition tonight",
    "a lot of homework todo",
    "school is tough",
    "cannot finish my homework",
    "too many tuitions",
    "long day in school",
    "mummy keep signing me up for extra classes",
];

const dataOthers = [
    "didnt nap today",
    "it is raining",
    "stuck in a rut",
    "not enough sleep",
    "falling sick",
    "caught a flu",
    "went to doctor",
    "drowsy from medicine",
    "i'm a failure"
];

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

console.log(JSON.stringify(moodData));

const configMood = {
    //errorThresh: 0.5,  // error threshold to reach
    iterations: 20,   // maximum training iterations
    log: true,           // console.log() progress periodically
    logPeriod: 10,       // number of iterations between logging
    learningRate: 0.5    // learning rate
};

var moodNet = new brain.recurrent.LSTM();

moodNet.train(moodData, configMood);

