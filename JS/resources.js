window.onload = function () {
    importResources();
    //console.log(jsonArray);
    console.log(resource1);
}

var jsonArray = [];
var resource1;
var resource2;
var resource3;
var resource4;
var resource5;
var resource6;


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
            resource1 = data.resources[0];

            // the below works
            // for (var i in data) {
            //     jsonArray.push(data[i]);
            // }
        })
        .catch((error) => {
            console.log(error);
        });
}