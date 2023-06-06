import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any = [
    {
      title: 'Join',
      components: 'JavaScript | HTML | CSS | Backend',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      links: [
        'https://www.google.de/',
        'https://github.com/DHartmann94/Join'
      ],
      image: 'assets/img/projects/pc_join.png'
    },
    {
      title: 'El Pollo Loco',
      components: 'JavaScript (OOP) | HTML | CSS',
      description: 'A simple 2D Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer-chickens.',
      links: [
        'https://www.google.de/',
        'https://github.com/DHartmann94/el_pollo_loco'
      ],
      image: 'assets/img/projects/pc_el_pollo_loco.png'
    },
    {
      title: 'Pokédex',
      components: 'JavaScript | HTML | CSS | Backend',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      links: [
        'https://www.google.de/',
        'https://github.com/DHartmann94/Pokedex'
      ],
      image: 'assets/img/projects/pc_pokedex.png'
    },
    {
      title: 'Platzhalter',
      components: 'Angular | HTML | SCSS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus adipisci ad, blanditiis nostrum commodi sequi nesciunt...',
      links: [
        'https://www.google.de/',
        'https://github.com/DHartmann94'
      ],
      image: 'assets/img/projects/pc_join.png'
    },
  ];

}
