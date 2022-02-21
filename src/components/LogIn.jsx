import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
	const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:8000/posts`, {
			method: "GET",
			headers: {
				"content-type": "application/json; charset=utf-8",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleLogin = () => {
		data.forEach((elem) => {
			if (elem.highQualification === value) {
				navigate("/dashboard")
			}
		});
	};
	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
