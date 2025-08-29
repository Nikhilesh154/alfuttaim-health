const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        console.log('Received payment request:', event.body);
        
        // Get environment variables
        const JUSPAY_API_KEY = process.env.JUSPAY_API_KEY || 'Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==';
        const MERCHANT_ID = process.env.MERCHANT_ID || 'seamena';
        const PAYMENT_PAGE_CLIENT_ID = process.env.PAYMENT_PAGE_CLIENT_ID || 'testalfuttaim';
        const GATEWAY_REFERENCE_ID = process.env.GATEWAY_REFERENCE_ID || 'Stripe_UK';
        
        // Parse the request body
        const requestBody = JSON.parse(event.body);
        
        // Add environment variables to the payload
        const payload = {
            ...requestBody,
            payment_page_client_id: PAYMENT_PAGE_CLIENT_ID,
            "metadata.JUSPAY:gateway_reference_id": GATEWAY_REFERENCE_ID
        };
        
        // Make the API call to Juspay
        const juspayResponse = await fetch('https://sandbox.juspay.in/session', {
            method: 'POST',
            headers: {
                'version': '2021-06-01',
                'Content-Type': 'application/json',
                'Authorization': JUSPAY_API_KEY,
                'x-merchantid': MERCHANT_ID
            },
            body: JSON.stringify(payload)
        });
        
        const juspayData = await juspayResponse.json();
        console.log('Juspay API Response:', juspayData);
        
        // Return the response
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(juspayData)
        };
        
    } catch (error) {
        console.error('Payment API Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Payment processing failed',
                details: error.message 
            })
        };
    }
};