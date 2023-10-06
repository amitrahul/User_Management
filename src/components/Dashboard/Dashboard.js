import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import styles from "./Dashboard.module.css"

const DashBoard = () => {
    const [users , setUsers] = useState('');
    const[loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(users.length / 3);
    const firstIndex = (currentPage - 1) * 3;
    const lastIndex = firstIndex + 3;
    const dataperPage = users.slice(firstIndex, lastIndex);

    const getUsersInfo  = async() => {
        try{
            setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setLoading(false);
        }
        catch(e){
            throw e;
        }
    }
    console.log(users)
    useEffect( () =>{
         getUsersInfo();
       
    },[])
   
    return(
        <>
        <Box>
        {loading ? (
              <Box
                className="loading"
                position={"absolute"}
                top={"70vh"}
                left={"50vw"}
              >
                <CircularProgress  />
                <h3> Loading Users Info... </h3>
              </Box>
            ) :
            (
                dataperPage.length ? 
                (
                    <div className={styles.cardBody}>             
                   { dataperPage.map((user) => {
                        return(
                          
                            <Card 
                             key = {user.id}
                            userData={user}
                            />
                        )
                    })}
                    </div>
                ) : (
                    <h4>{null}</h4>
                )                
            )}
        </Box>
        </>
    )
}

export default DashBoard;