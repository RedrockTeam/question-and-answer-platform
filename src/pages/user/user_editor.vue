<style lang="less">
.zoe-editor-wrap {
  padding-top: 46px;
}
.zoe-editor-row {
  margin-bottom: 30px;
  .zoe-editor-key {
    float: left;
    width: 80px;
    height: 86px;
    line-height: 86px;
    font-size: 28px;
  }
  .zoe-editor-input {
    margin-left: 80px;
    width: 600px;
    text-align: right;
    font-size: 28px;
  }
}
</style>

<template>
  <container class="zoe-editor-wrap">
    <form>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">昵称</span>
        <input class="zoe-editor-input inputbox"
          v-model="nickname" />
      </div>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">学校</span>
        <input class="zoe-editor-input inputbox"
          v-model="school" />
      </div>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">学院</span>
        <input
          class="zoe-editor-input inputbox"
          v-model="college"
          />
      </div>
      <btn
        v-on:click.native.prevent="complete"
        >完成</btn>
    </form>
  </container>
</template>

<script>
  import router from '../../router'
  import util from '../../util'

  import container from '../../components/container'
  import btn from '../../components/btn'

  export default {
    'name': 'zoe-editor',
    'components': {
      container,
      btn
    },
    data() {
      return {
        myUserInfo: {},
        nickname: '',
        school: '',
        college: ''
      }
    },
    methods: {
      complete() {
        let nickname = this.nickname === '' ? this.myUserInfo.nickname : this.nickname
        let school = this.school === '' ? this.myUserInfo.school : this.school
        let college = this.college === '' ? this.myUserInfo.college : this.college
        let sex = this.myUserInfo.sex
        let headimgurl = this.myUserInfo.headimgurl

        this.$http.post('/user', {nickname, school, college, sex, headimgurl})
          .catch(console.error)
          .then((res) => {
            if(res.status === 200) {
              this.myUserInfo.nickname = nickname
              this.myUserInfo.school =  school
              this.myUserInfo.college = college

              util.ls.set('myUserInfo', this.myUserInfo)
              router.push(`/user/${this.myUserInfo.id}`)
            }
          })
      }
    },
    created() {
      this.myUserInfo = util.ls.get('myUserInfo')
      this.nickname = this.myUserInfo.nickname
      this.school = this.myUserInfo.school
      this.college = this.myUserInfo.college
    }
  }

</script>
