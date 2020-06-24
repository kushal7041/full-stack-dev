function validate(){
    var user=document.getElementById("txtUsername").value;
    var full=document.getElementById("txtFullname").value;
    var dept=document.getElementById("txtDepartment").value;
    var add=document.getElementById("txtAddress").value;
    var pass=document.getElementById("txtPassword").value;

    var u=/^[A-Z][a-zA-Z0-9_]{4,7}$/;
    var p=/^[a-zA-Z0-9._-]{2,12}[@][a-z0-9]{3,15}$/;

    if(user=='' || full=='' || dept=='' || add == '' || pass == ''){
       window.alert('Please enter all the fields');
       return false;
    }
    else{
        if(u.test(user)&&p.test(pass)){
            window.alert("Valid");
            return true;
        }
        else{
            window.alert("Invalid");
            return false;
        }   
    }
}