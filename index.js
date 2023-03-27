// var ElFormCompany = document.querySelector ('.Form__Jobs');

// var ElInputCompany = document.querySelector ('.input__company');

// var ElInputJob = document.querySelector ('.input__job');

// var ElInputSalary = document.querySelector ('.input__salary');

// var CardList = document.querySelector ('.card__list')

// var NewAdvertisement = {
//     id: 1 ,
//     text: ElInputCompany.value.trim()
// }

// var AllInputs = [
//     {
//         id: 1 ,
//         text: ElInputCompany.value,
//         isCompleted : false,
//     }
// ]
// AllInputs.push (NewAdvertisement)

// function AllInputsRender (){
//     for (var i= 0; i < AllInputs.length; i++){
//         var elli = document.createElement ("li")
//         elli.innerHTML = `<div class="content">
//         <h3> ${ElInputJob.value} </h3>
//     <hr>
//     <p>Company: <p> ${ElInputCompany.value} </p></p>
//     <p>Salary: <p> ${ElInputSalary.text} </p></p>
//     </div>`}

//     CardList.appendChild (elli)
//     console.log (AllInputs);
// }
// AllInputsRender ()

//         console.log (AllInputs)

//     }

// }
// // // Keyingi qilinadigan ish bitta obyekt yasash kere
// function OnSubmit(evt) {
//     evt.preventDefault ();
// }
// console.log (AllInputs)
// ElFormCompany.addEventListener ('submit',OnSubmit
// )

// // AllInputs.push (NewAdvertisement);
// // AllInputs.push (NewAdvertisement2);
// // AllInputs.push (NewAdvertisement3);

// AllInputsRender ()
// AllInputsRender ()

var ElForm = document.querySelector(".Form__Jobs");

var ElInput1 = document.querySelector(".input__company");
var Elinput2 = document.querySelector(".input__job");
var ElInput3 = document.querySelector(".input__salary");
var CardList = document.querySelector ('.card__list')

console.log(ElInput1.value);

var AllInput1 = [
  {
    id: 1,
    text: "Wwwww",
},
];
AllInput1.push(Input1Values);
var Input1Values = {
    id: 1,
    text: "Wwwww",
};
function Allrender() {
    for (let i = 0; i < ElInput1.length; i++) {
        console.log(ElInput1[i].text);
        var elli = document.createElement("li");
        elli.innerHTML = `<div class="content">
        <h3> ${ElInput1.value} </h3>
        <hr>
        <p>Company: <p> </p></p>
        <p>Salary: <p></p></p>
        </div>`;            
        CardList.appendChild (elli)        
        Allrender();
        }

  for (let i = 0; i < Elinput2.length; i++) {
    console.log(Elinput2[i].text);
    var elli = document.createElement("li");
    elli.innerHTML = `<div class="content">
                <h3>  </h3>
            <hr>
            <p>Company: <p> ${Elinput2.value} </p></p>
            <p>Salary: <p>  </p></p>
            </div>`;
            CardList.appendChild (elli)
        }
  for (let i = 0; i < ElInput3.length; i++) {
    console.log(ElInput3[i].text);
    var elli = document.createElement("li");
    elli.innerHTML = `<div class="content">
                <h3> </h3>
            <hr>
            <p>Company: <p>  </p></p>
            <p>Salary: <p> ${ElInput3.text} </p></p>
            </div>`;
            CardList.appendChild (elli)
        }
}

console.log(Input1Values);

ElForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log (ElInput1.value);
  console.log (Elinput2.value);
  console.log (ElInput3.value);
  
  Allrender();
})

// ElInput1.value = null;

// OCHIGI BUNDAN BUYOGINI QILOLMADIM.BERILGAN OBYEKTLARNI CONSOLGA CHIQARDIM XOLOS
