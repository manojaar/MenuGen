# South Indian Menu Generator

A web application designed to help restaurant and hotel chains generate customized, seasonal menus based on themes, food preferences, and branding requirements. This tool leverages AI (Gemini API) to create authentic South Indian menus tailored to specific occasions, seasons, and business needs.

## Business Purpose

This application serves restaurant and hotel chains by:

- **Seasonal Menu Creation**: Generate menus that align with festivals, seasons, and special occasions (e.g., Onam, Pongal, regional celebrations)
- **Customization**: Create menus based on specific themes (Healthy, Spicy, Comfort Food, etc.) and branding requirements
- **Scalability**: Generate multiple menu variations quickly for different locations or time periods
- **Consistency**: Maintain brand identity through customizable logo details and styling
- **Efficiency**: Automate the menu creation process, reducing manual effort and time

## Features

- 🎨 **Theme-Based Menu Generation**: Create menus based on food themes (Healthy, Spicy, Comfort Food, etc.)
- 🏷️ **Branding Integration**: Customize menus with logo details and brand-specific styling
- 📅 **Seasonal & Festival Menus**: Generate menus for specific occasions and seasons
- 🔄 **Batch Generation**: Create multiple menu variations in a single request
- 💾 **File Export**: Automatically save generated menus to specified output folders
- 🤖 **AI-Powered**: Utilizes Google's Gemini API for intelligent menu creation

## Technology Stack

- **Frontend**: React 19.1.0 with Vite
- **Backend**: Python-based API (connected via ngrok tunnel)
- **AI**: Google Gemini API for menu generation
- **Styling**: CSS3 with modern, responsive design

## Project Structure

```
south-indian-menu-generator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global styles
│   └── output/          # Generated menu files
│       ├── menu_Onam_1.txt
│       └── menu_Onam_2.txt
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API server running (with ngrok tunnel configured)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd south-indian-menu-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Backend URL**
   
   Update the `backendUrl` in `src/App.jsx` with your current ngrok URL:
   ```javascript
   const backendUrl = 'https://YOUR_NGROK_URL.ngrok-free.app/generate-menu';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Usage

### Generating Menus

1. **Enter Food Theme**
   - Specify the type of menu you want (e.g., "Healthy", "Spicy", "Comfort Food", "Onam", "Pongal")

2. **Add Logo Details**
   - Describe your restaurant/hotel logo or branding elements
   - Example: "A minimalist logo with a 'M' inside a circle" or "Banana Leaf"

3. **Set Frequency**
   - Enter the number of menu variations you want to generate (minimum: 1)

4. **Specify Output Folder**
   - Provide the path where generated menu files should be saved
   - Example: `/home/user/menus` or `./src/output`

5. **Generate Menus**
   - Click "Generate Menus" and wait for the AI to create your customized menus

### Generated Menu Format

The generated menus include:
- **Logo Details**: Branding information
- **Breakfast**: Morning meal options
- **Lunch**: Midday meal with traditional South Indian dishes
- **Dinner**: Evening meal options

Example output structure:
```
Logo Details: Banana Leaf

Breakfast
[Breakfast items]

Lunch
[Lunch items with traditional South Indian dishes]

Dinner
[Dinner items]
```

## API Integration

The application communicates with a backend API that processes menu generation requests. The API endpoint expects:

**Request Format:**
```json
{
  "theme": "Onam",
  "logo_details": "Banana Leaf",
  "frequency": 2,
  "output_folder": "/path/to/output"
}
```

**Response Format:**
```json
{
  "message": "Menus generated successfully",
  "logo_details": "Banana Leaf",
  "output_location": "/path/to/output",
  "menus": ["Menu content 1", "Menu content 2"]
}
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

## Configuration

### Backend API URL

Update the backend URL in `src/App.jsx`:
```javascript
const backendUrl = 'https://YOUR_BACKEND_URL/generate-menu';
```

### Output Directory

Ensure the output directory path exists and has write permissions. The application will save generated menu files as `.txt` files in the specified location.

## Future Enhancements

- [ ] Support for multiple cuisine types beyond South Indian
- [ ] Menu preview with visual formatting
- [ ] PDF export functionality
- [ ] Menu template customization
- [ ] Integration with POS systems
- [ ] Multi-language support
- [ ] Nutritional information generation
- [ ] Pricing and cost calculation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Support

For issues, questions, or feature requests, please contact the development team.

---

**Note**: This application requires an active backend API server with Gemini API integration. Ensure your backend is running and accessible before using the menu generation feature.
