export interface User {
    username: string;
    role: 'Admin' | 'Editor' | 'Viewer';
}