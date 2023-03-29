function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('active');
                } else {
                    current.classList.add('active')

                }
            }
            e.preventDefault();
        });
    };
}
toggleItem(document.querySelectorAll('.controls a'));
let showPassword=(e)=>{
    let input=e.previousElementSibling;
    if(input.type=="password"){
        e.classList="far fa-eye-slash show-password active";
        input.type="text";
       
      
    }else{
        e.classList="far fa-eye show-password active";
        input.type="password";
      
    }

}
let passwords=document.querySelectorAll("input[type='password']")
passwords.forEach((password)=>{
    password.addEventListener("keyup",(element)=>{
        let icon=element.target.nextElementSibling;
    if(element.target.value.length>0){
        icon.classList.add("active");
    }else{
        icon.classList.remove("active")
    }
})
})