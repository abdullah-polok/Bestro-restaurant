import { FaGoogle } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom'
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const anxiosPublic = useAxiosPublic()

  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        anxiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data)
            navigate('/')
          })
      })
  }
  return (
    <div className="p-8">
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-secondary">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;