# Blog App Readme

Welcome to our Blog App! This application is built with Next.js, a React framework known for its performance and ease of use. We have followed best practices and maintained clean, well-structured code throughout the development process.

## Overview

The backend of our application is powered by Strapi, a headless CMS that provides flexibility and efficiency in managing content. The backend is hosted on Strapi's platform and seamlessly integrated with our frontend. Administrators can easily edit and manage content using the Strapi Cloud interface, making content management a breeze.

The frontend is hosted on Vercel, providing a reliable and scalable environment for our application.

You can access the live version of our application [here](https://blog-kappa-ruby-84.vercel.app/).

## File Structure

```
app/
├── category/
│   ├── travel/
│   ├── food/
│   ├── education/
│   ├── technology/
│   ├── personal_travel/
│   ├── health/
└── blogs/
```

- category/: Contains subdirectories for different categories such as travel, food, education, technology, personal travel, and health. These directories house the blogs related to each respective category.
- blogs/: Contains individual blog files. Accessing `/blog/id` will lead you to the specific blog based on its ID.

Application Flow

1. **Dashboard**: The dashboard serves as the main entry point of our application. It contains a navigation bar listing all available categories of blogs.
2. **Category Blogs**: Clicking on a specific category in the navigation bar will lead you to the blogs belonging only to that particular category.
3. **Individual Blogs**: Within each category, you can access individual blogs by clicking on them. This allows users to read, engage with, and navigate through the content seamlessly.

Administrators can easily manage and edit content using the Strapi Cloud interface, ensuring that the application's content remains up-to-date and relevant.

Thank you for using our Blog App! If you have any questions or feedback, feel free to reach out to us. Happy blogging!
