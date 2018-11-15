import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Commentaire 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus porttitor ut lectus commodo tincidunt. Sed vel libero nec augue finibus posuere nec ' +
        'nec elit. Etiam mollis tellus eget lorem posuere facilisis. Donec congue commodo dui, in' +
        ' lacinia lorem tempus nec.',
      loveIts: 0,
      created_at: new Date()
},
    {
      title: 'Mon deuxième post',
      content: 'Commentaire 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus' +
        ' porttitor ut lectus commodo tincidunt. Sed vel libero nec augue finibus posuere nec nec elit.' +
        ' Etiam mollis tellus eget lorem posuere facilisis.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Commentaire 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus porttitor ut lectus commodo tincidunt. Sed vel libero nec augue finibus posuere ' +
        'nec nec elit. Etiam mollis tellus eget lorem posuere facilisis. Donec congue commodo dui',
      loveIts: 0,
      created_at: new Date()
}
  ];
}
