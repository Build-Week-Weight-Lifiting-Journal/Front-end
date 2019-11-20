import React,{useEffect} from 'react'
import axios from 'axios'


const Home = () => {

    // useEffect(()=> {
    //     axios
    //     .get(`https://weight-lift-journal-dev.herokuapp.com/api/users`)
    //     .then(res => console.log(res.data))
    //     .catch(err => err);

    // },[])

    // useEffect(()=> {
    //     axios
    //     .get(`https://weight-lift-journal-dev.herokuapp.com/api/users/getby/6`)
    //     .then(res => console.log(res.data))
    //     .catch(err => err);

    // },[])

    return(
        <div>
            <h1>Home page</h1>
        </div>
    )
}

export default Home