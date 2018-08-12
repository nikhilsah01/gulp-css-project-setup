     $(document).ready(function () {    
        
        /* Hide form input values on focus*/ 
                $('input:text').each(function(){
                    var txtval = $(this).val();
                    $(this).focus(function(){
                        if($(this).val() == txtval){
                            $(this).val('')
                        }
                    });
                    $(this).blur(function(){
                        if($(this).val() == ""){
                            $(this).val(txtval);
                        }
                    });
                });
        
                  $('.menu li').hover(
            function () {
                //show its submenu
                $('ul', this).stop().slideDown(400);
            },
            function () {
                //hide its submenu
                $('ul', this).stop().slideUp(400);            
            }
        );
        //Default Action

	
        
    });