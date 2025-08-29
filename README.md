# Al-Futtaim Health - Healthcare Excellence

Al-Futtaim Health Division with Juspay Payment Integration, ready for Netlify deployment.

## Features

- 🏥 Healthcare packages and services showcase
- 💳 Integrated Juspay payment gateway
- 📱 Responsive design for all devices
- ☁️ Netlify-ready deployment configuration
- 🔒 Environment variable security

## Health Packages

- **Basic Health Checkup** - Essential health screening (299 AED)
- **Comprehensive Wellness Package** - Complete health assessment (899 AED)
- **Executive Health Package** - Premium package for professionals (1499 AED)
- **Family Wellness Package** - Complete family health package (2199 AED)
- **Senior Care Package** - Specialized package for seniors (1199 AED)
- **Women's Health Package** - Comprehensive women's health (799 AED)

## Deployment

### Netlify Deployment

1. **Connect Repository**: Connect your Git repository to Netlify
2. **Build Settings**: 
   - Build command: `npm install`
   - Publish directory: `.`
3. **Environment Variables**: Set the following in Netlify dashboard:
   ```
   JUSPAY_API_KEY=your_juspay_api_key
   MERCHANT_ID=your_merchant_id
   PAYMENT_PAGE_CLIENT_ID=your_client_id
   GATEWAY_REFERENCE_ID=your_gateway_reference_id
   ```
4. **Deploy**: Click deploy and your site will be live!

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd alfuttaim-health-final
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual credentials
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Test Netlify functions locally**
   ```bash
   npm run netlify-dev
   ```

## Project Structure

```
alfuttaim-health-final/
├── netlify/
│   └── functions/
│       └── payment.js          # Netlify function for payment processing
├── index.html                  # Main HTML file
├── server.js                   # Express server (for local development)
├── package.json               # Dependencies and scripts
├── netlify.toml               # Netlify configuration
├── _redirects                 # Netlify redirects
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `JUSPAY_API_KEY` | Juspay API authentication key | `Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==` |
| `MERCHANT_ID` | Juspay merchant identifier | `seamena` |
| `PAYMENT_PAGE_CLIENT_ID` | Payment page client ID | `testalfuttaim` |
| `GATEWAY_REFERENCE_ID` | Payment gateway reference | `Stripe_UK` |

## Payment Integration

The application uses Juspay payment gateway for secure payment processing:

- **Frontend**: Collects payment details and sends to Netlify function
- **Backend**: Netlify function processes payment with Juspay API
- **Security**: All sensitive credentials stored as environment variables
- **Flow**: User selects package → Payment modal → Juspay payment page

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Netlify Functions (Node.js)
- **Payment**: Juspay Payment Gateway
- **Deployment**: Netlify
- **Styling**: Custom CSS with responsive design

## Support

For support or questions, please contact the Al-Futtaim Health team.

---

**Al-Futtaim Health** - Integrated Healthcare Solutions for Better Living