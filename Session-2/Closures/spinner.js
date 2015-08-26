/*
create an object and assign it to the variable "spinner"

var spinner = ....

the spinner is expected to exhibit the following behavior

spinner.up() => 1
spinner.up() => 2
spinner.up() => 3
spinner.up() => 4

spinner.down() => 3
spinner.down() => 2
spinner.down() => 1
spinner.down() => 0
spinner.down() => -1

The variable that is used to track the value should NOT be accessible from outside

*/
function getSpinner(){
    var count = 0;
    function up(){
        return ++count;
    }
    function down(){
        return --count;
    }
    return {
        up : up,
        down : down
    }
}


