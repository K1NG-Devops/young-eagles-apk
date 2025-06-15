# Young Eagles Dashboard - Android APK

This repository contains the Young Eagles Dashboard app configured specifically for Android APK builds using Ionic Capacitor and Appflow.

## Features

- ✅ **Native Android App** - Built with Capacitor for native mobile experience
- ✅ **Parent Dashboard** - Direct access to children's homework and progress
- ✅ **Custom Branding** - YEHC logo and Young Eagles theming
- ✅ **Offline Ready** - PWA capabilities for offline functionality
- ✅ **Cloud Builds** - Automated APK generation via Ionic Appflow

## Building the APK

### Option 1: Ionic Appflow (Recommended)
1. Push changes to this repository
2. Builds are automatically triggered in Ionic Appflow
3. Download the generated APK from the dashboard

### Option 2: Local Build
See `BUILD_APK_GUIDE.md` for detailed local build instructions.

## Quick Start

```bash
npm install
npm run build
npx cap sync android
npx cap open android
```

## Project Structure

- `/src` - React application source code
- `/android` - Native Android project files
- `/public` - Static assets and app icons
- `/young-eagles-app-assets` - Screenshots and marketing materials

## Version

Current version: **1.0.0**

