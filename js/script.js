/*
 * slide-nav
 * ES6 Vanilla.js navigation plugin to simple use on one-page websites.
 * https://github.com/qmixi/slide-nav
 *
 * A project by Piotr Kumorek
 * Released under the MIT license.
*/

$("#demo01").animatedModal();
$("#demo02").animatedModal({modalTarget:'modal2'});
$("#demo03").animatedModal({modalTarget:'modal3'});
$("#demo04").animatedModal({modalTarget:'modal4'});

$("#exam1").animatedModal({modalTarget:'exam-modal1'});
$("#exam2").animatedModal({modalTarget:'exam-modal2'});
$("#exam3").animatedModal({modalTarget:'exam-modal3'});
$("#exam4").animatedModal({modalTarget:'exam-modal4'});


window.slide = new SlideNav();

let bm = document.querySelector('.burger-menu-container');

bm.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
        document.querySelector('#burger-check').checked=false;

    })
})
/*Link01*/
let linkcolor1=document.querySelectorAll(".color1");

linkcolor1.forEach(function(l){
    l.addEventListener("mouseover", mouseover01);
    l.addEventListener("mouseout", mouseout01);
})



function mouseover01(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#FF8C00";
}

function mouseout01(e) {
  e.target.style.color = "#222";
}


/*Link02 #5600d9*/
let linkcolor2=document.querySelectorAll(".color2");

linkcolor2.forEach(function(l){
    l.addEventListener("mouseover", mouseover02);
    l.addEventListener("mouseout", mouseout02);
})



function mouseover02(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#5600d9";
}

function mouseout02(e) {
  e.target.style.color = "#222";
}

/*Link03 d900aa*/
let linkcolor3=document.querySelectorAll(".color3");

linkcolor3.forEach(function(l){
    l.addEventListener("mouseover", mouseover03);
    l.addEventListener("mouseout", mouseout03);
})



function mouseover03(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#d900aa";
}

function mouseout03(e) {
  e.target.style.color = "#222";
}

/*Link04 0078d9*/
let linkcolor4=document.querySelectorAll(".color4");

linkcolor4.forEach(function(l){
    l.addEventListener("mouseover", mouseover04);
    l.addEventListener("mouseout", mouseout04);
})



function mouseover04(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#0078d9";
}

function mouseout04(e) {
  e.target.style.color = "#222";
}

/*Link05 D90000*/
let linkcolor5=document.querySelectorAll(".color5");

linkcolor5.forEach(function(l){
    l.addEventListener("mouseover", mouseover05);
    l.addEventListener("mouseout", mouseout05);
})



function mouseover05(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#D90000";
}

function mouseout05(e) {
  e.target.style.color = "#222";
}

/*Link06 04756F*/
let linkcolor6=document.querySelectorAll(".color6");

linkcolor6.forEach(function(l){
    l.addEventListener("mouseover", mouseover06);
    l.addEventListener("mouseout", mouseout06);
})



function mouseover06(e){
  console.log("mouseoverFunction", e.target);
  e.target.style.color = "#222";
  e.target.style.borderBottomColor = "#04756F";
}

function mouseout06(e) {
  e.target.style.color = "#222";
}

let coreareafile = "coreareas.json";
let examfile = "exams.json";

let template1 = document.querySelector('.core-area-template1').content;
let template2 = document.querySelector('.core-area-template2').content;
let template3 = document.querySelector('.core-area-template3').content;
let template4 = document.querySelector('.core-area-template4').content;
let coreArea1 = document.querySelector('.core-area1');
let coreArea2 = document.querySelector('.core-area2');
let coreArea3 = document.querySelector('.core-area3');
let coreArea4 = document.querySelector('.core-area4');

/*EXAMS---------------------------*/
let template5 = document.querySelector('.exam-template2').content;
let exam2 = document.querySelector('.exam-window2');

let template6 = document.querySelector('.exam-template3').content;
let template7 = document.querySelector('.exam-template32').content;
let exam3 = document.querySelector('.exam-window3');

let template8 = document.querySelector('.exam-template4').content;
let template9 = document.querySelector('.exam-template42').content;
let exam4 = document.querySelector('.exam-window4');


function getData(link){
        fetch(link).then(function(response){
            return response.json();
        }).then(function(json){
            return show(json);
        });
    }
