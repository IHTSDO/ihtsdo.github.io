var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();      // all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP");      // for IE
 
xhr.open('GET', 'inc/plugins.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState===4 && xhr.status===200) {           
        var items = JSON.parse(xhr.responseText);
        var output = '';
        for (var key in items) {
        	if (items[key].section==='overview')
        	{
            	output += '<h3>' + items[key].title + '</h3> <p class=lead>' + items[key].paragraph + '</p>';
        	}
        }
        document.getElementById('overview').innerHTML = output;
		
        var items = JSON.parse(xhr.responseText);
        var output = '';
    	
        for (var key in items) {
        	if (items[key].section==='modules')
        	{
      			output+= '<div class="row">';
            	output+= '<div class=col-md-3><p class=lead><b>' + items[key].title + '</b></p></div>'
            	output+= '<div class=col-md-9><p class=lead>' + items[key].paragraph + '</p></div>'
      			output+= '</div><hr>';
      		}
        }
        document.getElementById('modules').innerHTML = output;
    }
}
xhr.send();