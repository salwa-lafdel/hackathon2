function sendData() {
    //signup
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let tele = document.getElementById('tele').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let userdata = {
      nom,prenom,tele,email,password
    }
    fetch('http://localhost:3000/user',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
  }
