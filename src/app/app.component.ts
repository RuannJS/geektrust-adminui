import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // DEPENDENCIES

  constructor(
    private readonly UserService: UserService,
    private readonly Dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // PAGINATION VARIABLES
  displayedColumns: string[] = ['checkbox', 'name', 'email', 'role', 'actions'];
  dataSource!: MatTableDataSource<User>;

  // ADD/REMOVE USER VARIABLE
  selectedUsers: string[] = [];

  // CHECKBOX VARIABLES
  allChecked: boolean = false;
  mainChecked: boolean = false;

  async ngOnInit(): Promise<void> {
    const users: User[] = await this.UserService.fetchUsers();
    this.dataSource = new MatTableDataSource<User>(users);
    this.dataSource.paginator = this.paginator;
  }

  // PAGINATION FILTER

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // TOGGLE UNIQUE CHECKBOX

  toggleSelectedUser(checkBox: MatCheckbox, userId: string): void {
    if (checkBox.checked) {
      this.selectedUsers.push(userId);
    } else {
      const removedUserArray = this.selectedUsers.filter(
        (user) => user !== userId
      );
      this.selectedUsers = removedUserArray;
    }
  }

  // REMOVE SELECTED USERS

  removeSelectedUsers(): void {
    const users = this.dataSource.data;
    const newUsersList = users.filter(
      (user) => !this.selectedUsers.includes(user.id)
    );
    this.dataSource.data = newUsersList;
    this.selectedUsers = [];
    this.mainChecked = false;
  }

  // REMOVE UNIQUE USER

  removeUser(userID: string): void {
    const users = this.dataSource.data;
    const newUserList = users.filter((user) => user.id !== userID);

    this.dataSource.data = newUserList;
  }

  // EDIT/UPDATE UNIQUE USER

  updateUserDialog(userID: string): void {
    const userToUpdate = this.dataSource.data.find(
      (user) => user.id === userID
    );

    this.Dialog.open(UpdateUserComponent, {
      data: { user: userToUpdate },
    });
  }

  // SELECT ALL CHECKBOXES

  selectAll(mainCheckbox: MatCheckbox) {
    // GETTING USERS ONLY FROM THE CURRENT PAGINATION PAGE

    const livePage = this.paginator.pageSize * this.paginator.pageIndex;
    const livePageData = this.dataSource.data
      .filter((user, index) => index >= livePage)
      .filter((user, index) => index < this.paginator.pageSize);

    // CHECKING MAIN CHECKBOX STATUS

    if (mainCheckbox.checked) {
      livePageData.map((user) => this.selectedUsers.push(user.id));
      this.allChecked = true;
      this.mainChecked = true;
    } else if (!mainCheckbox.checked) {
      const unselectedUserIds = livePageData.map((user) => user.id);
      const newSelectedList = unselectedUserIds.filter(
        (id) => !this.selectedUsers.includes(id)
      );
      this.selectedUsers = newSelectedList;
      this.allChecked = false;
      this.mainChecked = false;
    }
  }
}
