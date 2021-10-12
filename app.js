// To check uncheck
let editItem =null;

$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
    console.log('Clicked on li');
}
    
)

//To  Delete element

$('ul').on('click','.del-icon',function(event){
    $(this).parent().parent().fadeOut(300,function(){
        $(this).remove();
        
    })
    
    console.log('clicked on delete');
    event.stopPropagation();
    
}
)

// Edit functionality

$('ul').on('click','.edit-icon',function(event){
    $('input').removeClass('new-todo');
    const editTodo = $(this).parent().parent().text();
    $('input').val(editTodo);
    editItem = $(this).parent().parent();
    

    event.stopPropagation();
    
}
)
// To Insert Element

$('input[type="text"]').keypress(function(e){
    // console.log('new todo called')
    if(e.which===13){
        const todoText = $(this).val();
        
        if(editItem === null){
            const todoNew = `<li><span><i class="uil uil-trash-alt del-icon"></i></span> ${todoText} <span><i class="uil uil-edit-alt edit-icon"></i></span></li>`;
            $('ul').append(todoNew);
        }else{
            const todoEdit = `<span><i class="uil uil-trash-alt del-icon"></i></span> ${todoText} <span><i class="uil uil-edit-alt edit-icon"></i></span>`;
            editItem.html(todoEdit);
        }
        editItem = null;
        $(this).val("");

    }
})

//To togle input field

$('#plus').click(function(){
    $('input').fadeToggle(500);
})

