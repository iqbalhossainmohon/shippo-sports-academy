import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useSelectClass = () =>{
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: select = [] } = useQuery({
        queryKey: [ 'select', user?.email ],
        
        // 
        queryFn: async ()=>{
            const response = await axiosSecure(`/select?email=${user.email}`)
            return response.data;
        },
      })

      return [select, refetch]
}

export default useSelectClass;