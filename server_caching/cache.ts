/* This file will contain widgets taken from the API */ 

/**
 * 
 * @param url 
 * @returns JSON file fetched 
 */
export async function serverFetch (url:string) {
    let head: Headers  = new Headers(); 
    head.append( 'Content-Type', 'application/json')
    // append all the necessary headers once that's clear. 

    //Check Response.status and Response.ok
    var  res = await fetch(url).then(
        response =>{
            if (!response.ok){
                throw new Error ("Response is not ok")
            }
            else {
                var file : Promise<any> = response.json()
                return file; 
            }
        } )
        .catch
            (function(error) { throw new TypeError('The result could not be fetched. Its type is null.'); })
        }


class getData {

    /**
     * @var array Cache expiration time per endpoint
     */
    protected static cacheTimeout: {[key: string]: number} = {
        'personas': 900,
        'shows': 900,
        'playlists': 300,
        'spins': 30,
    }

// fetch req from server with appropriate headers



/*
 $context = stream_context_create([
            'http' => [
                'user_agent' => 'Mozilla/5.0 Spinitron v2 API demo client',
                'header' => 'Authorization: Bearer ' . $this->apiKey,
                'follow_location' => 1,
                'max_redirects' => 3,
                'timeout' => 1,
                'ignore_errors' => true,
            ],
        ]);
*/

}

//cache data to local folder 

