var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();      // all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP");      // for IE
 
xhr.open('GET', 'inc/operational.json', false);
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
        var output = '<div class="row-fluid">';
    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='operational')
        	{
            	output += '<div class=span4><p class=lead>' + items[key].title + '</p><p>' + items[key].paragraph + '</p></div>';
        		if (rowcount % 3 === 0 && rowcount != 0 )
        		{
        			output+= '</div><div class="row-fluid">';
        		}
        		rowcount++;
        	}
        }
		output+= '</div>';
        document.getElementById('operational').innerHTML = output;
		

    }
}
xhr.send();