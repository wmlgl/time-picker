FastClick.attach(document.body);

var $date = $('#date');

$date.timePicker({
	title: '选择出行时间1',
	delay: 15,
	day: {
		len: 8,
		filter: ['今天'],
		format: 'M月d日'
	}
}).on('timePicker.select', function (e, selectedTime, selectedText) {
	$(this).text(selectedText);
}).on('timePicker.cancel', function () {
	console.log('user cancel');
});

$date.on('click', function () {
	$(this).timePicker('show');
});



