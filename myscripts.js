var Resources = {
    do_loop: '// This loop is an example of a do loop \r\n\
    //     In this example the do loop prints \r\n\
    //     the yaw to the screen 10 times with \r\n\
    //     with a delay of 9 milliseconds \r\n\
 \r\n\
: do_loop \r\n\
   10 0 do // 10 loops \r\n\
   // get the address of yaw and dereference \r\n\
   // to get the float value and print to screen \r\n\
   yaw &di @ f.\r\n  \
 \r\n\
   9 delay // 9 milliseconds of delay \r\n\
   loop \r\n\
;',

    while_loop: '// This loop is an example of a do loop \r\n\
    //	In this example the while prints \r\n\
    //	the yaw to the screen with \r\n\
    //	a delay of 9 milliseconds \r\n\
    //	until a key is pressed \r\n\
 \r\n\
: while_loop \r\n\
    begin ?key 0= while \r\n\
 \r\n\
    // get the address of yaw and dereference \r\n\
    // to get the float value and print to screen \r\n\
    yaw &di @ f. \r\n\
 \r\n\
    9 delay // 9 milliseconds of delay \r\n\
 \r\n\
    repeat \r\n\
;',

    math_int: '// add two numbers \r\n\
4 4 + \r\n\
 \r\n\
// subtract two numbers 4 - 2 \r\n\
4 2 - \r\n\
 \r\n\
// multiply two numbers \r\n\
2 2 * \r\n\
 \r\n\
// divide two numbers \r\n\
4 2 / \r\n\
 \r\n\
// Take square root of a number \r\n\
4 sqrt',

    math_float: '// add two numbers \r\n\
4.0 4.0 f+ \r\n\
 \r\n\
// subtract two numbers 4 - 2 \r\n\
4.0 2.0 f- \r\n\
 \r\n\
// multiply two numbers \r\n\
2.0 2.0 f* \r\n\
 \r\n\
// divide two numbers \r\n\
4.0 2.0 f/ \r\n\
 \r\n\
// Take square root of a number \r\n\
4.0 sqrt',

    set_var: '// place variable name on the stack \r\n\
magvar \r\n\
 \r\n\
// place floating point on the stack \r\n\
f4.32 \r\n\
 \r\n\
// send the set command \r\n\
// this will store the float at the address \r\n\
// of the variable \r\n\
// and return the result of the command \r\n\
set \r\n\
 \r\n\
// Sending this command will drop the result \r\n\
//  off the stack \r\n\drop \r\n\
 \r\n\
// putting it all together \r\n\
magvar f4.32 set drop',

    set_array: '// place variable name on the stack \r\n\
magBias \r\n\
 \r\n\
// Tell Forth that an array is the proper form \r\n\
// Must put a space after \r\n\
array[  \r\n\
 \r\n\
// In this case the array is 3 32-bit values long \r\n\
// 0 is the first index and 2 is the last \r\n\
0 2  \r\n\
 \r\n\
// must place three floating point values on the stack \r\n\
// In this case both values are floating point. \r\n\
F100.0 F150.0 F200.0  \r\n\
 \r\n\
// close the array \r\n\
]array \r\n\
 \r\n\
// The "set" command places the values from the stack into the array \r\n\
// The drop is to drop the result of the command off the stack \r\n\
set drop \r\n\
 \r\n\
// putting it all together \r\n\
magBias array[ 0 2 F100.0 F150.0 F200.0 ]array set drop',

    set_matrix: '// place variable name on the stack  \r\n\
boresightMatrix  \r\n\
  \r\n\
// Tell Forth that a matrix is the proper form  \r\n\
// and that decimal is the proper format \r\n\
// Must put a space after  \r\n\
m[ decimal  \r\n\
 \r\n\
// In this case the array is two 32-bit values long \r\n\
// 0 is the first index and 2 is the last \r\n\
// for each row of the matrix \r\n\
0 0 2 2  \r\n\
 \r\n\
// must place nine floating point values on the stack \r\n\
// In this case all values are floating point. \r\n\
f1.000000e+00 f0.000000e+00 f0.000000e+00   \r\n\
f0.000000e+00 f1.000000e+00 f0.000000e+00  \r\n\
f0.000000e+00 f0.000000e+00 f1.000000e+00  \r\n\
 \r\n\
// close the matrix \r\n\
// Must put a space after  \r\n\
]m  \r\n\
  \r\n\
// The "set" command places the values from the stack into the array  \r\n\
// The drop is to drop the result of the command off the stack  \r\n\
set drop  \r\n\
  \r\n\
// putting it all together  \r\n\
boresightMatrix \r\n\
m[ decimal \r\n\
0 0 2 2 \r\n\
f1.000000e+00 f0.000000e+00 f0.000000e+00 \r\n\
f0.000000e+00 f1.000000e+00 f0.000000e+00 \r\n\
f0.000000e+00 f0.000000e+00 f1.000000e+00 \r\n\
]m set drop',

    get_and_print_var: '// place variable name on the stack \r\n\
yaw \r\n\
 \r\n\
// dereference the pointer \r\n\
&di \r\n\
 \r\n\
// grab the value at that location \r\n\
@ \r\n\
 \r\n\
// print the floating point value \r\n\
// to the UART \r\n\
f. \r\n\
 \r\n\
// putting it all together \r\n\
yaw &di @ f.',

    get_and_print_array: '// place variable name on the stack \r\n\
gyrop \r\n\
 \r\n\
// duplicate that value \r\n\
dup \r\n\
 \r\n\
// grab the address of the the pointer \r\n\
&di \r\n\
 \r\n\
// grab the value at that location \r\n\
@ \r\n\
 \r\n\
// print the floating point value \r\n\
// to the UART \r\n\
f. \r\n\
 \r\n\
// place a comma in between the values \r\n\
." ," \r\n\
 \r\n\
// grab the address of the the pointer \r\n\
&di \r\n\
 \r\n\
// grab the second value in the array \r\n\
// (4 bytes later) \r\n\
4 + \r\n\
 \r\n\
// grab the value at that location \r\n\
@ \r\n\
 \r\n\
// print the floating point value \r\n\
// to the UART \r\n\
f. \r\n\
 \r\n\
// putting it all together to output \r\n\
// gyrop(X) and gyrop(Y) \r\n\
gyrop dup &di @ f. &di 4 + @ f.',

    get_and_print_matrix: '// To get values form a matrix \r\n\
// Assume that the values are stored  \r\n\
// in an array of m by n length \r\n\
// where m and n are the matrix  \r\n\
// dimensions \r\n\
 \r\n\
// place variable name on the stack \r\n\
boresightMatrix \r\n\
 \r\n\
// duplicate that value \r\n\
dup dup dup \r\n\
 \r\n\
// grab the address of the the pointer \r\n\
&di \r\n\
 \r\n\
// grab the value at thatlocation \r\n\
@ \r\n\
 \r\n\
// print the floating point value to the UART \r\n\
f. \r\n\
 \r\n\
// place a comma inbetween the values \r\n\
." ," \r\n\
 \r\n\
// grab the address of the the pointer \r\n\
&di \r\n\
 \r\n\
// grab the second value in the array (4 bytes later) \r\n\
4 +  \r\n\
 \r\n\
// grab the value at that location \r\n\
@ \r\n\
 \r\n\
// print the floating point value to the UART \r\n\
f. \r\n\
 \r\n\
/ grab the third value in the array (8 bytes later) \r\n\
8 +  \r\n\
 \r\n\
// grab the value at that location \r\n\
@ \r\n\
 \r\n\
// print the floating point value to the UART \r\n\
f. \r\n\
 \r\n\
// putting it all together to g gyrop(X) and gyrop(Y) \r\n\
boresightMatrix dup dup dup cr &di @ f. ." ," &di 4 + @ f. ." ," &di 8 + @ f. \r\n\
 \r\n\
 \r\n\
// alternate function to print a matrix \r\n\
variable max_index \r\n\
variable lcl_ptr 4 allot \r\n\
 \r\n\
: matrix_print \r\n\
  max_index ! lcl_ptr ! \r\n\
  cr ." boresightMatrix" \r\n\
  max_index @ 0 do \r\n\
    ." ," lcl_ptr @ i 4 * + @ f.  \r\n\
  loop \r\n\
; \r\n\
\r\n\
// Use the following \r\n\
boresightMatrix &di 9 matrix_print',

    nmea_with_checksum: 'forget stringtopad \r\n\
: stringtopad \r\n\
    count 1 - \r\n\
    swap over + swap \r\n\
    0 do 1 - dup c@ hold loop drop \r\n\
; \r\n\
variable ptr \r\n\
: checksum \r\n\
    over 1 + \r\n\
    ptr ! dup 3 - \r\n\
    0 swap \r\n\
    0 do ptr @ i + c@ xor loop \r\n\
; \r\n\
: custom_output \r\n\
    <# ",,N,,,*" stringtopad \r\n\
    roll di@ #f \r\n\
    ",N," stringtopad \r\n\
    pitch di@ #f \r\n\
    ",N," stringtopad \r\n\
    yawt di@ #f \r\n\
    "$PTNHTM," stringtopad \r\n\
    #> \r\n\
    checksum rot rot type \r\n\
    <# 10 hold 13 hold hex # # drop decimal #> type \r\n\
; \r\n\
 \r\n\
variable delay1 \r\n\
: tOutput \r\n\
    delay1 ! \r\n\
    cputime &di @ \r\n\
    begin \r\n\
       ?key 0= while \r\n\
       begin \r\n\
              cputime &di @ over - delay1 @ < while \r\n\
       repeat drop cputime &di @ \r\n\
       custom_output \r\n\
    repeat \r\n\
    drop \r\n\
; \r\n\
// \r\n\
// \r\n\
// Type 100 tOutput<cr> to simulate the data at 10Hz.',

    simple_text_output: '',

    nmea_no_checksum: 'forget stringtopad \r\n\
: stringtopad \r\n\
       count 1 - \r\n\
       swap over + swap \r\n\
0 do 1 - dup c@ hold loop drop \r\n\
; \r\n\
 \r\n\
: custom_output \r\n\
    <# ";" stringtopad \r\n\
    yawt di@ #f \r\n\
    "," stringtopad \r\n\
    roll di@ #f \r\n\
    "," stringtopad \r\n\
    pitch di@ #f \r\n\
    "$C," stringtopad \r\n\
    #> type \r\n\
    ." \\r\\n" \r\n\
; \r\n\
 \r\n\
variable delay1 \r\n\
: tOutput \r\n\
    delay1 ! \r\n\
    cputime &di @ \r\n\
    begin \r\n\
       ?key 0= while \r\n\
       begin \r\n\
              cputime &di @ over - delay1 @ < while \r\n\
       repeat drop cputime &di @ \r\n\
       custom_output \r\n\
    repeat \r\n\
    drop \r\n\
; \r\n\
//  \r\n\
// Type 100 tOutput<cr> to simulate the data at 10Hz.',

    mancal_3D: 'forget clearCals \r\n\
\r\n\
: clearCals \r\n\
 \r\n\
  clearPointCal 1 set drop \r\n\
  350 delay  \r\n\
  clearFieldCal 1 set drop \r\n\
  350 delay  \r\n\
  initCalPointBuffer 1 set drop \r\n\
  350 delay \r\n\
; \r\n\
 \r\n\
: convergenceLoop \r\n\
  begin      \r\n\
    ?key 0= while \r\n\
    ." t," cputime &di @ . ." ,pts," \r\n\
    magBufferActiveIndex &di @ . \r\n\
    ." ,err," magFieldCalErr &di @ f. \r\n\
    ." ,YEE," yawErrEst &di @ f. cr \r\n\
    490 delay \r\n\
  repeat \r\n\
  key drop \r\n\
; \r\n\
 \r\n\
: cal3D \r\n\
   \r\n\
  clearCals \r\n\
   \r\n\
  ." Calibration starting" cr \r\n\
   \r\n\
  pointFieldCalActive 1 set drop \r\n\
   \r\n\
  350 delay    \r\n\
   \r\n\
   \r\n\
  ." Press any key to take next point, ESC to finish" cr \r\n\
   \r\n\
 \r\n\
  begin                       \r\n\
    key 27 = 0= while \r\n\
    manualCalibrationPoint 1 set drop \r\n\
    350 delay       \r\n\
    magBufferActiveIndex di. \r\n\
  repeat \r\n\
   \r\n\
  ." Starting error settling" cr \r\n\
  ." Press any key to terminate" cr \r\n\
   \r\n\
  convergenceLoop \r\n\
   \r\n\
  ." Calibration done!" cr \r\n\
   \r\n\
  pointFieldCalActive 0 set drop  \r\n\
  350 delay // give compass time to process      \r\n\
  magFieldCalErr di.   \r\n\
;',

    autocal_3D: 'forget autoCal \r\n\
: autoCal \r\n\
  // User command to clear the point cal results \r\n\
  clearPointCal 1 set drop \r\n\
  300 delay      \r\n\
  \r\n\
  // User command to default to the point cal \r\n\
  clearFieldCal 1 set drop \r\n\
  300 delay      \r\n\
  \r\n\
  // Initialize the mag and accel calibration point buffer to all zeros \r\n\
  initCalPointBuffer 1 set drop \r\n\
  300 delay      \r\n\
  \r\n\
  // begin the auto calibration mode \r\n\
  autoFieldCalActive 1 set drop \r\n\
  \r\n\
  ." Calibration starting" cr \r\n\
  350 delay      \r\n\
  \r\n\
  ." Press any key to terminate" cr \r\n\
  \r\n\
  // This loop till continue to print the:\r\n\
  //   (timing is print every ~0.5 seconds) \r\n\
  //   \r\n\
  //   1) number of points in the buffer\r\n\
  //      used for calibration \r\n\
  //   2) The calibration score in possible \r\n\
  //      degrees of heading error (magFieldCalErr) \r\n\
  //   3) The actual yaw error estimate which \r\n\
  //      includes the calibration score \r\n\
  begin \r\n\
    ?key 0= while \r\n\
    magBufferActiveIndex di. \r\n\
    magFieldCalErr di. \r\n\
    yawErrEst di. \r\n\
    490 delay \r\n\
  repeat \r\n\
  key drop \r\n\
  \r\n\
  ." Calibration done!" cr \r\n\
  \r\n\
  // Turn off the autocalibration \r\n\
  //   This is not necessary unless you specifically  \r\n\
  //     would like to turn off the autocalibration. \r\n\
  //   The autocal is automatically being used once  \r\n\
  //     at least 4 points are collected. \r\n\
  //   In this way, the autocal and manual point cal differ \r\n\
  //   The manual cal needs to be switched off for  \r\n\
  //     the calibration to be used. \r\n\
 \r\n\
  autoFieldCalActive 0 set drop \r\n\
  350 delay \r\n\
   \r\n\
  // Print out the calibration score one last time. \r\n\
  magFieldCalErr di.   \r\n\
;',

    custom_binary_output: 'forget syncpattern \r\n\
variable syncpattern \r\n\
0x55AA syncpattern ! \r\n\
variable middle_man \r\n\
 \r\n\
// Output a binary protocol that is a 2 byte syncpattern followed \r\n\
// by the temperature in binary. \r\n\
 \r\n\
// Note that the binary data is little endian, ala ARM \r\n\
//  but it is reversed for correct order. \r\n\
 \r\n\
// ( buffer count -- ) \r\n\
// Emits data in binary out serial port \r\n\
 \r\n\
: bdump_backwards \r\n\
    0 do dup c@ emit 1 - loop drop \r\n\
; \r\n\
 \r\n\
: get_n_put \r\n\
    middle_man ! \r\n\
    middle_man 3 + 4 bdump_backwards \r\n\
; \r\n\
// Word to output the syncpattern and data  \r\n\
 \r\n\
: tOutput \r\n\
    begin ?key 0= while \r\n\
    syncpattern 1 + 2 bdump_backwards \r\n\
    temperature &di 3 + 4 bdump_backwards \r\n\
    temperature di@ get_n_put \r\n\
    50 delay \r\n\
    repeat \r\n\
; \r\n\
// type tOutput <CTRL-m> to start and <CTRL-z> to stop',

    compassp_mils_output_timed: 'forget delay1 \r\n\
variable delay1 \r\n\
 \r\n\
// Word to output the data  \r\n\
: dw \r\n\
    ." \\r\\nC:," \r\n\
    cputime di@ . ." ," \r\n\
    roll di@ pitch di@ yaw di@ \r\n\
    f0.05625 f/ 0 3 rot ff. ." ,"  \r\n\
    f0.05625 f/ 0 3 rot ff. ." ,"  \r\n\
    f0.05625 f/ 0 3 rot ff. \r\n\
; \r\n\
 \r\n\
// prints out the position array in ASCII at the rate specified in front of delay1 \r\n\
: compass_out  \r\n\
delay1 ! \r\n\
     \r\n\
    cputime di@ \r\n\
    begin  \r\n\
    ?key 0= while \r\n\
        begin  \r\n\
        cputime di@ over - delay1 @ < while \r\n\
        repeat drop cputime di@                    \r\n\
        dw \r\n\
    repeat  \r\n\
     \r\n\
    drop \r\n\
; \r\n\
 \r\n\
// type (delay in ms) compass_out <CTRL-m> to start and any key to stop \r\n\
// example: 50 compass_out <CTRL-m> will output the data every 50ms'

};

