<template>
  <div class="dashboard">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>

    <v-container class="my-5">
      <v-row class="mb-5">
        <v-btn small text color="grey" @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <v-btn small text color="grey">
          <v-icon small left>mdi-account-multiple</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>      
      </v-row>
      
      <v-card v-for="project in projects" :key="project.title">
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
            <div class="text-right" id="chips-container">
              <v-chip small :class="project.status" class="white--text my-2 caption">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>




<script>
// @ is an alias to /src

export default {
  data(){
    return{
      items: [
        {text: 'Dashboard', disabled: false, href: 'breadcrumbs_dashboard'},
        {text: 'My Projects', disabled: true, href: 'breadcrumbs_projects'},
        {text: 'Team', disabled: true, href: 'breadcrumbs_team'}
      ],
      projects:[
        {title: 'Design a new website', person: 'The Net Ninja', due: '1st jan 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Code up the homepage', person: 'Chun Li', due: '10th jan 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Design a video thumbnails', person: 'Ryu', due: '20 Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Create a community forum', person: 'Gouken', due: '20 Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'}

      ],
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 :1)
    }
  }

};
</script>

<style>
  /* row class binding to style each status and adding color to it */
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }

/* chips backgrond color changed through class binding and also overriding using id name */

#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}

</style>