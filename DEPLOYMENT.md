# 🚀 Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **API Keys**: Get the required API keys (see below)

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### 1. Gemini AI API Key
- **Variable**: `GEMINI_API_KEY`
- **Description**: Google Gemini AI API key for travel summaries and plans
- **Get it**: [Google AI Studio](https://makersuite.google.com/app/apikey)

### 2. Weather API Key
- **Variable**: `WEATHER_API_KEY`
- **Description**: WeatherAPI.com key for local weather data
- **Get it**: [WeatherAPI.com](https://www.weatherapi.com/)

### 3. NASA API Key
- **Variable**: `NASA_API_KEY`
- **Description**: NASA API key for Mars weather data
- **Get it**: [NASA API Portal](https://api.nasa.gov/)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:
   - In project settings, go to "Environment Variables"
   - Add all three API keys listed above

3. **Deploy**:
   - Vercel will automatically detect Next.js
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add GEMINI_API_KEY
   vercel env add WEATHER_API_KEY
   vercel env add NASA_API_KEY
   ```

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript compilation passes locally

2. **API Errors**:
   - Verify all environment variables are set correctly
   - Check API key permissions and quotas

3. **Image Loading Issues**:
   - Images are configured to load from Wikimedia and NASA domains
   - Check network connectivity

4. **Vanta Background Not Loading**:
   - The app has a fallback gradient background
   - Check browser console for errors

### Environment Variable Checklist

- [ ] `GEMINI_API_KEY` - Google Gemini AI API key
- [ ] `WEATHER_API_KEY` - WeatherAPI.com key  
- [ ] `NASA_API_KEY` - NASA API key

### API Endpoints

The app uses these external APIs:
- **Gemini AI**: Travel summaries and plans
- **WeatherAPI**: Local weather for theming
- **NASA API**: Mars weather data
- **Wikimedia**: Planet images (no API key needed)

## Post-Deployment

1. **Test All Features**:
   - Homepage loads with animations
   - Planet pages show 3D models
   - AI summaries generate correctly
   - Weather theming works

2. **Monitor Logs**:
   - Check Vercel function logs for API errors
   - Monitor API usage and quotas

3. **Performance**:
   - Images are optimized with Next.js Image component
   - Animations are lazy-loaded
   - API calls have proper error handling

## Local Development

To test locally before deploying:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create `.env.local`**:
   ```bash
   GEMINI_API_KEY=your_key_here
   WEATHER_API_KEY=your_key_here
   NASA_API_KEY=your_key_here
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify all environment variables are set
3. Test API endpoints individually
4. Check browser console for client-side errors 