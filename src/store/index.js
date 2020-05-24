import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

const store = new Vuex.Store({
  state: {
    type: 0,
    course: 0,
    groups: [
      {
        id: 0,
        direction: 0,
        course: 1,
        name: 'АДБ-19-01'
      },
      {
        id: 1,
        direction: 0,
        course: 1,
        name: 'АДБ-19-02'
      },
      {
        id: 2,
        direction: 0,
        course: 1,
        name: 'АДБ-19-03'
      },
      {
        id: 3,
        direction: 0,
        course: 1,
        name: 'АДБ-19-06'
      },
      {
        id: 4,
        direction: 0,
        course: 1,
        name: 'АДБ-19-07'
      },
      {
        id: 5,
        direction: 0,
        course: 1,
        name: 'АДБ-19-08'
      },
      {
        id: 6,
        direction: 0,
        course: 1,
        name: 'АДБ-19-09'
      },
      {
        id: 7,
        direction: 0,
        course: 1,
        name: 'АДБ-19-10'
      },
      {
        id: 8,
        direction: 0,
        course: 1,
        name: 'АДБ-19-11'
      },
      {
        id: 9,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-01'
      },
      {
        id: 10,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-02'
      },
      {
        id: 11,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-03'
      },
      {
        id: 12,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-04'
      },
      {
        id: 13,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-05'
      },
      {
        id: 14,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-06'
      },
      {
        id: 15,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-07'
      },
      {
        id: 16,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-08'
      },
      {
        id: 17,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-09'
      },
      {
        id: 18,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-10'
      },
      {
        id: 19,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-11'
      },
      {
        id: 20,
        direction: 0,
        course: 1,
        name: 'МДБ-19-03'
      },
      {
        id: 21,
        direction: 0,
        course: 1,
        name: 'МДБ-19-04'
      },
      {
        id: 22,
        direction: 0,
        course: 1,
        name: 'МДБ-19-05'
      },
      {
        id: 23,
        direction: 0,
        course: 1,
        name: 'МДБ-19-06'
      },
      {
        id: 24,
        direction: 0,
        course: 1,
        name: 'МДБ-19-07'
      },
      {
        id: 25,
        direction: 0,
        course: 1,
        name: 'МДБ-19-08'
      },
      {
        id: 26,
        direction: 0,
        course: 1,
        name: 'МДБ-19-09'
      },
      {
        id: 27,
        direction: 0,
        course: 1,
        name: 'МДБ-19-10'
      },
      {
        id: 28,
        direction: 0,
        course: 1,
        name: 'ЭДБ-19-01'
      },
      {
        id: 29,
        direction: 0,
        course: 1,
        name: 'ЭДБ-19-02'
      },
      {
        id: 30,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-03'
      },
      {
        id: 31,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-05'
      },
      {
        id: 32,
        direction: 0,
        course: 1,
        name: 'ИДБ-19-06'
      },
      {
        id: 33,
        direction: 0,
        course: 2,
        name: 'АДБ-18-01'
      },
      {
        id: 34,
        direction: 0,
        course: 2,
        name: 'АДБ-18-02'
      },
      {
        id: 35,
        direction: 0,
        course: 2,
        name: 'АДБ-18-03'
      },
      {
        id: 36,
        direction: 0,
        course: 2,
        name: 'АДБ-18-06'
      },
      {
        id: 37,
        direction: 0,
        course: 2,
        name: 'АДБ-18-07'
      },
      {
        id: 38,
        direction: 0,
        course: 2,
        name: 'АДБ-18-08'
      },
      {
        id: 39,
        direction: 0,
        course: 2,
        name: 'АДБ-18-09'
      },
      {
        id: 40,
        direction: 0,
        course: 2,
        name: 'АДБ-18-10'
      },
      {
        id: 41,
        direction: 0,
        course: 2,
        name: 'АДБ-18-11'
      },
      {
        id: 42,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-01'
      },
      {
        id: 43,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-02'
      },
      {
        id: 44,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-03'
      },
      {
        id: 45,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-04'
      },
      {
        id: 46,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-05'
      },
      {
        id: 47,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-06'
      },
      {
        id: 48,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-07'
      },
      {
        id: 49,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-08'
      },
      {
        id: 50,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-09'
      },
      {
        id: 51,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-10'
      },
      {
        id: 52,
        direction: 0,
        course: 2,
        name: 'ИДБ-18-11'
      },
      {
        id: 53,
        direction: 0,
        course: 2,
        name: 'МДБ-18-03'
      },
      {
        id: 54,
        direction: 0,
        course: 2,
        name: 'МДБ-18-04'
      },
      {
        id: 55,
        direction: 0,
        course: 2,
        name: 'МДБ-18-05'
      },
      {
        id: 56,
        direction: 0,
        course: 2,
        name: 'МДБ-18-06'
      },
      {
        id: 57,
        direction: 0,
        course: 2,
        name: 'МДБ-18-07'
      },
      {
        id: 58,
        direction: 0,
        course: 2,
        name: 'МДБ-18-08'
      },
      {
        id: 59,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-01'
      },
      {
        id: 60,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-02 (ПМ)'
      },
      {
        id: 61,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-02 (УПр)'
      },
      {
        id: 62,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-03'
      },
      {
        id: 63,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-04'
      },
      {
        id: 64,
        direction: 0,
        course: 2,
        name: 'ЭДБ-18-05'
      },
      {
        id: 65,
        direction: 0,
        course: 3,
        name: 'АДБ-17-01'
      },
      {
        id: 66,
        direction: 0,
        course: 3,
        name: 'АДБ-17-02'
      },
      {
        id: 67,
        direction: 0,
        course: 3,
        name: 'АДБ-17-03'
      },
      {
        id: 68,
        direction: 0,
        course: 3,
        name: 'АДБ-17-06'
      },
      {
        id: 69,
        direction: 0,
        course: 3,
        name: 'АДБ-17-07'
      },
      {
        id: 70,
        direction: 0,
        course: 3,
        name: 'АДБ-17-08'
      },
      {
        id: 71,
        direction: 0,
        course: 3,
        name: 'АДБ-17-09'
      },
      {
        id: 72,
        direction: 0,
        course: 3,
        name: 'АДБ-17-10'
      },
      {
        id: 73,
        direction: 0,
        course: 3,
        name: 'АДБ-17-11'
      },
      {
        id: 74,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-01'
      },
      {
        id: 75,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-01'
      },
      {
        id: 76,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-02'
      },
      {
        id: 77,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-03'
      },
      {
        id: 78,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-06'
      },
      {
        id: 79,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-07'
      },
      {
        id: 80,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-09'
      },
      {
        id: 81,
        direction: 0,
        course: 3,
        name: 'ИДБ-17-10'
      },
      {
        id: 82,
        direction: 0,
        course: 3,
        name: 'МДБ-17-03'
      },
      {
        id: 83,
        direction: 0,
        course: 3,
        name: 'МДБ-17-04'
      },
      {
        id: 84,
        direction: 0,
        course: 3,
        name: 'МДБ-17-05'
      },
      {
        id: 85,
        direction: 0,
        course: 3,
        name: 'МДБ-17-06'
      },
      {
        id: 86,
        direction: 0,
        course: 3,
        name: 'МДБ-17-07'
      },
      {
        id: 87,
        direction: 0,
        course: 3,
        name: 'МДБ-17-08'
      },
      {
        id: 88,
        direction: 0,
        course: 3,
        name: 'ЭДБ-17-01'
      },
      {
        id: 89,
        direction: 0,
        course: 3,
        name: 'ЭДБ-17-02'
      },
      {
        id: 90,
        direction: 0,
        course: 3,
        name: 'ЭДБ-17-04'
      },
      {
        id: 91,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-01'
      },
      {
        id: 92,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-02'
      },
      {
        id: 93,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-03'
      },
      {
        id: 94,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-05'
      },
      {
        id: 95,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-06'
      },
      {
        id: 96,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-07'
      },
      {
        id: 97,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-09'
      },
      {
        id: 98,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-10'
      },
      {
        id: 99,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-11'
      },
      {
        id: 100,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-12'
      },
      {
        id: 101,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-13'
      },
      {
        id: 102,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-14'
      },
      {
        id: 103,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-16'
      },
      {
        id: 104,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-17'
      },
      {
        id: 105,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-20'
      },
      {
        id: 106,
        direction: 0,
        course: 4,
        name: 'ИДБ-16-21'
      },
      {
        id: 107,
        direction: 0,
        course: 4,
        name: 'МДБ-16-03'
      },
      {
        id: 108,
        direction: 0,
        course: 4,
        name: 'МДБ-16-04'
      },
      {
        id: 109,
        direction: 0,
        course: 4,
        name: 'МДБ-16-05'
      },
      {
        id: 110,
        direction: 0,
        course: 4,
        name: 'МДБ-16-06'
      },
      {
        id: 111,
        direction: 0,
        course: 4,
        name: 'МДБ-16-07'
      },
      {
        id: 112,
        direction: 0,
        course: 4,
        name: 'МДБ-16-08'
      },
      {
        id: 113,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-01'
      },
      {
        id: 114,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-02 (ПМ)'
      },
      {
        id: 115,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-02 (УПр)'
      },
      {
        id: 116,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-03 (УП)'
      },
      {
        id: 117,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-03 (УЧР)'
      },
      {
        id: 117,
        direction: 0,
        course: 4,
        name: 'ЭДБ-16-03 (УЧР)'
      },
      {
        id: 118,
        direction: 1,
        course: 4,
        name: 'МДС-15-01'
      },
      {
        id: 119,
        direction: 1,
        course: 4,
        name: 'МДС-16-01'
      },
      {
        id: 120,
        direction: 1,
        course: 4,
        name: 'МДС-16-02'
      },
      {
        id: 121,
        direction: 1,
        course: 3,
        name: 'МДС-17-01'
      },
      {
        id: 122,
        direction: 1,
        course: 3,
        name: 'МДС-17-02'
      },
      {
        id: 123,
        direction: 1,
        course: 2,
        name: 'МДС-18-01'
      },
      {
        id: 124,
        direction: 1,
        course: 2,
        name: 'МДС-18-02'
      },
      {
        id: 125,
        direction: 1,
        course: 1,
        name: 'МДС-19-01'
      },
      {
        id: 126,
        direction: 1,
        course: 1,
        name: 'МДС-19-02'
      },
      {
        id: 127,
        direction: 1,
        course: 1,
        name: 'МДС-19-11'
      }
    ],
    schedule: {}
  },
  getters: {
    getGroupsByCourse: state => (direction, course) => {
      return state.groups.filter(group => group.course === course && group.direction === direction);
    },
    getScheduleByWeek: state => (group, week) => {
      return state.schedule.find(element => element.id === group).schedule_weeks[week];
    },
    getLessonsByWeek: state => (group, week) => {
      return state.schedule[group].filter(lesson => getWeekNumber(new Date(lesson.date))[1] === week + 6);
    }
  },
  mutations: {
    SET_SCHEDULE: (state, schedule) => {
      state.schedule = schedule;
    }
  },
  actions: {
    setSchedule: (context) => {
      axios.get("json/schedule.json").then(response => {
        context.commit('SET_SCHEDULE', response.data);
      });
    }
  },
  modules: {
  }
})

export default store;
