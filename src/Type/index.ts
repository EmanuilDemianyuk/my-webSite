
export type ThemeState = {
    theme: boolean;
}

export type ThemeAction = 
    | { type: string }; 

export type ManagerTheme = {
    state: ThemeState;
    changeTheme: () => void;
}

export type TypeContext = {
    theme: boolean;
    changeTheme: () => void;
}
export type IStorage = {
    setItem(key: string, value: string): void;
    getItem(key: string): Nullable<string>;
    removeItem(key: string): void;
    clear():void;
}

export type Nullable<T> = T | null;

export type InfoTagProps = {
    title: string;
    description: string;
}

export type ProjectCardProps = {
    title: string;
    description: string;
    technology: string[];
    img: string;
    urlLink: urlLink;
}

export type TechnologyProps = {
    name: string;
}

export type urlLink = {
    code: string;
    demo: string;
}