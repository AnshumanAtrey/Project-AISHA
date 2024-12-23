![Preview](preview.png)

AISHA is a powerful web-based security analysis platform designed for security researchers and penetration testers. It provides automated scanning and vulnerability assessment capabilities through an intuitive interface, combining multiple industry-standard security tools into a unified workflow.

## Directory Structure

```
project-aisha/
├── backend/                # Backend source code
├── frontend/               # Frontend source code
│   ├── public/             # Public assets
│   ├── src/                # React components and logic
│   └── package.json        # Frontend dependencies
├── .env.example            # Example environment variables
├── README.md               # Project documentation
└── package.json            # Backend dependencies
```

## Features

AISHA offers comprehensive security scanning capabilities including:

- Automated subdomain enumeration and analysis
- Web directory and file discovery
- Port scanning and service detection
- Vulnerability scanning with customizable templates
- Real-time scan progress monitoring
- Downloadable scan reports in multiple formats
- Historical scan comparison and tracking
- Rate-limited API endpoints for controlled access

## Technology Stack

### Backend Infrastructure

- **Node.js**: Powers the core application server
- **Express.js**: Handles API routing and middleware integration
- **MongoDB**: Stores scan results and user configurations
- **Mongoose**: Provides MongoDB object modeling
- **JWT**: Implements secure authentication

### Security Tools Integration

- **Nuclei**: Advanced vulnerability scanning
- **Amass**: Robust subdomain enumeration
- **Subfinder**: Passive subdomain discovery
- **Nmap**: Network mapping and port analysis
- **Gobuster**: Directory brute-forcing
- **HTTPx**: Web server analysis

### Frontend Development

- **React**: Builds the user interface
- **Vite**: Fast development environment
- **Tailwind CSS**: Styles the components
- **Redux**: Manages application state
- **Axios**: Handles API communications

### Security Features

- **Helmet.js**: Implements security headers
- **Rate Limiting**: Prevents abuse
- **CORS Protection**: Controls cross-origin requests
- **Input Validation**: Ensures data integrity
- **Request Logging**: Tracks system usage

## Installation

### Prerequisites

```bash
# Install required security tools
sudo apt update
sudo apt install -y nmap amass subfinder gobuster nuclei

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
sudo apt install -y mongodb
```

### Setting Up the Project

```bash
# Clone the repository
git clone https://github.com/yourusername/project-aisha.git
cd project-aisha

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configurations

# Start the development server
npm run dev
```

## Usage

### Starting a Scan

1. Access the web interface at `http://localhost:3000`
2. Enter the target URL in the scan input field
3. Configure scan options (optional)
4. Initiate the scan

### API Endpoints

#### POST /api/scan

Initiates a new security scan

```json
{
  "url": "https://example.com",
  "options": {
    "deep_scan": false,
    "port_scan": true
  }
}
```

#### GET /api/scan/:scanId

Retrieves scan status and results

```json
{
  "scanId": "uuid",
  "status": "completed",
  "results": {
    "vulnerabilities": [],
    "subdomains": [],
    "ports": []
  }
}
```

#### GET /api/scan/:scanId/download

Downloads complete scan results as a ZIP file

## Security Considerations

- The tool is designed for authorized security testing only
- Always obtain proper permissions before scanning any target
- Rate limiting is implemented to prevent abuse
- API keys should be kept secure and rotated regularly
- Scan results may contain sensitive information

## Deployment

### Render.com Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `RATE_LIMIT_WINDOW`
   - `RATE_LIMIT_MAX`
4. Set build command: `npm install`
5. Set start command: `npm start`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Project inspired by the need for automated security assessment tools
- Thanks to all the open-source security tools integrated into this project
- Special thanks to the security research community for their valuable feedback

## Contact

For questions, feature requests, or bug reports, please open an issue in the GitHub repository or contact the maintainers directly.

---

**Note**: This tool is intended for security professionals and researchers. Always ensure you have proper authorization before conducting security assessments.
