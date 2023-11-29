window.addEventListener('DOMContentLoaded', function(){

    const select = document.querySelector('.custom-select')
    const nav = this.document.querySelector('.site-nav')
    
    let listOfCity = []

    const getVille = async() => {
        try {
            const response = await fetch('../../source/data/database/ci.json')
            const { villes } = await response.json()  
            return villes          
        } catch (error) {
            console.log(error);
        }

    }

    listOfCity = getVille()

    listOfCity.then((result) => {
        for (const city of result) {
            select.innerHTML += `
                <option value="${city.city}">${city.city}</option>
            `
        }
    }).catch((err) => {
        console.log(err);
    });



})