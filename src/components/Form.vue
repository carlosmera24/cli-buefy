<template>
    <div>
        <b-field horizontal label="Nombres:" 
            v-bind:type="{ 'is-danger' : validation.nombre.error }"
            :message="validation.nombre.error ? validation.nombre.msg : ''">
            <b-input name="nombre" icon="user" placeholder="Ingresa tu nombre" v-model="nombre" />
        </b-field>        
        <b-field horizontal label="Apellidos:" :type="{ 'is-danger' : validation.apellido.error }" 
            :message="validation.apellido.error ? validation.apellido.msg : ''">
            <b-input name="apellido" icon="user" placeholder="Ingresa tu apellido" v-model="apellido" />
        </b-field> 
        <b-field horizontal label="Líder:" >
            <b-checkbox v-model="lider">{{ lider ? 'Si' : 'No' }}</b-checkbox>
        </b-field>
        <b-field horizontal label="Fecha nacimiento:">
            <b-datepicker
                locale="en-US"
                placeholder="Click para seleccionar"
                icon="calendar" />
        </b-field>
        <div class="box has-text-centered">
            <b-button type="is-dark" v-on:click.prevent="clickAceptar">Aceptar</b-button>       
        </div>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data() {
        return {
            nombre: '',
            apellido: '',
            lider: false,
            hasError: true,
            validation: {
                nombre: {
                    error: false,
                    msg: "Por favor ingrese su nombre"
                },
                apellido: {
                    error: false,
                    msg: "Por favor ingrese su apellido"
                }
            },            
        }
    },
    methods: {
        clickAceptar(){
            this.validation.nombre.error = this.nombre === '';
            this.validation.apellido.error = this.apellido === '';

            if( !this.validation.nombre.error && !this.validation.apellido.error )
            {
                this.$buefy.dialog.alert({
                    title: 'Completado',
                    message: 'Su registro se ha realizado con exito <strong>'+ this.nombre +' '+ this.apellido +'</strong>',
                    type: 'is-success',
                    hasIcon: true,
                    icon: 'check-circle',
                    iconPack: 'fas',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                });
            }
        }
    },    
}
</script>