import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
 
    const currentPath = window.location.pathname
 
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const id = localStorage.getItem("@USERID")

        const loadUser = async () => {
            try {
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(currentPath)
                
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")  
            }
        }

        if(token && id){
            loadUser()
         }
    }, [])
 
    const navigate = useNavigate()

    const userRegister = async (formData) => {
        try {
           const body = {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              bio: formData.bio,
              contact: formData.contact,
              course_module: formData.course_module
           }
           await api.post("/users", body)
           navigate("/")
        } catch (error) {
        }
     }
 
    const userLogin = async (formData) => {
       try {
        const { data } = await api.post("/sessions", formData)
        localStorage.setItem("@TOKEN", data.token)
        localStorage.setItem("@USERID", data.user.id)
        setUser(data.user)
        navigate("/dashboard")
       } catch (error) {
          console.log(error)
       } 
    }
 
    const userLogout = async () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID") 
        navigate("/")
        setUser(null)
    }
 
    return (
       <UserContext.Provider value={{ user, userRegister, userLogin, userLogout,  }}>
          {children}
       </UserContext.Provider>
    )
 }
