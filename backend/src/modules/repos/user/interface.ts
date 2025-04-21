interface IUserRepo{
    getUser(username: string): Promise<User>
}