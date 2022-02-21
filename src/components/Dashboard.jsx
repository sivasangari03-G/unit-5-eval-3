import React, { useEffect, useState } from "react";

export const Dashboard = () => {
	const [data, setData] = useState([]);

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
    return (
        <div>
            {
                data.map(elem => {
                    return <div>{elem.highQualification}</div>;
              })  
        }
    </div>
    );
};
