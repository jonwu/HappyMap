var excitement = {
    name: "excitement",
    lead: [],
    from: ["happiness"],
    description: "<b>Excitement</b>: the state of being emotionally aroused and worked up; disturbance usually in protest",
    tooltip: "excitement_tip"
}

var affection = {
    name: "affection",
    lead: [],
    from: ["love"],
    description: "<b>Affection</b>: a positive feeling of liking",
    tooltip: "affection_tip"
}

var fustration = {
    name: "fustration",
    lead: [],
    from: ["angry"],
    description: "",
    tooltip: "fustration_tip"
}

var hate = {
    name: "hate",
    lead: [""],
    from: ["jealousy"],
    description: "<b>Hate</b>: the emotion of hate; a feeling of dislike so strong that it demands action; verb dislike intensely; feel antipathy or aversion towards",
    tooltip: "hate_tip"
}

var faith = {
    name: "faith",
    lead: ["confident"],
    from: [""],
    description: "<b>Faith</b>: loyalty or allegiance to a cause or a person; complete confidence in a person or plan etc",
    tooltip: "faith_tip"
}

var jealousy = {
    name: "jealousy",
    lead: ["sad","hate","regret"],
    from: ["desperation"],
    description: "<b>Jealousy</b>: zealous vigilance; a feeling of jealous envy (especially of a rival)",
    tooltip: "jealousy_tip"
}

var sad = {
    name: "sad",
    lead: [],
    from: ["jealousy"],
    description: "<b>Sad</b>: experiencing or showing sorrow or unhappiness; of things that make you feel sad",
    tooltip: "sad_tip"
}

var angry = {
    name: "angry",
    lead: ["fustration"],
    from: ["aggitation"],
    description: "<b>Angry</b>: feeling or showing anger; (of the elements) as if showing violent anger",
    tooltip: "angry_tip"
}

var happiness = {
    name: "happiness",
    lead: ["excitement","positivity","confident"],
    from: ["love","positivity","confident"],
    description: "<b>Happiness</b>: emotions experienced when in a state of well-being; state of well-being characterized by emotions ranging from contentment to intense joy",
    tooltip: "happiness_tip"
}

var regret = {
    name: "regret",
    lead: [],
    from: ["jealousy"],
    description: "<b>Regret</b>: sadness associated with some wrong done or some disappointment; verb be sorry",
    tooltip: "regret_tip"
}

var desperation = {
    name: "desperation",
    lead: ["jealousy"],
    from: [],
    description: "<b>Desperation</b>: desperate recklessness; a state in which everything seems wrong and will turn out badly",
    tooltip: "desperation_tip"
}

var attraction = {
    name: "attraction",
    lead: ["love"],
    from: [""],
    description: "<b>Attraction</b>: the quality of arousing interest; being attractive or something that attracts; a characteristic that provides pleasure and attracts",
    tooltip: "attraction_tip"
}

var positivity = {
    name: "positivity",
    lead: ["happiness"],
    from: ["happiness"],
    description: "<b>Positivity</b>: an amount greater than zero; a quality or state characterized by certainty or acceptance or affirmation and dogmatic assertiveness",
    tooltip: "positivity_tip"
}

var admiration = {
    name: "admiration",
    lead: ["love"],
    from: [""],
    description: "<b>Admiration</b>: a favorable judgment; a feeling of delighted approval and liking",
    tooltip: "admiration_tip"
}

var love = {
    name: "love",
    lead: ["affection","lust","longing","happiness"],
    from: ["attraction","admiration","care"],
    description: "<b>Love</b>: any object of warm affection or devotion; a deep feeling of sexual desire and attraction",
    tooltip: "love_tip"
}

var lust = {
    name: "lust",
    lead: [""],
    from: ["love"," admiration"],
    description: "<b>Lust</b>: self-indulgent sexual desire (personified as one of the deadly sins); a strong sexual desire",
    tooltip: "lust_tip"
}

var happy = {
    name: "happy",
    lead: [""],
    from: [""],
    description: "",
    tooltip: "happy_tip"
}

var confident = {
    name: "confident",
    lead: ["happiness","successful"],
    from: ["happiness","faith"],
    description: "<b>Confident</b>: not liable to error in judgment or action; having or marked by confidence or assurance",
    tooltip: "confident_tip"
}

var care = {
    name: "care",
    lead: ["love"],
    from: ["admiration"],
    description: "<b>Care</b>: activity involved in maintaining something in good working order; the work of providing treatment for or attending to someone or something",
    tooltip: "care_tip"
}

var successful = {
    name: "successful",
    lead: [],
    from: ["confident"],
    description: "<b>Successful</b>: having succeeded or being marked by a favorable outcome",
    tooltip: "successful_tip"
}

var longing = {
    name: "longing",
    lead: [""],
    from: ["love"],
    description: "<b>Longing</b>: prolonged unfulfilled desire or need",
    tooltip: "longing_tip"
}

var aggitation = {
    name: "aggitation",
    lead: ["angry"],
    from: [],
    description: "",
    tooltip: "aggitation_tip"
}

var emotion = [excitement, affection, fustration, hate, faith, jealousy, sad, angry, happiness, regret, desperation, attraction, positivity, admiration, love, lust, happy, confident, care, successful, longing, aggitation];
var emotions = new Array();
var tempEmoArray = new Array();
var lineRecord = new Array();
//    element.lead.sort(function(a,b){
//        if(a.name < b.name) return -1;
//        if(a.name > b.name) return 1;
//    });
