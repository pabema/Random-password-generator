window.addEventListener('load', () => {
    const result = document.querySelector('.password');
    const submit = document.querySelector('.submit');
    const copy = document.querySelector('.copy');

    const length = document.querySelector('.length');
    const lowerCheck = document.querySelector('.lower');
    const upperCheck = document.querySelector('.upper');
    const numbersCheck = document.querySelector('.numbers');
    const symbolsCheck = document.querySelector('.symbols');

    
    // console.log(result);
    const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const symbols = ['!', '|', '@', '#', '%', '€', '&', '/', '?', '¿', '_'];

    // const password = 'Password: ';

    function generatePwrd(e){
        e.preventDefault();

        let password = "";  
        
        const selected = [];

        if(lowerCheck.checked){
            selected.push(lower);
        }else{
            selected.filter((id) => id !== lower);
        }

        if(upperCheck.checked){
            selected.push(upper);
        }else{
            selected.filter((id) => id !== upper);
        }

        if(numbersCheck.checked){
            selected.push(numbers);
        }else{
            selected.filter((id) => id !== numbers);
        }
        
        if(symbolsCheck.checked){
            selected.push(symbols);
        }else{
            selected.filter((id) => id !== symbols);
        }

        let validCharacters = selected.toString();
        let validCharsFormat = validCharacters.replace(/,/g, '');
        let validCharsLength = validCharsFormat.length;

        console.log(validCharsFormat);
        console.log(validCharsLength);

        
        for(let i = 0; i < length.value; i++){

        
            let character = Math.floor(Math.random() * validCharsLength);
        
            password += validCharsFormat.charAt(character);
        }

        result.value = password;

        console.log(selected);
        if(selected.length == 0){
            alert('Selecciona almenos un campo');
        }
        
    }

    function copyPwrd(e){
        e.preventDefault();

        if (result.value.length > 0){
            result.select();

            navigator.clipboard.writeText(result.value);
    
            alert("Contraseña copiada");
        }else{
            alert('Selecciona almenos un campo');
        }
        
    }

    submit.addEventListener('click', generatePwrd);
    copy.addEventListener('click', copyPwrd);

})