import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  imports: [],
  templateUrl: './todos-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosHeaderComponent {
    todoService = inject(TodosService);
    text: string = '';

    changeText(event: Event): void{
        const target = event.target as HTMLInputElement
        this.text = target.value; 
    }

    addTodo(): void{
        this.todoService.addTodo(this.text);
        this.text = '';
    }
}
