function matchesWonPerTeam(matches) {
    let arr = {};
    matches.forEach(match => {
        if (arr[match.season]) {
            if (arr[match.season][match.winner]) {
                arr[match.season][match.winner] += 1;
            } else {
                arr[match.season][match.winner] = 1;
            }
        } else {
            arr[match.season] = {};
        }
    });
    return arr;
}


module.exports = matchesWonPerTeam;