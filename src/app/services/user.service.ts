import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL =
    'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  userList!: User[];

  async fetchUsers() {
    await axios
      .get(this.URL)
      .then((response) => {
        this.userList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return this.userList;
  }
}
