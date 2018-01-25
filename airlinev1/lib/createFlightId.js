function createFlightId(flightNum, schedule) {
	const dt = new Date(schedule)
	let monthNum = dt.getMonth() + 1
	let dayNum = dt.getDate()

	if (monthNum + ''.length == 1) {
		monthNum = '0' + monthNum
	}

	if (dayNum + ''.length == 1) {
		dayNum = '0' + dayNum
	}

	return (
		flightNum +
		'-' +
		monthNum +
		'-' +
		dayNum +
		'-' +
		(dt.getFullYear() + '').substring(2, 4)
	)
}
