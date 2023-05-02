/* eslint-disable react/prop-types */

import { useState } from "react";
import { addUser } from '../../api/usersApi';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateUsers = ({ isLoading, isError, error }) => {

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const queryClient = useQueryClient();

    const createUsersMutation = useMutation(addUser, {
        onSuccess: () => { queryClient.invalidateQueries(['users']) }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        createUsersMutation.mutate({ name, details });
        setName('');
        setDetails('');
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {!isLoading && isError && <p>Something went wrong!!! {error.message}</p>}
            {!isLoading && !isError && 
                <>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label htmlFor="name">Username</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="border border-slate-400 focus:outline-transparent p-2 mb-4 rounded"
                            placeholder="Username"
                        />
                        <label htmlFor="details">Details</label>
                        <textarea name="details" cols="30" rows="3" className="border border-slate-400 focus:outline-transparent p-2 rounded"
                        placeholder="Details"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        ></textarea>
                        <button type="submit" className="border px-4 py-2 rounded-lg mx-auto mt-4">Create</button>
                    </form>
                </>
            }
        </>
    )
}

export default CreateUsers;