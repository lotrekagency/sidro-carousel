<template>
  <figure class="miniature" @click="changeSlide()"  :class="{ 'miniature--selected': imSelected }">
    <img :src="src" alt="">
  </figure>
</template>

<script>
export default {
  inject: ["carousel"],
  props:{
    src:{
      type: String
    },
    id: {
      type: String
    }
  },
  created(){
    this.carousel.addImage(this.src)
    console.log(this.src)
  },
  computed:{
     imSelected(){
      let res =  false
      if(this.id == this.carousel.getSelected()) res = true
      return res
    }
  },
  methods:{
    changeSlide(){
      this.carousel.setSelected(this.id)
    },
   
  }
}
</script>

<style lang="scss" scoped>
  .miniature{
    height: 70px;
    flex: 1;
    flex-basis: 20%;
    max-width: 20%;
    position: relative;

    img{
        position: absolute;
        object-fit: cover;
        height:100%;
        width:100%;
      }
    
    &--selected{
      border: 3px solid #FF6119;
    }
  }

</style>


