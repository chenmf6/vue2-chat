<template>
  <div class="text">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="content"
      @keydown="keySend"></textarea>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import YesnoTeller from '../api/yesno_teller';

  export default {
    data () {
      return {
        content: ''
      };
    },
    computed: {
      ...mapState(['currentSessionId'])
    },
    methods: {
      ...mapActions(['sendMessage']),
      keySend: function (event) {
        if (event.ctrlKey && event.keyCode === 13 && this.content.length) {
          this.sendMessage({content: this.content});
          // get yesno answer
          if (this.currentSessionId === 1) {
            const vm = this;
            const question = this.content;
            setTimeout(() => {
              YesnoTeller.getAnswer(question, answer => {
                vm.sendMessage({content: answer, self: false});
              });
            }, 1000);
          }
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
