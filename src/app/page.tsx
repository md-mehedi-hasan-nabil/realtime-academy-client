import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">LearnTogether</a>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <Link href="/signin" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign In</Link>
          </nav>
        </div>
      </nav>

      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Empower Learning and Collaboration in Real Time</h1>
          <p className="text-lg mb-6">LearnTogether combines real-time collaboration tools with powerful e-learning features to create a dynamic, interactive platform.</p>
          <a href="#" className="px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100">Get Started Now</a>
          <a href="#" className="px-6 py-3 ml-4 bg-transparent border border-white rounded hover:bg-white hover:text-blue-600">Watch a Demo</a>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose LearnTogether?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Virtual Classrooms</h3>
              <p>Host live video and audio sessions for teaching and collaboration.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Collaborative Tools</h3>
              <p>Real-time note-taking, shared whiteboards, and co-editing documents.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Interactive Quizzes</h3>
              <p>Engage learners with quizzes and automatic grading.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded shadow">
              <p className="mb-4">LearnTogether has transformed the way I teach. The tools are intuitive and powerful!</p>
              <h4 className="font-bold">- John Doe, Teacher</h4>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="mb-4">The collaborative features helped me stay connected with my peers while learning remotely.</p>
              <h4 className="font-bold">- Jane Smith, Student</h4>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="mb-4">An all-in-one solution for e-learning and collaboration. Highly recommended!</p>
              <h4 className="font-bold">- Alice Johnson, Administrator</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Flexible Pricing for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Free Plan</h3>
              <p className="mb-4">Basic features for students who want to explore the platform.</p>
              <p className="text-2xl font-bold mb-4">$0/month</p>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</a>
            </div>
            <div className="bg-white p-6 rounded shadow border-2 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
              <p className="mb-4">Advanced tools and features for teachers and educators.</p>
              <p className="text-2xl font-bold mb-4">$19/month</p>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Enterprise Plan</h3>
              <p className="mb-4">Custom solutions tailored for large organizations.</p>
              <p className="text-2xl font-bold mb-4">Contact Us</p>
              <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 LearnTogether. All rights reserved.</p>
          <div className="space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-200">Facebook</a>
            <a href="#" className="text-white hover:text-gray-200">Twitter</a>
            <a href="#" className="text-white hover:text-gray-200">LinkedIn</a>
            <a href="#" className="text-white hover:text-gray-200">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}