function check(data) {
    // Get data from the User inputTextArea
    var mytext = Resources.do_loop;
    var obj = document.getElementById("outputTextArea");
    
    if (data == 'Do Loop') {
        mytext = Resources.do_loop;
    } else if (data == 'While Loop') {
        mytext = Resources.while_loop;
    } else if (data == 'Math - Integer') {
        mytext = Resources.math_int;
    } else if (data == 'Math - Float') {
        mytext = Resources.math_float;
    } else if (data == 'Get Variable') {
        mytext = Resources.get_and_print_var;
    } else if (data == 'Get Array') {
        mytext = Resources.get_and_print_array;
    } else if (data == 'Get Matrix') {
        mytext = Resources.get_and_print_matrix;
    } else if (data == 'Set Variable') {
        mytext = Resources.set_var;
    } else if (data == 'Set Array') {
        mytext = Resources.set_array;
    } else if (data == 'Set Matrix') {
        mytext = Resources.set_matrix;
    } else if (data == 'nmea_checksum') {
        mytext = Resources.nmea_with_checksum;
    } else if (data == 'nmea_no_checksum') {
        mytext = Resources.nmea_no_checksum;
    } else if (data == 'mancal_3D') {
        mytext = Resources.mancal_3D;
    } else if (data == 'autocal_3D') {
        mytext = Resources.autocal_3D;
    } else if (data == 'simple_text_output') {
        mytext = Resources.simple_text_output;
    } else if (data == 'custom_binary_output') {
        mytext = Resources.custom_binary_output;
    } else if (data == 'compassp_mils_output_timed') {
        mytext = Resources.compassp_mils_output_timed;
    }
    // Split data from inputTextArea into an array of lines
    obj.value = mytext;

}

