<template>
  <q-page class="agenda">
  <div class="rowq-pa-sm bg-primary">
          <q-input v-model="newTask" @keyup.enter="addTask" class="col" square filled  bg-color=" #45075f"  placeholder="Add tarefa:" dense>
        <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>
  </div>
     <q-list 
     separator
     bordered
     class="bg-grey">
      

      <q-item 
      v-for = "(task , index) in tasks"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{'done bg-blue-1' : task.done }"
      clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.done" 
          class="no-plolilnter-events"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        

        <q-item-section
        v-if = "task.done" >
      <q-btn
      @click.stop="deleteTask(index)"
      danse
      flat 
      round 
      color="primary" 
      icon="delete"/>
      
      </q-item-section>


      </q-item>

      
    </q-list>
    <div 
    v-if="!tasks.length"
    class="to-task absolute-center">
    <q-icon
       name="check"
       size="90px" 
       color=primary
      
      />
      <div class="text-h5 text-primary text-center">
        
      </div>

    </div>
 </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
 data(){
  return{
    newTask: '',
    tasks: [
      //{
       // title: "Pegar banana",
      //  done: false
      //},
//{
       // title: "Comer banana",
       // done: false
      //},
      //{
       // title: "Jogar fora banana",
       // done: false
     // }
     ]
    }  
  },
  methods: {
deleteTask(index) {
  this.tasks.splice(index, 1)
},
addTask (){
  this.tasks.push({
    title: this.newTask,
    done: false
  })
  this.newTask= ''
}
   }
 }
 
)
</script>

<style lang="scss">
.no-tasks{
opacity: 0.7;
}
</style>