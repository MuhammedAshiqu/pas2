import React from 'react'

function Loginnew() {
  return (

         <div className='login'>
        <div className='login-wrapper'>
            <h3>Welcome Back</h3>
            <p>please signin to continue</p>
        </div>
        <form className='login-form'>
        {error ? <h2 style={{color:'red'}}>{error}</h2> : "" }
          <h2>{message}</h2>
          <input onChange={handleChane}  name="Email" value={input.Email} placeholder="Username" class="input" autoComplete='on' type="email" required />
          <input onChange={handleChane}  name="Password" value={input.Password} placeholder="Password" class="input" type="password" required />
          <button onClick={handleClick}  type="submit" class="button">Login </button>

          <Link style={{textDecoration:'none'}} to='/signup'>  <Button  className='btn btn-primary text-dark' >SignUp</Button> </Link>

            {/* <p className='login-form-bottontext'>Don't have an account? <span>Signup</span></p> */}
        </form>

         <div className='signup'>
        <div className='signup-wrapper'>
            <h3>Welcome</h3>
            <p>TO THE PRODUCTS AND SERVICES</p>
        </div>
        <form className='signup-form'>
        <h3>  {error && 'All fields Required'}  </h3>

            <input type="text" value={input.Name} onChange={handleChane}  placeholder='username' />
            <input type="text" value={input.Email} onChange={handleChane}  placeholder='email' />
            <input type="text" value={input.Address} onChange={handleChane}  placeholder='address' />
            <input type="number" value={input.Number} onChange={handleChane}  placeholder='phonne number' />
            <input type="password" value={input.Password} onChange={handleChane}  placeholder='password' />
            
            <button  onClick={handleClick}>Signup</button>
            <Link to='/Login'>  <Button>Already have an account ?</Button> </Link>
        </form>
    </div>
    </div>
  )
}

export default Loginnew