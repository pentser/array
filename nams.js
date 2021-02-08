const $searchInputElement = document.getElementById('search');
const $nameList = document.getElementById('names');
const nameOfFriends = ['Alex', 'Michael', 'Gilad', 'Noam', 'Kos', 'Anton'];

// const nameFirstElement = nameOfFriends.filter((name) => name.indexOf('A') === 0);
// console.log(nameFirstElement);

const addNamesList = (nameArray, clearRes) => {
    for(let name of nameArray) {
        if (!clearRes){``
            $nameList.innerHTML += `<li>${name}</li>`;
        }else{
            $nameList.innerHTML = `<li>${name}</li>`;
        }
    }
}

$searchInputElement.addEventListener('keyup', (event) => {
    const searchNames = $searchInputElement.value;
    const filterName = nameOfFriends.filter((name) => name.includes(searchNames));
    addNamesList(filterName, true);
});

addNamesList(nameOfFriends);