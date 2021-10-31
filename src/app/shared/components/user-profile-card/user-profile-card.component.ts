import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeLevel, UserDto } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  readonly knowledgesLevels = ['INICIANTE', 'MÉDIO', 'AVANÇADO', 'EXPERT'];


  @Input()
  user: UserDto = this.route.snapshot.data.user;

  get userKnowledges(): KnowledgeSimple[] {
    return this.user.knowledges.map(e => ({
      knowledge: e.knowledge.name,
      knowledgeLevel: e.knowledgeLevel,
      validated: e.validated
    }))
  }

  get userKnowledgesPerLevel(): { [key in KnowledgeLevel]: KnowledgeSimple[] } {
    const knowledgesPerLevel = this.knowledgesLevels.reduce(
      (acc, cur) => {
        const filteredKnowledges = this.userKnowledges.filter(e => e.knowledgeLevel === cur);
        acc[cur] ??= filteredKnowledges;
        if (acc[cur] === []) {
          acc[cur] = undefined;
        }
        return acc;
      }, {} as  { [key in KnowledgeLevel]: KnowledgeSimple[] }
    )

    return knowledgesPerLevel;

  }

  userKnowledgesString(knowledges: KnowledgeSimple[], amountToShow = 3) {
    if (knowledges.length > amountToShow) {
      const amount = knowledges.length;
      knowledges = knowledges.slice(0, amountToShow)
      knowledges.push({
        knowledge: 'mais ' + (amount - amountToShow),
        knowledgeLevel: knowledges[0].knowledgeLevel,
        validated: false,
      } as KnowledgeSimple)
    }
    return knowledges.reduce(
      (acc, cur, index) => {

        if (index === knowledges.length - 2 && cur) {
          return acc = acc + cur.knowledge + ' e '
        }
        if (index !== knowledges.length - 1 && cur) {
          return acc = acc + cur.knowledge + ', '
        }
        return acc+=cur.knowledge + '.';
      },''
    )
  }

  getProfilePic() {
    return (this.user.profilePic && this.user.profilePic !== '') ?
      this.user.profilePic :
      'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
  }

  ngOnInit(): void {
  }

}

export type KnowledgeSimple = {
  knowledge: string,
  knowledgeLevel: KnowledgeLevel,
  validated: boolean
}
