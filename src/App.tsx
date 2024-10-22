import React, { useState } from 'react';
import { UserCircle, Dumbbell, ArrowRight } from 'lucide-react';
import UserForm from './components/UserForm';
import ProgramDisplay from './components/ProgramDisplay';

function App() {
  const [program, setProgram] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: any) => {
    setLoading(true);
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Create a training program for a ${formData.gender} aged ${formData.age}, height ${formData.height} cm, weight ${formData.weight} kg, with the goal of ${formData.goal}. Include a weekly schedule with specific exercises, sets, reps, and rest periods. Also provide nutrition advice.`
            }]
          }]
        }),
      });

      const data = await response.json();
      setProgram(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error:', error);
      setProgram('An error occurred while generating the program. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Training Program Recommender</h1>
        <p className="text-xl text-gray-600">Get personalized workout plans tailored just for you!</p>
      </header>
      
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center mb-6">
              <UserCircle size={32} className="mr-2" />
              <h2 className="text-2xl font-semibold">Your Details</h2>
            </div>
            <UserForm onSubmit={handleSubmit} />
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="flex items-center mb-6">
              <Dumbbell size={32} className="mr-2 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Your Program</h2>
            </div>
            <ProgramDisplay program={program} loading={loading} />
          </div>
        </div>
      </main>
      
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 Training Program Recommender. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;