import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  //Empty string in path means, when the user browses to local host 4200 directly, then this is the component that's going to be loaded.
  {path:'', component: HomeComponent},
  //using a dummy route for authguard
  {path: '',
   runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],
   children: [
    {path:'members', component: MemberListComponent},
    {path:'members/:username', component: MemberDetailComponent},
    {path:'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
    {path:'lists', component: ListsComponent},
    {path:'messages', component: MessagesComponent},
   ]  
},
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  //final route component, wild card route, as in the user typed that doesn't match anything inside our reconfiguration and we'll direct them to required component(here HomeComponent) for time being we don't have anything to handle the error.
  {path:'**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
