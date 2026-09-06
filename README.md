# 🚐 Travel Trucks

A modern web application for browsing and booking campers.

Travel Trucks allows users to explore available campers, filter them by different parameters, view detailed information and reviews, add campers to favorites, and submit booking requests.

## 🌐 Live Demo

**[Travel Trucks](https://travel-trucks-delta-teal.vercel.app/)**

## 📋 About the Project

Travel Trucks is a camper rental application built with **Next.js, React, and TypeScript**.

The application provides a camper catalog with filtering, pagination, detailed camper pages, reviews, favorites, and a booking form.

The project focuses on modern **Next.js App Router** patterns, server-side data prefetching, client-side caching, and separation of server state from client state.

## ✨ Features

### 🏕️ Camper Catalog

* Browse available campers.
* Load additional campers using infinite pagination.
* Filter campers by:

  * location;
  * camper form;
  * transmission;
  * engine.
* Display loading and empty states.
* Preserve previously loaded data while fetching additional pages.

### 🔎 Camper Details

Each camper has a dedicated details page with:

* camper information;
* specifications;
* available equipment;
* image gallery;
* customer reviews;
* booking form.

### ⭐ Favorites

Users can add campers to their favorites and remove them from the favorites list.

### 📅 Booking

Users can submit a booking request directly from the camper details page.

The booking form uses validation before submitting the request to the API.

### 💬 Reviews

Users can view reviews associated with a specific camper.

### ⚠️ Error Handling

The application provides dedicated states for:

* loading;
* empty results;
* application errors;
* missing pages;
* failed API requests.

Next.js `error.tsx` and `not-found.tsx` are used for application-level error handling.

## 🛠️ Tech Stack

### Core

* **Next.js 16**
* **React 19**
* **TypeScript**

### State & Data Fetching

* **TanStack Query**
* **Zustand**

### API

* **Axios**

### Forms & Validation

* **Formik**
* **Yup**

### UI & UX

* **CSS Modules**
* **Swiper**
* **React Hot Toast**
* **clsx**

### Code Quality

* **ESLint**
* **Prettier**
* **React Compiler**

## 🏗️ Architecture

The project uses the **Next.js App Router** and separates the application into pages, reusable components, API logic, state management, and TypeScript types.

```text
travel-trucks/
├── app/
│   ├── catalog/
│   │   └── [camperId]/
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BookingForm/
│   ├── CamperCard/
│   ├── CamperDetails/
│   ├── CamperReviewsList/
│   ├── CamperSwiper/
│   ├── CampersList/
│   ├── FilterForm/
│   ├── Header/
│   ├── Loader/
│   ├── Modal/
│   └── ...
│
├── lib/
│   ├── api/
│   │   └── api.ts
│   └── store/
│       └── filtersStore.ts
│
├── public/
│
└── types/
    ├── camper.ts
    ├── filters.ts
    ├── review.ts
    └── user.ts
```

## 🔄 Data Fetching

The application uses **TanStack Query** for server-state management.

The API layer is implemented with Axios and provides methods for:

* fetching available filters;
* fetching campers;
* fetching a camper by ID;
* fetching camper reviews;
* submitting booking requests.

The API client is configured with the Travel Trucks backend:

```ts
const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});
```

## ⚡ Server-Side Prefetching & Hydration

The catalog page uses Next.js Server Components together with TanStack Query.

Initial filters and the first page of campers are prefetched on the server:

```ts
await queryClient.fetchQuery({
  queryKey: ['filters'],
  queryFn: getFilters,
});

await queryClient.fetchInfiniteQuery({
  queryKey: ['campers', initialFilters],
  queryFn: ({ pageParam }) =>
    getCampers({
      filters: initialFilters,
      page: pageParam,
      perPage: 4,
    }),
  initialPageParam: 1,
});
```

The prefetched data is then passed to the client through `HydrationBoundary`.

This approach allows the application to combine server-side data fetching with TanStack Query's client-side caching.

## ♾️ Infinite Pagination

The camper catalog uses TanStack Query's `useInfiniteQuery` to load additional pages.

The API supports pagination through:

```text
page
perPage
```

The catalog initially loads the first page and can request additional campers as needed.

## 🗃️ Client State

**Zustand** is used for client-side filter state.

Server state and UI state are intentionally separated:

* **TanStack Query** — API/server data;
* **Zustand** — client-side filter state.

This keeps data fetching and application state management independent from each other.

## 📝 Forms

The booking form is implemented using:

* **Formik** for form state and submission;
* **Yup** for validation.

After successful validation, the application sends a booking request to the backend.

## 📡 API Endpoints

The application communicates with the following API resources:

| Method | Endpoint                        | Description                             |
| ------ | ------------------------------- | --------------------------------------- |
| `GET`  | `/campers/filters`              | Get available filter options            |
| `GET`  | `/campers`                      | Get campers with filters and pagination |
| `GET`  | `/campers/:id`                  | Get camper details                      |
| `GET`  | `/campers/:id/reviews`          | Get camper reviews                      |
| `POST` | `/campers/:id/booking-requests` | Submit a booking request                |

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/DemetriusGarson/travel-trucks.git
```

Navigate to the project:

```bash
cd travel-trucks
```

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Lint

Run ESLint:

```bash
npm run lint
```

## 📱 Responsive Design

The application is implemented with responsive layouts and CSS Modules.

The current version is primarily optimized for the desktop experience.

## 🎯 Key Technical Goals

This project was built to practice and demonstrate:

* Next.js App Router;
* Server and Client Components;
* TypeScript;
* server-side data prefetching;
* TanStack Query;
* query hydration;
* infinite queries;
* client-side state management with Zustand;
* Axios API integration;
* Formik and Yup;
* reusable React components;
* loading and error states;
* Next.js error boundaries;
* dynamic routing;
* TypeScript data models;
* responsive UI development.

## 📌 Possible Improvements

Future improvements could include:

* automated unit and integration tests;
* improved accessibility;
* additional responsive optimizations;
* performance optimization;
* expanded error handling;
* improved SEO;
* additional filtering options.

## 👨‍💻 Author

-**Dmytro Havrysh**
-LinkedIn: **[Dmytro Havrysh](https://www.linkedin.com/in/dmytro-havrysh-zp/?locale=en-US)**
-GitHub: **[DemetriusGarson](https://github.com/DemetriusGarson)**
