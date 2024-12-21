import { API_URL } from "@env";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useSelector } from "react-redux";
// const validateContractAddress = `https://api.shasta.trongrid.io/wallet/getcontract`;

export const callMovieData = async ({ method, subUri, query }: CallApiParams) => {
    let params = query ? "?search=" + encodeURIComponent(query) : ""
    if (method == 'get') {
        return new Promise<Movie[]>( (resolve, reject) => {
            // try {
            fetch(`${API_URL}${subUri}${params}`)
                .then(e => e.json())
                .then((e) => resolve(e)).
                catch(e => { console.log(e); reject(e) })
            // let result = await response.json()
            // console.log(JSON.stringify(result, undefined, 2), " response in api")
            // resolve(result);
            // }
            // catch (err) {
            //     console.log(err, " err in api")
            //     reject(err);
            // }
        })
    }
    else {
        return new Promise<Movie[]>( (resolve, reject) => {
            // try {
            fetch(`${API_URL}${subUri}${params}`,{})
                .then(e => e.json())
                .then(e => resolve(e)).
                catch(e => { console.log(e); reject(e) })
            // let result = await response.json()
            // console.log(JSON.stringify(result, undefined, 2), " response in api")
            // resolve(result);
            // }
            // catch (err) {
            //     console.log(err, " err in api")
            //     reject(err);
            // }
        })
    }
}

export const callMovieDataById = async ({ method, subUri, query }: CallApiParams) => {
    if (method == 'get') {
        return new Promise<Movie>( (resolve, reject) => {
            // try {
            fetch(`${API_URL}${subUri}/${query}`)
                .then(e => e.json())
                .then((e) => resolve(e)).
                catch(e => { console.log(e); reject(e) })
            // let result = await response.json()
            // console.log(JSON.stringify(result, undefined, 2), " response in api")
            // resolve(result);
            // }
            // catch (err) {
            //     console.log(err, " err in api")
            //     reject(err);
            // }
        })
    }
    else {
        return new Promise<Movie>( (resolve, reject) => {
            // try {
            fetch(`${API_URL}${subUri}/${query}`,{})
                .then(e => e.json())
                .then(e => resolve(e)).
                catch(e => { console.log(e); reject(e) })
            // let result = await response.json()
            // console.log(JSON.stringify(result, undefined, 2), " response in api")
            // resolve(result);
            // }
            // catch (err) {
            //     console.log(err, " err in api")
            //     reject(err);
            // }
        })
    }
}