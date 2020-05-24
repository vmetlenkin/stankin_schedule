<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <img class="logo" src="@/static/logo.svg" alt="">
      <v-list>
        <v-list-item>
          <v-overflow-btn
            v-model="selectedDirection"
            class="my-2"
            :items="directions"
            label="Выберите направление"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-list-item>
        <v-list-item>
          <v-overflow-btn
            v-model="selectedCourse"
            class="my-2"
            :items="courses"
            label="Выберите курс"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-list-item>
        <v-list-item>
          <v-overflow-btn
            v-model="selectedGroup"
            class="my-2"
            :items="groups"
            label="Выберите группу"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Расписание занятий</v-toolbar-title>
      <v-pagination
        v-if="selectedGroup"
        v-model="week"
        :length="16"
        light
      ></v-pagination>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <div class="text-center">
        </div>
        <schedule-week v-if="selectedGroup" :group-id="selectedGroup" :week="week"/>
        <span v-else style="width: 100%; text-align: center">Выберите группу чтобы посмотреть расписание</span>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions } from 'vuex'
  import ScheduleWeek from './components/ScheduleWeek';
  export default {
    components: {ScheduleWeek},
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      directions: [
        {
          text: 'Бакалавриат',
          value: 0
        },
        {
          text: 'Специалитет',
          value: 1
        }
      ],
      courses: [
        {
          text: '1 курс',
          value: 1
        },
        {
          text: '2 курс',
          value: 2
        },
        {
          text: '3 курс',
          value: 3
        },
        {
          text: '4 курс',
          value: 4
        }
      ],
      selectedDirection: '',
      selectedCourse: '',
      selectedGroup: '',
      week: 1
    }),
    computed: {
      groups() {
        return this.getGroupListByCourse(this.selectedDirection, this.selectedCourse);
      }
    },
    methods: {
      ...mapActions(['setSchedule']),
      getGroupListByCourse(direction, course) {
        const rawGroups = this.$store.getters.getGroupsByCourse(direction, course);
        const groupList = [];
        rawGroups.forEach(group => {
          groupList.push({
            text: group.name,
            value: group.id
          })
        });
        return groupList;
      }
    },
    mounted() {
      this.setSchedule();
    }
  }
</script>

<style>
  .logo {
    width: 100%;
  }
</style>
