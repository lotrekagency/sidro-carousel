<template>
  <div class="hilightCarousel" v-hammer:swipe.horizontal="handleSwipe">
    <div class="hilighted">
      <div class="control previous" @click="goPrev()">
        <span class="oi oi-chevron-left"></span>
      </div>
      <div class="control next" @click="goNext()">
        <span class="oi oi-chevron-right"></span>
      </div>
      <figure class="view" >
        <img :src="images[selected]" alt="">
      </figure>
    </div>
    <div class="miniatures">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:0,
      images: []
    }
  },
  provide(){
    return {
      carousel: this
    }
  },
  methods:{
    handleSwipe(evt){
      const DIRECTION_LEFT	 = 2
      const DIRECTION_RIGHT	 = 4
      switch (evt.direction) {
        case DIRECTION_LEFT:
          this.goNext()
          break;

        case DIRECTION_RIGHT:
          this.goPrev()
          break;
      }
    },
    addImage(image){
      this.images.push(image)
    },
    setSelected(idImage){
      this.selected = idImage
    },
    getSelected(){
      return this.selected;
    },
    goNext(){
      let tmp = (this.selected + 1 ) % this.images.length;
      this.setSelected(tmp)
    },
    goPrev(){
      let res 
      if((this.getSelected() -1 ) < 0 ) 
        res = this.images.length - 1
      else 
        res = (this.selected - 1)
      this.setSelected(res)
    }
  }
}
</script>


<style lang="scss">

  .hilightCarousel{
    position:relative;
  }

  .hilighted{
    z-index:1;
  }

  .miniatures{
    display: flex;
    justify-content: space-between;
  }

  

  .view{
    position: relative;
    height:300px;
    width:100%;

    img{
        position: absolute;
        object-fit: contain;
        height:100%;
        width:100%;
      }
  }

  .control{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(grey,0.5);
    border-radius: 50rem;
    z-index: 2;
    color: #FF6119;
    padding:1rem;
    height: 50px;
    width: 50px;

    span{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .next{
    right: 1.5%;
  }

  .previous{
    left: 1.5%;
  }

  

</style>
