<template>
    <div class="team pt-2">
      <h1 class="subtitle-1 grey--text">Team</h1>
      
      <v-container class="my-5">
       <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card elevation="1" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" color="grey lighten-4">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
         
        </v-col>
       </v-row>
      </v-container>


    </div>
  </template>
  
  
  
  
  <script>
  // @ is an alias to /src
  
  export default {
    data(){
      return{
        team:[
          {name: 'Harshit Sonthalia', role: 'Founder at Ontrack', avatar: '/avatar.png'},
          {name: 'Vansh Jain', role: 'Co-Founder at Ontrack', avatar: '/avatar.png'},
          {name: 'Samarth Jain', role: 'CSPO at Ontrack', avatar: '/avatar.png'},
          {name: 'Abhinash Sharma', role: 'FS Developer at Ontrack', avatar: '/avatar.png'},
          {name: 'Suraj Thapa', role: 'Sr.Frontend Developer at Ontrack', avatar: '/avatar.png'},
          {name: 'Kesang Sherpa', role: 'Jr.Frontend Developer at Ontrack', avatar: '/avatar.png'}

        ],
      }
    }
  };
  </script>
  