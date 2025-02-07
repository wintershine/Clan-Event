// const zoomElement = document.querySelector(".zoom");

// let zoom = 1;

// const ZOOM_SPEED = 0.1;

// document.addEventListener("wheel", function(e) {  
//     console.log(e.deltaY);
//     console.log(zoomElement.style.transform)
    
//     if(e.deltaY < 0){   
//         if(zoomElement.style.transform != "scale(1.1)"){
//             zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
//         } 
        
//     }
//     else{    
//         if (zoomElement.style.transform != "scale(0.3)"){
//             zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`
//         };  
//     }
// });


const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const board = document.querySelector(".board");
const modalContent = document.querySelector(".modalContent");
const showAll = document.getElementById("showAll");
const teamRow = document.querySelector(".team-row");
const startElement1 = document.getElementById("element-1-1");
const startElement2 = document.getElementById("element-2-1");
const startElement3 = document.getElementById("element-3-1");
const startElement4 = document.getElementById("element-4-1");
const startElement5 = document.getElementById("element-5-1");
const startElement6 = document.getElementById("element-6-1");
const startElement7 = document.getElementById("element-7-1");
const startElement8 = document.getElementById("element-8-1");
const startElement9 = document.getElementById("element-9-1");
const startElement10 = document.getElementById("element-10-1");
const startElement11 = document.getElementById("element-11-1");
const startElement12 = document.getElementById("element-12-1");
const startElement13 = document.getElementById("element-13-1");
const startElement14 = document.getElementById("element-14-1");
const startElement15 = document.getElementById("element-15-1");

const endElement = document.getElementById("element-2")







window.addEventListener('load', function() {
    'use strict';
  
    var line1 = new LeaderLine(startElement1, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#7348f7"}),
      shown1 = false;
  
    startElement1.addEventListener('click', function() {
      shown1 = !shown1;
      line1[shown1 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);

    var line2 = new LeaderLine(startElement2, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#58040f"}),
      shown2 = false;
  
    startElement2.addEventListener('click', function() {
      shown2 = !shown2;
      line2[shown2 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line3 = new LeaderLine(startElement3, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#e85254"}),
      shown3 = false;
  
    startElement3.addEventListener('click', function() {
      shown3 = !shown3;
      line3[shown3 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line4 = new LeaderLine(startElement4, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#18a78a"}),
      shown4 = false;
  
    startElement4.addEventListener('click', function() {
      shown4 = !shown4;
      line4[shown4 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line5 = new LeaderLine(startElement5, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#59c32e"}),
      shown5 = false;
  
    startElement5.addEventListener('click', function() {
      shown5 = !shown5;
      line5[shown5 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line6 = new LeaderLine(startElement6, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#949ef6"}),
      shown6 = false;
  
    startElement6.addEventListener('click', function() {
      shown6 = !shown6;
      line6[shown6 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line7 = new LeaderLine(startElement7, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#8b1674"}),
      shown7 = false;
  
    startElement7.addEventListener('click', function() {
      shown7 = !shown7;
      line7[shown7 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line8 = new LeaderLine(startElement8, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#994d06"}),
      shown8 = false;
  
    startElement8.addEventListener('click', function() {
      shown8 = !shown8;
      line8[shown8 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line9 = new LeaderLine(startElement9, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#66c9ed"}),
      shown9 = false;
  
    startElement9.addEventListener('click', function() {
      shown9 = !shown9;
      line9[shown9 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line10 = new LeaderLine(startElement10, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#bbebbf"}),
      shown10 = false;
  
    startElement10.addEventListener('click', function() {
      shown10 = !shown10;
      line10[shown10 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line11 = new LeaderLine(startElement11, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#df842d"}),
      shown11 = false;
  
    startElement11.addEventListener('click', function() {
      shown11 = !shown11;
      line11[shown11 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line12 = new LeaderLine(startElement12, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#fd19cb"}),
      shown12 = false;
  
    startElement12.addEventListener('click', function() {
      shown12 = !shown12;
      line12[shown12 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line13 = new LeaderLine(startElement13, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#1c0e32"}),
      shown13 = false;
  
    startElement13.addEventListener('click', function() {
      shown13 = !shown13;
      line13[shown13 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line14 = new LeaderLine(startElement14, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#4262a0"}),
      shown14 = false;
  
    startElement14.addEventListener('click', function() {
      shown14 = !shown14;
      line14[shown14 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     
    var line15 = new LeaderLine(startElement15, endElement, {hide: true, startSocket: "right", endSocket: "top", color : "#908c60"}),
      shown15 = false;
  
    startElement15.addEventListener('click', function() {
      shown15 = !shown15;
      line15[shown15 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    }, false);
     

    showAll.addEventListener('click', function() {
    shown1 = !shown1
    shown2 = !shown2
    shown3 = !shown3
    shown4 = !shown4
    shown5 = !shown5
    shown6 = !shown6
    shown7 = !shown7
    shown8 = !shown8
    shown9 = !shown9
    shown10 = !shown10
    shown11 = !shown11
    shown12 = !shown12
    shown13 = !shown13
    shown14 = !shown14
    shown15 = !shown15

    line1[shown1 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line2[shown2 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line3[shown3 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line4[shown4 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line5[shown5 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line6[shown6 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line7[shown7 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line8[shown8 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line9[shown9 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line10[shown10 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line11[shown11 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line12[shown12 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line13[shown13 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line14[shown14 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});
    line15[shown15 ? 'show' : 'hide']("draw", {duration: 1000, timing: 'linear'});

    }, false);


    openModal.addEventListener("click", () => {

        if (shown1) {
            shown1 = !shown1;
            shown2 = !shown2
            shown3 = !shown3
            shown4 = !shown4
            shown5 = !shown5
            shown6 = !shown6
            shown7 = !shown7
            shown8 = !shown8
            shown9 = !shown9
            shown10 = !shown10
            shown11 = !shown11
            shown12 = !shown12
            shown13 = !shown13
            shown14 = !shown14
            shown15 = !shown15

            line1[shown1 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line2[shown2 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line3[shown3 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line4[shown4 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line5[shown5 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line6[shown6 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line7[shown7 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line8[shown8 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line9[shown9 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line10[shown10 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line11[shown11 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line12[shown12 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line13[shown13 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line14[shown14 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
            line15[shown15 ? 'show' : 'hide']("fade", {duration: 1000, timing: 'linear'});
        }
        
        $(board).fadeOut(1000, function() {
            $(teamRow).fadeOut(1000);
            $(modal).fadeIn(1000);
        });   
    });
    
    closeModal.addEventListener("click", () => {
        
        $(modal).fadeOut(1000, function() {
            $(board).fadeIn(1000);
            $(teamRow).fadeIn(1000);
        });
    });

  });

