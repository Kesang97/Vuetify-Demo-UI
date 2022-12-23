<template>
  <div>
    <v-dialog max-width="600px">
        <template v-slot:activator="{attrs, on}">
            <v-btn dark color="teal accent-4" v-on="on" v-bind="attrs">
            Add New Project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h3>Add a new Project</h3>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="information" v-model="info" prepend-icon="mdi-pencil"></v-textarea>
                <v-menu>
                <template v-slot:activator="{attrs, on}">
                   <v-text-field
                    label="Due date"
                    prepend-icon="mdi-calendar-month"
                    :value="due" 
                    v-on="on"
                    v-bind="attrs"
                    >
                   </v-text-field> 
                </template>
                <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn text dark class="teal accent-4 mx-0 mt-3" @click="submit">
                    Add Project
                </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import format from 'date-fns/format'

export default {
    data(){
        return{
            title: '',
            info: '',
            due: null,
        }
    },
    methods:{
        submit(){
            console.log(this.title, this.info);
        }
    },
    // computed:{
    //     formattedDate(){
    //         return this.due ? format(this.due, 'MM/dd/yyyy') : ''
    //     }
    // },
}
</script>

<style>

</style>