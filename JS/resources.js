window.onload = function () {
    importResources();
    console.log(jsonArray);
    var article1 = jsonArray[0][0];
    var article2 = jsonArray[0][1];
    console.log(article1);
    console.log(article2);
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