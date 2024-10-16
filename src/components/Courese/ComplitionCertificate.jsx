import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Fireworks } from '@fireworks-js/react';

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#ff69b4', '#00ff7f'];

const CourseCompletionPage = () => {
    const [showFireworks, setShowFireworks] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const Desktop = () => {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 pb-20 md:pb-4">
                <Firework/>
                <div className="w-full max-w-2xl bg-white p-6 md:p-8 rounded shadow">
                    <h1 className="text-xl md:text-2xl font-bold text-center">Congratulations</h1>
                    <p className="text-center mt-2">
                        You have successfully completed your <br /> Course Title, Welcome Aboard!!!!!
                    </p>
                    <div className='flex justify-center'>
                        <div className="my-8 bg-gray-200 h-40 w-full md:w-1/2 flex items-center justify-center">
                            Certificate of appreciation
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mb-8 space-y-2 md:space-y-0">
                        <button className="text-blue-600">Download pdf</button>
                        <button className="text-blue-600">Share on Social</button>
                    </div>
                    <div>
                        <p className="text-lg font-medium mb-2">Let us know your feedback on the course</p>
                        <p className="mb-1">The content was engaging</p>
                        <div className="flex space-x-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.214c.969 0 1.371 1.24.588 1.81l-3.421 2.487a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.421-2.487a1 1 0 00-1.175 0l-3.421 2.487c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118l-3.421-2.487c-.784-.57-.38-1.81.588-1.81h4.214a1 1 0 00.95-.691L9.049 2.927z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mb-1">How would you rate the quality of this session?</p>
                        <div className="flex space-x-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.214c.969 0 1.371 1.24.588 1.81l-3.421 2.487a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.421-2.487a1 1 0 00-1.175 0l-3.421 2.487c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118l-3.421-2.487c-.784-.57-.38-1.81.588-1.81h4.214a1 1 0 00.95-.691L9.049 2.927z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mb-1">Any feedback on the trainer</p>
                        <textarea
                            className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Please share your thoughts on the session here."
                        />
                    </div>
                    <Link to='/courses'>
                        <button className="bg-yellow-400 px-6 py-3 rounded-lg hover:translate-x-1 hover:translate-y-1 transition duration-200 hover:bg-green-600 hover:shadow-xl hover:text-white">
                            Go to Course Page
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-1 pb-20 md:pb-4">
                <Firework/>
                <div className="w-full max-w-2xl bg-white p-3 md:p-8 rounded shadow">
                    <h1 className="text-xl font-bold text-center">Congratulations</h1>
                    <p className="text-center mt-2 text-xs">
                        You have successfully completed your <br /> Course Title, Welcome Aboard!!!!!
                    </p>
                    <div className='flex justify-center'>
                        <div className="my-5 bg-gray-200 h-40 w-full md:w-1/2 flex items-center justify-center">
                            Certificate of appreciation
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mb-8 space-y-2 md:space-y-0">
                        <button className="text-blue-600 text-sm">Download pdf</button>
                        <button className="text-blue-600 text-sm">Share on Social</button>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-2">Let us know your feedback on the course</p>
                        <p className="mb-1">The content was engaging</p>
                        <div className="flex space-x-1 mb-4 text-xs">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-6 h-6 text-yellow-500 text-xs"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.214c.969 0 1.371 1.24.588 1.81l-3.421 2.487a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.421-2.487a1 1 0 00-1.175 0l-3.421 2.487c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118l-3.421-2.487c-.784-.57-.38-1.81.588-1.81h4.214a1 1 0 00.95-.691L9.049 2.927z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mb-1">How would you rate the quality of this session?</p>
                        <div className="flex space-x-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.214c.969 0 1.371 1.24.588 1.81l-3.421 2.487a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.421-2.487a1 1 0 00-1.175 0l-3.421 2.487c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118l-3.421-2.487c-.784-.57-.38-1.81.588-1.81h4.214a1 1 0 00.95-.691L9.049 2.927z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mb-1">Any feedback on the trainer</p>
                        <textarea
                            className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Please share your thoughts on the session here."
                        />
                    </div>
                    <Link to='/courses'>
                        <button className="bg-yellow-400 px-3 py-1.5 rounded-lg hover:translate-x-1 hover:translate-y-1 transition duration-200 hover:bg-green-600 hover:shadow-xl hover:text-white">
                            Go to Course Page
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            {isMobile ? <MobileView /> : <Desktop />}
        </div>
    );
};

function Firework() {
    const ref = useRef(null);

    const toggle = () => {
        if (!ref.current) return;
        if (ref.current.isRunning) {
            ref.current.stop();
        } else {
            ref.current.start();
        }
    };

    const clear = () => {
        if (!ref.current) return;
        ref.current.clear();
    };

    return (
        <>
            <div
                style={{ display: 'flex', gap: '4px', position: 'absolute', zIndex: 1 }}
            >
                <button onClick={toggle}></button>
                <button onClick={clear}></button>
            </div>
            <Fireworks
                ref={ref}
                options={{ opacity: 0.5 }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                }}
            />
        </>
    );
}


export default CourseCompletionPage;
