window.onload = function () {
    importResources();
    console.log(jsonArray);
    article1 = jsonArray.indexOf(0);
    article2 = jsonArray.indexOf(1);
    console.log(article1);
    console.log(article2);
}

var jsonArray = [];
var article1;
var article2;
var article3;
var article4;
var article5;
var article6;


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
            for (var i in data) {
                jsonArray.push(data[i]);
            }
            //console.log(jsonArray);
        })
        .catch((error) => {
            console.log(error);
        });
}