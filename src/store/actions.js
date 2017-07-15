/**
 * Created by chenmf on 2017/6/21.
 */
import * as types from './mutation_types';
import {getStorage} from '../api/storage';

export const initSessions = ({commit}) => {
  let data = JSON.parse(getStorage());
  if (data && data.length) {
    commit(types.SET_SESSIONS, {sessions: data});
  }
};

export const sendMessage = ({commit}, {content, self = true}) => {
  commit(types.SEND_MESSAGE, {content, self});
};

export const selectSession = ({commit}, id) => {
  commit(types.SELECT_SESSION, {id});
};

export const setFilterKey = ({commit}, key) => {
  key = key.toLocaleLowerCase();
  commit(types.SET_FILTER_KEY, {key});
};
