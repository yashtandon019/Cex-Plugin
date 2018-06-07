(function($)
{
	$.fn.CeX=function(options){
		var defaults={
			url : 'https://api.myjson.com/bins/1daz8a',//enter url
			type : 'GET',//methodType
			data : '',
			dataType : 'json',
			beforeSend : function() {
				console.log("hello");//action to be performed before send
			},
			success : function(data){
				 console.log(data); //action to be performed on success
			},
			error : function(xhr,reason) {
				console.log(reason); //action performed on error
			},
			complete : function() {
				console.log('completed'); //action to be performed on completition
			}
		};
		options = $.extend(defaults,options);

	return $(this).each(function(){
		var ajax=$.ajax({
			type: 'GET',//methodType
			url: options.url,
			dataType: options.dataType,
			async: options.async,
			beforeSend: options.beforeSend,
			success: options.success,
			error: options.error,
			complete: options.complete
		})
		})

	}
	}
(jQuery));