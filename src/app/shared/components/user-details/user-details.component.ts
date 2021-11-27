import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/shared/models/user.model';
import { KnowledgeService } from 'src/app/shared/services/knowledge.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public knowledgeService: KnowledgeService
  ) { }

  @Input()
  user: UserDto = this.route.snapshot.data.user;

  getProfilePic() {
    return (this.user.profilePic && this.user.profilePic !== '') ?
      this.user.profilePic :
      'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
  }

  ngOnInit(): void {
    document.title = this.user.name;
  }

}
