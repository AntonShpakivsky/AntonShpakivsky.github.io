var input = document.getElementsByTagName('input');
var city;
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('change', function() {
      if (this.checked) {
        city = this.parentNode.textContent;
        console.log(city);
      }
  
    })
  
  }
  async function PutResponse () {
    let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/users/1',{
        method: 'PUT',
        header: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(city) 
    });
    if (!response.ok) {
        console.error('Запрос не удался');
        return;
    }
    let content = await response.text()
    console.log(response)
    console.log(content)
}
PutResponse()
