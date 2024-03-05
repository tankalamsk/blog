"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./Navbar.css";
const TABS = {
    'All': 0,
    'Personal': 1,
    'Travel': 2,
    'Food': 3,
    'Health': 4,
    'Education': 5,
};

export default  function Navbar() {
    const [activeTab, setActiveTab] = useState('All'); // Initial active tab state
    const router =  useRouter();
    
    

    useEffect(() => {
        // Update activeTab state when the route changes
        switch (router.pathname) {
            case '/':
                setActiveTab('All');
                break;
            case '/personal':
                setActiveTab('Personal');
                break;
            case '/travel':
                setActiveTab('Travel');
                break;
            case '/food':
                setActiveTab('Food');
                break;
            case '/health':
                setActiveTab('Health');
                break;
            case '/education':
                setActiveTab('Education');
                break;
            default:
                setActiveTab('All');
        }
    }, [router.pathname]);
 

    return (
        <div className="nav">
            <div className="container">
                <div className="tabs">
                    {/* Link the "All" tab */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <div onClick={() => setActiveTab('All')} className={router.pathname === '/' ? 'active' : ''}>
                            <input type="radio" id="radio-1" name="tabs" checked={activeTab === 'All'} />
                            <label className="tab" htmlFor="radio-1">All</label>
                        </div>
                    </Link>

                    {/* Link other tabs */}
                    <Link href="/personal" style={{ textDecoration: 'none' }}>
                        <div onClick={() => setActiveTab('Personal')} className={router.pathname === '/personal' ? 'active' : ''}>
                            <input type="radio" id="radio-2" name="tabs" checked={activeTab === 'Personal'} />
                            <label className="tab" htmlFor="radio-2">Personal</label>
                        </div>
                    </Link>
                    <Link href="/travel" style={{ textDecoration: 'none' }}>
                        <div onClick={() => setActiveTab('travel')} className={router.pathname === '/travel' ? 'active' : ''}>
                            <input type="radio" id="radio-3" name="tabs" checked={activeTab === 'travel'} />
                            <label className="tab" htmlFor="radio-3">Travel</label>
                        </div>
                    </Link>
                    <Link href="/food" style={{ textDecoration: 'none' }}>
                        <div onClick={() => setActiveTab('food')} className={router.pathname === '/food' ? 'active' : ''}>
                            <input type="radio" id="radio-4" name="tabs" checked={activeTab === 'food'} />
                            <label className="tab" htmlFor="radio-4">Food</label>
                        </div>
                    </Link>
                    <Link href="/health" style={{ textDecoration: 'none' }}>
                        <div onClick={() => setActiveTab('health')} className={router.pathname === '/health' ? 'active' : ''}>
                            <input type="radio" id="radio-5" name="tabs" checked={activeTab === 'health'} />
                            <label className="tab" htmlFor="radio-5">Health</label>
                        </div>
                    </Link>
                    <Link href="/education" style={{ textDecoration: 'none' }} >
                        <div onClick={() => setActiveTab('education')} className={router.pathname === '/education' ? 'active' : ''}>
                            <input type="radio" id="radio-6" name="tabs" checked={activeTab === 'education'} />
                            <label className="tab" htmlFor="radio-6">Education</label>
                        </div>
                    </Link>
                    {/* Repeat the same pattern for other tabs */}

                    

                </div>
            </div>
        </div>
    );
}
