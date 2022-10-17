import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
  //this is angular's version of using a ShadowDom. It basically gives our CSS some encapsulation so that what we write inside our CSS file doesn't infect any of the parts of our CSS or classes in our application. If not supplied, the value is taken from CompilerOptions. The default compiler option is ViewEncapsulation.Emulated(but if the component has no styles or styleUrls specified, the policy is automatically switched to ViewEncapsulation.None(global css without any encapsulation))
  
})
export class MemberCardComponent implements OnInit {
    @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
