<template>
    <div class="container-fluid mb-3">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NuxtLink to="/" class="navbar-brand">André Floquet</NuxtLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <template v-if="!this.$auth.loggedIn">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <!-- <NuxtLink to="#" class="nav-link"></NuxtLink> -->
                                </li>
                                <li class="nav-item">
                                    <!-- <NuxtLink to="#" class="nav-link"></NuxtLink> -->
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/register" class="nav-link">Register</NuxtLink>
                                </li>
                            </ul>  
                        </div>
                    </template>
                    <template v-if="this.$auth.loggedIn">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NuxtLink to="/categories" class="nav-link">Categories</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/posts" class="nav-link">Posts</NuxtLink>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <span class="nav-link">{{ this.$auth.user.name }}</span>
                                </li> 
                                <li class="nav-item">
                                    <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
                                </li>
                            </ul>                     
                        </div>
                    </template>                   
                </div> 
            </nav> 
        </header>
    </div> 
</template>

<script>
export default {
    methods: {
        logout() {   
            this.$auth.logout()
            .then(() => {
                this.$router.push('/login')
            }).catch(err => {
                console.log(err)
            })
        },
    }
}
</script>
