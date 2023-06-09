import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSelectClass = () =>{
    const {user} = useContext(AuthContext);

    const { refetch, data: select = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/select?email=${user.email}`)
            return response.json();
        },
      })

      return [select, refetch]
}

export default useSelectClass;