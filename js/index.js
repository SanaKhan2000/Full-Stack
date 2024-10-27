let url = "https://official-joke-api.appspot.com/random_joke";

async function quotable(){
    try{
        let config = {headers:{ Accept: "application/json"}};
        let quot = await axios.get(url);
        console.log(quot.data);
    }
    catch (e){
        console.log("Error -" ,e);
    }
}