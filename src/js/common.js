function getSession(){
    var output = "";
    for(var key in window.sessionStorage) {
        if(key.indexOf('firebase:')>-1){
            output=JSON.parse(sessionStorage.getItem(key));
            const account = {
                'uid': JSON.stringify(output.uid),
                'email':JSON.stringify(output.email)
            }
            return account
        }
    } 
}

function getUrlParams() {     
    var params = {};  
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    	function(str, key, value) { 
        	params[key] = value; 
        }
    );     
    return params; 
}