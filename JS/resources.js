window.onload = function () {
    importResources();
}

async function importResources() {
    fetch('Data/resources.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('problem accessing file');
        }
    })
        .then((data) => {
            console.log('Im working!')
        })
        .catch((error) => {
            console.log(error);
        });
}