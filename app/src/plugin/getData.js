import Vue from 'vue'

function getData(val) {
    console.log(1);
    val = parseInt(val)
    let now = new Date(val)
    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    let d = now.getDate();
    
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
  }


Vue.prototype.getData = getData