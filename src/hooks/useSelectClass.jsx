import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectClass = () =>{
    const {user} = useContext(AuthContext);
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