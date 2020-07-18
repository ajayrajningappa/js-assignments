let os=prompt("enter the os name and version");
function operatingSystem(){
    var OSName="unknown OS";
    if(navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if(navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOs";
    if(navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if(navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
document.getElementById("OS").innerHTML="os";
}
operatingSystem();
