import { Route, Routes } from 'react-router'
import Home from "../Comonents/Home/Home.jsx"; // Use react-router-dom



const Routers=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
export default Routers;