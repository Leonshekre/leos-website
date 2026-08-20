"use client"

import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";

export default function Home() {
  const [debug, setDebug] = useState(false);
  

  return (
    <div className={debug ? "debug" : ""}>
      <br></br>
      <br></br>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Website In-Progress
      </h1>
      <p className="text-4xl">Leonardo Paredes</p>
      <Image 
      
        src="/images/leos_hs_photo.png"
        alt="Picture of Leonardo Paredes"
        className="my-8 w-32 h-32 rounded-full"
        width={100}
        height={100}
      />
      <div>
        <p className="whitespace-pre-line">
          Hello! <br></br>
          I am a University of Washington alumni, recently graduated Dec 2025
          <br></br>
          I am currently pursuing a career in Data Analytics while working my part-time job.
          <br></br>
          {/* I am also looking into tech volunteering for the Unhoused*/}
          <br></br>
          <br></br>
        </p>
        
        <ul className="list-disc list-inside">
          <p>Things I am currently studying/doing include...</p>
          <p>IBM Data Analytics Certificate</p>
          <p>(Archived Google IT Support Certificate)</p>

          <br></br>
          <p>And in a less structured way (for curiosity/fun)...</p>
          {/* <li>Xfinity Wifi mini Network Management Project</li> */}
          <li>Portfolio website creation (this one!)</li>
          <li>UTM Linux VM practice (on my Macbook)</li>

          <br></br>

          <li>Macbook & Linux exploration (Thinkpad T480 to replace battery & ram)</li>
          <li>Arduino starter kit (to purchase)</li>
          {/* <li>Seattle City testing app</li> */}
        </ul>
      </div>
    </div>
  );
}