function show(json){

        let clone = template1.cloneNode(true);
        clone.querySelector('.coreArea').textContent= json[0].coreArea;
        clone.querySelector('.description').textContent = json[0].description;
        clone.querySelector('.numberOfECTS').textContent = json[0].numberOfECTS;
        json[0].knowledge.forEach(function(knowledge){
                   console.log(knowledge);
                    let li=document.createElement("li");
                    li.textContent=knowledge;
                    clone.querySelector('.knowledge').appendChild(li);
                });
        clone.querySelector('.skills').textContent = json[0].skills;
        json[0].competences.forEach(function(competences){
                        console.log(competences);
                        let li=document.createElement("li");
                        li.textContent=competences;
                        clone.querySelector('.competences').appendChild(li);
                    });

        coreArea1.appendChild(clone);

        let clone2 = template2.cloneNode(true);
        clone2.querySelector('.coreAreaName2').textContent= json[1].coreArea;
        clone2.querySelector('.description2').textContent = json[1].description;
        clone2.querySelector('.numberOfECTS2').textContent = json[1].numberOfECTS;
        json[1].knowledge.forEach(function(knowledge){
                   console.log(knowledge);
                    let li=document.createElement("li");
                    li.textContent=knowledge;
                    clone2.querySelector('.knowledge2').appendChild(li);
                });

        json[1].skills.forEach(function(skills){
                        console.log(skills);
                        let li=document.createElement("li");
                        li.textContent=skills;
                        clone2.querySelector('.skills2').appendChild(li);
                    });
        json[1].competences.forEach(function(competences){
                        console.log(competences);
                        let li=document.createElement("li");
                        li.textContent=competences;
                        clone2.querySelector('.competences2').appendChild(li);
                    });

        coreArea2.appendChild(clone2);

        let clone3 = template3.cloneNode(true);
        clone3.querySelector('.coreAreaName3').textContent= json[2].coreArea;
        clone3.querySelector('.description3').textContent = json[2].description;
        clone3.querySelector('.numberOfECTS3').textContent = json[2].numberOfECTS;
        json[2].knowledge.forEach(function(knowledge){
                   console.log(knowledge);
                    let li=document.createElement("li");
                    li.textContent=knowledge;
                    clone3.querySelector('.knowledge3').appendChild(li);
                });

        json[2].skills.forEach(function(skills){
                        console.log(skills);
                        let li=document.createElement("li");
                        li.textContent=skills;
                        clone3.querySelector('.skills3').appendChild(li);
                    });
        json[2].competences.forEach(function(competences){
                        console.log(competences);
                        let li=document.createElement("li");
                        li.textContent=competences;
                        clone3.querySelector('.competences3').appendChild(li);
                    });

        coreArea3.appendChild(clone3);


        let clone4 = template4.cloneNode(true);
        clone4.querySelector('.coreAreaName4').textContent= json[3].coreArea;
        clone4.querySelector('.description4').textContent = json[3].description;
        clone4.querySelector('.numberOfECTS4').textContent = json[3].numberOfECTS;
        json[3].knowledge.forEach(function(knowledge){
                   console.log(knowledge);
                    let li=document.createElement("li");
                    li.textContent=knowledge;
                    clone4.querySelector('.knowledge4').appendChild(li);
                });

        json[3].skills.forEach(function(skills){
                        console.log(skills);
                        let li=document.createElement("li");
                        li.textContent=skills;
                        clone4.querySelector('.skills4').appendChild(li);
                    });
        json[3].competences.forEach(function(competences){
                        console.log(competences);
                        let li=document.createElement("li");
                        li.textContent=competences;
                        clone4.querySelector('.competences4').appendChild(li);
                    });

        coreArea4.appendChild(clone4);

        let clone5 = template5.cloneNode(true);
        clone5.querySelector('.examName2').textContent= json[4].name;
        clone5.querySelector('.numberOfEcts2').textContent = json[4].numberOfEcts;
        clone5.querySelector('.requirements2').textContent = json[4].requirements;
        clone5.querySelector('.exam2').textContent = json[4].exam;
        clone5.querySelector('.assessment2').textContent = json[4].assessment;
        clone5.querySelector('.re-exam2').textContent = json[4].reExam;
        clone5.querySelector('.re-exam-illness2').textContent = json[4].reExamDueToIllness;


        exam2.appendChild(clone5);

        let clone6 = template6.cloneNode(true);
        clone6.querySelector('.examName3').textContent= json[5].name;
        clone6.querySelector('.numberOfEcts3').textContent = json[5].numberOfEcts;
        clone6.querySelector('.requirements3').textContent = json[5].requirements;
        clone6.querySelector('.exam3').textContent = json[5].exam;
        clone6.querySelector('.assessment3').textContent = json[5].assessment;
        clone6.querySelector('.re-exam3').textContent = json[5].reExam;
        clone6.querySelector('.re-exam-illness3').textContent = json[5].reExamDueToIllness;

        let clone7 = template7.cloneNode(true);
        clone7.querySelector('.examName32').textContent= json[6].name;
        clone7.querySelector('.numberOfEcts32').textContent = json[6].numberOfEcts;
        clone7.querySelector('.requirements32').textContent = json[6].requirements;
        clone7.querySelector('.exam32').textContent = json[6].exam;
        clone7.querySelector('.assessment32').textContent = json[6].assessment;
        clone7.querySelector('.re-exam32').textContent = json[6].reExam;
        clone7.querySelector('.re-exam-illness32').textContent = json[6].reExamDueToIllness;

        exam3.appendChild(clone6);
        exam3.appendChild(clone7);



        let clone8 = template8.cloneNode(true);
        clone8.querySelector('.examName4').textContent= json[7].name;
        clone8.querySelector('.numberOfEcts4').textContent = json[7].numberOfEcts;
        clone8.querySelector('.requirements4').textContent = json[7].requirements;
        clone8.querySelector('.exam4').textContent = json[7].exam;
        clone8.querySelector('.assessment4').textContent = json[7].assessment;
        clone8.querySelector('.re-exam4').textContent = json[7].reExam;
        clone8.querySelector('.re-exam-illness4').textContent = json[7].reExamDueToIllness;

        let clone9 = template9.cloneNode(true);
        clone9.querySelector('.examName42').textContent= json[8].name;
        clone9.querySelector('.numberOfEcts42').textContent = json[8].numberOfEcts;
        clone9.querySelector('.requirements42').textContent = json[8].requirements;
        clone9.querySelector('.exam42').textContent = json[8].exam;
        clone9.querySelector('.assessment42').textContent = json[8].assessment;
        clone9.querySelector('.re-exam42').textContent = json[8].reExam;
        clone9.querySelector('.re-exam-illness42').textContent = json[8].reExamDueToIllness;

        exam4.appendChild(clone8);
        exam4.appendChild(clone9);


}



getData(coreareafile);



//function getData2(link2){
//        fetch(link2).then(function(response){
//            return response.json();
//        }).then(function(json){
//            return show(json);
//        });
//    }
//function show(json){
//    console.log(json[0]);
//
//
//
//
//}

getData(examfile);

