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
            document.getElementById('rsc1title').innerHTML = data.resources[0].resource.title;
            document.getElementById('rsc1author').innerHTML = data.resources[0].resource.author;
            document.getElementById('rsc1about').innerHTML = data.resources[0].resource.about;
            // for (var i in data) {
            //     //jsonArray.push(data[i]);
            // }
        })
        .catch((error) => {
            console.log(error);
        });
}