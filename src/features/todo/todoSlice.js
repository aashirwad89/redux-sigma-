// reducers 
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: "abc", task: "demo-task", isDone: false}],
}

export const todoSlice =  createSlice({
    name:'todo',
    initialState,
    reducers: { //state and action
        addTodo: (state , action)=>{
const newTodo = {
    id: nanoid,
    task:action.payload,
    isDone: false,
}
    state.todos.push(newTodo); //direct mutation happens here
        },
        deleteTodo : (state , action)=>{
            //  remove the action.payload
      state.todos = state.todos.filter((todo)=> todo.id != action.payload);
        },

        markAsDone: (state , action)=>{
            // mark done to action.payload
    state.todos =  state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})


//action creator for each reducer
export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;
