const btn_alter = document.querySelector(".btn-alter");
const btn_conver = document.querySelector(".btn-conver");

var alt = 0;

btn_alter.addEventListener("click", function() {
    alter();
});


btn_conver.addEventListener("click", function() {
    conversor();
});

function conversor(){
    const inputs = document.querySelectorAll(".input");
    const input_um = inputs[0].value;
    const input_dois = inputs[1];

var cv = 0;

if(alt == 0){
    cv = input_um * 0.20;
}else{
    cv = input_um * 5.22;
}

input_dois.value=cv;

}

function alter(){
    const labels = document.querySelectorAll(".label > span");
    const inputs = document.querySelectorAll(".input");

    const label_um = labels[0];
    const label_dois = labels[1];

    const label_um_value = label_um.innerText;
    const label_dois_value = label_dois.innerText;

    inputs[0].value="";
    inputs[1].value="";

    label_um.innerText = label_dois_value;
    label_dois.innerText = label_um_value;

    if(alt == 0){
        alt = 1;
    }else{
        alt = 0;
    }
}