let input = document.querySelector('input');
let string = "";
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        let b = e.target.innerHTML;
        if (b == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                alert("Enter valid Input");
            }
        }
        else if (b == 'AC') {
            string = "";
            input.value = string;
        }
        else if (b == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += b;
            input.value = string;
            console.log(e.target);

        }
    });
});

