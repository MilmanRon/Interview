import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../models/filter.enum';
import { TodosTodoComponent } from '../todos-todo/todos-todo.component';

@Component({
  selector: 'app-todos-main',
  imports: [TodosTodoComponent],
  templateUrl: './todos-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosMainComponent {
    todosService = inject(TodosService);
    editingId: string | null = null;

    visibleTodos = computed(() => {
        const todos = this.todosService.todosSig();
        const filter = this.todosService.filterSig();

        switch(filter){
            case FilterEnum.active:
                return todos.filter(todo => !todo.isCompleted);
            case FilterEnum.completed:
                return todos.filter(todo => todo.isCompleted); 
            default:
                return todos;
        }

    });

    isAllTodosSelected = computed(() => this.todosService.todosSig().every(todo => todo.isCompleted));

    toggleAllTodos(event: Event): void {
        const target = event.target as HTMLInputElement
        this.todosService.toggleAll(target.checked)
    }

    setEditingId(editingId: string | null): void{
        this.editingId = editingId;
    }
}
