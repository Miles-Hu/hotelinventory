import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-root-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush // OnPush: only create new attribute will be updated. by default detect all changes
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('destory is called!!!');
  }

  // monitor @Input() attributes changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      //this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  @Input()
  roomList: RoomList[] = [];

  @Input()
  title: string = '';

  @Output()
  selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
