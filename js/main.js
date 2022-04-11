//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let cocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
let drinkName = document.querySelector('h2')
let drinkIngredients = document.querySelector('.ingredientsPlace')
let ingredientsList = document.querySelector('.ingredientsList')
let drinkInstructions = document.querySelector('.instructionsPlace')


let button = document.querySelector('button')
button.addEventListener('click', function () {
    let input = document.querySelector('input').value;
    let string = cocktails + input
    console.log(input, string)
    fetch(string)
        .then(res => res.json())
        .then(data => domStuff(data))
        .catch(error => {
            document.querySelector('#error').innerText = 'Drink not found!'
            console.log('oh no')
        })


})

let domStuff = (data) => {
    console.log(data.drinks[0])
    drinkName.innerText = data.drinks[0].strDrink
    let ingredients = createIngredients(data.drinks[0])

    document.querySelector('#error').innerText = ''

    drinkIngredients.innerText = ingredients.join('\n')

    document.querySelector('img').src = data.drinks[0].strDrinkThumb

    drinkInstructions.innerText = data.drinks[0].strInstructions
    string = ''
}

let createIngredients = (obj) => {
    let result = []

    for (let i = 1; i <= 15; i++) {
        let ingredient = `strIngredient${i}`
        let measurement = `strMeasure${i}`

        if (obj[measurement] === null) {
            obj[measurement] = ''
        }

        if (obj[ingredient] === null) {
            break;
        }

        result.push(`${obj[measurement]} ${obj[ingredient]}`)

    }

    return result
}




/*
document.querySelector('h2')
document.querySelector('h3')
*/