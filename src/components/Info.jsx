import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

export const Info = () => {
    const [data, setData] = useState({});
    const { handleReg } = useContext(AuthContext);
    const handleData = (e) => {
		const { name, value, type, checked } = e.currentTarget;
		let update = type === "checkbox" ? checked : value;
		setData({
			...data,
			[name]: update,
		});
    };
    const handleBoth = () => {
        handleSubmit();
        handleReg();
    }
    const handleSubmit = () => {
		// e.preventDefault();
		// console.log(data);
		// console.log(data);
		let payload = {
			highQualification: data.highQualification,
			year: data.year,
			dob: data.dob,
			gender: data.gender,
			state: data.state,
		};

		fetch("http://localhost:8000/posts", {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"content-type": "application/json; charset=utf-8",
			},
		})
			.then((response) => {
				// console.log('response', response);
				return response.json();
			})
			.then((forJson) => {
				console.log("forJson", forJson);
				//console.log(product);
			})
			.catch((err) => {
				console.log(err);
			});
	}
  return (
		<div>
			<h1>INFO</h1>
			<div>
				<input
					type="text"
					name="highQualification"
					value={data.highQualification}
					onChange={handleData}
					placeholder="Enter Higest Qualification"
				/>
			</div>
			<div>
				<input
					type="number"
					name="year"
					value={data.year}
					onChange={handleData}
					placeholder="Enter Passing Year"
				/>
			</div>
			<div>
				<input
					type="text"
					name="dob"
					value={data.dob}
					onChange={handleData}
					placeholder="Enter Date Of Birth"
				/>
			</div>
			<div>
				<select name="gender" onChange={handleData}>
					<option value="--"></option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>
			<div>
				<input
					type="text"
					name="state"
					value={data.state}
					onChange={handleData}
					placeholder="Enter State"
				/>
			</div>
          <button onClick={handleBoth}>REGISTER</button>
		</div>
  );
}
