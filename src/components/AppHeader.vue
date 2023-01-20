<script>
export default {
    name: "AppHeader",
    
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="">Boolfolio</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                        
                                        <router-link class="nav-link" :class="$route.name == 'home' ? 'active' : ''" :to="{ name: 'home' }">Home</router-link>                        </li>
            
                                    <li class="nav-item">
                                        <router-link class="nav-link" :class="$route.name == 'about' ? 'active' : ''" :to="{ name: 'about' }">About</router-link>                        </li>
            
                                    <li class="nav-item">
                                        <router-link class="nav-link" :class="$route.name == 'contacts' ? 'active' : ''" :to="{ name: 'contacts' }">Contact Us</router-link>                        </li>
                                </ul>
                </div>
               
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>
</style>