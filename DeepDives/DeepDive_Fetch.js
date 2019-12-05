//Create a FormData object from your object, and use that as body, and a multipart/form content-type will be used

var data = {some:"data",even:"more"};
var fd = new FormData();
//very simply, doesn't handle complete objects
for(var i in data){
   fd.append(i,data[i]);
}
var req = new Request("url",{
   method:"POST",
   body:fd,
   mode:"cors"
});
//Create a URLSearchParams object which will set the content-type to application/x-www-form-urlencoded. Note: URLSearchParams is not widely supported

//Similar to creating a simple FormData object
var data = {some:"data",even:"more"};
var params = new URLSearchParams();
for(i in data){
   params.append(i,data[i]);
}
var req = new Request("url",{
   method:"POST",
   body:params,
   mode:"cors"
});
//Create a query string (ie a=hello&b=world) and use a Headers object to set Content-Type to application/x-form-urlencoded

var data = {some:"data",even:"more"};
var headers = new Headers({
    "Content-Type":"application/x-form-urlencoded"
});
var params = [];
for(i in data){
   params.push(i + "=" + encodeURIComponent(data[i]));
}
var req = new Request("url",{
   method:"POST",
   body:params.join("&"),
   headers:headers,
   mode:"cors"
});
//If you still want to send a JSON payload instead of doing the above you can, but you will have to read the raw request input and then use json_decode to get to the data

$json = file_get_contents('php://input');
$data = json_decode($json);