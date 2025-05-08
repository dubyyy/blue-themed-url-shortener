'use client'; 
import axios from 'axios';
import css from './dashbord.module.css';
import React, { ChangeEvent, useState } from "react";
import History from './history';
import RecentLink from './recent-link';
import { useRouter } from 'next/navigation';



type Props = {
    userEmail: string;
};

interface LinkItem {
    id: string;
    slug: string;
    url: string;
    userId: string;
}

const Dashboard =({ userEmail }: Props) => {
    const [shortLink, setShortLink] = useState('');
    const [history, setHistory] = useState<LinkItem | null>(null);
    const [copyMessage, setCopyMessage] = useState(''); 
    
    const router=useRouter()

    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setShortLink(e.target.value);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await axios.post('/api/shorten', {
            url: shortLink,
            email: userEmail
        });
        if (response.status==200){
            setShortLink(''); 
            router.refresh(); 
        }
    };

    const handleCopy = async () => {
        try {
            const response = await axios.get('/api/link');
            if (response.status === 200) {
                setHistory(response.data);
                const { slug } = response.data;
                await navigator.clipboard.writeText(`${window.location.host}/dashboard/${slug}`);
                
                // Set the "Copied!" message
                setCopyMessage('Copied!');
                
                // Remove the message after 2 seconds
                setTimeout(() => setCopyMessage(''), 2000);
            }
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.headerr}>
                    <h1>URL Shortener</h1>
                </div>
                <div className={css.headerr}>
                    <input type="text" value={shortLink} onChange={handleChange} placeholder='Enter long URL'/>
                </div>
                <div className={css.headerr}>
                    <div className={css.btnset}>
                        <div className={css.itemsCenter}>
                            <RecentLink />
                        </div>

                        <div className={css.btncontainer}>
                            <button onClick={handleSubmit}>Shorten</button>
                            <button onClick={handleCopy}>Copy</button>
                        </div>
                    </div>
                </div>
                {copyMessage && (
                    <div className={css.copyMessage}>
                        {copyMessage}
                    </div>
                )}
                <div className={css.headerr}>
                    <div className={css.history}>
                        <span>History</span>
                        <History />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
