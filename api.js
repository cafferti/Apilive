//Workflow function
//get all useremails
const getAllUserEmail = async () => {
  const response = await fetch(`https:jsonplaceholder.typicode.com/users`);
  jsonuserdata = await response.json();

  // jsonuserdata.forEach(user => {
  //     console.log(user.email)
  // }); only when you want to display the list of emails
  //but the below makes map craetes another array and stores emails as strings

  const useremailArray = jsonuserdata.map((user) => {
    return user.email;
  });
  posttowebpage(useremailArray);
};

const posttowebpage = (data) => {
  console.log(data);
};
getAllUserEmail();

// secong parameter for fetch
//the second parameter is an object

const getDadJoke = async () => {
  const response = await fetch(`https://icanhazdadjoke.com/`, {
    method: `GET`,
    headers: {
      Accept: `application/json`,
    },
  });
   const jsonjokedad = await response.json();
   console.log(jsonjokedad)
   console.log(jsonjokedad)
   
};

getDadJoke()

// posting data to Api

