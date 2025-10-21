let formValue = document.querySelector('form')

formValue.addEventListener('submit', (e) => {
    e.preventDefault() 

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let resultValue = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        resultValue.innerText = "Enter a valid height value..."
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        resultValue.innerText = "Enter a valid weight value..."
    }else{
        let bmiValue = (weight / (( height * height )/10000)).toFixed(2)
        resultValue.innerText = `The BMI value is ${bmiValue}`
    }

});