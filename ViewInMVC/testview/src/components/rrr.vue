<template>
    <v-container>
        <v-carousel>
            <v-carousel-item
             v-for="(item,i) in items"
             :key="i"
             :src="item.src"
             reverse-transition="fade-transition"
             transition="fade-transition"
             ></v-carousel-item>
         </v-carousel>
    
        <div >
            <v-layout justify-center>
                <h1 class = "black--text display-4">Rushy Saharat</h1>
            </v-layout>
        </div>
        <br><br>
        
        <div class="my-2">
             <v-layout justify-center>
                <v-btn color="primary" href  = "https://www.facebook.com/RushSaharat" >Fackbook</v-btn> 
                <v-btn color="pink lighten-1 white--text" href = https://www.instagram.com/rush.saharat/>Instagram</v-btn>
                <v-btn color="blue lighten-1 white--text" href = https://twitter.com/saharatsattee>Twitter</v-btn>
            </v-layout>
         </div>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/1.jpg')
          },
          {
            src: require('../assets/2.jpg')
          },
          {
            src: require('../assets/3.jpg')
          },
          {
            src: require('../assets/4.jpg')
          },
        ],
      }
    },
  }
</script>