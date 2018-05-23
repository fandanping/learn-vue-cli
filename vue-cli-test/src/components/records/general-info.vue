<template>
  <div>
      <toolbox></toolbox>
      <div class="general-info-title"> 具有增强免疫力、补钙及抗衰老功能的食品</div>
      <el-tabs type="border-card">
        <el-tab-pane label="案卷信息">
          <info></info>
        </el-tab-pane>
        <el-tab-pane label="说明书摘要">
          <summaryinstructions></summaryinstructions>
        </el-tab-pane>
        <el-tab-pane label="权力要求书">
          <requirement></requirement>
        </el-tab-pane>
        <el-tab-pane label="说明书">
          <instructionsrequirements></instructionsrequirements>
        </el-tab-pane>
      </el-tabs>

<router-view></router-view>
  </div>

</template>
<script>
  import info from './info.vue'
  import  summaryinstructions from './Summary-instructions.vue'
  import requirement from './requirement.vue'
  import instructionsrequirements from './instructions-requirements.vue'
  import toolbox from './toolbox.vue'

  export default{
    props:['id'],
    components:{
      info,
      summaryinstructions,
      requirement,
      instructionsrequirements,
      toolbox
    },
    mounted(){
      console.log()
    },
    beforeRouteEnter(to,from,next){
      console.log('medicine  enter',this);
      next()
    },
    beforeRouteUpdate(to,from,next){
      console.log('medicine  update');
      next()
    },
    beforeRouteLeave(to,from,next){
      console.log('medicine  leave');
      if(global.confirm('are you sure?')){
        next()
      }
    },
  }
</script>
<style scoped>
 .general-info-title{
   text-align: center;
   font-size: 40px;
   line-height: 60px;
   background-color:rgb(212, 225, 242);

 }
</style>
