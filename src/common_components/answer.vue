<style lang="less">
  .answer-list {
    padding: 24px;
    .question-title {
      margin: 0;
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 30px;
      .answer-time {
        line-height: 30px;
        float: right;
        font-weight: 100;
        font-size: 22px;
        color: #ccc;
      }
    }
  }
</style>
<template>
  <bg-container class="answer-list">
    <h3 class="question-title">回答: 想买视听说的二手书 <span class="answer-time">10-18</span></h3>
    <p class="answer-content">
      # 指定密钥长度-e  # 读取openssh的私钥或者公钥文件-C  # 添加注释-f  # 指定用来保存密钥的文件名-i  # 读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥-l # 显示公钥文件的指纹数据-N  # 提供一个新密语-P  # 提供（旧）密语-q  # 静默模式-t  # 指定要创建的密钥类型。
    </p>
  </bg-container>
</template>
<script>
  import bgContainer from '../common_components/bg-container'
  import listWrap from '../common_components/list_wrap'

  export default {
    'name': 'answer',
    'components': {
      bgContainer,
      listWrap,

    }
  }
</script>