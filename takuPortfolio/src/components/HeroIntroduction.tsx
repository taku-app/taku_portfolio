export default function HeroIntroduction() {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Hello, I'm taku. I'm Software Engineer for 2years.I made some Interesting Apps. Example: Hospital Robots
                monitoring App, 3D Model Viewer App.</p>
            <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">About Me</h2>
                <p className="text-lg mb-6">I am an aspiring professional software engineer with a passion for creating
                    innovative and efficient software solutions. With a solid foundation in software development and a
                    keen eye for detail, I have contributed to various projects that showcase my skills and dedication
                    to the field.</p>

                <h2 className="text-3xl font-semibold mb-4 text-gray-900">Professional Experience!</h2>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Hospital Transport Robot Monitoring
                        Software</h3>
                    <p className="text-lg mb-4">I played a key role in developing monitoring software for hospital
                        transport robots. This project involved designing and implementing a robust system to ensure the
                        efficient and safe operation of robotic units within a hospital setting. My responsibilities
                        included:</p>
                    <ul className="list-disc pl-6 text-lg">
                        <li>Developing real-time monitoring dashboards using cutting-edge technologies.</li>
                        <li>Implementing alert systems to notify staff of any operational issues.</li>
                        <li>Ensuring the software’s scalability and reliability to handle numerous robots
                            simultaneously.
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">3D Model Display Software for Automotive
                        Production</h3>
                    <p className="text-lg mb-4">In another significant project, I contributed to the creation of
                        software that displays 3D models of automobiles in production. This software aids in visualizing
                        the manufacturing process, identifying potential issues, and streamlining production lines. My
                        contributions included:</p>
                    <ul className="list-disc pl-6 text-lg">
                        <li>Designing and coding interactive 3D visualization tools.</li>
                        <li>Integrating with existing production systems to provide real-time updates.</li>
                        <li>Collaborating with cross-functional teams to enhance software usability and performance.
                        </li>
                    </ul>
                </div>

                <h2 className="text-3xl font-semibold mb-4 text-gray-900">Vision</h2>
                <p className="text-lg mb-4">My goal is to become one of the world’s top professional backend engineers.
                    Currently, I work as a full-stack developer, utilizing a diverse set of technologies to build
                    comprehensive products. My tech stack includes:</p>
                <ul className="list-disc pl-6 text-lg mb-4">
                    <li>Frontend: HTML, CSS, JavaScript, TypeScript, React, Vite, Next.js</li>
                    <li>Backend: Node.js, Kotlin, Java, Spring Framework</li>
                    <li>Databases: PostgreSQL, MySQL</li>
                    <li>Cloud Services: AWS ECS, Fargate, RDS, IAM</li>
                </ul>
                <p className="text-lg">I am committed to continuous learning and improvement, constantly seeking new
                    challenges that allow me to grow and excel in my career. I am passionate about leveraging technology
                    to solve real-world problems and make a meaningful impact through my work.</p>
            </div>
        </>
    );
}