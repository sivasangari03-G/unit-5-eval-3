import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const SignUp = () => {
	const { handleSignUp } = useContext(AuthContext);
	return (
		<>
			<button onClick={handleSignUp}>SignUp</button>
		</>
	);
};
