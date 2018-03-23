<template>
    <div class="circle">
      <i-circle :percent="percent" :stroke-color="color">
        <span class="demo-i-circle-inner" style="font-size:24px">
          <span v-show="!hasCompleted">{{percent}}%</span>
          <Icon v-show="hasCompleted" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
        </span>
      </i-circle>
    </div>
</template>

<script>
    export default {
      name: "circle",
      data: function () {
        return {
          percent: 0,
          color: '#2db7f5',
          hasCompleted: false
        }
      },
      mounted: function () {
        var that = this;
        var timer = setInterval(function () {
          that.percent++;
          if (that.percent === 100) {
            clearInterval(timer);
            that.color = '#5cb85c';
            that.hasCompleted = true;
          }
        }, 100);
      }
    }
</script>

<style scoped>

</style>
