document.addEventListener("DOMContentLoaded",function(){
    const toggle_box = document.getElementById("category_box");
    const toggle_pannel = document.getElementById("category_panel");

    toggle_box.addEventListener('click',function(){
        toggle_pannel.classList.toggle('active');
    })

    //hide the box when click outside

    document.addEventListener('click',function(event){
        if (!toggle_pannel.contains(event.target) && !toggle_box.contains(event.target)) {
            toggle_pannel.classList.remove('active');
        }
    });
});