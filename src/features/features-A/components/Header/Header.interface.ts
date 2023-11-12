import { User } from "firebase/auth";


export interface HeaderProps {
    user?: User | null
  }

  export interface RegisterProps {
    signIn?: () => void,
    signInGit?:()=>void,
  }