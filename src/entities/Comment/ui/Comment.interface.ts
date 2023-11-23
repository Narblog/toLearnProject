
export interface CommentProps {
    id: number;
    author: string;
    message: string;
    date: Date;
    reply?: CommentProps[]
}