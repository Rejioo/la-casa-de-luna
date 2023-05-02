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
//         errors.push("Name required")
//     }
    
//     if(em.value.trim() === ""){
//         errors.push("email required")
//     }

//     if(ph.value.trim() === ""){
//         errors.push("phone number required")
//     }

//     if(room.value.trim() === ""){
//         errors.push("rooms should be selected")
//     }

//     if(a.value.trim() === ""){
//         errors.push("no. of adults must be specified")
//     }

//     if(c.value.trim() === ""){
//         errors.push("no. of children must be specified")
//     }

//     if(!ar){
//         errors.push("Arrival date must be specified")
//     }

//     if(!dp){
//         errors.push("Departure date must be specified")
//     }
//     if(errors.length > 0){
//         e.preventDefault();
//         errorMessage.toggleAttribute('hidden');
//         errorMessage.innerHTML = errors.join(', ');
//     }

   


   
// })
const fn = document.getElementById("fullName");
const em = document.getElementById("email");
const ph = document.getElementById("phoneNumber");
const room = document.getElementById("rooms");
const a = document.getElementById("adult");
const c = document.getElementById("children");
const ar = document.getElementById("Arrival");
const dp = document.getElementById("Departure");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const errors = [];

    if(fn.value.trim() === ""){
        errors.push("Name required")
    }
    
    if(em.value.trim() === ""){
        errors.push("email required")
    }

    if(ph.value.trim() === ""){
        errors.push("phone number required")
    }

    if(room.value.trim() === ""){
        errors.push("rooms should be selected")
    }

    if(a.value.trim() === ""){
        errors.push("no. of adults must be specified")
    }

    if(c.value.trim() === ""){
        errors.push("no. of children must be specified")
    }

    if(!ar.value){
        errors.push("Arrival date must be specified")
    }

    if(!dp.value){
        errors.push("Departure date must be specified")
    }
    if(errors.length > 0){
        errorMessage.removeAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    } else {
        form.submit(); // Submit the form if there are no errors
    }
});
