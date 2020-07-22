class user{
        constructor(name,age,email){
            this.name=name;
            this.email=email;
            this.age=age;
        }
    
        login(){
        console.log('${this.name} has logged out');
        }
    logout()
    {
        console.log('${this.name} has logged out');
    }
    }
    class moderator extends user{
        addcoins(){
           this.lucoins++;
           console.log('${this.name} has ${this.lucoins} coins');
        }
        removecoins(){
            this.lucoins--;
            console.log('${this.name} has ${this.lucoins} coins');
    
        }
    
    }
    class admin extends moderator{
        addcourse(){
            this.course++;
            console.log('${this.name} has ${this.course} course');
        }
        deletecourse(){
            this.course--;
            delete(thi.course(this.name));
            console.log('${this.name} has ${this.course} course');

        }
    }
    user.login().addcoins().addcourse().logout();