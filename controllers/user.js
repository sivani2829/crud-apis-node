
import {v4 as uuidv4} from 'uuid';
let users=[];

export const getUser=(req,res)=>{
    console.log('get route called')
    console.log(users)
    res.send({users})

};

export const createUser=(req,res)=>{
    console.log('post rpute reached')
    const user=req.body
    const userId=uuidv4();
    const userWithId={...user,id:userId};
  
    users.push(userWithId);
    console.log(users)
    res.send('post route reached')
    res.send(`user with name ${user.firstname} added to the database`)

};

export const findUser=(req,res)=>{
    const {id}=req.params;
    console.log('get id route');
    const foundUser=users.find((eachuser)=>eachuser.id==id);

    res.send(foundUser);
};

export const deleteUser=(req,res)=>{
    const {id}=req.params
    const deletedData=users.filter((each)=>each.id!==id);
    res.send(deletedData);
};

export const updateUser=(req,res)=>{
    const {id}=req.params;
    const{firstname,lastname,age}=req.body;
    const user=users.find((e)=>e.id===id);
    if(firstname){
        user.firstname=firstname;
    }
    if(lastname){
        user.lastname=lastname;
    }
    if(age){
        user.age=age;
    }
   
    res.send(`user with id ${id} is updated`)

};

export const userLogin=(req,res)=>{
const{firstname,lastname}=req.body;
console.log('fn',firstname);
let existUser=users.find((e)=>e.lastname===lastname && e.firstname===firstname);
console.log(users);
console.log('login',existUser);
if(existUser){
    res.send('login success')
}
else{
    res.send('create account, no user found with this data')
}

}