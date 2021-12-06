window.onload = function () {
    importResources();
}

let jsonObject;
let jsonArray = [];

async function importResources() {
    fetch('Data/resources.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('problem accessing file');
        }
    })
        .then((data) => {
            console.log('Im working!');
            jsonObject = JSON.parse(data);
            for (var i in jsonObject) {
                jsonArray.push(jsonObject[i]);
                console.log(jsonObject[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}