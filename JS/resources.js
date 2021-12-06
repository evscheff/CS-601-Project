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
            document.getElementById('rsc1about').innerHTML = `Topic: ${data.resources[0].resource.about}`;
            document.getElementById('rsc1link').href = data.resources[0].resource.link;
            document.getElementById('rsc2title').innerHTML = data.resources[1].resource.title;
            document.getElementById('rsc2author').innerHTML = data.resources[1].resource.author;
            document.getElementById('rsc2about').innerHTML = `Topic: ${data.resources[1].resource.about}`;
            document.getElementById('rsc2link').href = data.resources[1].resource.link;
            document.getElementById('rsc3title').innerHTML = data.resources[2].resource.title;
            document.getElementById('rsc3author').innerHTML = data.resources[2].resource.author;
            document.getElementById('rsc3about').innerHTML = `Topic: ${data.resources[2].resource.about}`;
            document.getElementById('rsc3link').href = data.resources[2].resource.link;
            document.getElementById('rsc4title').innerHTML = data.resources[3].resource.title;
            document.getElementById('rsc4author').innerHTML = data.resources[3].resource.author;
            document.getElementById('rsc4about').innerHTML = `Topic: ${data.resources[3].resource.about}`;
            document.getElementById('rsc4link').href = data.resources[3].resource.link;
            document.getElementById('rsc5title').innerHTML = data.resources[4].resource.title;
            document.getElementById('rsc5author').innerHTML = data.resources[4].resource.author;
            document.getElementById('rsc5about').innerHTML = `Topic: ${data.resources[4].resource.about}`;
            document.getElementById('rsc5link').href = data.resources[4].resource.link;
            document.getElementById('rsc6title').innerHTML = data.resources[5].resource.title;
            document.getElementById('rsc6author').innerHTML = data.resources[5].resource.author;
            document.getElementById('rsc6about').innerHTML = `Topic: ${data.resources[5].resource.about}`;
            document.getElementById('rsc6link').href = data.resources[5].resource.link;
            // for (var i in data) {
            //     //jsonArray.push(data[i]);
            // }
        })
        .catch((error) => {
            console.log(error);
        });
}