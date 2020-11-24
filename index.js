function stringIsNum(inCh){
    let ints = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return ints.includes(inCh); 
}

function checkNoLettersSpacesCounts(coordinates){
    for(let i = 0; i < coordinates.length; i++){
        let decCount = 0; // count of decimal characters
        for(let j = 0; j < coordinates[i].length; j++){
            let ch = coordinates[i].charAt(j);

            if(ch === "-"){ // found negative sign
                if(j !== 0){
                    return false; // found negative sign but not as first character!
                }
            }else if(!stringIsNum(ch)){ // char was not a num
                if(ch === "."){
                    decCount++;
                    if(decCount > 1){
                        return false; // was a decimal but we already had a decimal before!
                    }
                }else{
                    return false; // was not a num nor a decimal!
                }
            }
        }
    }
    return true;
}

function isValidCoordinates(coordinates){
    let coords = coordinates.split(", ");
    if(!checkNoLettersSpacesCounts(coords)){
        return false;
    }

    let latitude = parseFloat(coords[0]);
    let longitude = parseFloat(coords[1]);

    return (
        ((latitude > -90) && (latitude < 90)) &&
        ((longitude > -180) && (longitude < 180))
    );
}

// TESTCASES: 

var ValidCoordinates = [
    "-23, 25",
    "4, -3",
    "24.53525235, 23.45235",
    "04, -23.234235",
    "43.91343345, 143"
  ];
for( i in ValidCoordinates ) {
  console.log(isValidCoordinates(ValidCoordinates[i]));
}

var InvalidCoordinates = [
    "23.234, - 23.4234",
    "2342.43536, 34.324236",
    "N23.43345, E32.6457",
    "99.234, 12.324",
    "6.325624, 43.34345.345",
    "0, 1,2",
    "0.342q0832, 1.2324",
    "23.245, 1e1"
  ];
for( i in InvalidCoordinates ) {
  console.log(isValidCoordinates(InvalidCoordinates[i]));
}