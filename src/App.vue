<template>
  <div id="app" class="layout">
    
    <AnnouncementBar/>
    <navbar />
    
    <main class="main-content">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>

    <footers />
  </div>
</template>

<script>
import AnnouncementBar from './components/AnnouncementBar.vue';
import navbar from './components/NavBar.vue'
import footers from './components/FooTervue.vue'
const DEFAULT_TRANSITION = 'fade'
export default {
  components: {
    navbar ,
    footers ,
    AnnouncementBar
  } ,
  data(){
  return  {
    prevHeight  :   0,
    transitionName :DEFAULT_TRANSITION
  }
  } , 
  methods : {
    beforleave(element){
          this.prevHeight = getComputedStyle(element).height
    },
    enter(element){
          const {height} = getComputedStyle(element)
          element.style.height  =  this.prevHeight
          setTimeout(() => {
             element.style.height  = height 
          });
    } , 
    afterEnter (element){
    element.style.height  =   'auto'
    }
  } ,
  created(){
    this.$router.beforeEach((to, from ,next)=>{
      let transitionName =  to.meta.transitionName || from.meta.transitionName

      if(transitionName === 'slide'){
        const toDepth = to.path.split('/').length ;
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left' ;
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION 
      next()

    })
  }
}
</script><style>
html,
body,
#app,
.layout {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
