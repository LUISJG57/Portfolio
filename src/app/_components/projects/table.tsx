import Tag from "./tag";

export default function Table() {
    return (
        <div className="flex flex-col justify-center items-center mx-10 gap-y-5">
            <h1 className="text-[var(--color-tex2)]" style={{ fontFamily: 'Monocraft',  fontSize: '5rem'}}>
            PROJECTS
            </h1>
            <div className="grid grid-cols-3 gap-10">
                <Tag title="Howl" content="Web app to analyze customer conversations, transcribe in real time, detect emotions and key themes, and generate reports with relevant metrics." 
                    image="/images/logos/howl2.png" repo="https://github.com/SantiagoDlrr/howl.git" />
                <Tag title="Reciclo App" content="Developed an iOS app promoting responsible recycling with a CoreML-powered waste scanner, MapKit recycling center locator, and SwiftUI interface. The app received positive feedback from judges at Expo Ingenierías ITESM 2024." 
                    image="/images/logos/resiclo2.png" repo="https://github.com/A00837763/ReSicloAPP" />
                <Tag title="Lecture App" content="Developed an iOS app promoting reading comprehension, and showcasing statistics and relevant metrics." 
                    image="/images/logos/LECTURE.png" repo="https://github.com/DanielaCaiceros/MVP.git"/>
                <Tag title="Viva Aerobus" content="Developed cutting-edge machine learning models to forecast passenger numbers and product sales for Viva Aerobus flights. Utilized advanced data preprocessing and gradient boosted decision trees for accurate insights, leading our team to top performance in the Datathon 2024." 
                    image="/images/logos/Viva.png" repo="" />
                <Tag title="Jobhill" content="JobHill simplifies the internship application process for students, allowing them to track and manage applications in one place. It provides real-time job updates, making the internship hunt more efficient and stress-free." 
                    image="/images/logos/jobmiga.png" repo="https://github.com/IsaacRoSosa/JobHill.git"/>
                <Tag title="Neoris Quest" content="A dynamic website with an interactive game  created to encourage Neoris employees to complete the required courses. React, JavaScript, Firebase Realtime Database, and Unity were used for development." 
                    image="/images/logos/cabra2.png" repo="https://github.com/EmilioVidal/Reto-Bloque.git" />
            </div>
        </div>
    );
}
