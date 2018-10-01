const csv = require('csvtojson');

//Getting the month passed as argument via console
let month = (process.argv)[2];

//Updating month variable to make substring search easy with the columnName as string.
if ((month).toUpperCase() == 'JANUARY') month = 'Jan';
if ((month).toUpperCase() == 'FEBRUARY') month = 'Feb';
if ((month).toUpperCase() == 'MARCH') month = 'Mar';
if ((month).toUpperCase() == 'APRIL') month = 'Apr';

const list = []; //list array stores converted data from CSV file in JSON format.
const csvFilePath = 'data/customers.csv'; //Path To data Set CSV File.
csv()
	.fromFile(csvFilePath)
	.then((data) => {
		//Storing json objects array into list array, obtained from parsing csv data file.
		list.push(data);

		//Dafault Number of 'Gain' and 'Lost' Subscribers for the Month passed as argument. 
		let gainCount = 0;
		let lostCount = 0;
		for (let i = 0; i < list[0].length; i++) {
			//Substring(i.e month) search in the dateField named as "SubscriptionStartDate"
			//it will contribute in the number of gain of Subscribers on given Month by one unit. 
			if (list[0][i].SubscriptionStartDate.indexOf(month) != -1) {
				gainCount = gainCount + 1;
			}

			//Substring(i.e month) search in the dateField named as "SubscriptionEndDate"
			//it will contribute in the number of lost of Subscribers on given Month by one unit. 
			if (list[0][i].SubscriptionEndDate.indexOf(month) != -1) {
				lostCount = lostCount + 1;
			}
		}
		//Output the results to console
		console.log('Gain Count: ', gainCount);
		console.log('Lost Count: ', lostCount);
	})
	.catch(err => console.log(err));