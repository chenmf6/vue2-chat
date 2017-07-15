<template>
<div class="message" ref="messageWrapper">
  <ul v-if="session">
    <li v-for="item in session.messages" ref="messageList">
      <p class="time">
        <span>{{item.date | time}}</span>
      </p>
      <div class="main" :class="{self:item.self}">
        <img
          class="avatar"
          width="30"
          height="30"
          :src="item.self ? user.img : session.user.img">
        <div class="text">
          <p v-for="line in item.content.split('\n')" class="line">
            {{line}}
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import IScroll from 'iscroll';

export default {
  name: 'Message',
  computed: {
    ...mapState(['user']),
    ...mapGetters({
      session: 'currentSession'
    })
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll () {
      this.messageScroll = new IScroll(this.$refs.messageWrapper, {
        click: true
      });
    }
  },
  watch: {
    'session.messages': {
      deep: true,
      handler () {
        if (this.messageScroll) {
          this.$nextTick(() => {
            this.messageScroll.refresh();
            if (this.messageScroll.hasVerticalScroll) {
              let el = this.$refs.messageWrapper.querySelector('li:last-child');
              this.messageScroll.maxScrollY -= el.clientHeight;
              // this.messageScroll.scrollToElement(el, 300, 0, el.clientHeight);
            }
            this.messageScroll.scrollTo(0, this.messageScroll.maxScrollY, 300);
          });
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.message {
  padding: 20px 15px;
  overflow: hidden;

  li {
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align:center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float:left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~'calc(100% - 40px)';
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    .line {
      margin: 2px 0;
      padding: 0;
    }

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }
  .self{
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text{
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>
