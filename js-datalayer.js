/**
 * Created with JetBrains WebStorm.
 * User: Jonathan Wu
 * Date: 2/21/13
 * Time: 12:41 AM
 * To change this template use File | Settings | File Templates.
 */

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
    lead: [],
    from: ["love"],
    description: "<b>Lust</b>: self-indulgent sexual desire (personified as one of the deadly sins); a strong sexual desire",
    tooltip: "lust_tip"
}

var affection = {
    name: "affection",
    lead: [],
    from: ["love"],
    description: "<b>Affection</b>: a positive feeling of liking",
    tooltip: "affection_tip"
}

var care = {
    name: "care",
    lead: ["love"],
    from: [],
    description: "<b>Care</b>: activity involved in maintaining something in good working order; the work of providing treatment for or attending to someone or something",
    tooltip: "care_tip"
}

var longing = {
    name: "longing",
    lead: [],
    from: ["love"],
    description: "<b>Longing</b>: prolonged unfulfilled desire or need",
    tooltip: "longing_tip"
}

var attraction = {
    name: "attraction",
    lead: ["love"],
    from: [""],
    description: "<b>Attraction</b>: the quality of arousing interest; being attractive or something that attracts; a characteristic that provides pleasure and attracts",
    tooltip: "attraction_tip"
}


var emotion = [admiration, love, lust, affection, care, longing, attraction];
var emotions = new Array();
var tempEmoArray = new Array();
var lineRecord = new Array();
//    element.lead.sort(function(a,b){
//        if(a.name < b.name) return -1;
//        if(a.name > b.name) return 1;
//    });
