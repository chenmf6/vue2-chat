<template>
  <div class="text">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="content"
      @keydown="keySend"></textarea>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        content: ''
      };
    },
    methods: {
      ...mapActions(['sendMessage']),
      keySend: function (event) {
        if (event.ctrlKey && event.keyCode === 13 && this.content.length) {
          this.sendMessage(this.content);
          console.log(this.content);
          this.content = '';
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .text {
    height:160px;
    border-top: solid 1px #ddd;

    textarea {
      padding: 10px;
      height:100%;
      width: 100%;
      border: none;
      outline:none;
      font-family: "Microsoft YaHei";
      resize: none;
    }
  }
</style>
