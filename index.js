// Code your solution here
function findMatching(drivers, driverName){
  return drivers.filter(function(string) {
    if (string == driverName || string == driverName.toLowerCase())
    return string 
  })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(driver => driver.substring(0, 2) === string.substring(0, 2))
}

function matchName(array, string){
  return array.filter(driver => driver.name === string)
}
