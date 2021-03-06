export default props => (
  <>
    <h2>Sign up</h2>
    <div>
      <form
        onSubmit={event => {
          alert('Sign up!')
          event.preventDefault()
        }}>
        <input id='email' type='email' placeholder='Email address' />
        <input id='password' type='password' placeholder='Password' />
        <input
          id='passwordconfirmation'
          type='password'
          placeholder='Enter password again'
        />
        <button>Sign up</button>
      </form>
      <p>
        Already have an account?{' '}
			{/* <a href='javascript:;' onClick={() => props.showLogin()}>*/}
        <a href='#' onClick={() => props.showLogin()}>
          Log in
        </a>
      </p>
    </div>
  </>
)