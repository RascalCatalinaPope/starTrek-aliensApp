document.querySelector('#getButton').addEventListener('click', apiRequest);

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-trek-aliens-demo.herokuapp.com/api/${alienName}`)
            const data = await response.json()
            console.log(data)

            // dot notation,  Indiviual List Elements - go into the object and look for the species name it will pull it out and assign it as the innerText of our HTML
            document.getElementById('alienName').innerText = data.speciesName
            document.getElementById('alienWorld').innerText = data.homeWorld
            document.getElementById('alienFeatures').innerText = data.features
            document.getElementById('alienFacts').innerText = data.interestingFact
            document.getElementById('alienExamples').innerText = data.notableExamples
            document.getElementById('alienImage').src = data.image
            document.getElementById('alienCaption').innerText = data.speciesName

        } catch(error) {
            console.log(error)
    }
}