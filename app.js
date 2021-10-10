// To check uncheck

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
    
    console.log('clicked on span');
    event.stopPropagation();
    
}
)

// Edit functionality

$('ul').on('click','.edit-icon',function(event){
    $('input').removeClass('new-todo');
    const editTodo = $(this).parent().parent().text();
    $('input').val(editTodo);
    $('input').keypress((event)=>{
        
        if(event.which === 13){
            console.log('Edit called');
            const editedTodo = $('input').val();
            $(this).text(editedTodo);
            $('input').addClass('new-todo');
        }
    })
    

    event.stopPropagation();
    
}
)
// To Insert Element

$('input[class="new-todo"]').keypress(function(e){
    console.log('new todo called')
    if(e.which===13){
        const todoText = $(this).val();
        console.log(todoText);
        const todo = `<li><span><i class="uil uil-trash-alt del-icon"></i></span> ${todoText}</li>`;
        $('ul').append(todo);
        $(this).val("");

    }
})

//To togle input field

$('#plus').click(function(){
    $('input').fadeToggle(500);
})

