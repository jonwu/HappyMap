/**
 * Created with JetBrains WebStorm.
 * User: Jonathan Wu
 * Date: 2/21/13
 * Time: 12:41 AM
 * To change this template use File | Settings | File Templates.
 */

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

var faith = {
    name: "faith",
    lead: ["confidence"],
    from: [],
    description: "",
    tooltip: "faith_tip"
}

var angry = {
    name: "angry",
    lead: ["fustration"],
    from: ["aggitation"],
    description: "",
    tooltip: "angry_tip"
}

var happiness = {
    name: "happiness",
    lead: ["excitement","positivity","confidence"],
    from: ["love","positivity","confidence"],
    description: "<b>Happiness</b>: emotions experienced when in a state of well-being; state of well-being characterized by emotions ranging from contentment to intense joy",
    tooltip: "happiness_tip"
}

var confidence = {
    name: "confidence",
    lead: ["happiness","successful"],
    from: ["happiness","faith"],
    description: "",
    tooltip: "confidence_tip"
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
    lead: ["affection","lust","longing"],
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
    from: ["confidence"],
    description: "",
    tooltip: "successful_tip"
}

var longing = {
    name: "longing",
    lead: [],
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

var emotion = [excitement, affection, fustration, faith, angry, happiness, confidence, attraction, positivity, admiration, love, lust, care, successful, longing, aggitation];
var emotions = new Array();
var tempEmoArray = new Array();
var lineRecord = new Array();
//    element.lead.sort(function(a,b){
//        if(a.name < b.name) return -1;
//        if(a.name > b.name) return 1;
//    });
