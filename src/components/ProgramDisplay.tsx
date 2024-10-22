import React from 'react';
import { Loader } from 'lucide-react';

interface ProgramDisplayProps {
  program: string;
  loading: boolean;
}

const ProgramDisplay: React.FC<ProgramDisplayProps> = ({ program, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader size={32} className="animate-spin text-purple-600" />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="text-center text-gray-500">
        <p>Fill out the form to get your personalized training program!</p>
      </div>
    );
  }

  // Function to format the program text
  const formatProgram = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim().endsWith(':')) {
        return <h3 key={index} className="font-bold text-lg mt-4 mb-2 text-purple-700">{line}</h3>;
      } else if (line.trim().startsWith('-')) {
        return <li key={index} className="ml-4">{line.substring(1)}</li>;
      } else {
        return <p key={index} className="mb-2">{line}</p>;
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-inner overflow-y-auto max-h-[500px]">
      <div className="prose prose-sm max-w-none">
        {formatProgram(program)}
      </div>
    </div>
  );
};

export default ProgramDisplay;