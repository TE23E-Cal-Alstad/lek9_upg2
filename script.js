
/* let tal1 = parseInt();
let tal2 = parseInt();
let svar = parseInt();
 */
const tal1_input = document.querySelector("#input_number_1");
const tal2_input = document.querySelector("#input_number_2");
const output = document.querySelector("#output_number");

function Addera(){
   const tal1 = parseInt(tal1_input.value);
   const tal2 = parseInt(tal2_input.value);

    output.value = tal1 + tal2;
   
}

function Subtrahera(){
    const tal1 = parseInt(tal1_input.value);
    const tal2 = parseInt(tal2_input.value);
 
     output.value = tal1 - tal2;
    
 }

 function Multiplicera(){
    const tal1 = parseInt(tal1_input.value);
    const tal2 = parseInt(tal2_input.value);
 
     output.value = tal1 * tal2;
    
 }

 function Dividera(){
    const tal1 = parseInt(tal1_input.value);
    const tal2 = parseInt(tal2_input.value);
 
     output.value = tal1 / tal2;
    
 }