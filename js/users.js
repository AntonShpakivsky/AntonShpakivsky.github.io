const form = document.getElementById('form');

function retrieveFormValue(event){
    event.preventDefault();

    const name = form.querySelector('[name="name"]'),
          email = form.querySelector('[name="email"]'),
          password = form.querySelector('[name="password"]'),
          city = form.querySelector('[name="city"]');

    const values = {
        name: name.value,
        email: email.value,
        password: password.value,
        city: city.value
    };

    console.log(values);

    

    async function PostResponse () {
        let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/users',{
            method: 'POST',
            header: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(values) 
        });
        if (!response.ok) {
            console.error('Запрос не удался');
            return;
        }
        let content = await response.text()
        console.log(response)
        console.log(content)
    }
    PostResponse()

}

form.addEventListener('submit', retrieveFormValue);



