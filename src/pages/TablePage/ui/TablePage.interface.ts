export interface TasksProps {
    id: number;
    title: string;
    info: string;
    author: string;
    date: Date;
    comments?: any;
}

export interface ItemsProps {
    id: number;
    mainTitle: string;
    author: string;
    date: Date;
    tasks?: TasksProps[];
}

export interface TableProps {
    items: ItemsProps[];
}