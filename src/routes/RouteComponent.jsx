import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Dashboard } from '../components/Dashboard';
import { Info } from '../components/Info';
import { LogIn } from '../components/LogIn';
import { Prerequsite } from '../components/Prerequsite';
import { SignUp } from '../components/SignUp'


export const RouteComponent = () => {
  return (
		<div>
			<Routes>
				<Route path="/" element={<SignUp />}></Route>
				<Route path="/prerequsite" element={<Prerequsite />}></Route>
				<Route path="/info" element={<Info />}></Route>
				<Route path="/login" element={<LogIn />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</div>
  );
}
