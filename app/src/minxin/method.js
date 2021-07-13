export default {
  methods: {
    ObserverDate(val) {
      return JSON.parse(JSON.stringify(val))
    },
    routerBack() {
      this.$router.back()

    },
    getData(val) {
      val = parseInt(val)
      let now = new Date(val)
      let y = now.getFullYear();
      let m = now.getMonth() + 1;
      let d = now.getDate();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }

  }
}