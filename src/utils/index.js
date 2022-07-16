export const signUp = async ({username, email, password}, setter) => {
  try {
      const response = await fetch("http://localhost:5001/user", {
        method: "POST", // HTTP verb
        headers: { "Content-Type": "application/json" }, // sending Json data
        body: JSON.stringify({
          username,
          email,
          password,
        }), // body turned into JSON with stringify
      });
      const data = await response.json();
      console.log(data);
      setter(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };


export const fetchPhotos = async (setter) => {
  debugger
    try{
        const res = await fetch(process.env.REACT_APP_PICTURES);
        const data = await res.json();
        setter(data);
    }   catch(error) {
        console.log(error);
    }
}