var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  var myObj = {};

  for (var i = 0; i < salesData.length; i++) {
    var currCompany = salesData[i];
    var currCompanyName = currCompany.name;

    var currCompanySalesTotal = calculateSalesForCompany(currCompany.sales);
    var currCompanyTaxTotal = taxRates[currCompany.province] * currCompanySalesTotal;
    if (myObj[currCompanyName] === undefined)
      myObj[currCompanyName] = {totalSales: currCompanySalesTotal, totalTaxes: currCompanyTaxTotal}
    else {
      myObj[currCompanyName].totalSales += currCompanySalesTotal;
      myObj[currCompanyName].totalTaxes += currCompanyTaxTotal;
    }
  }

  return myObj;
}

function calculateSalesForCompany(salesArray) {
  return salesArray.reduce((a, b) =>  a + b, 0);
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
