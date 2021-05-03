var firstQuestionResult = window.localStorage.getItem("firstQuestion") === 'true';
var secondQuestionResult = window.localStorage.getItem("secondQuestion") === 'true';
var thirdQuestionResult = window.localStorage.getItem("thirdQuestion") === 'true';

var testResult = document.getElementById("test-result");

console.log("first question: ", firstQuestionResult);

function displayResults() {
    let results = [firstQuestionResult, secondQuestionResult, thirdQuestionResult];
    console.log("results are: ", results);


    switch (results.toString()) {
        //true: switch is on the right
        //false: switch is no the left
        case [true, true, true].toString():
            console.log("matched");
            testResult.innerHTML = "Codependent Relationships:A codependent relationship means that one (or more likely both) of you are reliant on the other to function.";
            break;
        case [true, true, false].toString():
            testResult.innerHTML = "Independent Relationships:The flip side of the codependent relationship is the independent relationship. Like we said, independence is a good thing, but again, it’s about finding a balance.";
            break;
        case [true, false, false].toString():
            testResult.innerHTML = "Dominant/Submissive Relationships:One person has zero empathy and sees the relationship as a means to get whatever they want.The other has no self-confidence and sees the relationship as a means to complete themselves.";
            break;
        case [false, false, false].toString():
            testResult.innerHTML = "Open Relationships:Typically this is a sign that both participants aren’t emotionally ready for a serious relationship.";
            break;
        case [true, false, true].toString():
            testResult.innerHTML ="Long Distance Relationships:Whether you are hours away from each other or on opposite sides of the country, communication is more vital than ever.";
            break;
        case [true, false, false].toString():
            testResult.innerHTML ="Toxic Relationships:Love isn’t about giving up all autonomy of yourself. Selflessness is a virtue that adds value to the relationship only if both parties participate in it. ";
            break;
        case [false, true, true].toString():
            testResult.innerHTML ="Toxic Relationships:Love isn’t about giving up all autonomy of yourself. Selflessness is a virtue that adds value to the relationship only if both parties participate in it. ";
            break;
        case [false, true, false].toString():
            testResult.innerHTML = "Independent Relationships:The flip side of the codependent relationship is the independent relationship. Like we said, independence is a good thing, but again, it’s about finding a balance.";
            break;
        case [false, false, true].toString():
            testResult.innerHTML = "Codependent Relationships:A codependent relationship means that one (or more likely both) of you are reliant on the other to function.";
            break;
    }

}
displayResults();


