import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigator = useNavigate();
    const { loding, setLoding, setUser, setCheckUser } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        pass: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoding(true);
            
            const data = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.name,
                    password: formData.pass,
                })
            }).then(response => {
                if (response.ok) {
                    toast.success("کاربر یافت شد 😊😊");
                    setLoding(false);
                    return response.json();
                } else if (response.status === 400) {
                    throw new Error();
                } else {
                    throw new Error();
                }
            })

            setUser(data);
            localStorage.setItem('userToken', data.token);
            setCheckUser(true);
            setFormData({});
            navigator("/cart")
        } catch {
            setLoding(false);
            toast.error("کاربر یافت نشد 🤨🤨");
            setFormData({});
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="">
            {
                loding ?
                    <h1>در حال جست و جو ...</h1> :
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userName">userName : </label>
                            <input type="text" id="userName" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">password : </label>
                            <input type="pass" id="password" name="pass" value={formData.pass} onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
            }
        </div>
    )
}

export default Login;