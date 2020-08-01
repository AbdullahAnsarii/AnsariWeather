class user{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} has loagged out`);
        return this;
    }
    incScore(){
        this.score ++;
        console.log(`${this.username} score is ${this.score}`);
        return this;
    }
}



class admin extends user{
    constructor(username, email, title){
        super(username, email)
        this.title = title
    }
    deleteUser(user){
        userList = userList.filter((u)=>{
            return u.username !== user.username;
        })
    }
}

let abdullah = new user('abdullah.ansaree', 'abdullah@gmail.com');
let sana = new user('sanafatima', 'sana@gmail.com');
let maha = new admin('syedamaha', 'syedamaha@gmail.com', 'regional manager');
console.log(abdullah, sana, maha);
let userList = [abdullah, sana, maha];
console.log(userList);
abdullah.login().incScore().incScore().logout();
maha.deleteUser(sana);
console.log(userList);
