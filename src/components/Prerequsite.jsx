import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const Prerequsite = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [disable, setDisable] = useState(true);
    const { handleCont } = useContext(AuthContext);

    const handleChecked1 = () => {
        setIsChecked1(!isChecked1);
        // console.log(!isChecked1);
    }
    const handleChecked2 = () => {
        setIsChecked2(!isChecked2);
		// console.log(!isChecked2);
        setDisable(!disable)
    };
		return (
			<div>
				<div>
					<input
						onChange={handleChecked1}
						checked={isChecked1}
						type="checkbox"
					/>
					<label>Can you attend 90% of the classes</label>
				</div>
				<div>
					<input
						onChange={handleChecked2}
						checked={isChecked2}
						type="checkbox"
					/>
					<label>Do you have a laptop?</label>
				</div>

				<button onClick={handleCont} disabled={disable}>CONTINUE</button>
			</div>
		);
};
