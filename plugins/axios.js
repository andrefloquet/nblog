import { Promise } from "q";

export default function ({$axios, store}) {

    $axios.onError(error => {
        if(error.response.status === 422) {
            //console.log(error.response)
            store.dispatch('error/setErrors', error.response.data.errors);
        }
        //console.log(error.response)
        return Promise.reject(error)
    }),

    $axios.onRequest(() => {
        //state.dispatch("set", {})
        store.dispatch('error/clearErrors');
    })
}