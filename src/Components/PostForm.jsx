import { useState } from "react";

const PostForm = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const renderField = (label) => (
        <div>
            <label className="px-4">{label}</label>
            <input 
                type="text" 
                name={label.toLowerCase()}
                className="border focus:outline-transparent p-2"
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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            {renderField('Title')}
            {renderField('Body')}
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm