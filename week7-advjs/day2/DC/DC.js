function submitForm() {
    const name=document.getElementById("name").value
    const lastName=document.getElementById("lastname").value
}

const formData={
    name:name,
    lastName:lastName
};

// const formObject= document.querySelectorAll("form")
// console.log(formObject);

const jsonString=JSON.stringify(formObject)

document.getElementById("ouput").innerHTML=`<p>${jsonString}</p>`



