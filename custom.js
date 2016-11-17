


/*===============================
1.  SCROLL TO ANY DIV
===============================*/
function scrollTotop(selector){
		$('html, body').animate({
			scrollTop: $(selector).offset().top
		}, 1000)
}



/*===============================
2.	IMAGE PREVIEW CODE
===============================*/
  //PREVIEW OF UPLOADED IMAGE - immediatly after upload
	//PARM 1: changeTarget = This can be a class or ID that will change. e.g. <input type="file" class="file-upload" .....
  //PARM 2: The class or ID of preview div. 


  function imagePreview(changeTarget, preview){
	   	$("body").on('change',changeTarget,function(){
		$this = $(this);
		var regex = /^([a-zA-Z0-9\ \\,\)\(s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
		 if (typeof (FileReader) != "undefined") {
				var dvPreview = $(preview);
				dvPreview.html("");
			   
				$($(this)[0].files).each(function () {
					var file = $(this);
					if (regex.test(file[0].name.toLowerCase())) {
						var reader = new FileReader();
						reader.onload = function (e) {
							var img = $("<img />");
							img.attr("src", e.target.result);
							img.attr("class", 'thumbnail-cover');
							img.attr("alt", e.target.result);
							img.attr('data-id',1);
							img.attr('style','max-width:250px');
							dvPreview.append(img);
						}
						reader.readAsDataURL(file[0]);
					} else {
						alert(file[0].name + " is not a valid image file.");
						dvPreview.html("");
						return false;
					}
				});
			}
	 });
	 
   }

/*===============================
	  3. DATE COMPARE
===============================*/
  //returns true if end_date is greater than start_date or else return false

	function checkDate(start_date, end_date)
	{
		if(new Date(start_date).getTime() > new Date(end_date).getTime()){
			return true;
		}else{
			return false;
		}
	}
	

/*===============================
	4.	URL Validator
===============================*/
// Validates URL 
// www is mendatory, 
// "http://" or "https://" is optional

function isUrlValid(url) {
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i.test(url);
}


/*===============================
	5.	CHARACHTER LIMIT
===============================*/


$(document).ready(function(){
	var max = 399;
	$('body').on('keydown keyup focusin focusout change','textarea',function(e){
	   if($(this).hasClass("exceptional-1000")){
		      max = 999;
		  }
    $this2 = $(this);
		var textarea_value = $this2.val();
		textarea_value = textarea_value.substring(0,max);
		$this2.val(textarea_value);
		//list of functional/control keys that you want to allow always

		$this = $(this);
		var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
		if( $.inArray(e.keyCode, keys) == -1){
			if($(this).val().length >= max) {
				e.preventDefault();
				e.stopPropagation();
			}
		}   
		var remaining_charachters = max-$this.val().length;
		if(remaining_charachters < 0){
			remaining_charachters = 0;
		}
		$this.siblings('.word-count').html(( remaining_charachters + ' charachters left.'));
	});
	
	$('body').on('focusout','textarea',function(e){
		$(this).siblings('.word-count').html('');
	});
});


