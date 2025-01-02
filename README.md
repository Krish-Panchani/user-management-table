# User Management Table

This project demonstrates a simple **User Management Table** built with **Next.js**, **Shadcn**, **TanStack Query**, and **TanStack Table**. It fetches data from a public API and offers a user-friendly table with features like sorting, filtering, global search, and pagination.

## Features

1. **Data Fetching**:
   - Fetches user data from the public API: `https://jsonplaceholder.typicode.com/users`.
   - Uses `axios` for API requests.
   
2. **Table Features**:
   - **Pagination**: Displays users in pages of 5 records each.
   - **Sorting**: Supports sorting on columns such as "ID", "Name", and "Email".
   - **Filtering**: Filters can be applied to individual columns (e.g., "Name").
   - **Search**: A global search input allows users to filter by names.

3. **UI/UX**:
   - Styled using **Shadcn** components for a modern and responsive interface.
   - Includes loading and error states to handle API requests and edge cases.

---

## **Project Structure**

The app follows **Next.js's file-based routing** and organizes components as follows:

```
app/
├── users/
│   ├── [page]/
│   │   ├── page.tsx  (Main page component for displaying users based on dynamic page number)
```

### Key File: `/users/[page]/page.tsx`
This file handles:
- **Dynamic Routing**: The page number is extracted from the URL using `useParams` from `next/navigation`.
- **Data Fetching**: User data is fetched using `axios` from the API.
- **Pagination**: Paginated data is displayed by slicing the fetched data into pages.

---

## **Setup and Installation**

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Krish-Panchani/user-management-table.git
   ```

2. Navigate to the project directory:
   ```bash
   cd user-management-table
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```bash
   http://localhost:3000
   ```

---

## **API Details**

The application fetches data from the following public API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Data Structure**: The response contains an array of user objects with fields like `id`, `name`, `email`, `address` (containing nested fields such as `street`, `city`, `zipcode`).

---

## **Approach**

### **Dynamic Routing and Pagination**
- **Dynamic Routing**: The app uses Next.js's file-based routing, where the `[page]` directory captures the page number from the URL.
- **Pagination Logic**: The users are displayed in pages of 5 records each, with the current page determined by the URL parameter.
  - For example, `/users/1` displays the first 5 users.

### **Data Fetching**
- **Axios** is used to fetch the user data from the public API.
- Data is sliced and paginated based on the current page.

### **Table Features (Sorting, Filtering, Search)**
- **Sorting**: The table allows sorting by columns like `ID`, `Name`, and `Email`. Sorting is toggleable between ascending and descending order using buttons with arrows.
- **Filtering**: The table supports column-level filtering, where users can filter data by column (e.g., by `Name`).
- **Search**: The table includes a search input that filters the `Name` column dynamically.
  
### **Components**:
- **`UserTable`**: Displays the user data in a table format with features like sorting, filtering, and pagination.
- **`UserColumns`**: Defines the columns for the user data, including sorting behavior.
- **`UserProps`**: Type definition for the user data used throughout the app.

---

## **Challenges and Solutions**

1. **Pagination Handling**:
   - **Challenge**: Handling pagination and ensuring the correct data is displayed on each page.
   - **Solution**: Implemented pagination logic to slice data into pages, using dynamic routing to fetch the appropriate data for each page.

---

## **Live Demo**

The project is hosted on **Vercel**. You can access the live demo here: [Live Demo](https://user-management-table-tau.vercel.app/)

---

