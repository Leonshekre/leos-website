import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import profilePic from 'app/public/images/leo_highschool_grad_photo.jpeg'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Website In-Progress
      </h1>
      <p className="text-4xl">Leonardo Paredes</p>
      <Image 
        src={profilePic}
        alt="Picture of Leonardo Paredes"
        className="my-8 w-32 h-32 rounded-full"
      />
      <div>
        <p className="whitespace-pre-line">
          Hello! <br></br>
          I am a University of Washington alumni, recently graduated Dec 2025<br></br>
          I am currently pursuing a career in IT Support while working my part-time job.<br></br>
          <br></br>
          <br></br>
        </p>
        <ul className="list-disc list-inside">
          <p>Things I am currently studying/doing include...</p>
          <li>Google IT Support Certificate (8.7% progress)</li>
          <li>CompTia A+</li>
          <p>And in a less structured way (for curiosity/fun)...</p>
          <li>Xfinity Wifi mini Network Management Project</li>
          <li>UTM Linux VM practice (on my Macbook)</li>
          <li>Macbook & Linux exploration (Thinkpad T480 to buy & repair)</li>
          <li>Portfolio website creation(this one!)</li>
        </ul>
      </div>
      
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
