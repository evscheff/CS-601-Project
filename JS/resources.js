window.onload = function () {
    importResources();
    console.log(jsonArray);
    console.log(jsonArray[0][0]);
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
            //console.log(jsonArray);
        })
        .catch((error) => {
            console.log(error);
        });
}