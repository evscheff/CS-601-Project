window.onload = function () {
    importResources();
    console.log(jsonArray);
    for (var i in data) {
        console.log(i);
    }
}

var jsonArray = [];


function importResources() {
    fetch('Data/resources.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('problem accessing file');
        }
    })
        .then((data) => {
            console.log('Im working!');
            for (var i in data) {
                jsonArray.push(data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}