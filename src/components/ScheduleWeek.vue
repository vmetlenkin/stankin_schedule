<template>
  <div class="schedule-week">
    <h2>{{  }}</h2>
    <div class="schedule-week-grid">
      <div class="day-card" v-for="day in 6" :key="day">
        <h2 class="date-title">{{ days[day] }}</h2>
        <v-card outlined>
          <v-simple-table class="schedule-table">
            <template v-slot:default>
              <thead>
              <tr>
                <th>Время</th>
                <th class="text-left">Тип</th>
                <th class="text-left">Предмет</th>
                <th class="text-left">Преподаватель</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in getLessonsByDay(day)" :key="item" v-bind:class="{ 'highlight-yellow': item.type === 'ЛЕК', 'highlight-green': item.type === 'СЕМ', 'highlight-blue': item.type === 'ЛАБ' }">
                <td>{{ item.start_time }}<br> {{ item.end_time }}</td>
                <td>
                  <v-chip v-if="item.type" class="ma-2" label>
                    {{ item.type }}
                  </v-chip>
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.lecturer }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScheduleWeek',
    props: {
      groupId: Number,
      week: Number
    },
    data() {
      return {

      }
    },
    computed: {
      schedule() {
        return this.$store.getters.getLessonsByWeek(this.groupId, this.week);
      },
      days() {
        return this.GetDates(this.getDateRangeOfWeek(this.week + 6, new Date().getFullYear()), 6);
      }
    },
    methods: {
      parseLessonTime(time) {
        switch (time) {
          case '8:30:00': return 0;
          case '10:20:00': return 1;
          case '12:20:00': return 2;
          case '14:10:00': return 3;
          case '16:00:00': return 4;
          case '18:00:00': return 5;
          case '19:40:00': return 6;
          case '21:20:00': return 7;
        }
      },
      getLessonsByDay(day) {
        const schedule = {};
        const list = [];
        this.schedule.filter(lesson => new Date(lesson.date).getDay() === day).forEach(lesson => {
          schedule[this.parseLessonTime(lesson.start_time)] = {
            name: lesson.name,
            type: lesson.type,
            lecturer: lesson.lecturer,
            start_time: lesson.start_time.slice(0,-3),
            end_time: lesson.end_time.slice(0,-3)
          }
        });
        for (let i = 0; i < 8; i++) {
          if (schedule[i]) {
            list.push(schedule[i]);
          } else {
            list.push({});
          }
        }
        return list;
      },
      getDateRangeOfWeek(weekNo, y){
        Date.prototype.getWeek = function() {
          var date = new Date(this.getTime());
          date.setHours(0, 0, 0, 0);
          // Thursday in current week decides the year.
          date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
          // January 4 is always in week 1.
          var week1 = new Date(date.getFullYear(), 0, 4);
          // Adjust to Thursday in week 1 and count number of weeks from date to week1.
          return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        }

        var d1, numOfdaysPastSinceLastMonday;
        d1 = new Date(''+y+'');
        numOfdaysPastSinceLastMonday = d1.getDay() - 1;
        d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
        d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
        return d1;
      },
      GetDates(startDate, daysToAdd) {
        let aryDates = [];

        for (let i = 0; i <= daysToAdd; i++) {
          let currentDate = new Date();
          currentDate.setDate(startDate.getDate() + i);
          currentDate.setMonth(startDate.getMonth());
          aryDates.push(this.DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
        }

        return aryDates;
      },
      MonthAsString(monthIndex) {
        var month = new Array();
        month[0] = "January";
        month[1] = "февраля";
        month[2] = "марта";
        month[3] = "апреля";
        month[4] = "мая";
        month[5] = "июня";
        month[6] = "июля";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return month[monthIndex];
      },
      DayAsString(dayIndex) {
        let weekdays = new Array(7);
        weekdays[0] = "Воскересенье";
        weekdays[1] = "Понедельник";
        weekdays[2] = "Вторник";
        weekdays[3] = "Среда";
        weekdays[4] = "Четверг";
        weekdays[5] = "Пятница";
        weekdays[6] = "Суббота";

        return weekdays[dayIndex];
      }
    }
  }
</script>

<style scoped>
  .schedule-week {
    width: 100%;
  }

  .schedule-week-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(440px, 3fr));
    gap: 20px;
  }

  .date-title {
    margin-bottom: 10px;
  }

  .v-pagination {
    width: auto;
    margin-bottom: 40px;
  }

  .schedule-table {
    text-align: center;
  }

  .highlight-yellow {
    background-color: rgba(255, 126, 57, 0.1);
  }

  .highlight-green {
    background-color: rgba(46, 255, 135, 0.1);
  }

  .highlight-blue {
    background-color: rgba(64, 195, 255, 0.1);
  }

  .week-title {
    margin-bottom: 40px;
  }
</style>
