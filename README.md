
# Report Upload Viewer

## Overview

The Report Upload Viewer is a React application designed to upload and display test reports. It provides a user-friendly interface to view test scenarios, their statuses, and detailed logs.

## Features

- **File Upload**: Upload test report files in JSON format.
- **Test Table**: Display a table of test scenarios with their statuses.
- **Expandable Rows**: Expand rows to view detailed steps and logs for each test scenario.
- **Pixel Car Animation**: An animated car that moves across the screen on hover.

## Components

### App

The main component that manages the state and renders the other components.

### FileUpload

A component that handles file uploads and triggers the parsing of the uploaded file.

### TestTable

A component that displays the test scenarios in a table format. It supports expandable rows to show detailed steps and logs.

## CSS

The CSS file (`index.css`) includes styles for various elements in the application, including animations for the PixelCar component.

## Usage

1. **Upload a File**: Click on the file upload button to upload a test report file in JSON format.
2. **View Test Scenarios**: The uploaded file will be parsed, and the test scenarios will be displayed in a table.
3. **Expand Rows**: Click on a row to expand it and view detailed steps and logs for the test scenario.

## Development

To run the application locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## License

This project is licensed under the MIT License.
