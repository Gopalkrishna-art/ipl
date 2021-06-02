function matchesPlayedPerYear(matches) {
    let arr = {};
    matches.forEach(match => {
        if (arr[match.season]) {
            arr[match.season] += 1;
        } else {
            arr[match.season] = 1;
        }
    });
    return arr;
}



module.exports = matchesPlayedPerYear;