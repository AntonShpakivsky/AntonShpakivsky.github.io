const form = document.getElementById('form');

function retrieveFormValue(event){
    event.preventDefault();

    const email = form.querySelector('[name="email"]'),
          password = form.querySelector('[name="password"]');
          
    const values = {
        email: email.value,
        password: password.value
    };

    console.log(values);


    async function PostResponse () {
        let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/login',{
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




// async function getResponse () {
//     let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/logout',{
//         method: 'GET',
//         header: {
//             Location: 'https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/logout',
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify()  
//     });
//     if (!response.ok) {
//         console.error('Запрос не удался');
//         return;
//     }
//     let content = await response.text()
//     console.log(response)
//     console.log(content)
// }

// getResponse()
// (async () => {
//     const response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/users');
//     if (!response.ok) {
//         console.error('Запрос не удался');
//         return;
//     }
//     let content = await response.text()
//     console.log(response)
//     console.log(content)
// })();