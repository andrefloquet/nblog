<template>
    <div>
        <a href="#" @click.prevent="test">Test</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: 'Andre',
                email: 'andrefloquet2@gmail.com',
                password: 'sucesso2'
            }
        }
    },
    methods: {
        async test() {
            console.log('chegou')
            // await this.$axios.$get('http://localhost:8000/sanctum/csrf-cookie')
            // await this.$auth.setUserToken(true)
            // let data = await this.$axios.$post('/test')
            await this.$axios.$post('/test')
            //console.log(data)
        }
    }
}
</script>