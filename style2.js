const listUser = [
    {
        email : 'hungck@gmail.com',
        password : '1234',
    },
    
];
document.getElementById('login').onclick = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   for(let user of listUser){
       if(user.email === email){
        if(user.password === password){
            alert('dang nhap thanh cong');
            window.location = 'index3.html'

        }else{
            alert('dang nhap khong thanh cong')
        }
       }
   }
}