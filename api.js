//Workflow function
//get all useremails
const getAllUserEmail = async () =>{
    const response = await fetch(`https:jsonplaceholder.typicode.com/users`);
    jsonuserdata = await response.json();
    console.log(jsonuserdata)

// const useremailArray = jsonuserdata.map(()=>{})
}

getAllUserEmail()