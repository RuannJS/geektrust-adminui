# Geektrust - Admin UI

This project is a front-end interface for admins to manage users. It allows you to view, filter, edit, delete, and select users from a list retrieved via an API. The project also includes pagination and user selection capabilities.

![UI Preview](https://i.imgur.com/VlYvsqI.png)

## Deployment

This project is deployed and accessible online. You can view it [here](https://geektrust-adminui-weld.vercel.app/).


## Requirements

1. **Column Titles:** The column titles stand out from the user entries.
2. **Search Bar:** A search bar is provided to filter users based on any property.
3. **Edit and Delete:** Users can be edited or deleted in-memory.
4. **Pagination:** Users are paginated, with each page containing 10 rows. Pagination updates based on search/filtering.
5. **Select Users:** Users can be selected, and selected rows are highlighted with a grayish background. Multiple selected rows can be deleted at once.
6. **Select All Shortcut:** A checkbox at the top left allows you to select or deselect all displayed rows in the current page.

## Usage

To use this interface, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies using npm install
5. Start the development server with ng serve

## API

The Users API is used to retrieve user data. It provides a list of users and their properties. The data is sorted by the `id` field. The API endpoint is as follows:

**Request Type:** GET

**Endpoint:** [https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)

Sample Response:

```json
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]
```
## Technologies Used
<ul>
  <li>HTML</li>
  <li>Angular</li>
  <li>Angular Material</li>
  <li>TailwindCSS</li>
  <li>Axios</li>
</ul>

## Acknowledgments

Special thanks to Geektrust for providing the challenge and API.


