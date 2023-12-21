import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
   const [techList, setTechList] = useState([])
   const [ theId, setTheId ] = useState("")

   const { user } = useContext(UserContext)

   const navigate = useNavigate()

   useEffect(() => {
    const token = localStorage.getItem("@TOKEN")

      const loadTechs = async () => {
         try {
            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList(data.techs)
         } catch (error) {
            console.log(error)
         }
      }
      loadTechs()
   }, [])

   const createTech = async (formData) => {
      try {
         const newData = { ...formData }
         const token = localStorage.getItem("@TOKEN");

         const { data } = await api.post("/users/techs", newData, {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         })
         setTechList((techList) => [...techList, data]);
      } catch (error) {
         console.log(error.response.data)
      }
   }

   const deleteTech = async (techId) => {
      try {
         const token = localStorage.getItem("@TOKEN")
         await api.delete(`/users/techs/${techId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         setTechList((techList) => techList.filter((tech) => tech.id !== techId))
      } catch (error) {
         console.log(error)
      }
   }

   const editTech = async (formData, techId) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         
         const { data } = await api.patch(`/users/techs/${techId}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })
         setTechList((techList) => techList.map(tech => {
            if(tech.id === techId){
               return data
            } else {
               return tech
            }
         }))
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <TechContext.Provider value={{ techList, theId, setTheId, createTech, deleteTech, editTech }}>
        {children}
      </TechContext.Provider>
    )    
}