export class UserModel{
    
}

export interface IUserData{
    description: String;
    id: String;
    name: String;
    profile_image_url: String;
    username: String

}

export interface ITweetData{
    id: String;
    text: String;
}

export interface ITweetsData{
    data: ITweetData[]
}
