<template>
  <div class="text">
    <textarea
      placeholder="按 Ctrl + Enter 发送"
      v-model="content"
      @keydown="keySend"></textarea>
    <div class="send" @click="send">Send</div>
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
        if (event.ctrlKey && event.keyCode === 13) {
          this.send();
        }
      },
      send: function () {
        if (!this.content.length) {
          return;
        }
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
  };
</script>

<style scoped lang="less">
  .text {
    height:160px;
    border-top: solid 1px #ddd;
    .send {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 5px 10px;
      margin: 10px;
      font-size: 16px;
      background-color: #eee;
      border: solid 1px #bbb;
      border-radius: 2px;
      cursor: pointer;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
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
