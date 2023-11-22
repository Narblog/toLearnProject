import { User } from "firebase/auth";


export interface HeaderProps {
    user?: User | null
  }

  export interface RegisterProps {
    signIn?: () => void,
    signInGit?:()=>void,
    user?:string,
    login?:string,
    password?:string,
   
  }
 
  export interface CommentProps {
    id: number;
    title: string;
    content: string;
    
  }
  export interface CommentsProps {
    comments?: CommentProps[];
  
  
  }