function myFunction() {
    // Get data from the User inputTextArea
    var textArea = document.getElementById("inputTextArea");
    var obj = document.getElementById("outputTextArea");
    // Split data from inputTextArea into an array of lines
    textArea.value.replace("\r\n", "\n");
    textArea.value.replace("\t", " ");
    var arrayOfLines = textArea.value.split("\n");
    //document.getElementById("deez").innerHTML = arrayOfLines[0];

    // Initialize the NVRAM script by opening the user space
    obj.value = "";
    obj.value += "0x10000 userOpen\r\n";

    // Must place theis NorthTek word into NVRAM or upon waking up this "put"
    //	statements will not work
    obj.value += ": put start: userWrite ;\r\n";

    // // Iterate through the arrayOfLines and fix for NVRAM
    for (var line in arrayOfLines) {
        if (arrayOfLines[line] != "") {
            var thisline = arrayOfLines[line].trim();
            var n = thisline.indexOf("//");
            if (n > 0) {
                obj.value += "put ";
                obj.value += thisline.substring(0, n);
                obj.value += "\r\n";
            }
            else if (n < 0) {
                obj.value += "put ";
                obj.value += thisline;
                obj.value += "\r\n";
            }
        }
    }

    // finalize the NVRAM script by closing the user space
    obj.value += "userClose\r\n";

}
function saveTextAsFile() {
    // grab the content of the form field and place it into a variable
    var text_to_write = document.getElementById("outputTextArea").value;

    //  create a new Blob that conatins the data from your form field
    var blob_as_text = new Blob([text_to_write], { type: "text/plain;charset=utf-8", endings: 'native' });

    // Specify the name of the file to be saved
    var fileNameToSaveAs = "myNewFile.txt";

    // create a link for our script to 'click'
    var link_for_download = document.createElement("a");

    //  supply the name of the file (from the var above).
    // you could create the name here but using a var
    // allows more flexibility later.
    link_for_download.download = fileNameToSaveAs;

    // provide text for the link. This will be hidden so you
    // can actually use anything you want.
    link_for_download.innerHTML = "hidden_link";

    // allow our code to work in webkit & Gecko based browsers
    // without the need for a if / else block.
    window.URL = window.URL || window.webkitURL;

    // Create the link Object.
    link_for_download.href = window.URL.createObjectURL(blob_as_text);

    // when link is clicked call a function to remove it from
    // the DOM in case user wants to save a second file.
    link_for_download.onclick = destroyClickedElement;

    // make sure the link is hidden.
    link_for_download.style.display = "none";

    // add the link to the DOM
    document.body.appendChild(link_for_download);

    // click the new link
    link_for_download.click();
}

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

function talkToMe(event) {

//    speechSynthesis.getVoices().forEach(function (voice) {
//        window.alert(voice.name);
//    });

    if ('speechSynthesis' in window) {
        var speechMessage = new SpeechSynthesisUtterance('Hello Professor Faullken.. Would you like to play a game of chess?');
        var voices = window.speechSynthesis.getVoices();
        speechMessage.default = false;
        speechMessage.voice = voices.filter(function (voice) { return voice.name == 'native'; })[0];
        speechMessage.volume = 1; // 0 to 1
        speechMessage.rate = 0.8; // 0.1 to 10
        speechMessage.pitch = 0; //0 to 2
        window.speechSynthesis.speak(speechMessage);
    }
}

function myOnLoad(event) {
    var speech_voices;
    if ('speechSynthesis' in window) {
        speech_voices = window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = function () {
            speech_voices = window.speechSynthesis.getVoices();
        };
    }
}
