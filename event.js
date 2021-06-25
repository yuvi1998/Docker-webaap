// Event for change text into linux command from docker command.
// This event run when we click on "Linux command" which is we can see on the top of Navigation Bar.
function changeLabel1() {
	    document.getElementById("l1").innerHTML = "Linux Command";
}

// Event for change text into docker command from linux command.
// This event run when we click on "Docker command" which is we can see on the top of Navigation Bar.
function changeLabel2() {
	    document.getElementById("l1").innerHTML = "Docker Command";
}

// Event for send command which is we given from text box to backend(Python CGI) 
// This even run when we click "RUN" button 
function sendBackEnd() {
    document.getElementById("output").innerHTML = "[root@localhost ~]#";
	var xhr = new XMLHttpRequest();
	var i = document.getElementById("in1").value;
    // This block will run when we on docker page.
    if (window.location == "http://192.168.253.63/web-task/web.html#docker") {
        if(i.includes("docker")== true) {
            xhr.open("GET", "http://192.168.253.63/cgi-bin/web-task/backend.py?x=" + i, true);
	        xhr.send();
	        xhr.onload = function() {
		    //output getting/coming from url
		    var output1 = xhr.responseText;                          
		    document.getElementById("output").innerHTML =  document.getElementById("output").innerHTML +                                         document.getElementById("in1").value + '\n' + output1;
            }
        }
        else
            alert("Enter Docker Command");
    }
    // This block will run when we on Linux page.
    else {
        if(i.includes("docker") != true) {
            xhr.open("GET", "http://192.168.253.63/cgi-bin/web-task/backend.py?x=" + i, true);
	        xhr.send();
	        xhr.onload = function() {
		    //output getting/coming from url
		    var output1 = xhr.responseText;                          
		    document.getElementById("output").innerHTML =  document.getElementById("output").innerHTML +                                         document.getElementById("in1").value + '\n' + output1;

            }            
        }
        else
            alert("Enter Linux Command");
    }
}

// for live type: whatever we will type on text box that text will print on bellow black screen.
function autoType() {
	document.getElementById("output").innerHTML = "[root@localhost ~]#" +  document.getElementById("in1").value;
}
