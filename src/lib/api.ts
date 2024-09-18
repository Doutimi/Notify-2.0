export async function Fetch<T>(url: string | URL | globalThis.Request, init?: RequestInit):Promise<T>{
    let response= await fetch(url,init) ;
    return response.json() as T
  }