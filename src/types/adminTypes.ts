export type adminTypes = {
    id: string;
    master: boolean;
    email: string;
    name: string;
    password: string;
    tel: string;
    token: string;
    passwordResetToken: string | null;
    passwordResetExpires: Date | null;
    created_at: Date;
    update_at: Date;
}