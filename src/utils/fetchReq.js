//create user fetch request
export const createUser = async (username, email, password, setImageUrl, setUser, urlInput, imageUrl)=>{
    
    console.log("fetch hit", username, email, password);
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {//Note: 'user' might not be needed
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                imageUrl: urlInput,
            }),
        });
        const data = await res.json();
        console.log(data)
        console.log("set image url:", setImageUrl)
        await setUser(data.newUser.username); 
        console.log("image url before set", imageUrl)
        await setImageUrl(data.newUser.username)
        console.log("the string image url after set", imageUrl)  
        console.log("succesfully created:", data.newUser.imageUrl);
        setImageUrl(data.newUser.imageUrl)

    
        
    } catch (error) {
        console.log(error);
    }
};

//login fetch request
export const logInUser = async (username, password, setUser)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        console.log("user", username, "logged in", data.user.username);
        setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

//delete user fetch request
export const deleteUser = async (username, setUser)=>{
    console.log("fetch", username)
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}${username}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username
            }),
        })
        const data = await res.json();
        // setUser("deleted");
        console.log(username, "has been deleted");
        } catch (error) {
        console.log(error);
    }
}


// export const fetchEvents =  async (setApiData) => {
//     try {
        
//     const response = await fetch("https://www.skiddle.com/api/v1/events/search/?api_key=9eca984fc063066727406327c285fb75&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100")
    

//     const data = await response.json()
//     if (!response.ok){
//       throw new Error(response.statusText)
//     }
//     console.log(data, "data")
//     setApiData(data.results)
//     console.log(data.results)

//     } catch (err) {
//       console.log(err)
//     }
//   }

   export const fetchEvents = async (setApiData) => {
    try {
        const offsetArr = [1, 101, 201];
        const eventArr = [];

        offsetArr.forEach(async(item, index) => {
                    const res = await fetch(`https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_API_KEY}&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100&offset=${item}`);

                const data = await res.json();
console.log(data)
            data.results.forEach(async(item, index) => {

                const eventObj = {
                    id: item.id,
                    eventname: item.eventname,
                    artists: item.artists,
                    date: item.date,
                    description: item.description,
                    largeimageurl: item.largeimageurl,
                    venuename: item.venue.name,
                    address:item.venue.address,
                    postcode: item.venue.postcode,
                    town: item.venue.town
                    
                };
                
                eventArr.push(eventObj);
            });
        });

        setApiData(eventArr);
    } catch (error) {
        console.log(error);
    }
};





export const fetchArtist =  async (setArtists) => {
    try {

    const response = await fetch(`https://www.skiddle.com/api/v1/artist/search/?api_key=${process.env.REACT_APP_API_KEY}`)
    
 
console.log(response)
    
    if (!response.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data, "data")
    setArtists(data.results)
    console.log(data.results)

    } catch (err) {
      console.log(err)
    }
  }
