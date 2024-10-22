import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FormData {
  age: string;
  height: string;
  weight: string;
  gender: string;
  goal: string;
}

interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    height: '',
    weight: '',
    gender: '',
    goal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
          placeholder="Enter your age"
        />
      </div>
      <div>
        <label htmlFor="height" className="block text-sm font-medium mb-1">Height (cm)</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
          placeholder="Enter your height in cm"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium mb-1">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
          placeholder="Enter your weight in kg"
        />
      </div>
      <div>
        <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="goal" className="block text-sm font-medium mb-1">Goal</label>
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
        >
          <option value="">Select goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="weight gain">Weight Gain</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="maintaining health">Maintaining Health</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
      >
        Get My Program <ArrowRight size={20} className="ml-2" />
      </button>
    </form>
  );
};

export default UserForm;