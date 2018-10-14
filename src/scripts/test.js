/*
* @description
*
* @author Sacha Rodier <sacharodier94@googlemail.com
*/

(function (window, $) {

	var dataHello = 'data-hello';
	var isActive = 'active';

	$('[' + dataHello + ']').on('click', function () {
		var $self = $(this);

		if ($self.hasClass(isActive)) {
			$self.removeClass(isActive);
		} else {
			$self.addClass(isActive);
		}
	});
})(window, jQuery);