import { API_URL } from "@env";
export const callMovieData = async ({ method, subUri, query }: CallApiParams) => {
    let params = query ? "?search=" + encodeURIComponent(query) : ""
    if (method == 'get') {
        return new Promise<Movie[]>( (resolve, reject) => {
            fetch(`${API_URL}${subUri}${params}`)
                .then(e => e.json())
                .then((e) => resolve(e)).
                catch(e => { console.log(e); reject(e) })
        })
    }
    else {
        return new Promise<Movie[]>( (resolve, reject) => {
            fetch(`${API_URL}${subUri}${params}`,{})
                .then(e => e.json())
                .then(e => resolve(e)).
                catch(e => { console.log(e); reject(e) })
        })
    }
}

export const callMovieDataById = async ({ method, subUri, query }: CallApiParams) => {
    if (method == 'get') {
        return new Promise<Movie>( (resolve, reject) => {
            fetch(`${API_URL}${subUri}/${query}`)
                .then(e => e.json())
                .then((e) => resolve(e)).
                catch(e => { console.log(e); reject(e) })
        })
    }
    else {
        return new Promise<Movie>( (resolve, reject) => {
            fetch(`${API_URL}${subUri}/${query}`,{})
                .then(e => e.json())
                .then(e => resolve(e)).
                catch(e => { console.log(e); reject(e) })
        })
    }
}