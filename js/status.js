var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest();      // all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP");      // for IE
 
xhr.open('GET', 'inc/status.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState===4 && xhr.status===200) {           
        var items = JSON.parse(xhr.responseText);
        var output = '';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='dev')
        	{
				output+= '<div class="container"><div class="row">';
				output+= '<div class="col-md-3"><p >'+items[key].title+'</p></div>';
				output+= '<div class="col-md-5"><p >'+items[key].output+'</p></div>';
				output+= '<div class="col-md-2"><p >'+items[key].phase+'</p></div>';
				output+= '<div class="col-md-2"><p >'+items[key].date+'</p></div>';
				output+= '</div></div>'
        	}
        }
        
        document.getElementById('dev').innerHTML = output;
		
        var items = JSON.parse(xhr.responseText);
        var output = '';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='next')
        	{
				output+= '<div class="container"><div class="row">';
				output+= '<div class="col-md-3"><p >'+items[key].title+'</p></div>';
				output+= '<div class="col-md-7"><p >'+items[key].output+'</p></div>';
				output+= '<div class="col-md-2"><p >'+items[key].date+'</p></div>';
				output+= '</div></div>'
        	}
        }
        document.getElementById('next').innerHTML = output;

        var items = JSON.parse(xhr.responseText);
        var output = '';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='future')
        	{
				output+= '<div class="container"><div class="row">';
				output+= '<div class="col-md-3"></div>';
				output+= '<div class="col-md-7"><p>'+items[key].title+'</p></div>';
				output+= '<div class="col-md-2"><p>'+items[key].date+'</p></div>';
				output+= '</div></div>'
        	}
        }
        document.getElementById('future').innerHTML = output;
        
        var items = JSON.parse(xhr.responseText);
        var output = '';

    	var rowcount = Number(1);
    	
        for (var key in items) {
        	if (items[key].section==='completed')
        	{
				output+= '<div class="container"><div class="row">';
				output+= '<div class="col-md-3"><p class="text-muted">'+items[key].title+'</p></div>';
				output+= '<div class="col-md-7"><p class="text-muted">'+items[key].output+'</p></div>';
				output+= '<div class="col-md-2"><p class="text-muted">'+items[key].date+'</p></div>';
				output+= '</div></div>'
        	}
        }
        document.getElementById('completed').innerHTML = output;

    }
}
xhr.send();