<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

      <v-container class="my-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>project title</v-expansion-panel-header>
            <v-expansion-panel-content class="grey--text" v-for="project in myProjects" :key="project.title">
              <div class="font-weight-bold">{{ project.content }}</div>
              <div>{{ project.due }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-container>


</div>
</template>


<script>
// @ is an alias to /src

export default {
  data() {
    return {
      
      projects:[
        {title: 'Design a new website', person: 'The Net Ninja', due: '1st jan 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Code up the homepage', person: 'Chun Li', due: '10th jan 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Design a video thumbnails', person: 'Ryu', due: '20 Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'},
        {title: 'Create a community forum', person: 'Gouken', due: '20 Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis omnis ipsa inventore porro assumenda eligendi nisi dolor ex nostrum?'}

      ],

    };
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person ==='The Net Ninja'
      })
    }
  }
};
</script>
