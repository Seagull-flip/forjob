


$('#btn1').click(function (e) {
	e.preventDefault();
	const store = $('#store1').val();
	const vendor = $('#vendor1').val();
	let result;
	var arrdate = [];
	$.ajax({
		type: 'POST',
		url: 'php/index.php',
		data: { 'store': store, 'vendor': vendor },
		success: function (data) {
			console.log("Ура");
			result = $.parseJSON(data);

			result.forEach(element => {
				let s = element.starttime.substr(5, 2);
				let d = element.starttime.substr(8, 2);
				let f = element.starttime.substr(0, 4);
				var datet = s + '/' + d + '/' + f;
				arrdate.push(datet);

				// let start = element.starttime.substr(11, 5);
				// let end = element.endtime.substr(11, 5);
				// let shipdays = element.shipdays;
				// $('#start').val(start);
				// $('#end').val(end);
				// $('#shipdays').val(shipdays);


			});
			console.log(arrdate);






			// result.forEach(element => {
			// 	let date = new Date(element.starttime);
			// 	let day = date.getDate();
			// 	console.log(day);
			// 	;
			// });
		},
		error: function (er) {
			console.log('Произошла ошибка');
		}
	});
});
