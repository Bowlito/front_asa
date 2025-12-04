export interface UserType {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: "user" | "pro" | "admin";
}