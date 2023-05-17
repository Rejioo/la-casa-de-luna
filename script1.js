// const fn = document.getElementById("fullName");
// const em = document.getElementById("email");
// const ph = document.getElementById("phoneNumber");
// const room = document.getElementById("rooms");
// const a = document.getElementById("adult");
// const c = document.getElementById("children");
// const ar = document.getElementById("Arrival");
// const dp = document.getElementById("Departure");
// const form = document.querySelector("form");
// const errorMessage = document.getElementById("errorMessage");

// form.addEventListener("submit", (e) => {
//     const errors = [];

//     if(fn.value.trim() === ""){
//         alert("Name required")
//     }
    
//     if(em.value.trim() === ""){
//         alert("email required")
//     }

//     if(ph.value.trim() === ""){
//         alert("phone number required")
//     }

//     if(room.value.trim() === ""){
//         alert("rooms should be selected")
//     }

//     if(a.value.trim() === ""){
//         alert("no. of adults must be specified")
//     }

//     if(c.value.trim() === ""){
//         alert("no. of children must be specified")
//     }

//     if(!ar){
//         alert("Arrival date must be specified")
//     }

//     if(!dp){
//         alert("Departure date must be specified")
//     }
//     if(errors.length > 0){
//         e.preventDefault();
//         errorMessage.toggleAttribute('hidden');
//         errorMessage.innerHTML = errors.join(', ');
//     }

   


   
// })
function val(){
    const fn = document.getElementById("fullName");
const em = document.getElementById("email");
const ph = document.getElementById("phoneNumber");
const room = document.getElementById("rooms");
const a = document.getElementById("adult");
const c = document.getElementById("children");
const ar = document.getElementById("Arrival");
const dp = document.getElementById("Departure");




    if(fn.value.trim() === ""){
        alert("Name required")
        return false;
    }
    
    if(em.value.trim() === ""){
        alert("email required")
        return false;

    }

    if(ph.value.trim() === ""){
        alert("phone number required")
        return false;

    }

    if(room.value.trim() === ""){
        alert("rooms should be selected")
        return false;

    }

    if(a.value.trim() === ""){
        alert("no. of adults must be specified")
        return false;

    }

    if(c.value.trim() === ""){
        alert("no. of children must be specified")
        return false;

    }

    if(!ar.value){
        alert("Arrival date must be specified")
        return false;

    }

    if(!dp.value){
        alert("Departure date must be specified")
        return false;

    }
   
     else {
        form.submit(); // Submit the form if there are no errors
        return true;

    }

}
