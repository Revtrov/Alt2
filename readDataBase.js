import dbstring from "dbstring.js"
//grab string of all data from external file (abstraction) 
let dbstringr = dbstring.replace(/[\r\n]/gm, "")
    //use regex to find all return characters and remove them from the string
let everyValueArray = dbstringr.split(",")
    //split the string of all data into an array containing each data point
let planets = []
    //create the array that will contain each planets data
for (let i = 0; i < (everyValueArray.length / 91); i++) {
    planets.push([])
}
//use for loop to free up memory for the planets array's upcoming values
for (let i = 0; i <= everyValueArray.length; i++) {
    planets[Math.floor((i) / 92)].push(everyValueArray[i])
        //loop through all data points and add them to an index in the planet
        //the index at which the points go to is determined by there position in the all data points array devided by 
        //the amount of data points a planet has

    //see database_guide.txt for more info on data points relating to planets
}
let orbits = [],
    radii = [],
    parentStars = [],
    mass = [],
    eccentricity = [],
    equilibrium = [],
    tempArray = []

let getValueAtIndex = (index, outArray) => {
    for (let i = 0; i < planets.length; i++) {
        if (planets[i][index] != undefined && planets[i][index] != "") {
            outArray.push(parseFloat(planets[i][index]))
            tempArray.push(planets[i])
        } else {}
    }
    planets = tempArray
    tempArray = []
}
let featuresArray, featuresArrayIndex
for (let i = 0; i < 2; i++) {
    featuresArray = [orbits, radii, parentStars, mass, eccentricity, equilibrium]
    featuresArrayIndex = [11, 19, 3, 28, 38, 46]
    for (let e = 0; e < featuresArray.length; e++) {
        featuresArray[e] = []
    }
    for (let j = 0; j < featuresArray.length; j++) {
        getValueAtIndex(featuresArrayIndex[j], featuresArray[j])
    }
}
let dataBase = {},
    featuresArrayStrings = ["orbits", "radii", "parentStars", "mass", "eccentricity", "equilibrium"]
for (let j = 0; j < featuresArray.length; j++) {
    dataBase[featuresArrayStrings[j]] = featuresArray[j]
}


console.log(dataBase)
export { dataBase }