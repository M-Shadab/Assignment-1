const csv = require('csvtojson');

const month = (process.argv)[2];
const list = []; //Store data from CSV file in JSON format

const csvFilePath = 'data/customers.csv';
csv()
  .fromFile(csvFilePath)
  .then((data) => {
    //Storing json objects array into list array, obtained from parsing csv data file.
    list.push(data);

    //Default count value for all Subscription Types
    let disruptorCount = 0;
    let liberatorCount = 0;
    let gameChangerCount = 0;

    if ((month).toUpperCase() == 'JANUARY') {
      for (let i = 0; i < list[0].length; i++) {
        //No. of Subscribers That will be considers as Active for month "January"
        //( Jan-StartDate only)
        //Substring(i.e monthName) search in the dateField named as "SubscriptionStartDate".
        if (list[0][i].SubscriptionStartDate.indexOf('Jan') != -1) {
          if (list[0][i].SubscriptionType == 'Disruptor') {
            disruptorCount = disruptorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'Liberator') {
            liberatorCount = liberatorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'GameChanger') {
            gameChangerCount = gameChangerCount + 1;
          }
        }
      }
    } else if ((month).toUpperCase() == 'FEBRUARY') {
      for (let i = 0; i < list[0].length; i++) {
        //No. of Subscribers That will be considers as Active for month "February"
        //(Feb-StartDate only || (jan-StartDate && (feb-EndDate || mar-EndDate || Apr-EndDate)))
        //Substring(i.e monthName) search in the dateField.
        if ((list[0][i].SubscriptionStartDate.indexOf('Feb') != -1) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Jan') != -1) &&
            ((list[0][i].SubscriptionEndDate.indexOf('Feb') != -1) ||
              (list[0][i].SubscriptionEndDate.indexOf('Mar') != -1) ||
              (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1)))) {

          if (list[0][i].SubscriptionType == 'Disruptor') {
            disruptorCount = disruptorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'Liberator') {
            liberatorCount = liberatorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'GameChanger') {
            gameChangerCount = gameChangerCount + 1;
          }
        }
      }
    } else if ((month).toUpperCase() == 'MARCH') {
      for (let i = 0; i < list[0].length; i++) {
        //No. of Subscribers That will be considers as Active for month "March"
        //(Mar-StartDate only || (jan-StartDate && (mar-EndDate || Apr-EndDate)) || (feb-StartDate && (mar-EndDate || Apr-EndDate))) 
        //Substring(i.e monthName) search in the dateField.
        if ((list[0][i].SubscriptionStartDate.indexOf('Mar') != -1) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Jan') != -1) &&
            ((list[0][i].SubscriptionEndDate.indexOf('Mar') != -1) ||
              (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1))) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Feb') != -1) &&
            ((list[0][i].SubscriptionEndDate.indexOf('Mar') != -1) ||
              (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1)))) {

          if (list[0][i].SubscriptionType == 'Disruptor') {
            disruptorCount = disruptorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'Liberator') {
            liberatorCount = liberatorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'GameChanger') {
            gameChangerCount = gameChangerCount + 1;
          }
        }
      }
    } else if ((month).toUpperCase() == 'APRIL') {
      for (let i = 0; i < list[0].length; i++) {
        //No. of Subscribers That will be considers as Active for month "April"
        //(Apr-StartDate only || (jan-StartDate && Apr-EndDate) || (feb-StartDate && Apr-EndDate) || (mar-StartDate && Apr-EndDate)) 
        //Substring(i.e monthName) search in the dateField.
        if ((list[0][i].SubscriptionStartDate.indexOf('Apr') != -1) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Jan') != -1) &&
            (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1)) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Feb') != -1) &&
            (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1)) ||
          ((list[0][i].SubscriptionStartDate.indexOf('Mar') != -1) &&
            (list[0][i].SubscriptionEndDate.indexOf('Apr') != -1))) {

          if (list[0][i].SubscriptionType == 'Disruptor') {
            disruptorCount = disruptorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'Liberator') {
            liberatorCount = liberatorCount + 1;
          }
          if (list[0][i].SubscriptionType == 'GameChanger') {
            gameChangerCount = gameChangerCount + 1;
          }
        }
      }
    } else {
      console.log('No result found');
      return;
    }

    //Output the results to console
    console.log('Active Disruptor Count: ', disruptorCount);
    console.log('Active Liberator Count: ', liberatorCount);
    console.log('Active GameChanger Count: ', gameChangerCount);
  })
  .catch(err => console.log(err));