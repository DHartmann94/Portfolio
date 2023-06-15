import { Component } from '@angular/core';

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
        'https://daniel-hartmann.developerakademie.net/projects/join/index.html',
        'https://github.com/DHartmann94/Join'
      ],
      image: 'assets/img/projects/pc_join.png'
    },
    {
      title: 'El Pollo Loco',
      components: 'JavaScript (OOP) | HTML | CSS',
      description: 'A simple 2D Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer-chickens.',
      links: [
        'https://daniel-hartmann.developerakademie.net/projects/el_pollo_loco/index.html',
        'https://github.com/DHartmann94/el_pollo_loco'
      ],
      image: 'assets/img/projects/pc_el_pollo_loco.png'
    },
    {
      title: 'Pokédex',
      components: 'JavaScript | HTML | CSS | Backend',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      links: [
        'https://daniel-hartmann.developerakademie.net/projects/pokedex/index.html',
        'https://github.com/DHartmann94/Pokedex'
      ],
      image: 'assets/img/projects/pc_pokedex.png'
    },
    {
      title: 'Ring of Fire',
      components: 'Angular | HTML | SCSS | Firebase',
      description: 'Popular multiplayer card game. Built with Angular and Firebase backend',
      links: [
        'https://daniel-hartmann.developerakademie.net/projects/ringoffire/index.html',
        'https://github.com/DHartmann94/Ring_Of_Fire'
      ],
      image: 'assets/img/projects/pc_ring_of_fire.png'
    },
  ];

}
