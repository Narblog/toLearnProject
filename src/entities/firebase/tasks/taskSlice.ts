import { TaskProps } from "pages/TablePage/ui/TablePage.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItemProps } from "pages/TablePage/ui/TablePage.interface";

interface initialStateTasks {
  tasks: TaskProps[];
}

interface changeTaskINProps {
  parentId: number;
  selfId?: number;
  name: string;
}

const initialState: initialStateTasks = {
  tasks: [
    {
      id: 1,
      taskState: "Done",
      tasks: [
        {
          id: 1,
          name: "planning",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John"
                   
                  },
                  text: "No, because youre thinking very simply and awkwardm, you dont think that this is too mucj",
                  date: new Date().toDateString(),
                },
                
              ],
            },
            {
              id: 2,
              author: {
                id: 25,
                name: "John",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                  
                  },
                  text: "No",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 2,
          name: "making",
          comments: [],
        },
      ],
    },
    {
      id: 2,
      taskState: "In Progress",
      tasks: [
        {
          id: 3,
          name: "John",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John ",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
        {
          id: 4,
          name: "using",
          comments: [],
        },
      ],
    },
    {
      id: 3,
      taskState: "End",
      tasks: [
        {
          id: 69,
          name: "John",
          comments: [
            {
              id: 1,
              author: {
                id: 34,
                name: "John ",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
        {
          id: 28,
          name: "using",
          comments: [],
        },
      ],
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeTaskItemName: (state, action: PayloadAction<changeTaskINProps>) => {
      state.tasks = state.tasks.map((task: TaskProps) =>
        task.id === action.payload.parentId
          ? {
              ...task,
              tasks: task.tasks.map((taskItem: TaskItemProps) =>
                taskItem.id === action.payload.selfId
                  ? { ...taskItem, name: action.payload.name }
                  : taskItem
              ),
            }
          : task
      );
    },
    changeDragDropItems: (state, action: PayloadAction<TaskProps[]>) => {
      state.tasks = action.payload;
    },
    addItem: (state,  action: PayloadAction<changeTaskINProps>) =>{
      const task = state.tasks.find(task=> task.id===action.payload.parentId)
    
      const ids:number[] = [];
      
      state.tasks.map((task)=>task.tasks.map((object) => {
        return(ids.push(object.id)) 
      }))
      
            
     
      const max = ids ? Math.max(...ids): 1000;


      task?.tasks.push( {
        id: max+1,
        name: action.payload.name,
        comments: [
         
        ],
      },
      
     
      )
   
    },
    addTask:(state, action: PayloadAction<string>)=>{
      const ids:number[] =[]
      state.tasks.map(task=>{ids.push(task.id)})

      const max = ids ? Math.max(...ids): 0;
      state.tasks.push( {
        id: max+1,
        taskState: action.payload,
        tasks: [
        
        ],
      },)
    }
  },
  
});
;

export const {changeTaskItemName, changeDragDropItems, addItem, addTask} = tasksSlice.actions;

export default tasksSlice.reducer;
