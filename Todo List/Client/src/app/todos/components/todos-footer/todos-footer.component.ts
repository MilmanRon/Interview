import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../models/filter.enum';

@Component({
  selector: 'app-todos-footer',
  imports: [CommonModule],
  templateUrl: './todos-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isCompleted)
      .length;
  });

  noTodosClass = computed(() => this.todosService.todosSig().length === 0);
  itemsLeftText = computed(() => `item${this.activeCount() !==1 ? 's': ''} left`)

  changeFilter(filterName: FilterEnum) {
    this.todosService.changeFilter(filterName);
  }
}
