/**
 * jQuery plugin - Crop
 * Crop text by decrease it font size
 */
jQuery.fn.extend({

	/**
	 * @param {Number} limit - Minimum font size for which we must decrease text
	 */
	cropText: function(limit) {
		var postfix = '...',
			el, $el,
			tmpStr, res, srcText, sl,
			i, r, insL,
			cfs, resize;

		function crop(){
			insL = srcTextLn / r << 0;
			tmpStr = srcText.substr(i, insL);

			if(tmpStr.length == 0) return;

			$el.html(res + tmpStr + postfix);

			if(el.clientHeight < el.scrollHeight) {
				if(insL === 0){
					return;
				} else {
					r *= 2;
					crop();
				}
			} else {
				insert(); crop();
			}

			insert();
		};

		function insert() {
			i += insL;
			res +=tmpStr;

			$el.html(res + postfix);
		};

		function resize(){
			if(el.clientHeight >= el.scrollHeight) return;

			if(cfs > limit) {
				cfs--;
				$el.css('fontSize', cfs);
			} else {
				$el.empty();
				crop();

				return;
			}

			resize();
		};

		this.each(function() {
			el = this;
			$el = $(this);
			tmpStr = '';
			res = '';
			srcText = $(this).text();
			srcTextLn = srcText.length;
			i = 0;
			r = 1;
			insL = 0;
			cfs = cfs || parseInt($el.css('fontSize'));

			resize();
		});

		return this;
	}
});