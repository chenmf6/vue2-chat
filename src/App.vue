<template>
  <div class="app">
    <div class="sidebar">
      <card></card>
      <session-list></session-list>
    </div>
    <div class="main">
      <message></message>
      <editor></editor>
    </div>
  </div>
</template>

<script>

  import Card from 'components/Card';
  import SessionList from 'components/SessionList';
  import Editor from 'components/Editor';
  import Message from 'components/Message';

  export default {
    name: 'App',
    components: {Card, SessionList, Editor, Message},
    created () {
      this.$store.dispatch('initSessions');
    }

  };
</script>

<style lang="less" scoped>
  .app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
      height: 100%;
    }
    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;
    }
    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
    .text {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .message {
      height: ~'calc(100% - 160px)';
    }
  }
</style>
