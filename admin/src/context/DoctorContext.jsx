import axios from "axios";
import { createContext,useState } from "react";
import { toast } from "react-toastify";

export const DoctorContext  = createContext();

const DoctorContextProvider = (props) =>{

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [dToken, setdToken] = useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
  const [appointments, setappointments] = useState([])
  const [dashData, setdashData] = useState(false)
  const [profileData, setprofileData] = useState(false)


  const getAppointments = async()=>{
    try {
 
      const {data}= await axios.get(backendUrl + '/api/doctor/appointments',{headers:{dToken}})
      if(data.success){
        setappointments(data.appointments);
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }


  const completeAppointment = async(appointmentId)=>{
      try {

        const {data} = await axios.post(backendUrl + '/api/doctor/complete-appointment',{appointmentId},{headers:{dToken}});
        if(data.success){
          toast.success(data.message)
          getAppointments();
          getDashData();
        }else{
          toast.error(data.message)
        }
        
      } catch (error) {
      toast.error(error.message)
      }
  }
 
    const cancelAppointment = async(appointmentId)=>{
      try {

        const {data} = await axios.post(backendUrl + '/api/doctor/cancel-appointment',{appointmentId},{headers:{dToken}});
        if(data.success){
          toast.success(data.message)
          getAppointments();
          getDashData();
        }else{
          toast.error(data.message)
        }
        
      } catch (error) {
      toast.error(error.message)
      }
  }

const getDashData = async()=>{
  try {

    const {data} = await axios.get(backendUrl + '/api/doctor/dashboard',{headers:{dToken}});
    if(data.success){
      setdashData(data.dashData);
    }else{
      toast.error(data.message)
    }
    
  } catch (error) {
      toast.error(error.message)
  }
}


const getProfileData = async()=>{
  try {

    const {data} = await axios.get(backendUrl + '/api/doctor/profile',{headers:{dToken}});
    if(data.success){
      setprofileData(data.profileData);
    }else{
      toast.error(data.message)
    }
    
  } catch (error) {
      toast.error(error.message)
  }
}
  const value = {
   dToken,setdToken,
   backendUrl,
   appointments,setappointments,
   getAppointments,
   completeAppointment,cancelAppointment,
   dashData,setdashData,getDashData,
   profileData,setprofileData,getProfileData
  }

  return (
    <DoctorContext.Provider value={value}>
        {props.children}
    </DoctorContext.Provider>
  )

}

export default DoctorContextProvider