// PROOF OF CONCEPT FOR MATCHING ALGORITHM

var mysql = require('mysql');

function getDataToMatch(){

  let ageRangeQuery = "SELECT AgeRange FROM User WHERE UserID = " + this.userId
  let locationPreferanceQuery = "SELECT LocationPreferance FROM USER WHERE UserID = " + this.userId
  let locationCoordinatesQuery = "SELECT Longitude AND Latitude FROM Location AS INNER JOIN" + this.userId + " = LocationID"
  queries = [ageRangeQuery, locationPreferanceQuery, locationCoordinatesQuery]
  data = []
  // Connects to database, throws error if connection unuccesful. Need to add code to handle this in error condition
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    for (q in queries){

      con.query(q, function (err, result) {
        if (err) throw err;
        data.push(result)
      })
    }
  })

  return {
    "ageRange": data[0],
    "locationPreferance": data[1],
    "locationCoordinates": data[2]
  }
}

function getUsersToDisplay(destCountry, city, dateOfDeparture, dateOfArrival, methodOfTravel, budget){

  // data needed to filter
  // let dataToFilterBy = this.getDataToMatch()

  con.connect(function(err) {
    let sql = "SELECT UserID FROM User WHERE age <= " + dataToFilterBy.ageRange + " AND LocationPreferance =" + dataToFilterBy.locationPreferance + "AND Latitude = " + dataToFilterBy.locationCoordinates.Latitude +" +- 0.5  AND Longitude = " + dataToFilterBy.locationCoordinates.Longitude +" +- 0.5"
    console.log("Connected!");
    if (err) throw err;
    con.query(sql, function (err, result) {
      if (err) throw err;
      return result;
    })
  })
}
