<template>
  <div class="toolbox">
    <ul>
      <li>
        <a src="javascript:;">
          <i class="el-icon-tickets"></i>
          <span>中英词典</span>
        </a>
      </li>
      <li>
        <a src="javascript:;">
          <i class="el-icon-sold-out"></i>
          <span>个人词库</span>
        </a>
      </li>
      <li>
        <a src="javascript:;">
          <i class="el-icon-news"></i>
          <span>近期申请</span>
        </a>
      </li>
      <li>
        <a src="javascript:;">
          <i class="el-icon-bell"></i>
          <span>近期浏览</span>
        </a>
      </li>
      <li>
        <a src="javascript:;">
          <i class="el-icon-star-off"></i>
          <span>检索要素</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style>
.toolbox{
  position: fixed;
  right:20px;
  bottom:30px;
  z-index:10;
}
  ul li{
    list-style:none ;
    padding: 10px;
    background-color: gray;
    margin-top:2px;
  }
  ul li a span{
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    text-align: center;
    line-height: 32px;
    background-color: #c81623;
    border-radius: 3px;
    display:none;

  }
.toolbul ul  li a:hover span{
  display:block;
}
</style>


