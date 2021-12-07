let btn = document.getElementById('button')

let userData = {};
let array = [];

function getUserData(e) {
    e.preventDefault()

    if (Object.keys(userData).length < 8) {
        return;
    }
    alert('form is submitted');

    array.push(userData);

    localStorage.setItem('userFormData', JSON.stringify(array));
    userData = {};

}
btn.addEventListener('click', getUserData)


document.querySelectorAll('.form-control').forEach((ele, i) => {
    ele.addEventListener('change', (e) => {
        validateValue(e, i)
    });
});


function validateValue(e, index) {

    if ((index == 0 || index == 1)) {
        let str;

        index == 0 ? str = 'firstName' : str = 'lname';
        if (!(/^[a-zA-Z ]{3,30}$/.test(e.target.value))) {

            document.querySelector('.' + str).innerText = ' *Atleast three characters required';
            return;
        }
        document.querySelector('.' + str).innerText = '';
        userData[str] = e.target.value;

    } else if ((index == 2)) {

        if (!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value))) {

            document.querySelector('.email').innerText = "*Email must be in correct format 'abc@gmail.com' ";
            return;
        }
        document.querySelector('.email').innerText = '';
        userData.email = e.target.value;
    } else if ((index == 3)) {

        if (!(/^[0-9]+$/.test(e.target.value))) {

            document.querySelector('.number').innerText = '*Must be a number and required 10 digits';
            return;
        }
        document.querySelector('.number').innerText = '';
        userData.number = e.target.value;
    } else if (index == 4 || index == 5 || index == 6) {
        if (!e.target.checked) {
            document.querySelector('.gender').innerText = '*Select your gender';
            return;
        }
        document.querySelector('.gender').innerText = '';
        userData.gender = e.target.value;
    }
    //address
    else if ((index == 7)) {

        if (!(/^[0-9a-zA-Z\s,-]{10,100}$/.test(e.target.value))) {

            document.querySelector('.address').innerText = '*Atleast 30 Characters are required';
            return;
        }
        document.querySelector('.address').innerText = '';
        userData.address = e.target.value;
    }
    //password
    else if ((index == 8 || index == 9)) {


        let str;

        index == 8 ? str = 'password' : str = 'cnfPassword';
        if (!(/^[A-Za-z]\w{7,14}$/.test(e.target.value))) {

            document.querySelector('.' + str).innerText = '*atleast 7 characters. contain only characters, numeric digits, underscore and first character must be a letter';
            return;
        }

        if (index == 9) {
            if (userData.password != e.target.value) {
                document.querySelector('.' + str).innerText = '*Password must be same ';
                return;
            }

        }
        document.querySelector('.' + str).innerText = '';
        userData.password = e.target.value;
    } else if (index == 10) {
        if (!e.target.checked) {
            document.querySelector('.cnfCheck').innerText = '*Please confirm';
            return;
        }
        document.querySelector('.cnfCheck').innerText = '';
        userData.cnfCheck = true;
    }
}