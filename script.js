

let lista_history = document.querySelector("#history");

const tal1_input = document.querySelector("#input_number_1");
const tal2_input = document.querySelector("#input_number_2");
const svar = document.querySelector("#output_number");

function additionClick() {
    const tal1 = Number(tal1_input.value);
    const tal2 = Number(tal2_input.value);
    svar.value = tal1 + tal2;

    let li_history = document.createElement("li");
    li_history.textContent = tal1 + " + " + tal2 + " = " + svar.value;
    lista_history.appendChild(li_history);
}

function subtractionClick() {
    const tal1 = Number(tal1_input.value);
    const tal2 = Number(tal2_input.value);
    svar.value = tal1 - tal2;
    
    let li_history = document.createElement("li");
    li_history.textContent = tal1 + " + " + tal2 + " = " + svar.value;
    lista_history.appendChild(li_history);
}

function multiplicationClick() {
    const tal1 = Number(tal1_input.value);
    const tal2 = Number(tal2_input.value);
    svar.value = tal1 * tal2;
    
    let li_history = document.createElement("li");
    li_history.textContent = tal1 + " * " + tal2 + " = " + svar.value;
    lista_history.appendChild(li_history);
}

function divisionClick() {
    const tal1 = Number(tal1_input.value);
    const tal2 = Number(tal2_input.value);
    svar.value = tal1 / tal2;
    
    let li_history = document.createElement("li");
    li_history.textContent = tal1 + " ÷ " + tal2 + " = " + svar.value;
    lista_history.appendChild(li_history);
}