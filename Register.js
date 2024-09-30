function resetError(){
    document.getElementById("error-name").innerHTML="";
    document.getElementById("error-email").innerHTML="";
    document.getElementById("error-password").innerHTML="";
    document.getElementById("error-conf").innerHTML="";
    document.getElementById("error-dob").innerHTML="";
    document.getElementById("error-gender").innerHTML="";
    document.getElementById("error-term").innerHTML="";
} 

const regist= document.getElementById("regist")
regist.addEventListener("submit", (e)=> submitForm(e))

function submitForm(e){
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conf = document.getElementById("conf").value;
    let dobString = document.getElementById("dob").value;
    let dob = new Date(dobString);
    let currentDate = new Date();
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let term = document.getElementById("term");
    
    resetError();

    if(name == ""){
        document.getElementById("error-name").innerHTML = "Username must be filled";
        return false;

    }else if (name.length < 2 || name.length > 100){
        document.getElementById("error-name").innerHTML = "Username must have 2-100 characters";
        return false;

    }else if(email == ""){
        document.getElementById("error-email").innerHTML = "Email must be filled";
        return false;

    }else if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email must end with @gmail.com";
        return false;

    }else if(password ==""){
        document.getElementById("error-password").innerHTML="Password must be filled";
        return false;

    }else if(conf == ""){
        document.getElementById("error-conf").innerHTML = "Confirmation password must be filled";
        return false;

    }else if(conf != password){
        document.getElementById("error-conf").innerHTML = "Confirmation password must be same with password";
        return false;
    }else if(!male.checked && !female.checked){
        document.getElementById("error-gender").innerHTML = "Gender must be selected!"
        return false;
    }else if(dobString == ""){
        document.getElementById("error-dob").innerHTML = "Date of Birth must be filled";
        return false;

    }else if(dob > currentDate){
        document.getElementById("error-dob").innerHTML = "Date of Birth cannot exceed today";
        return false;    

    }else if (!term.checked) {
        document.getElementById("error-term").innerHTML = "You must agree with the Term and Condition"
        return false;
    }else{
        alert("Registered Successfully, Welcome " + name)
        window.location.href="homenew.html"
        return true;
    }
}