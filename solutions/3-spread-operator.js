// BEGIN
const convert = (...dates) => {
    let convertedDates = []
    for (let i of dates) {
        let date = new Date(...i);
        convertedDates.push(date.toDateString())
    }
    return convertedDates;
}

export default convert;
// END