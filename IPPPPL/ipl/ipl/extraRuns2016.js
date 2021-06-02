const extraRuns2016= (deliveries, matches, season='2016') => {
  let seasonId = matches
    .filter(match => match.season === season)
    .reduce((accumulator, match) => {
      accumulator[match.id] = match;
      return accumulator;
    }, {});

  return deliveries
    .filter(delivery => seasonId[delivery.match_id])
    .reduce((accumulator, delivery) => {
      if (accumulator[delivery.bowling_team] === undefined) {
        accumulator[delivery.bowling_team] = 0;
      }
      accumulator[delivery.bowling_team] += parseInt(delivery.extra_runs);
      return accumulator;
          }, {});
};

module.exports = extraRuns2016;
