import { useQuery } from "@tanstack/react-query";
import { getUsers } from '../../api/usersApi';
import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm";

const Users = () => {
    const navigate = useNavigate();
    const { data:users, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })

    return (
        <div className="px-10 my-4 p-4 border border-slate-400 rounded mx-auto md:container">
            <AddUserForm 
                users={users}
                navigate={navigate}
                isLoading={isLoading}
                isError={isError}
                error={error}
            />
            {isLoading && <p>Loading...</p> }
            {!isLoading && isError && <p>Something went wrong!!! {error.message}</p> }
            {!isLoading && !isError &&
                users?.map((user) => 
                <div key={user?.id} className="flex flex-row justify-between py-2">
                    <p className="pt-1">Name: {user?.name}</p>
                    <button onClick={() => navigate(`/users/${user?.id}`)} className="border bg-black text-white px-2 py-1 rounded-lg">View More</button>
                </div>
            )}
        </div>
    )
}

export default Users;