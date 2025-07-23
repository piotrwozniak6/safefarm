'use client';

import { useState } from 'react';
import RedMap from '../components/Map';
import Filters from '../components/Filters';

export default function MapSection() {
  const [verifiedFilter, setVerifiedFilter] = useState('all'); // default is 'All verified'

  return (
    <section className="w-full">
      <div className="mb-6">
        <Filters verified={verifiedFilter} setVerified={setVerifiedFilter} />
      </div>
      <div className="w-full h-[600px] rounded-3xl overflow-hidden border">
        <RedMap verificationFilter={verifiedFilter} />
      </div>
    </section>
  );
}