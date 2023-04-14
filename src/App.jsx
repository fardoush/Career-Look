import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import ResultChart from './components/ResultChart/ResultChart';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import JobDetailsPage from './components/JobDetails/JobDetailsPage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/job/details/:id" element={<JobDetailsPage/>}></Route>
                    <Route path="/statistics" element={<ResultChart></ResultChart>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    {/*<Route path="*" element={<Error/>}></Route>*/}
                    <Route path="/404" element={ <Error /> } />
                    <Route path="*" element={ <Navigate to="/404" replace />} />
                </Routes>

            </BrowserRouter>

        </div>
    );
};

export default App;