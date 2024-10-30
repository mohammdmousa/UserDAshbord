import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css',
})
export class UserCardsComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  pageSize: number = 6;
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers(page: number = 1) {
    this.loading = true;
    this.userService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.totalUsers = response.total;
      this.loading = false;
    });
  }

  goToDetails(userId: number) {
    this.router.navigate(['/users', userId]);
  }

  pageChanged(event: any) {
    this.fetchUsers(event.pageIndex + 1);
  }
  handleSearch(id: string) {
    if (id) {
      this.userService.getUserDetails(+id).subscribe(
        (user) => {
          this.users = [user.data];
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'User not found.';
          this.users = [];
        }
      );
    } else {
      this.fetchUsers();
    }
  }
}
