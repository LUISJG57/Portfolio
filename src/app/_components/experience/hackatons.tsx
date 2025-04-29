
export default function Hackatons() {
    return (
        <div className="flex flex-col justify-center items-center bg-secondary rounded-md p-10 gap-y-4">
            <h1 className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2.5rem'}}>
            Hackathons & Participations
            </h1>
            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2023
                    </span>

                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Expo ingenierias ITESM Monterrey – 2023
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed a home model for parents with disabilities, incorporating Arduino sensors and actuators. The model utilizes REST API in JavaScript, a web interface, and MySQL for real-time updates.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2024
                    </span>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Imroving Finance Hackathon
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed an AI-powered assistant trained with data from Atrato’s website and general financial product information, providing intuitive responses via a web interface.</li>
                    </ul>

                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Datathon Edicion 2024
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed cutting-edge machine learning models to forecast passenger numbers and product sales for Viva Aerobus flights. Utilized advanced data preprocessing and gradient boosted decision trees for accurate insights, leading our team to top performance in the Datathon 2024.</li>
                    </ul>

                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    i-Hack Tec
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed a web app page with a ChatBot that helped the user to pick a recipee that can be made with some of the qualtia line products</li>
                    </ul>

                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Expo ingenierias ITESM Monterrey – 2024
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed an iOS app promoting responsible recycling with a CoreML-powered waste scanner, MapKit recycling center locator, and SwiftUI interface. The app received positive feedback from judges at Expo Ingenierías ITESM 2024.</li>
                    </ul>
                </div>
            </div>



            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2025
                    </span>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Swift Hack
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed an iOS app promoting reading comprehension, and showcasing statistics and relevant metrics.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
