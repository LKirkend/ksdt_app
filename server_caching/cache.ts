/*This file implements fetching from an endpoint and client-side caching */

/**
 * This function retrieves JSON data from an endpoint URL 
 * @param url 
 * @param max_age - the maximum age in seconds of the data we want from the endpoint 
 * @returns Response object with JSON as body (readable stream), and Content-Type header set to application/json 
 */
export async function serverFetch (url:string, max_age: number) {
    let head: Headers  = new Headers(); 
    head.append( 'Content-Type', 'application/json')
    head.append("Cache-Control", "max-age:" + {max_age})

    //Check Response.status and Response.ok
    var  res = await fetch(url, {headers: head}).then(
        (response) => {
            if (!response.ok){
                throw new Error ("Response is not ok")
            }
            else {
                var file : Promise<Response> = response.json()
                return file; 
            }
        } )
        .catch
            ((error) => console.log(error))
        }

/**
 * This is our caching class
 * adapted from StackOverflow: https://codereview.stackexchange.com/questions/245714/typescript-simple-localstorage-cache
 *  
 */
interface CacheItem<T> {
    data: T;
    expiration: number;
  }
  
  class SimpleLocalStorageCache<T> {
    durationInMilliseconds: number;
    constructor(private key: string, private durationInSeconds: number) {
    this.durationInMilliseconds = this.durationInSeconds * 1000;
    }
  
    get(): CacheItem<T> | null {
      const cache = localStorage.getItem(this.key);
      
      if (!cache) {
        return null;
      }
  
      const parsedCache = JSON.parse(cache);
  
      if (Date.now() >= parsedCache.expiration) {
        return null;
      }
  
      return parsedCache;
    }
  
    update(data: T extends string | number | boolean): void {
      localStorage.setItem(
        this.key,
        JSON.stringify({
          data,
          expiration: Date.now() + this.durationInMilliseconds,
        })
      );
    }
  }
  
  export default SimpleLocalStorageCache;

/*
class getData {

    /**
     * @var array Cache expiration time per endpoint
     *
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


} */