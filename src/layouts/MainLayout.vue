<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

       
      </q-toolbar>
      <div class="q-px-tg q-pt-xt 1-nb-nd">
        <div class="text-h3">Agenda</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
    
    </q-header>

     <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/"
            exact
            clickable 
            v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                A fazeres:
              </q-item-section>
            </q-item>

           <q-item 
           to="/help"
           exact
           clickable 
           v-ripple>
                <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Cuidados:
              </q-item-section>
          </q-item>

            </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="" style="height:168px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              
            </q-avatar>
            <div class="text-weight-bold">Luísa Oliveira</div>
            <div>@luisaollveira</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
<router-view />

      </keep-alive>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'
import { date } from 'quasar'
export default defineComponent({
  name: 'MainLayout',



  data () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }, 
  computed: {
    todaysDate() {
     let timeStamp = Date.now()
     return date.formatDate(timeStamp, 'dddd D MMM') 
    }
  }
})
</script>


<style lang="scss">
.header-img {
  height: 100%;
  z-index: -1;
  opacity:0,2 ;
  filter: grayscale(100%);
}
.text-h3 , .text-subtitle1{
  padding: 10px;
}
.absolute-top {
  background-color: #45075f;
}
</style>

