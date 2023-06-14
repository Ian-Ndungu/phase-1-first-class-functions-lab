const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  const createFareMultiplier = function (numA){
    return function (fare) {
        return fare*numA
    };
  };

  const fareMultiplier = createFareMultiplier();
  const fareDoubler = (totalFare, answer) =>{
     answer = totalFare*2
    return answer;
  };

  const fareTripler = (fareMultiplier, answer) =>{
    answer = fareMultiplier*3
    return answer;
  };

  const selectDifferentDrivers = (drivers, selectDrivers) => {
    return selectDrivers(drivers)
  };
