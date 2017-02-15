<script>
  import problemContainer from '../../components/problem_container-mixin'

  export default {
    name: 'home-hot',
    mixins: [problemContainer],
    created() {
      this.$http.get('/q/hot')
        .catch(console.error)
        .then((res) => {
          this.problemList = res.body.map((item, index) => {
            item.index = index
            return item
          })
          console.log(this.problemList)
        })
    }
  }
</script>
