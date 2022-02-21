import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [signUp, setSignUp] = useState(false);
	const [cont, setCont] = useState(false);
	const [Reg, setReg] = useState(false);
	const navigate = useNavigate();
	const handleSignUp = () => {
		setSignUp(true);
		navigate("/prerequsite");
	};
	const handleCont = () => {
		setCont(!cont);
		navigate("/info");
	};
	const handleReg = () => {
		setReg(!Reg);
		navigate("/login");
	};

	return (
		<AuthContext.Provider
			value={{
				signUp,
				handleSignUp,
				cont,
				handleCont,
				handleReg,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
