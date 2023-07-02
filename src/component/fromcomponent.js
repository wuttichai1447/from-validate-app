import './Fromcomponent.css'
import {useState} from "react"
const FromComponent=()=>{
    //  สร้าง state
       const [userName,setUsername] = useState('')
       const [email,setEmail] = useState('')
       const [password,setpassword] = useState('')
       const [repassword,setRePassword] = useState('')
       const[erroruserName,setErrorUserName] = useState('')
       const[erroruEmail,setErrorEmail] = useState('')
       const[errorPassword,setErrorPassword] = useState('')
       const[errorRePassword,setErrorRePassword] = useState(' ')
       const[userNameColor,setuserNameColor] = useState('')
       const[emailColor,setemailColor] = useState('')
       const[passwordColor,setpasswordColor] = useState('')
       const[repasswordColor,setRePasswordColor] = useState('')

       // สร้าง state ของ color
       const validateForm = (e)=>{
       e.preventDefault()
       console.log("validateForm")
       if (userName.length>8){
            setErrorUserName('')
            setuserNameColor('green')
       }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
            setuserNameColor('red')
       }
       if(email.includes("@")){
                setErrorEmail('')
                setemailColor('green')
       }else{
            setErrorEmail('รูปแบบ email ไม่ถูกต้อง')
            setemailColor('red')
       }
       if(password.length>8){
            setErrorPassword('')
            passwordColor('green')

       }
       else{
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัว')
            setpasswordColor('red')
       }
       
       if(repassword !="" &&repassword === password){
            setErrorRePassword('')
            setRePasswordColor('green')
       }
       else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
       }
       }

//  สร้าง state Error
    console.log(userName)
       return (
        <div className="Container">
           <form className="from" onSubmit={validateForm}>
            <h2>แบบฟอร์มลงทะเบียน</h2>
            <div className="from-control">
                <label>ชื่อผู้ใช้</label>
                <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{erroruserName}</small>
            </div>
            <div className="from-control">
                <label>อีเมล</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                <small style={{color:emailColor}}>{erroruEmail}</small>
            </div>
            <div className="from-control">
                <label>รหัสผ่าน</label>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} style={{borderColor:passwordColor}}/>
                <small style={{color:passwordColor}}>{errorPassword}</small>
            </div>
            <div className="from-control">
                <label>ยืนยันรหัสผ่าน</label>
                <input type="password"  value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                <small style={{color:repasswordColor}}>{errorRePassword}</small>
            </div>
            <button type="Submit">ลงทะเบียน</button>
           </form>

        </div>
    )
 
}

export default FromComponent