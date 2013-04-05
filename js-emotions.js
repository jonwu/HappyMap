/**
 * Created with JetBrains WebStorm.
 * User: Jonathan Wu
 * Date: 2/19/13
 * Time: 11:12 PM
 * To change this template use File | Settings | File Templates.
 */

var bgColor = "#519ede";

function toggle(element) {

    if(!isAnimated()){
        
        var timer = 1000;
        var size = emotions.length;
        var lastEmo;
        var timerInc = 2000/emotions.length;

        while(lineRecord.length !=0){
            var line = lineRecord.pop();
            $(line).css('display', 'none');
        }

        if(document.getElementById(element.name).style.left != "45%"){

            for(var i = 0; i < size; i++){
                var emo = emotions[i];
                if(emo == document.getElementById(element.name)){
                    $(emo).animate({left:'45%', top: '50%'});
                    emo.style.backgroundColor = bgColor;
                }else{
                    $(emo).animate({opacity: 0, left:'45%', top: '50%'},{duration: timer+=timerInc});
                    lastEmo = emo;
                }
            }
            $(lastEmo).promise().done(function(){
                for(var i = 0; i < size; i++){
                    emo = emotions.pop();
                    if(emo != document.getElementById(element.name))
                        $(emo).css('display','none');
                }
                emotions.push(document.getElementById(element.name));
                revealConnections(element);
                //hover();
            });

        }else{
            revealConnections(element);
        }

    }


}
function revealConnections(element){

    var identical = new Array();
    var leadEle;

    var size = element.lead.length;
    var mid = Math.ceil(size/2)-1;
    var isOdd = size % 2;
    var increment = 100/(element.lead.length+1);
    var rightHorInc = 55;
    var rightVerInc = 0;

    var leftSize = element.from.length;
    var leftMid = Math.ceil(leftSize/2)-1;
    var leftIsOdd = leftSize % 2;
    var leftIncrement = 100/(element.from.length+1);
    var leftHorInc =  35;
    var leftVerInc = 100;
    var timer = 1000;
    var timerInc = 2000/(size+leftSize);
    var lineCount = 0;

    //Right side of map. What this emotion leads to.
    element.lead.sort();
    for(var i = 0; i < element.lead.length; i++){
        if(isOdd == 1){
            if(i <= mid){
                rightHorInc += 5;
            }else if(i > mid){
                rightHorInc -= 5;
            }
        }else if(isOdd == 0){
            if(i <= mid){
                rightHorInc+=5;
            }else if(i>(mid+1)){
                rightHorInc-=5;
            }
        }
        rightVerInc += increment;

        //check for identical from and lead names
        for(var j = 0; j < element.from.length; j++){
            if(element.lead[i] == element.from[j]){
                identical.push(element.lead[i]);
                break;
            }
        }

        addElement(eval(element.lead[i]));
        leadEle = document.getElementById(element.lead[i]);
//        leadEle.style.backgroundColor = "green";
        leadEle.style.backgroundColor = bgColor;
        leadEle.style.position = "absolute";
        $(leadEle).css('display', 'block');
        $(leadEle).animate({ opacity: 0 }, 0);

        if(element.lead.length == 1){
            $(leadEle).animate({opacity: 1, left: 65 + "%", top: rightVerInc + "%"},{duration: timer+=timerInc});
            $('#tempBubble').css({
                left: 65 + "%",
                top: rightVerInc + "%"
            });
        }else{
            $(leadEle).animate({opacity: 1, left: rightHorInc + "%", top: rightVerInc + "%"},{duration: timer+=timerInc});
            $('#tempBubble').css({
                left: rightHorInc + "%",
                top: rightVerInc + "%"
            });

        }

        emotions.push(leadEle);

        connect(document.getElementById(element.name),document.getElementById("tempBubble"),"#FFF",timer+1600, lineCount);
        lineCount++;

    }

//Left side of the map. What this emotion comes from.
    var tempName;
    var isIdentical = 0;
    var leadEle;


    element.from.sort();
    for(var i = 0; i < element.from.length; i++){
        if(leftIsOdd == 1){
            if(i <= leftMid){
                leftHorInc -= 5;
            }else if(i > leftMid){
                leftHorInc += 5;
            }
        }else if(leftIsOdd == 0){
            if(i <= leftMid){
                leftHorInc-=5;
            }else if(i > (leftMid+1)){
                leftHorInc+=5;
            }
        }

        leftVerInc -= leftIncrement;

        for(var j = 0; j < identical.length; j++){
            if(element.from[i] == identical[j]){
                tempName = addSameElement(identical[j]);
                leadEle = document.getElementById(tempName);
                isIdentical = 1;
                break;
            }
        }
        if(!isIdentical){
            addElement(eval(element.from[i]));
            leadEle = document.getElementById(element.from[i]);
        }
//        leadEle.style.backgroundColor = "blue";
        leadEle.style.backgroundColor = bgColor;
        leadEle.style.position = "absolute";
        $(leadEle).css('display', 'block');
        $(leadEle).animate({ opacity: 0 }, 0);
        if(element.from.length == 1){
            $(leadEle).animate({opacity: 1, left: 25 + "%", top: leftVerInc + "%"},{duration: timer+=timerInc});
            $('#tempBubble').css({
                left: 25 + "%",
                top: leftVerInc + "%"
            });

        }else{
            $(leadEle).animate({opacity: 1, left: leftHorInc + "%", top: leftVerInc + "%"},{duration: timer+=timerInc});
            $('#tempBubble').css({
                left: leftHorInc + "%",
                top: leftVerInc + "%"
            });
        }

        isIdentical = 0;
        emotions.push(leadEle);


        connect(document.getElementById(element.name),document.getElementById("tempBubble"),"#FFF",timer+1600, lineCount);
        lineCount++;
    }
    $(leadEle).promise().done(function(){

        hover();
    });

}

$(document).ready(function(){
    var previous = false;
    var currentEmo;
    var lastNameValue = undefined;


    $('#search').keyup(function(){

        var search_term = $(this).val().toLowerCase();


        if(!isAnimated()){
            if(search_term != "emotion"){
                try{
                    var ele = eval(search_term);
                    addElement(ele);
                    setCenter(ele);
                    currentEmo = search_term;
                    $('#search').animate({opacity: 1, left:'600px', top: '100px'},{duration: 2000});
                    $('#searchbar').animate({opacity: 1, left:'590px', top: '100px'},{duration: 2000});
                    $('#search_enter').animate({opacity: 1, left:'710px', top: '110px'},{duration: 2000});
                    $('#ask').fadeOut(2000);
                    $('#leadsTo').fadeIn(4000);
                    $('#comesFrom').fadeIn(4000);
                    previous = true;
                }catch(e){

                }

                if(previous){
                    if(currentEmo != search_term){
                        refreshAll();
                        previous = false;
                    }
                }
            }
        }
    });
});

function setCenter(ele){
    var element = document.getElementById(ele.name);
    element.style.opacity = "1";
    element.style.position ="absolute";
//    element.style.backgroundColor = "gray";
    element.style.top = "50%";
    element.style.left = "45%";
    $(element).fadeIn('slow');
    emotions.push(element);
    hover();



}

function refreshAll(){
    var lastElement;
    var curElement;
    var size = emotions.length;
    for(var i = 0; i< size; i++){
        curElement = emotions[i];
        $(curElement).fadeOut('slow', function(){
            for(var i = 0; i < size; i++){
                curElement = emotions.pop();
                $(curElement).animate({ opacity: 0 }, 0);
                $(curElement).css('top', '295px');
                $(curElement).css('left', '615px');
            }

        });
//        lastElement = emotion[i];
        for(var i; i < tempEmoArray.length; i++){
            tempEmoArray.pop();
        }
    }

    while(lineRecord.length !=0){
        var line = lineRecord.pop();
        $(line).fadeOut('slow');
    }
    $('#leadsTo').fadeOut('slow');
    $('#comesFrom').fadeOut('slow');

}


function isAnimated(){

    $(".hover").each(function(){
        if($(this).is(':animated')){
            return 1;
        };
    });
//    for(var i =0; i <emotion.length; i++){
//        if($("#"+emotion[i].name).is(':animated')){
//            alert(emotion[i].name);
//            return 1;
//        }
//    }

    return 0;
}
function addElement(ele){

    var name = ele.name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var element = document.getElementById(ele.name);
    jQuery('<a/>', {
        class: 'hover',
        id: ele.name,
        href: 'javascript:toggle('+ele.name+');',
        text: name,
        hovertext: ele.description,
    }).appendTo('.emotion');

}
function addSameElement(name){
    var tempEmo = {};
    jQuery.extend(tempEmo,eval(name));
    var tempName = "temp"+name;
    tempEmo.name = tempName;
    tempEmoArray.push(tempEmo);
    var e = tempEmoArray.length-1;
    var linkName = "tempEmoArray["+e+"]";

    var textName = name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
       jQuery('<a/>', {
        class: 'hover',
        id: tempName,
        href: 'javascript:toggle('+linkName+');',
        text: textName,
        hovertext: tempEmo.description
    }).appendTo('.emotion');


    return tempName;
}
function hover(){
    $('.hover').mousemove(function(e){
        var hovertext = $(this).attr('hovertext');
        $('#hoverdiv').html(hovertext);
        var mult = $("#hoverdiv").height()/17;
        var inc = 14 * mult;
       $("#hoverdiv").css('top', $(this).position().top - 40 - inc);

        $("#hoverdiv").css('left', e.clientX - 20);
        $('#hoverdiv').css({ opacity: 1 }, 0);
        $('#hoverdiv').css({zIndex: 2});


    }).mouseout(function(){
            $('#hoverdiv').css({ opacity: 0 }, 0);

        });
}

function connect(div1, div2, color, timer, n) {

    var a = $(div1),
        b = $(div2),
        dW = b.offset().left - (a.offset().left),
        dH = b.offset().top - (a.offset().top),
        angle = Math.atan(dH / dW),
        length = Math.sqrt(dW * dW + dH * dH);

    if (dW < 0) angle += Math.PI;

    var name = "line"+n;

    jQuery('<a/>', {
        id: name
    }).appendTo('.line');

    var element = document.getElementById(name);
    $(element).css({
        display: 'block',
        top: a.offset().top + 35,
        left: a.offset().left + 45,
        width: 0,
        '-webkit-transform': 'rotate(' + angle + 'rad)',
        transformOrigin: '0px 0px'
    }).stop().animate({
            width: length
        }, timer);

    lineRecord.push(element);

}

function getOffset( el ) {
    var _x = $(el).position().left;
    var _y = $(el).position().top;
    var _w = $(el).width();
    var _h = $(el).height();

    return { top: _y, left: _x, width: _w, height: _h };
}
