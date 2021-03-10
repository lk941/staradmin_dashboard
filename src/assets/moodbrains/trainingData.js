trainFive(){
    var dataArr = [
      // {input:"i feel annoyed",output:{angry:1}},
      // {input:"i hate my friends",output:{angry:1}},
      // {input:"i am angry",output:{angry:1}},
      // {input:"everyone is annoying",output:{angry:1}},
      // {input:"Class is very noisy",output:{angry:1}},
      // {input:"i feel angry",output:{angry:1}},

      

      // {input:"i feel depressed",output:{sad:1}},
      // {input:"i failed my test",output:{sad:1}},
      // {input:"i feel lonely",output:{sad:1}},
      // {input:"i did not do well for my test",output:{sad:1}},
      // {input:"i did not enjoy class",output:{sad:1}},
      // {input:"school is boring",output:{sad:1}},
      // {input:"bullied",output:{sad:1}},
      // {input:"bully",output:{sad:1}},
      // {input:"Nobody wants to be my friend",output:{sad:1}},
      // {input:"I have no friends",output:{sad:1}},
      // {input:"i feel sad",output:{sad:1}},

      // {input:"i am happy",output:{happy:1}},
      // {input:"i am delighted",output:{happy:1}},
      // {input:"i am having fun",output:{happy:1}},
      // {input:"i feel cheerful",output:{happy:1}},
      // {input:"i had fun",output:{happy:1}},

      // {input:"i feel happy",output:{happy:1}},
      // {input:"i am excited",output:{happy:1}},
      // {input:"i enjoyed class",output:{happy:1}},
      // {input:"i am comfortable",output:{happy:1}},
      // {input:"i passed my test",output:{happy:1}},
      // {input:"i did well for my test",output:{happy:1}},
      // {input:"lucky",output:{happy:1}},
     /* {input:"i am angry",output:{angry:1}},
      {input:"i am furious",output:{angry:1}},
      {input:"i am annoyed",output:{angry:1}},
      {input:"i hate school",output:{angry:1}},
      {input:"everyone is mean",output:{angry:1}},
      {input:"i am irritated",output:{angry:1}},

      {input:"i am sad",output:{sad:1}},
      {input:"i got bullied",output:{sad:1}},
      {input:"i am alone",output:{sad:1}},
      {input:"i am unhappy",output:{sad:1}},
      {input:"i feel alone",output:{sad:1}},
      {input:"i am disappointed",output:{sad:1}},

      {input:"i am scared",output:{fear:1}},
      {input:"i feel scared",output:{fear:1}},
      {input:"i feel worried",output:{fear:1}},
      {input:"i feel nervous",output:{fear:1}},
      {input:"afraid of heights",output:{fear:1}},
      {input:"fear of scary objects",output:{fear:1}}, */
      // {input:"i am scared of class",output:{fear:1}},
      // {input:"Teacher is scary",output:{fear:1}},
      //{input:"afraid of friends",output:{fear:1}},

      {input: "cannot do my homework", output: {School:1}},
      {input: "tuition tonight", output: {School:1}},
      {input: "long day at school", output: {School:1}},
      {input: "a lot of homework todo", output: {School:1}},
      {input: "school is tough", output: {School:1}},
      {input: "didnt nap today", output: {Others:1}},
      {input: "it is raining", output: {Others:1}},
      {input: "stuck in a rut", output: {Others:1}},
      {input: "friend don't want to talk to me", output: {Friends:1}},
      {input: "not enough sleep", output: {Others:1}},
      {input: "cannot finish my homework", output: {School:1}},
      {input: "mummy give me too much extra homework to do", output: {Family:1}},
      {input: "mummy and daddy fight", output: {Family:1}},
      {input: "mummy keep shouting", output: {Family:1}},
      {input: "falling sick", output: {Others:1}},
      {input: "caught a flu", output: {Others:1}},
      {input: "went to doctor", output: {Others:1}},
      {input: "drowsy from medicine", output: {Others:1}},
      {input: "too many tuitions", output: {School:1}},
      {input: "long day in school", output: {School:1}},
      {input: "i'm a failure", output: {Others:1}},
      {input: "mummy never cook dinner", output: {Family:1}},
      {input: "friends never wait to go recess with me", output: {Friends:1}},
      {input: "friends laugh at me when I fell", output: {Friends:1}},
      {input: "Aaron said I was not funny enough", output: {Friends:1}},
      {input: "daddy beat me because I never get first in class", output: {Family:1}},
      {input: "my friends lied to me", output: {Friends:1}},
      {input: "mummy keep signing me up for extra classes", output: {School:1}},
      {input: "friends always ask me help to carry their things", output: {Friends:1}},     
      {input: "friends call me dumb", output: {Friends:1}},
      {input: "brother hit me", output: {Family:1}},
      {input: "sister call me fat", output: {Family:1}},

    ] as brain.INeuralNetworkTrainingData[];

    console.log(dataArr);
    //console.log(this.serialize(dataArr));

    let trainedNet;

    let net = new brain.NeuralNetwork({hiddenLayers:[14,7]});
    //let net = new brain.NeuralNetwork();
    let bleh = new brain.NeuralNetwork()
    net.train(this.serialize(dataArr),{
      log:details => console.log(details),logPeriod:1000,iterations:50000,learningRate:0.9,errorThresh:0.001
    });

    //trainedNet = net.toFunction();
    console.log(net.toJSON());
    let jsonBrain = net.toJSON();
    bleh.fromJSON(jsonBrain);



    let results = bleh.run(this.blahblah(this.encode("i hate everyone")));
    //console.log(this.encode("happy"))
    //console.log(this.maxlength);
    console.log("I hate everyone");
    console.log("result:")
    console.log(results)


  }