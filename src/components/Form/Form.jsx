import styles from "./Form.module.css";
import logo from './img/Rick-and-Morty.png'
import {useState} from 'react';
import { validateEmail, validatePassword } from './validation';


const Form = ({onLogin}) => {
    const [userData, setUserData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    // Este estado se utilizará para almacenar los errores encontrados en el formulario. 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(userData);
        
        const emailError = validateEmail(userData.email);
        const passwordError = validatePassword(userData.password);
        
        setErrors ({email: emailError, password: passwordError});

        // if(!emailError && !passwordError){
        //     console.log('Formu');
        // }
    }


  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.theLogo}>
      <img className={styles.logo} src={logo} alt="logo" />
        </div>
    <h2>WELCOME!</h2>
    <p>Hi, welcome to my Rick and Morty page. This app allows you to explore the multiverse of the series, collect characters from the series and in all its versions. Are you ready to live an interdimensional adventure?. <br />Sign up now and start enjoying this amazing app!</p>
      </div>

    <form className={styles.login} onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className={styles.input}>

        <div className={styles.box}>
          <label htmlFor="email">Email</label>
        <input placeholder="Email" type="email" id="email" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>  }
        </div>
    
        <div className={styles.box}>
        <label htmlFor="password">Password</label>
        <input placeholder="Password" className={styles.box} type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
  
        {errors.password && <p>{errors.password}</p> }
        </div>
        <button className={styles.loginBtn} type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Form;