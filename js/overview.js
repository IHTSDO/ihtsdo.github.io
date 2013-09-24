var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();      // all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP");      // for IE
 
xhr.open('GET', 'inc/overview.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState===4 && xhr.status===200) {           
        var items = JSON.parse(xhr.responseText);
        var output = '';
        for (var key in items) {
        	if (items[key].section==='overview')
        	{
            	output += '<h3>' + items[key].title + '</h3> <p>' + items[key].paragraph + '</p>';
        	}
        }
        document.getElementById('overview').innerHTML = output;

        var items = JSON.parse(xhr.responseText);
        var output = '<div class="col-md-4"">';
        for (var key in items) {
        	if (items[key].section==='further')
        	{
            	output += '<h3>' + items[key].title + '</h3> <p>' + items[key].paragraph + '</p> </div>	<div class="col-md-4"">';
        	}
        }
        output += '</div>'
        document.getElementById('further').innerHTML = output;


    }
}
xhr.send();