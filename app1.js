const csv = require('csvtojson');

//Getting the month passed as argument via console
let month = (process.argv)[2];

//Updating month variable to make substring search easy with the columnName as string.
if ((month).toUpperCase() == 'JANUARY') month = 'Jan';
else if ((month).toUpperCase() == 'FEBRUARY') month = 'Feb';
else if ((month).toUpperCase() == 'MARCH') month = 'Mar';
else if ((month).toUpperCase() == 'APRIL') month = 'Apr';
else { console.log('No result found'); return};

const csvFilePath = 'data/customers.csv'; //Path To data Set CSV File.
csv()
	.fromFile(csvFilePath)
	.then((list) => {
		//Dafault Number of 'Gain' and 'Lost' Subscribers for the Month passed as argument. 
		let gainCount = 0;
		let lostCount = 0;
		for (let i = 0; i < list.length; i++) {
			//Substring(i.e month) search in the dateField named as "SubscriptionStartDate"
			//it will contribute in the number of gain of Subscribers on given Month by one unit. 
			if (list[i].SubscriptionStartDate.indexOf(month) != -1) {
				gainCount = gainCount + 1;
			}

			//Substring(i.e month) search in the dateField named as "SubscriptionEndDate"
			//it will contribute in the number of lost of Subscribers on given Month by one unit. 
			if (list[i].SubscriptionEndDate.indexOf(month) != -1) {
				lostCount = lostCount + 1;
			}
		}
		//Output the results to console
		console.log('Gain Count: ', gainCount);
		console.log('Lost Count: ', lostCount);
	})
	.catch(err => console.log(err));
