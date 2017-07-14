/**
 * Created by chenmf on 2017/6/23.
 */
export const filteredSessions = state => {
  return state.sessions.filter(
    session => session.user.name.indexOf(state.filterKey) !== -1);
};

export const currentSession = state => {
  return state.sessions.find(session => session.id === state.currentSessionId);
};
