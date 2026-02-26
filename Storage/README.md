# Web Storage and Cookies Demo

This project demonstrates the use of different client-side storage mechanisms in JavaScript.

## Files

*   `storage.html`: The main HTML file that loads the JavaScript code.
*   `storage.js`: Contains JavaScript code demonstrating the usage of:
    *   **localStorage:**  Data stored in `localStorage` persists even after the browser is closed. It's useful for storing data that needs to be available across browser sessions.
    *   **sessionStorage:** Data stored in `sessionStorage` is only available for the duration of the page session. It's cleared when the tab or browser is closed.
    *   **Cookies:** Small pieces of data stored in the user's browser. They are sent with every request to the server and can be used for session management, personalization, and tracking.

## Concepts Covered

*   **localStorage**: `setItem`, `getItem`, `removeItem`.
*   **sessionStorage**: `setItem`, `getItem`, `removeItem`, `clear`.
*   **Cookies**: Setting cookies with `document.cookie`, including `max-age` and `expires` attributes.
