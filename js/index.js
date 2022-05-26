const elInput = document.querySelector(".form-input");
const elBtn = document.querySelector(".form-btn");
const elResult = document.querySelector(".form-result");

elBtn.addEventListener('click', function (e){
    e.preventDefault()

    const inputValue = Number(elInput.value);
    // console.log(inputValue);

    switch (inputValue) {
        case 1:
        elResult.textContent = "Monday"
        break;
        case 2:
            elResult.textContent = "Tuesday"
            break;
        case 3:
            elResult.textContent = "Wednesday"
            break;
        case 4:
            elResult.textContent = "Thursday"
            break;
        case 5:
            elResult.textContent = "Friday"
            break;
        case 6:
            elResult.textContent = "Saturday"
            break;
        case 7:
            elResult.textContent = "Sunday"
            break;
        default:
            elResult.textContent = "Bunaqa kun yo'qku shuni ham bilmaysanmi ahmoq🤦‍♂️"
        }

    })