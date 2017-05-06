<style lang="less">
  .post-nothing {
    height: 300px;
    width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
    &-desc {
      position: relative;
      top: -80px;
      color: #81bfcf;
      font-size: 36px;
      text-align: center;
    }
  }
</style>
<template>
  <div>
    <router-link v-for="problem in problemList" :key="problem.id" v-if="problemList[0]" :to="`/detail/${problem.id}`">
      <problem-item
        v-on:favorite="favorite"
        :problem="problem">
      </problem-item>
    </router-link>
    <div v-if="!problemList[0]" class="post-nothing">
      <img :src="nothing.img">
      <p class="post-nothing-desc">{{ nothing.desc }}</p>
    </div>
  </div>
</template>

<script>
  import problemItem from '../../components/problem_item'
  import util from '../../util'

  export default  {
    components: {
      problemItem,
    },
    props: ['categoriesMap'],
    data(){
      return {
        type: '',
        id: '0',
        problemList: [],
        categorgs: {},
        fetchURL: '',
        page: 1,
        busy: false,
        nothing: {
          img: '/home/static/smell_face.png',
          desc: '来做第一个发布问题的人吧~'
        }
      }
    },
    methods: {
      fetchProblemList() {

        // 全部分类
        if(this.id === '-1') {
          this.fetchURL = `/q/${this.type}?page=${this.page}`
        } else {
          this.fetchURL = `/q/${this.type}?category_id=${this.id}&page=${this.page}`
        }

        // 获取某个分类下的最新或者最热消息
        return this.$http.get(this.fetchURL)
          .then((res) => {
            return res.body.map((item, index) => {
              item.index = index + (this.page * 10 - 10)
              return item
            })
          })
      },
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .then((res) => {
            let body = res.body
            if(body === '主题不存在') {
              return
            }
            if(body === 'no') {
              this.problemList[index].isFavorite = false
            }
            if(body === 'yes') {
              this.problemList[index].isFavorite = true
            }
          })
          .catch(console.error)
      },
      scroll(event) {
        let viewportHeight = window.innerHeight
        let scrollY = window.pageYOffset
        let documentHeight = document.documentElement.offsetHeight
        if(viewportHeight + scrollY === documentHeight && this.busy === false) {
          this.busy = true
          this.page++
          this.fetchProblemList()
            .then((problems) => {
              this.problemList = this.problemList.concat(problems)
              this.busy = false
            })
        }
      },
      ifNothing() {

        if(this.problemList.length !== 0) {
          return
        }

        if(this.id === '-2') {
          this.nothing = {
            img: '/home/static/cry_face.png',
            desc: '没有该分类哦~'
          }
        }


        if(this.categoriesMap[this.id] === '分享') {
          return this.nothing =  {
            img: '/home/static/cry_face.png',
            desc: '暂无分享哦~'
          }
        }

        this.nothing = this.id === '-1' ? {
          img: '/home/static/smell_face.png',
          desc: '来做第一个发布问题的人吧~'
        } : {
          img: '/home/static/cry_face.png',
          desc: `${this.categoriesMap[this.id] || 该}分类下没有问题哦~`
        }

      }
    },
    created() {
      this.categoriesMap['0'] = '其他'

      this.type = this.$route.params.type
      this.id = this.$route.params.id
      this.fetchProblemList()
        .then((problems) => {
          this.problemList = problems
          this.ifNothing()
        })
        .catch(console.error)

      window.addEventListener('scroll', this.scroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.scroll)
    },
    beforeRouteUpdate(to, from, next) {
      this.id = to.params.id
      this.type = to.params.type

      if(this.id === '-2') {
        this.nothing = {
          img: '/home/static/cry_face.png',
          desc: '没有该分类哦~'
        }
        return next(true)
      }
      this.page = 1
      this.fetchProblemList()
        .then((problemList) => {
          this.problemList = problemList

          this.ifNothing()
        })
        .catch(console.error)
      next(true)
    }
  }
</script>
