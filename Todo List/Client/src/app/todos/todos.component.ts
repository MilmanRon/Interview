import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosHeaderComponent } from "./components/todos-header/todos-header.component";
import { TodosMainComponent } from "./components/todos-main/todos-main.component";
import { TodosFooterComponent } from "./components/todos-footer/todos-footer.component";

@Component({
  selector: 'app-todos',
  imports: [TodosHeaderComponent, TodosMainComponent, TodosFooterComponent],
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

}
