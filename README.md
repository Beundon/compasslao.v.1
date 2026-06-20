# compasslao.v.1
🧭 Compass — Offline Map & GIS Tools
A free, open-source, offline-capable Progressive Web App (PWA) for mapping, field data collection, and GIS file management. Built with a mobile-first interface, it is designed to be used directly in the browser or packaged as a native Android APK.

PWALicenseMobile

✨ Key Features
📱 Mobile-First UI
Designed specifically for smartphone use in the field. Features bottom navigation, thumb-friendly tap targets, and sliding bottom sheets for data management.

📍 Live GPS Location
Tap the crosshair to see your live location on the map with a pulsing blue dot and accuracy radius overlay. Perfect for orienting yourself in the field.

🛠️ Field Measurement Tools
Mark Point: Drop a pin to save a specific coordinate.
Measure Distance: Tap multiple points to measure the total distance of a route.
Calculate Area: Drop vertices to calculate the area of a polygon (outputs in m², hectares, or km²).
Record Track: Start recording to track your path via GPS or double-tap the map to add points manually.
🏷️ Custom Metadata
Every point, distance, area, or track you save prompts a modal to add a Name and Description/Details (e.g., "Campsite Alpha", "Hiking trail - moderate difficulty").

📂 Advanced GIS Import
Import your existing geospatial data directly in the browser:

KML & KMZ (Google Earth)
GPX (GPS Exchange Format)
Shapefile (Must be uploaded as a .zip containing .shp, .dbf, .prj)
GeoPackage (.gpkg)
GeoJSON (.geojson, .json)
PDF (Rendered as an image overlay on the current map view for quick georeference)
📊 Data Export
Export all your saved items and their metadata (Name, Description, Coordinates, Metrics) to a clean CSV file for use in Excel, QGIS, or ArcGIS.

💾 Offline Mode & Local Storage
All saved data is persisted in the browser's Local Storage. If you close the app, your data is still there when you open it again.
Includes a Service Worker to cache the app shell, allowing the interface to load even without an internet connection. (Note: Map tiles require internet unless you set up an offline tile server).
🚀 Getting Started (GitHub Pages)
To deploy this app for free using GitHub Pages:

Create a new repository on GitHub.
Upload the following three files to the root of the repository:
index.html (The main application)
manifest.json (PWA configuration)
sw.js (Service worker for offline caching)
Go to your repository Settings > Pages.
Under "Build and deployment", select Deploy from a branch.
Select the main branch and click Save.
Your app will be live at https://<your-username>.github.io/<repo-name>/.
🤖 Building the Free Android APK
Since Compass is a PWA, you can easily wrap it into a standalone Android App (APK) without writing any Java/Kotlin code using Microsoft's PWABuilder:

Ensure your app is live on GitHub Pages (see above).
Visit PWABuilder.com.
Paste your GitHub Pages URL into the input box and click Start.
PWABuilder will analyze your manifest and service worker.
Click on the Android box.
Select Download (Choose the free "Classic" or "Demo" signing option if you don't want to use your own keystore).
PWABuilder will generate a signed .apk or .aab file that you can install on any Android device!
🛠️ Tech Stack
UI/UX: HTML5, CSS3 (Custom Mobile-First), Vanilla JavaScript
Mapping: Leaflet.js + CartoDB Dark Matter Tiles
GIS Parsing:
toGeoJSON (KML, GPX)
JSZip + shpjs (KMZ, Shapefiles)
GeoPackage JS (.gpkg)
PDF.js (PDF Overlay)
PWA: Web App Manifest & Service Workers
📁 File Structure
├── index.html       # The main single-file application (UI, Logic, Mapping)├── manifest.json    # PWA manifest (App name, icons, theme color)├── sw.js            # Service Worker (Offline caching rules)└── README.md        # You are here!
