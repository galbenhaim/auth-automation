# Caliente Authenticator

Since the Caliente login process requires a second factor authentication, Developing the UI becomes a pain.

This script automates the process of logging in and submitting the second factor.

## Features

- Automated form filling
- Login automation
- Network traffic capture
- Credential management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone git@github.com:galbenhaim/auth-automation.git
```

2. Install dependencies:
```bash
npm install
```

3. Optional - Create a `.env` file in the root directory and configure your environment variables:
```env
ALFABET_USERNAME=your_username
ALFABET_PASSWORD=your_password
ALFABET_BRAND=your_brand
```

## Usage

```bash
npm start
```

## Project Structure

```
├── src/
│   ├── index.js                            # Main entry point
│   └── scripts/
│       ├── login.js                        # Login automation
│       ├── fill-form.js                    # Form filling functionality
│       ├── capture-network.js              # Network traffic capture
│       ├── prompt-credentials.js           # Credential management
│       ├── setup.js                        # Initial setup configuration
│       └── get-submit-button-selector.js   # Get submit button selector
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.
