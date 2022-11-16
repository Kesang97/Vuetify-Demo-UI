<template>
  <div class="home">
    <h1>This is HomePage</h1>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn plain color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text mr-2">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text mr-3">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text mr-2">
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

  </div>
</template>




<script>
// @ is an alias to /src

export default {
  
}
</script>
