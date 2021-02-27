const signUpbut = document.querySelector('.signUpbut');
const signInbut = document.querySelector('.signInbut');
const signIn = document.querySelector('.signIn');
const signUp = document.querySelector('.signUp');

signUpbut.addEventListener("click", function(){

        signIn.classList.remove('active-account');
        signIn.classList.add('inactive');

        signUp.classList.remove('inactive');
        signUp.classList.add('active-account');
});

signInbut.addEventListener("click", function(){

    signIn.classList.remove('inactive');
    signIn.classList.add('active-account');

    signUp.classList.remove('active-account');
    signUp.classList.add('inactive');
});

function inputChecker() {
    const submitsignUp = document.querySelector('.submitsignUp');
    const userIn = document.querySelector('#userIn');
    const passIn = document.querySelector('#passIn');
    const subsignIn = document.querySelector('#subsignIn');
    const usernameUp = document.querySelector('.usernameUp');
    const passwordUp = document.querySelector('.passwordUp');
    const conpasswordUp = document.querySelector('.conpasswordUp');
    const accounts = document.querySelector('.accounts');
    const mainContainer = document.querySelector('.main-container');

    subsignIn.addEventListener("click", () => {
        if(userIn.value.length <= 7 || passIn.value.length <= 7) {

            userIn.value = '';
            passIn.value = '';

            alert('Username or password is less than 7 Characters');
            

        } else {
            alert('Login Successfully!')

            userIn.value = '';
            passIn.value = '';
        }

        // background('#fff');
    });

    submitsignUp.addEventListener("click", () => {

        if(usernameUp.value.length <= 7 || passwordUp.value.length <= 7 || conpasswordUp.value.length <= 7) {
            alert('Every textbox needs to be fulfilled with less than 7 Characters');

            usernameUp.value = '';
            passwordUp.value = '';
            conpasswordUp.value = '';

        } else {
            alert('Sign Up Successfully!')

            usernameUp.value = '';
            passwordUp.value = '';
            conpasswordUp.value = '';
        }

        // background('#fff');
    });

    function background(color) {
        accounts.style.background = color;
    }
}

inputChecker();