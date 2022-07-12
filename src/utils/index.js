export const signUp = async (username, email, password, setter) => {
    try{
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username, email, password
            })
        });
        const data = await res.json();
        setter(data.user.username);
    } catch (error) {
        console.log(error);
    }
};


export const fetchPhotos = async (setter) => {
    try{
        const res = await fetch(process.env.REACT_APP_PICTURES);
        const data = await res.json();
        setter(data);
    }   catch(error) {
        console.log(error);
    }
}