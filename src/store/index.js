/**
 * Created by chenmf on 2017/6/23.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import {setStorage} from '../api/storage';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const now = new Date();
const state = {
  // 当前用户
  user: {
    name: 'chenmf6',
    img: 'static/img/user-logo.jpg'
  },

  // 会话列表
  sessions: [
    {
      id: 1,
      user: {
        name: 'vue',
        img: 'static/img/vue-logo.png'
      },
      messages: [
        {
          content: 'Hello!',
          date: now
        },
        {
          content: '中文官网:https://cn.vuejs.org/',
          date: now
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'webpack',
        img: 'static/img/webpack-logo.jpg'
      },
      messages: [
        {
          content: 'http://webpack.github.io/',
          date: now
        }
      ]
    }
  ],

  // 当前会话
  currentSessionId: 1,

  // 筛选会话关键词
  filterKey: ''
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

store.watch(
  (state) => state.sessions,
  (val) => val ? setStorage(val) : setStorage([]),
  {
    deep: true
  }
);

export default store;
