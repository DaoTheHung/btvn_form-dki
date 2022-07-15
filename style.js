// const listUser = [
//     {
//         email : 'hungck@gmail.com',
//         password : '1234',
//     },
//     {
//         email : 'hungck2@gmail.com',
//         password : '1234',
//     },
//     {   
//         email : 'hungck3@gmail.com',
//         password : '1234',
//     },
// ];
// document.getElementById('login').onclick = function () {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//    for(let user of listUser){
//        if(user.email === email){
//         if(user.password === password){
//             alert('dang nhap thanh cong');

//         }else{
//             alert('dang nhap khong thanh cong')
//         }
//        }
//    }
// }


function onclick(){
    document.getElementById('password').type = 'text';
}
const listUser = [
        {
            email : 'hungck@gmail.com',
            email1 : 'hungck@gmail.com',
            password : '1234',
            password1 : '1234',
        },
        
    ];

document.getElementById('login').onclick = function () {
    const email = document.getElementById('email').value;
    const email1 = document.getElementById('email1').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password1').value;
 
     if(email.includes('#') || email1.includes('#')){
        alert('email chưa đúng định dạng');
        return;
     }
     if(email === email1){
        
     }else{
        alert('email kh trung khop')
        return;
     };
     if(password === password1){
        
     }else{
        alert('mat khau khong trung khop')
        return;
     };
     
     
    



   for(let user of listUser){
       
       if(user.email === email){
        if(user.password === password){
            alert('dang ky thanh cong');
            window.location = 'index2.html';

        }else{
            alert('dang nhap that bai')
        }
       }
       aaa = true
   }
}
   






