(function($)
{
	$.fn.CeX=function(options){
		var defaults={
			url : 'https://api.myjson.com/bins/1daz8a',
			type : 'GET',
			data : '',
			dataType : 'json',
			beforeSend : function() {
				console.log("hello");
			},
			success : function(data){
				 console.log(data);
			},
			error : function(xhr,reason) {
				console.log(reason);
			},
			complete : function() {
				console.log('completed');
			}
		};
		options = $.extend(defaults,options);

	return $(this).each(function(){
		var ajax=$.ajax({
			type: 'GET',
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