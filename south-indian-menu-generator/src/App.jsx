import React, { useState } from 'react';
import './App.css'; // We'll create this file for styling

function App() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    theme: '',
    logoDetails: '',
    frequency: 1,
    outputFolder: '',
  });

  // State to handle the API response and loading state
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    // This is the URL from your ngrok tunnels
    // Make sure to replace this with the actual URL from your Colab output!
    const backendUrl = 'https://0867f3774c62.ngrok-free.app/generate-menu'; 

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme: formData.theme,
          logo_details: formData.logoDetails,
          frequency: parseInt(formData.frequency), // Ensure frequency is an integer
          output_folder: formData.outputFolder,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'An error occurred during generation.');
      }

      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>South Indian Menu Generator</h1>
        <p>
          Enter your preferences to generate customized menus with the power of
          the Gemini API.
        </p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="theme">Food Theme:</label>
          <input
            type="text"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="e.g., Healthy, Spicy, Comfort Food"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logoDetails">Logo Details:</label>
          <input
            type="text"
            id="logoDetails"
            name="logoDetails"
            value={formData.logoDetails}
            onChange={handleChange}
            placeholder="e.g., A minimalist logo with a 'M' inside a circle."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Frequency:</label>
          <input
            type="number"
            id="frequency"
            name="frequency"
            min="1"
            value={formData.frequency}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="outputFolder">Output Folder:</label>
          <input
            type="text"
            id="outputFolder"
            name="outputFolder"
            value={formData.outputFolder}
            onChange={handleChange}
            placeholder="e.g., /home/user/menus"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Menus'}
        </button>
      </form>

      {/* Display API response or errors */}
      {loading && <p>Generating your menu, please wait...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {response && (
        <div className="response-container">
          <h2>Generation Successful!</h2>
          <p>{response.message}</p>
          <p>Logo Details: {response.logo_details}</p>
          <p>Menus saved to: {response.output_location}</p>
          <h3>Generated Menus:</h3>
          {response.menus.map((menu, index) => (
            <div key={index} className="menu-item">
              <h4>Menu {index + 1}</h4>
              <pre>{menu}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;