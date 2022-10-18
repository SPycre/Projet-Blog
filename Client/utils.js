

/**
 * Pre-made request to send to the server
 * @param {*} data data to send to the server. Contains function name and arguments
 * @param {*} callback callback function to execute once the request is done
 */
 export function requete(data,callback) {
    fetch('./Server/server.php',{
        method : "POST",
        headers : {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify(data),
    }).then(function(response) {
        return response.json();
    }).then(callback);
}

export function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/";
}

export function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie).split(';');
    decodedCookie.forEach(cookie => {
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name)) {
            return cookie.substring(name.length,cookie.length);
        }
    })
}