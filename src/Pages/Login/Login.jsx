import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'

const Login = () => {

  const { loading, setLoading, signIn, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'User Login Successful',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
        toast.error(err.message);
      })
  }

  // handle google signIn 
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)

        const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
        fetch('https://shippo-sports-server-iqbalhossainmohon.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(savedUser)
        })

          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {

              navigate(from, { replace: true })
            }
          })


        // navigate(from, { replace: true })
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'User Created  has been Successful',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
        toast.error(err.message);
      })
  }

  return (
    <>
      <Helmet>
        <title>Log In - Shippo Sports Academy</title>
      </Helmet>

      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='bg-rose-500 w-full rounded-md py-3 text-white'
              >
                {loading ? <TbFidgetSpinner className='m-auto animate-spin' size={24} /> : 'Continue'}

              </button>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Do not have an account yet?{' '}
            <Link
              to='/signUp'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default Login