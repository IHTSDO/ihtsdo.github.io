var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();      // all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP");      // for IE
 
xhr.open('GET', 'inc/principles.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState===4 && xhr.status===200) {           
        var items = JSON.parse(xhr.responseText);
        var output = '<div class="row">';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='general')
        	{
        		var pkey = Number(key) + Number(1);
            	output += '<div class=col-md-3><p class=lead><span class="badge badge-info">' + pkey + '</span> ' + items[key].title + '</p><p>' + items[key].paragraph + '</p></div>';
        		if (rowcount % 4 === 0 && rowcount != 0 )
        		{
        			output+= '</div> <div class="row">';
        		}
        		rowcount++;
        	}
        }
		output+= '</div>';
        document.getElementById('general').innerHTML = output;
		
        var items = JSON.parse(xhr.responseText);
        var output = '<div class="row">';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='tech')
        	{
        		var pkey = Number(key) + Number(1);
            	output += '<div class=col-md-3><p class=lead><span class="badge badge-info">' + pkey + '</span> ' + items[key].title + '</p><p>' + items[key].paragraph + '</p></div>';
        		if (rowcount % 4 === 0 && rowcount != 0 )
        		{
        			output+= '</div><div class="row">';
        		}
        		rowcount++;
        	}
        }
		output+= '</div>';
        document.getElementById('tech').innerHTML = output;

        var items = JSON.parse(xhr.responseText);
        var output = '<div class="row">';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='business')
        	{
        		var pkey = Number(key) + Number(1);
            	output += '<div class=col-md-3><p class=lead><span class="badge badge-info">' + pkey + '</span> ' + items[key].title + '</p><p>' + items[key].paragraph + '</p></div>';
        		if (rowcount % 4 === 0 && rowcount != 0 )
        		{
        			output+= '</div><div class="row">';
        		}
        		rowcount++;
        	}
        }
		output+= '</div>';
        document.getElementById('business').innerHTML = output;

    }
};
xhr.send();