function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


function validateForm() {
    let x = document.froms["myForm"]["fname"].value;
    if (x == "") {
        console.log("Name must br filled out!");
        return false;
    }
}