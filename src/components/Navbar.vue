<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item>
            <a class="navbar-item" href="/">
                <img src="../assets/logo.png" >
            </a>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#" v-on:click.prevent="clickMenu('home')" :active="this.menuActive.home" >
                Home
            </b-navbar-item>
            <b-navbar-item href="#" v-on:click.prevent="clickMenu('form')" :active="this.menuActive.form">
                Form
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navbar',
    props: [
        'menuActive'
    ],
    methods: {
        clickMenu( itemMenu ){
            Object.entries(this.menuActive).forEach( ([key]) => {
                if( key === itemMenu )
                {
                    this.menuActive[key] = true;
                }else{
                    this.menuActive[key] = false;
                }
                
            } );
        }
    },
}
</script>