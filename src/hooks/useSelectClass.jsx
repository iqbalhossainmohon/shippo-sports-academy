import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useSelectClass = () =>{
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: select = [] } = useQuery({
        queryKey: [ 'select', user?.email ],
        enabled: !loading,
        
        // 
        queryFn: async ()=>{
            const response = await axiosSecure(`/select?email=${user.email}`)
            return response.data;
        },
      })

      return [select, refetch]
}

export default useSelectClass;