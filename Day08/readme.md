# Playwright UI Automation Suite

## Project/Test Overview

This repository contains automated UI tests written in TypeScript using Playwright. The tests demonstrate core web application interactions including file upload, file download, handling multiple browser contexts, and managing authentication/session state. These automations are aimed at validating key user workflows across sample web applications, leveraging multiple Playwright features to ensure robust and reliable test coverage.

---

## Test Objective

- **File Upload Validation:** Ensure various file upload mechanisms work correctly, including direct input tag uploads and event-based file chooser uploads.
- **File Download Validation:** Verify that downloading a file from the UI correctly saves the file locally.
- **Multi-Context Browsing:** Demonstrate the ability to handle and automate actions in multiple browser contexts or tabs within the same session.
- **Session Persistence:** Validate obtaining and saving authenticated session states (such as cookies and tokens) for reusing login credentials without repeated UI logins.

---

## Application Flow Covered

### File Upload:
1. Navigate to different web page demos of file upload widgets.
2. Perform both standard HTML input uploads and custom event-based drag-and-drop uploads.
3. Confirm after upload that the correct file name is reflected in the UI.

### File Download:
1. Navigate to a file download demo page.
2. Trigger the download via UI control.
3. Capture the download event and store the file locally.
4. Validate the file was saved in the expected location.

### Multi-Context Browsing:
1. Launch a browser instance.
2. Open and independently interact with two separate pages, simulating two tabs or contexts in a real browser.
3. Access two different e-commerce sites simultaneously.

### Session Persistence:
1. Perform a login on a demo CRM web application.
2. Navigate through application pages after authentication.
3. Capture and persist session storage (authentication tokens/cookies) for later reuse.

---

## Automation Workflow

- For file uploads, the automation handles both direct `<input type="file">` elements and file chooser pop-ups triggered by event listeners (such as drag-and-drop zones).
- For file downloads, the automation listens for the download event, captures the file, and verifies that the file has been stored in the predetermined directory.
- The multi-context test launches a browser instance and creates two separate page objects, allowing simultaneous interaction with different domains.
- The storage state test completes an authentication flow, proceeds through post-login navigation, and then saves the session state—including cookies and tokens—to a dedicated file for future automation runs.

---

## Key Playwright Features Used

- **Locators:** Locate HTML elements (inputs, buttons, drag-and-drop zones, links) using CSS, XPath, or role-based selectors.
- **Input Handling:** Use of Playwright's file upload feature (`setInputFiles`) for file input fields and handling files selected via file chooser events.
- **Event Listeners:** Listening for browser events such as `filechooser` (file upload dialog) and `download` (file saving).
- **Multiple Browser Contexts:** Managing more than one page within a test session, useful for scenarios requiring parallel browsing or separate user sessions.
- **Storage State Persistence:** Utilizing `storageState()` to extract and save the authentication/session state for secure and efficient re-use.
- **Assertions:** Validating UI responses (such as file name displays and file downloads) using Playwright's built-in expect APIs.
- **Waits and Timeouts:** Explicitly waiting for network idle states or introducing short delays to allow asynchronous UI updates.

---

## Validation and Assertions

- Verification that the correct file names appear in the UI after upload, ensuring the expected file was successfully processed.
- Assertion that the file expected to be downloaded was indeed saved to the target location, by checking filesystem presence.
- Implicit validation that sites are accessible and pages load as expected when handling multiple contexts.
- Confirmation that valid session data has been captured and stored for authenticated flows.

---

## Test Data Handling

- Files for upload and download scenarios are referenced dynamically using relative paths, ensuring repeatability regardless of environment.
- Downloaded files are saved using the suggested filename from the server response, facilitating validation against known-good artifacts.
- Authentication credentials and session states are handled programmatically, with sensitive values stored securely in files outside the test scripts for further use.

---

## Expected Result

- User-initiated file uploads should succeed and be confirmed by appearance of the filename in respective UI components.
- Files triggered for download via UI controls must exist in the designated filesystem location post-test.
- Multiple browser pages (contexts) can run in parallel without interference, simulating multi-tab user workflows.
- The captured authentication state accurately enables session reuse, bypassing repeated login UIs in subsequent automated sessions.

---

## Notes / Important Behavior

- The automation is intended for demonstration purposes and uses public demo sites as targets; results may be influenced by external site changes or availability.
- File system paths for upload and download operations should be validated for your environment, and the referenced files should exist.
- Session storage and authentication token handling should always be performed with awareness of security implications—stored data should be protected in practice.
- Playwright's explicit waits are used to ensure the application updates DOM state or completes network activity before assertions are made, reducing flakiness.
- The tests show both standard and advanced Playwright practices, such as event handling and context management, which are essential for robust end-to-end UI automation.