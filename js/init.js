$(function(){

	var cropBlock = $('.cropText');

	/**
	 * Fill blocks by data
	 * @params {DOM Array} cropBlock - Array of DOM objects
	 * @params {String} data - text prefix for blocks content
	 * @parsm {Number} num - Number if text appends
	 */
	function fillText(cropBlock, data, num) {
		var text;

		cropBlock.each(function() {
			text = '';

			for(var i = 0; i < num ;i++ ) {
				text += (i + data);
			};

			$(this).text(text);
		});
	};

	//Fill blocks by data
	fillText(cropBlock, 'text ', 200);

	//Crop blocks text
	cropBlock.cropText(16);
});