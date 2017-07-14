<template>
    <div class="card">
      <header>
        <img
          class="avatar"
          height="40"
          width="40"
          :alt="user.name"
          :src="user.img">
        <p class="name">{{user.name}}</p>
      </header>
      <footer>
        <input class="search" type="text" placeholder="搜索会话..." v-model="searchKey">
      </footer>

    </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      searchKey: ''
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['filteredSessions'])
  },

  watch: {
    searchKey: function () {
      this.setKey();
    }
  },

  methods: {
    ...mapActions(['setFilterKey']),
    setKey: _.debounce(function () {
      this.setFilterKey(this.searchKey);
    }, 150)
  }
};
</script>

<style scoped lang="less">
.card {
  padding: 12px;
  border-bottom: solid 1px #24272C;

  footer {
    margin-top: 10px;
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
    font-size: 16px;
  }
  .search {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    line-height: 30px;
    border-radius: 4px;
    border: solid 1px #3a3a3a;
    background-color: #26292e;
  }

}
</style>
