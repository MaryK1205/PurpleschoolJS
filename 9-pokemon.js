'use strict'

const request = new XMLHttpRequest();
request.open('Get', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
    const abilities = JSON.parse(this.responseText);
    console.log(abilities);

    const request = new XMLHttpRequest();
    request.open('Get', 'https://pokeapi.co/api/v2/ability/7/' + abilities[0][effect_entries]);
    request.send;

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
    })

})

