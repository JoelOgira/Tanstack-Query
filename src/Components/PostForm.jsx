import { useState } from "react";

const PostForm = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const renderField = (label) => (
        <div>
            <label className="px-4 border rounded py-2.5">{label}</label>
            <input 
                type="text" 
                required
                name={label.toLowerCase()}
                className="border focus:outline-transparent p-2 rounded"
                value={post[label.toLowerCase()]}
                onChange={handleChange}
            />
        </div>
    )

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPost({
            title: '',
            body: ''
        })
        console.log(post);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mt-4">
            {renderField('Title')}
            {renderField('Body')}
            <div>
                <button type="submit" className=" border rounded py-3 px-6">Submit</button>
            </div>
        </form>
    )
}

export default PostForm;

