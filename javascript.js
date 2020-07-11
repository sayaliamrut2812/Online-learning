 function confirmPass() {
        var pass = document.getElementById("pass").value
        var confPass = document.getElementById("c_pass").value
        if(pass != confPass) {
            alert('Wrong confirm password !');
        }
    }