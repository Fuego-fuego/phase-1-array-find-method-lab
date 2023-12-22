// code your solution here

/*  Function superbowlWin , 
    To find a year a team won based on supplied records*/
function superbowlWin(record) {
    
    // Find object containing a year won using find() method
    const winYear = record.find(element => {
        if (element.result === 'W') {
            return element;
        }
    });

    // ternary operator used to assign a result based on find method
    let result = winYear ? winYear['year'] : undefined;

    return result;
}