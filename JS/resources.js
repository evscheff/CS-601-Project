window.onload = function () {
    importResources();
    console.log(jsonArray);
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
            document.getElementById.apply('rsc1head').innerHTML = data.resources[0].resource.title;
            // for (var i in data) {
            //     //jsonArray.push(data[i]);
            // }
        })
        .catch((error) => {
            console.log(error);
        });
}