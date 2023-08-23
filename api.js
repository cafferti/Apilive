//Workflow function
//get all useremails
const getAllUserEmail = async () =>{
    const response = await fetch(`https:jsonplaceholder.typicode.com/users`);
    jsonuserdata = await response.json();
   
    // jsonuserdata.forEach(user => {
    //     console.log(user.email)
    // }); only when you want to display the list of emails
    //but the below makes map craetes another array and stores emails as strings

   const useremailArray = jsonuserdata.map((user)=>{
    return user.email
   })
//    console.log(useremailArray)
}

getAllUserEmail()