 
 const email = "saqib123@gmail.com";
 const password = "saqib123"
 
 
 function login() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassward = document.getElementById("loginPassword").value;

console.log(loginEmail + "te login email h");
console.log(loginPassward + "te login password h");
console.log(email + password + "te statutic h");

    if(email === loginEmail && password === loginPassward){
        alert("sucessfully")
        window.location.href = "foam.html";
    } else{
        alert("try again")
    }
    // console.log("yae login password ha ", loginEmail + loginPassward);
    // axios.post('http://localhost:3000/login', {
    //     email: loginEmail, password: loginPassward
    // }).then((response) => {
    //     if(response.status===201){

    //         document.getElementById("loginEmail").value = "";
    //         document.getElementById("loginPassword").value = "";
    //         console.log(response.data.message);
    //         console.log(response);
    //         alert(response.data.message);
    //         window.location.href = "home.html";
            // window.localStorage.setItem("loginemail", loginEmail)
            // window.localStorage.setItem("loginpassword", loginPassward)
            // getData()
            // console.log("getData",getData())
            
            
            
            
        // }else{alert("try again")}
        // }).catch((error) => {


        //     console.log(error)
            // console.log(error.response.message)
            // alert(error.response.data.message)
            //  console.log(error)
            // if (error.response){
            //     alert("Login Success")
            // }else if(error.request){
            //     alert("InCorrect ")
            // }
            // console.log(error);
            //    alert("Try Again")
        // })
    // return false
}