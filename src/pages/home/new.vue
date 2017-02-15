<script>
  import problemContainer from '../../components/problem_container-mixin'

  export default  {
    name: 'home-new',
    mixins: [problemContainer],
    created() {
      this.$http.get('/q/new')
        .then((res) => {
          this.problemList = res.body.map((item, index) => {
            item.index = index
            return item
          })
        })
        .catch(console.error)
    }
  }

</script>
