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
          name: "Set up Google Drive",
         
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                   
                  },
                  text: "Lorem ipsum text",
                  date: new Date().toDateString(),
                },
                
              ],
            },
            {
              id: 2,
              author: {
                id: 25,
                name: "After Class",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Set up Learning Management System",
          comments:  [
            {
              id: 1,
              author: {
                id: 23,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text 11",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 221,
          name: "Correct Final Exam",
          comments:  [
            {
              id: 14,
              author: {
                id: 29,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text 11",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 31,
                  author: {
                    id: 36,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
     
        {
          id: 13,
          name: "Web Enhance Class",
          comments:  [
            {
              id: 94,
              author: {
                id: 48,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text 11",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 12,
                  author: {
                    id: 27,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      taskState: "In Progress",
      tasks: [
        {
          id: 3,
          name: "Reflection Meeting",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text ",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Make Assignment 1",
          comments:  [
            {
              id: 1,
              author: {
                id: 23,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text 11",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      taskState: "End",
      tasks: [
        {
          id: 69,
          name: "Reflection Meeting",
          comments: [
            {
              id: 1,
              author: {
                id: 34,
                name: "Write Syllabus",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 28,
          name: "Set up Online Textbook",
          comments: [
            {
              id: 1,
              author: {
                id: 34,
                name: "John ",
                image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies:  [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                    image:"https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-07-24%2020-02-59",
                  
                  },
                  text: "No ",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
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
