export default{
    //把后台传来的数据组装成我们想要的数据形式
    fullName(state){
      return  `${state.firstName} ${state.lastName}`
    }
}
