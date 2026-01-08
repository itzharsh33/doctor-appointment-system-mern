import React, { useContext, useDebugValue,useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios';
const AddDoctor = () => {

  const [docImg, setdocImg] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [experience, setexperience] = useState('1 year')
  const [fees, setfees] = useState('')
  const [speciality, setspeciality] = useState('General physician')
  const [about, setabout] = useState('')
  const [degree, setdegree] = useState('')
  const [address1, setaddress1] = useState('')
  const [address2, setaddress2] = useState('')

  const {backendUrl,aToken} = useContext(AdminContext);

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    
    try {
      if(!docImg){
       return toast.error('Image not selected')
      }
   
      const formData = new FormData();

      formData.append('image',docImg);
      formData.append('name',name);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('experience',experience);
      formData.append('fees',Number(fees));
      formData.append('about',about);
      formData.append('speciality',speciality);
      formData.append('degree',degree);
      formData.append('address',JSON.stringify({line1:address1,line2:address2}));

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{aToken}})

      if(data.success){
        toast.success(data.message);
        setdocImg(false);
        setname('');
        setemail('');
        setpassword('');
        setaddress1('');
        setaddress2('');
        setdegree('');
        setabout('');
        setfees('');
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message);
    }

  }
  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctors</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img src={ docImg ? URL.createObjectURL(docImg) :assets.upload_area} className='w-16 bg-gray-100 rounded-full cursor-pointer' alt="" />
          </label>
          <input onChange={(e)=> setdocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Upload doctor <br /> picture </p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor name</p>
              <input onChange={(e)=> setname(e.target.value)} value={name} type="text" placeholder='Name' className='border rounded px-3 py-2' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor email</p>
              <input onChange={(e)=> setemail(e.target.value)} value={email} type="email" placeholder='Email' className='border rounded px-3 py-2' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" placeholder='Password' className='border rounded px-3 py-2' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e)=> setexperience(e.target.value)} value={experience} name="" id="" className='border rounded px-3 py-2'>
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10 year">10 year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=> setfees(e.target.value)} value={fees} type="number" placeholder='Fees' className='border rounded px-3 py-2' required/>
            </div>

          </div>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=> setspeciality(e.target.value)} value={speciality} name="" id="" className='border rounded px-3 py-2'>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

          <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=> setdegree(e.target.value)} value={degree} type="text" placeholder='Education' className='border rounded px-3 py-2' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e)=> setaddress1(e.target.value)} value={address1} type="text" placeholder='address 1' className='border rounded px-3 py-2' required/>
              <input onChange={(e)=> setaddress2(e.target.value)} value={address2} type="text" placeholder='address 2' className='border rounded px-3 py-2' required/>
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>About Doctor</p>
          <textarea onChange={(e)=> setabout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder='Write about doctor' rows={5} required></textarea>
        </div>
      <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor

