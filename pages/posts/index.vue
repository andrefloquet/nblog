<template>
    <div class="container">
        <h2>Posts</h2>
        <hr>
        <p class="mb-5">
            <NuxtLink to="/posts/create">Create a New Post</NuxtLink>
        </p> 
        <div class="card mb-5" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title"><NuxtLink :to="{name: 'posts-id', params: {id: post.id}}">
                    {{ post.title }}
                </NuxtLink></h5>
                <p class="text-muted">{{ post.created_at }} by {{ post.user.name }}</p>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            errors: ''
        }
    },
    // TODO: change to state
    async asyncData({ $axios }) {
        let {data} = await $axios.$get('/posts')
        return {
            posts: data
        }
    }
}
</script>