$(function(){
	//begin step-2
	$("#nj-ad").bind('keydown', function(event) {
	    var currentString = $("#nj-ad").val()

	    if (currentString.length <= 10 )  {  /*or whatever your number is*/
	       if($('#next-step').hasClass('btn-danger')){ 
	       	$('#next-step').removeClass('btn-danger');
	       	$('#next-step').addClass('disabled');
	       }
	    } else {
	      if($('#next-step').hasClass('disabled')){ 
	       	$('#next-step').removeClass('disabled');
	       	$('#next-step').addClass('btn-danger');
	       }
	    }
	});

	$('#education').delegate('.add-another-keyword', 'click', function(){
		if($(this).hasClass('btn-danger')){
			$(this).removeClass('btn-danger').addClass('btn-primary').text('Remove');
			var newStuff = '<div class="row-fluid">'
						+ '<div class="input-append">'
				 		+ '<input class="span8" id="appendedInputButton" type="text">'
				  		+ '<button class="btn btn-danger add-another-keyword" type="button">Add</button>'
						+ '</div></div>';

				$('#education').append(newStuff);
		}else{
			$(this).parent('div').parent('.row-fluid').remove();
		}
			
	});

	//begin step-3

	$('#education').delegate('.add-another-title', 'click', function(){
		if($(this).hasClass('btn-danger')){
			$(this).removeClass('btn-danger').addClass('btn-primary').text('Remove');
			var newStuff = '<div class="row-fluid">'
						+ '<div class="input-append">'
				 		+ '<input class="span8" id="appendedInputButton" type="text">'
				  		+ '<button class="btn btn-danger add-another-title" type="button">Add</button>'
						+ '</div></div>';

				$('#education').append(newStuff);
		}else{
			$(this).parent('div').parent('.row-fluid').remove();
		}
	});
	var i = 0;

	//begin step-4
	$('input:radio[name="optionsRadios"]').change(
    function(){
    	if(i%2==0){
    		$('#filter-schools').fadeIn();
    		i++;
    	}
    	else{
    		$('#filter-schools').hide();
    		i++;
    	}
    });

	//begin step-5
   var pnav = {
	    persist: function(thisClone) {
	        return this.each(function(i, domEl) {
		    var top = $(this).offset().top;

		    if ($('#job-form').scrollTop() > top) {
		        thisClone.addClass('visible');
		        $(this).addClass('hidden');
		        $('#to-top').removeClass('hidden');
		    } else {
		        thisClone.removeClass('visible');
		        $(this).removeClass('hidden');
		        $('#to-top').addClass('hidden');
		    }

		 
		});
	    }
	};
 
	$.fn.Persnav = function() {
	    var $this = $(this);
	    var thisClone = $this.clone().addClass('persisting');
	    $(this).addClass('not');
 		
	    $this.before(thisClone);
 
	     $('#job-form').scroll(function() {
	        return pnav['persist'].call($this, thisClone);
	    });
	};

	$('#chosenIndustries').Persnav();

	// begin step 7

	if($('img.tippable').length){
	$('img.tippable').tooltip();
	}
	
	$('#test-it').click(function(){
		$('#ht-jl-content').css('width', '70%');
		$('.test-results').slideDown();
		  
	});

});




/* Checkboxes and Radio buttons */

// Custom checkbox and radios
function setupLabel() {
    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if ($(checkBoxInput).length) {
        $(checkBox).each(function(){
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function(){
            $(this).parent(checkBox).addClass(checkBoxChecked);

        });
        $(checkBoxInput + ":disabled").each(function(){
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function(){
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function(){
            $(this).parent(radio).addClass(radioOn);

        });
        $(radioInput + ":disabled").each(function(){
            $(this).parent(radio).addClass(radioDisabled);
        });
    };
};

$(function(){

    $("html").addClass("has-js");

    // First let's prepend icons (needed for effects)
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    $(".radio").click(function(){
        setupLabel();
    });

    $('#to-top').click(function(){
    	$('#job-form').animate({scrollTop:0}, 'slow');
        return false;

    });

    $("label.checkbox").click(function (e) {
		if($('#next-step').hasClass('disabled')){
			$('#next-step').removeClass('disabled').addClass('btn-danger');
		}
    	var industry = $(this).children('input').val();
    	var strid = 'p#' + industry;
    	var str = '<p id="'+industry+'">'+industry+'</p>';

    	
    	
	    	$('#chosenIndustries.not').append(str);
	    	$('#chosenIndustries.persisting').append(str);
    setupLabel();
    });

    setupLabel();
});
