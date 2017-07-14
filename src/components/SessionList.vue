<template>
  <div class="list">
    <ul>
      <li
        v-for="item in filteredSessions"
        :key="item.id"
        :class="{active: item.id === currentSessionId}"
        @click="selectSession(item.id)">
        <img
          class="avatar"
          width="30"
          height="30"
          :alt="item.user.name"
          :src="item.user.img">
        <p class="name">{{item.user.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';

  export default {
    methods: mapActions(['selectSession']),
    computed: {
      ...mapState(['currentSessionId']),
      ...mapGetters(['filteredSessions'])
    }
  };
</script>

<style lang="less" scoped>
  .list {
    li {
      padding: 12px 15px;
      border-bottom: 1px solid #292c33;
      cursor: pointer;
      transition: background-color .1s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    .avatar, .name {
      vertical-align: middle;
    }
    .avatar {
      border-radius: 2px;
    }
    .name {
      display: inline-block;
      margin: 0 0 0 15px;
    }
  }
</style>
