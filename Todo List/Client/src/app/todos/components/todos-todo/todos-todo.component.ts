import {
    ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  OnChanges,
  OnInit,
  output,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  imports: [CommonModule],
  templateUrl: './todos-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosTodoComponent implements OnInit {
  todo = input.required<Todo>();
  isEditing = input.required<boolean>();
  setEditingId = output<string | null>();

  textInput = viewChild(HTMLInputElement);

  todosService = inject(TodosService);

  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo().text;
  }

  changeText(event: Event) {
    this.editingText = (event.target as HTMLInputElement).value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todo().id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo().id);
  }

  removeTodo() {
    this.todosService.removeTodo(this.todo().id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo().id);
  }
}
