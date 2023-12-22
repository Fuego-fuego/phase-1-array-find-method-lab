// code your solution here
function superbowlWin(record) {
    
    const winYear = record.find(
        element => {

            if (element.result === "W") {

                return element;
            }
            
        }
    );
    let result = winYear?winYear['year']:undefined;
    
    return result;
};