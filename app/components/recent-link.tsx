'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import css from './history.module.css'
interface LinkItem {
  id: string;
  slug: string;
  url: string;
  userId: string;
}

const RecentLink = () => {
  const [history, setHistory] = useState<LinkItem | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/api/link');
        if (response.status === 200) {
          setHistory(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  });

  if (!history) {
    return <div>No recent link found.</div>;
  }

  return (
    <div className="p-4">
      <div className="border p-2 rounded">
        <Link href={`/dashboard/${history.slug}`} className={css.myLink}>
                {window.location.host}/dashboard/{history.slug}
        </Link>
      </div>
    </div>
  );
}

export default RecentLink;
