<template>
    <div class="container"> 
        <h2>Category - Update</h2>
        <hr class="mb-5">
        <form @submit.prevent="update">
            <div class="mb-3">
                <label class="form-label">Name: </label>
                <input v-model="name" type="text" class="form-control">
                <!-- <small class="form-text text-danger" v-if="errors.name">{{ errors.name[0] }}</small> -->
            </div>    
            <button type="submit" class="btn btn-primary mt-3">Update</button>        
        </form>
        <NuxtLink class="btn btn-link mt-3" to="/categories">&lt; Back</NuxtLink>
    </div>        
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    }, 
    async asyncData({$axios, params}) {
        let {data} = await $axios.$get("/categories/" + params.id)
        // console.log(data)
        return {
           name: data.name,
           errors: ''
        }
    },
    methods: {
        update() {
            this.$axios.$patch(`/categories/${this.$route.params.id}`, {
                name: this.name
            })   
            .then(() => {
                this.$router.push('/categories')
            })
            .catch(e => {
                this.errors = this.$store.state.error.errors
            })
        }
    }
}
</script>