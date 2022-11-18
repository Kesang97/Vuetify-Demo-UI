<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-card dense  v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>




<script>
// @ is an alias to /src

export default {
  data(){
    return{
      projects:[
        {title: 'Design a new website', person: 'The Net Ninja', due: '1st jan 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Code up the homepage', person: 'Chun Li', due: '10th jan 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Design a video thumbnails', person: 'Ryu', due: '20 Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Create a community forum', person: 'Gouken', due: '20 Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'}
        
      ],
    }
  }
  
};
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }

</style>